const express = require("express");
const router = express.Router();
const { cookieJwtAuth } = require("../middleware/authenticateToken");

const contacts = [
  { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
  { name: "Bob", email: "bob@example.com", phone: "987-654-3210" },
  { name: "Charlie", email: "charlie@example.com", phone: "555-555-5555" },
  { name: "David", email: "david@example.com", phone: "111-222-3333" },
  { name: "Eva", email: "eva@example.com", phone: "999-888-7777" },
];

router.get("/", cookieJwtAuth, (req, res) => {
  res.json(contacts);
});

module.exports = router;
