const express = require("express");
const repoController = require("../controllers/repoController");
const { authenticateToken } = require("../middlewares/authMiddleware");

const repoRouter = express.Router();

// Protected Routes
repoRouter.post(
  "/repo/create",
  authenticateToken,
  repoController.createRepository,
);
repoRouter.put(
  "/repo/update/:id",
  authenticateToken,
  repoController.updateRepositoryById,
);
repoRouter.delete(
  "/repo/delete/:id",
  authenticateToken,
  repoController.deleteRepositoryById,
);
repoRouter.patch(
  "/repo/toggle/:id",
  authenticateToken,
  repoController.toggleVisibilityById,
);

// Public Routes
repoRouter.get("/repo/all", repoController.getAllRepositories);
repoRouter.get("/repo/:id", repoController.fetchRepositoryById);
repoRouter.get("/repo/name/:name", repoController.fetchRepositoryByName);
repoRouter.get(
  "/repo/user/:userID",
  repoController.fetchRepositoriesForCurrentUser,
);

module.exports = repoRouter;
