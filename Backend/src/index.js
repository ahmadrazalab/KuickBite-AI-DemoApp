import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Logging requests

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Backend server is healthy and running.",
    timestamp: new Date().toISOString() 
  });
});

// API Routes
app.use("/api/chat", chatRoutes);

// 404 Error Handling for non-matching routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Central Error Handler (must be last)
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`\n🚀 Server actively listening on port ${PORT}`);
  console.log(`📈 Health check: http://localhost:${PORT}/health`);
  console.log(`💬 Chat endpoint: http://localhost:${PORT}/api/chat\n`);
});
