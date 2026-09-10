function checkProfileOwnership(req, res, next) {
  const resourceID = req.params.id;

  // req.user.id is populated by authenticateToken
  if (req.user.id !== resourceID) {
    return res.status(403).json({
      error:
        "Unauthorized access. You do not have permission to modify this resource.",
    });
  }

  next();
}

module.exports = { checkProfileOwnership };
