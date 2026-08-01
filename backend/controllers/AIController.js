import { generateProductDescription } from "../services/GeminiService.js";
export const generateDescription = async (req, res) => {
  console.log("AI endpoint hit!");

  try {
    const { name, category, material, features } = req.body;

    console.log(req.body);   // <-- Add this

    const response = await generateProductDescription({
      name,
      category,
      material,
      features,
    });

    console.log("Received response from Gemini"); // <-- Add this

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error("Controller Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate AI content.",
    });
  }
};
