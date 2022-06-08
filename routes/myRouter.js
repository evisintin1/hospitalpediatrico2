const Post = require("../models/postModel");
const myController = require("../controllers/myController");
const adminController = require("../controllers/adminController");
const express = require("express");
const router = express.Router();

//Defino rutas y acciones de respuesta
router.route("/").get(myController.inicio);
router.route("/login").get(adminController.vista).post(adminController.logine);
router.route("/logout").get(adminController.logout);
router.route("/subirPost").get(adminController.postear2);
module.exports = router;
