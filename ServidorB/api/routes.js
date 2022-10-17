const express = require('express');

const router = express.Router();

const produtoController = require("./Produto/produtoController");

router.use("/produto", produtoController);

module.exports = router;