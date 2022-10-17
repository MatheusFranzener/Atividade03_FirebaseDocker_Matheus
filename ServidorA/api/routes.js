const express = require('express');

const router = express.Router();

const usuarioController = require("./Usuario/usuarioController");

router.use("/usuario", usuarioController);

module.exports = router;