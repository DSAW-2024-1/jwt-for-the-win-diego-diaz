const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { cookieJwtAuth } = require("../middleware/authenticateToken");

const getUser = async () => {
  return { email: "admin@admin.com", password: "admin" };
};

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUser();

  if (user.email !== email || user.password !== password) {
    return res.status(400).json({
      error: "Correo o contraseña incorrectos",
    });
  }

  delete user.password;

  const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: "5m" });

  //res.cookie("token", token);

  return res.status(200).json({ msg: "Logged in successfully", token });
});

module.exports = router;
