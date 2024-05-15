const jwt = require("jsonwebtoken");

exports.cookieJwtAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ msg: "You need a token to access this endpoint" });
  }

  try {
    const user = jwt.verify(token, process.env.MY_SECRET);
    req.user = user;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ msg: "You need a token to access this endpoint" });
  }
};
