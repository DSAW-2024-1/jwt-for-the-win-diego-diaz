const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const path = require("path");

const getUser = async () => {
  return { email: "admin@admin.com", password: "admin" };
};

router.get("/", async (req, res) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.MY_SECRET, (err, decoded) => {
      if (err) {
        res.sendFile(path.join(__dirname, "../../public/index.html"));
      } else {
        res.json({ JWT_token: token, msg: "Logged in successfully" });
      }
    });
  } else {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  }
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUser();

  if (user.email !== email || user.password !== password) {
    return res.status(403).json({
      error: "Correo o contraseña incorrectos",
    });
  }

  delete user.password;

  const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: "1h" });

  res.cookie("token", token);

  return res.redirect("/");
});

module.exports = router;
