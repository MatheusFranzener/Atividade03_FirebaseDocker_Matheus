const express = require("express");
const router = express.Router();

const usuarioHandler = require("./usuarioHandler");

router.get("/", async (req, res) => {
    const usuarios = await usuarioHandler.getUsuarios();
    res.json(usuarios);
});

router.post("/", async (req, res) => {
    res.json(await usuarioHandler.cadastrarUsuario(req.body));
});

router.delete("/:id", async (req, res) => {
    res.json(await usuarioHandler.apagarDados(req.params.id));
});

router.post("/login", async (req, res) => {
    if (await usuarioHandler.verificarUsuarios(req.body))
        res.status(400).send("Login autenticado.");
    else {
        res.status(500).send("Login negado.");
    }
});

module.exports = router;