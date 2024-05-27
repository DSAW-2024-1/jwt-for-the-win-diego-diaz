const express = require("express");
const router = express.Router();
const { cookieJwtAuth } = require("../middleware/authenticateToken");

const profiles = [
  {
    name: "Juan",
    lastName: "Pérez",
    email: "juan.perez@example.com",
    birthDate: "15/05/1990",
  },
  {
    name: "María",
    lastName: "González",
    email: "maria.gonzalez@example.com",
    birthDate: "20/04/1985",
  },
  {
    name: "Luis",
    lastName: "Martínez",
    email: "luis.martinez@example.com",
    birthDate: "10/09/1988",
  },
  {
    name: "Ana",
    lastName: "Sánchez",
    email: "ana.sanchez@example.com",
    birthDate: "05/07/1993",
  },
  {
    name: "Carlos",
    lastName: "López",
    email: "carlos.lopez@example.com",
    birthDate: "12/12/1982",
  },
  {
    name: "Laura",
    lastName: "Hernández",
    email: "laura.hernandez@example.com",
    birthDate: "25/03/1995",
  },
  {
    name: "Pedro",
    lastName: "Díaz",
    email: "pedro.diaz@example.com",
    birthDate: "08/08/1991",
  },
  {
    name: "Sofía",
    lastName: "Rodríguez",
    email: "sofia.rodriguez@example.com",
    birthDate: "03/02/1987",
  },
  {
    name: "Javier",
    lastName: "Gómez",
    email: "javier.gomez@example.com",
    birthDate: "18/06/1984",
  },
  {
    name: "Paula",
    lastName: "Fernández",
    email: "paula.fernandez@example.com",
    birthDate: "30/10/1997",
  },
];

router.get("/", cookieJwtAuth, (req, res) => {
  const randomIndex = Math.floor(Math.random() * profiles.length);
  const randomProfile = profiles[randomIndex];
  res.json(randomProfile);
});

module.exports = router;
