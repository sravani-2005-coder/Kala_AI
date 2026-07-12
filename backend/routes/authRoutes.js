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
    session: true,
  }),
  (req, res) => {
    res.redirect("http://localhost:5173/");
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