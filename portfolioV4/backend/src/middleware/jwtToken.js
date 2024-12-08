const jwt = require("jsonwebtoken");

const secret = "0917263"; 

// Generate JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, secret, { expiresIn: "1d" });
};

// Authenticate JWT
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Format: "Bearer <token>"
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, secret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

module.exports = { generateToken, authenticateToken };