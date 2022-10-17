const express = require("express");
const router = express.Router();


const produtoHandler = require("./produtoHandler");

router.get("/", async (req, res) => {
    const produtos = await produtoHandler.getProdutos();
    res.json(produtos);
});

router.post("/", async (req, res) => {
    res.json(await produtoHandler.cadastrarProdutos(req.body));
});

router.delete("/", async (req, res) =>{
    res.json(await produtoHandler.apagarProdutos());
});

module.exports = router;