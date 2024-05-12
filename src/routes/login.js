const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const path = require("path");

const getUser = async () => {
  return { email: "admin@admin.com", password: "admin" };
};

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUser();

  if (user.email !== email) {
    return res.status(403).json({
      error: "Correo incorrecto",
    });
  }

  if (user.password !== password) {
    return res.status(403).json({
      error: "Contraseña incorrecta",
    });
  }

  delete user.password;

  const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: "1h" });

  res.cookie("token", token);

  return res.redirect("/");
});

module.exports = router;
