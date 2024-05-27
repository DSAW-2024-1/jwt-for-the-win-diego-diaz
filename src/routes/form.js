const express = require("express");
const router = express.Router();
const { cookieJwtAuth } = require("../middleware/authenticateToken");

router.get("/", cookieJwtAuth, (req, res) => {
  res.send("Working from Form");
});

router.post("/", cookieJwtAuth, (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res
      .status(400)
      .send({ error: "The property text is required in the body" });
  }
  res.send({ text });
});

module.exports = router;
