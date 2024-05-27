require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const { cookieJwtAuth } = require("./src/middleware/authenticateToken");

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const loginRouter = require("./src/routes/login");
const profileRouter = require("./src/routes/profile");
const formRouter = require("./src/routes/form");
const contactsRouter = require("./src/routes/contacts");

app.use("/login", loginRouter);
app.use("/profile", profileRouter);
app.use("/form", formRouter);
app.use("/contacts", contactsRouter);

// URL - Callback
app.get("/", cookieJwtAuth, (req, res) => {
  res.send("Taller JWT - Diego Diaz");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
