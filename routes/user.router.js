const express = require("express");
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middlewares/authMiddleware");
const { checkProfileOwnership } = require("../middlewares/authorizeMiddleware"); // If you created this

const userRouter = express.Router();

// Public Routes
userRouter.get("/allUsers", userController.getAllUsers);
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/userProfile/:id", userController.getUserProfile);

// Protected Routes
userRouter.put(
  "/updateProfile/:id",
  authenticateToken,
  userController.updateUserProfile,
);
userRouter.delete(
  "/deleteProfile/:id",
  authenticateToken,
  userController.deleteUserProfile,
);

module.exports = userRouter;
