const express = require("express");
const issueController = require("../controllers/issueController");
const { authenticateToken } = require("../middlewares/authMiddleware");

const issueRouter = express.Router();

// Public Routes
issueRouter.get("/issue/all/:id", issueController.getAllIssues);
issueRouter.get("/issue/:id", issueController.getIssueById);

// Protected Routes
issueRouter.post(
  "/issue/create/:id",
  authenticateToken,
  issueController.createIssue,
);
issueRouter.put(
  "/issue/update/:id",
  authenticateToken,
  issueController.updateIssueById,
);
issueRouter.delete(
  "/issue/delete/:id",
  authenticateToken,
  issueController.deleteIssueById,
);

module.exports = issueRouter;
