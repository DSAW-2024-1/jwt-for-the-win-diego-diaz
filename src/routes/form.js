const express = require("express");
const router = express.Router();
const { cookieJwtAuth } = require("../middleware/authenticateToken");
const path = require("path");

router.get("/", cookieJwtAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/form.html"));
});

router.post("/", cookieJwtAuth, (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).send({ error: "Text is required" });
  }
  res.send({ text });
});

module.exports = router;
