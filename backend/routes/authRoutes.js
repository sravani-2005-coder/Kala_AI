import jwt from "jsonwebtoken";
import express from "express";
import { validationResult } from "express-validator";
import authLimiter from "../middleware/authLimiter.js";
import passport from "passport";
import {
  registerUser,
  loginUser,
} from "../controllers/authController.js";

import {
  registerValidation,
  loginValidation,
} from "../validators/authValidator.js";

const router = express.Router();

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
};
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        id: req.user._id,
        email: req.user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.redirect(
      `http://localhost:5173/oauth-success?token=${token}`
    );
  }
);
// Register
router.post(
  "/register",
  authLimiter,
  registerValidation,
  validate,
  registerUser
);

router.post(
  "/login",
  authLimiter,
  loginValidation,
  validate,
  loginUser
);
export default router;