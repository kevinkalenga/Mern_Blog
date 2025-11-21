// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRoutes from './routes/user.route.js';
// import authRoutes from './routes/auth.route.js';
// import postRoutes from './routes/post.route.js';
// import commentRoutes from './routes/comment.route.js';
// import cookieParser from "cookie-parser";
// import path from 'path';
// import { errorHandler } from "./utils/errors.js";

// dotenv.config();

// mongoose
//  .connect(process.env.MONGO).then(() => {
//     console.log('MongoDb is connected')
//  }).catch((err) => {
//     console.log(err)
//  })

//  const __dirname = path.resolve();

// const app = express()

// app.use(express.json());
// app.use(cookieParser());

// app.use(errorHandler)



// // Utilise la route créé depuis user.route.js
// app.use('/api/user', userRoutes)
// app.use('/api/auth', authRoutes);
// app.use('/api/post', postRoutes);
// app.use('/api/comment', commentRoutes);

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
//  })


//  app.use(errorHandler)

// // middleware to handle error
// app.use((err, req, res, next) => {
//    const statusCode = err.statusCode || 500;
//    const message = err.message || 'Internal Server Error';
//      return res.status(statusCode).json({
//       success: false,
//       statusCode,
//       message,
//     });
// })


// app.listen(3000, () => {
//     console.log('Server is running on port 3000')
// })


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

const app = express();
const __dirname = path.resolve();

// --- Middlewares ---
app.use(express.json());
app.use(cookieParser());

// --- API ROUTES ---
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

// --- SERVE FRONTEND BUILD ---
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// --- GLOBAL ERROR HANDLER (Always last) ---
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// --- START SERVER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
