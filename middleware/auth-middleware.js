const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log(req.file);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided. Please login to continue!",
    });
  }

  // decode this token
  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodedTokenInfo);

    req.userInfo = decodedTokenInfo;
    console.log(req.userInfo);
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "Access denied. Token Wrong or Token Expired. Please login to continue!",
    });
  }
};

module.exports = authMiddleware;
