import { chatModel } from "../config/gemini.js";

/**
 * @desc    Handles the chat interactions
 * @route   POST /api/chat
 * @access  Public
 */
export const handleChat = async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ 
        success: false, 
        error: "Message is required in the request body." 
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not configured on the server.");
    }

    // Generate response using Gemini model
    const result = await chatModel.generateContent(message);
    const responseText = result.response.text();

    // Return correct format specified in prompt { "reply": "..." }
    res.status(200).json({
      reply: responseText
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Pass control to standard error handler middleware
    next(error);
  }
};
