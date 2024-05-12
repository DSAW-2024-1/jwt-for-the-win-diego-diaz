const express = require("express");
const router = express.Router();
const { cookieJwtAuth } = require("../middleware/authenticateToken");

router.post("/", cookieJwtAuth, (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).send({ error: "Text is required" });
  }
  res.send({ text });
});

module.exports = router;
