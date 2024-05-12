require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const loginRouter = require("./src/routes/login");
const profileRouter = require("./src/routes/profile");
const formRouter = require("./src/routes/form");
const contactsRouter = require("./src/routes/contacts");
const { cookieJwtAuth } = require("./src/middleware/authenticateToken");

app.use("/login", loginRouter);
app.use("/profile", profileRouter);
app.use("/form", formRouter);
app.use("/contacts", contactsRouter);

// URL - Callback
app.get("/", cookieJwtAuth, (req, res) => {
  res.send("Diego Norberto Diaz Algarin - 0000307595");
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/form.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
