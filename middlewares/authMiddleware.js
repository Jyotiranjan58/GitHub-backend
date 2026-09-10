const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function authenticateToken(req, res, next) {
  // Extract token from the "Authorization: Bearer <token>" header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // Attach the decoded payload to req
    next(); // Pass control to the next middleware or route controller
  } catch (err) {
    console.error("Token verification error:", err.message);
    return res.status(403).json({ error: "Invalid or expired token." });
  }
}

module.exports = { authenticateToken };
