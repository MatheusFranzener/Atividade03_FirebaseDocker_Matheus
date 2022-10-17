const crud = require("../../crud");
const fetch = require("node-fetch");

async function getProdutos() {
    const produtos = await crud.get("Products");
    return produtos;
}

async function cadastrarProdutos(dados) {
    // let verificacao = true;

    // const res = await fetch("http://destino:3000/api/usuario/login", {
    //     method: 'POST',
    //     body: JSON.stringify(dados),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(function (res) {
    //     if (res.status == 500) {
    //         verificacao = false;
    //     } else {
    //         listaProdutos.push(dados);
    //     }
    // });

    // if (verificacao == false) {
    //     return {
    //         error: "001",
    //         message: "Dados de Login inválidos!"
    //     }
    // } else {
    //     return dados;
    // }


    // Fetch sem o docker
    let verificacao = true;

    const res = await fetch("http://localhost:3000/api/usuario/login", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async function (res) {
        if (res.status == 500) {
            verificacao = false;
        } else {
            const produto = dados;
            delete produto.userPassword;
            const produtoCadastrado = await crud.save("Products", undefined, produto);
            return produtoCadastrado;
        }
    });

    if (verificacao == false) {
        return {
            error: "001",
            message: "Dados de Login inválidos!"
        }
    } else {
        return dados;
    }
}

async function apagarProdutos(id) {
    const produtoDeletado = await crud.remove("Products", id);
    return produtoDeletado;
}

module.exports = {
    getProdutos,
    cadastrarProdutos,
    apagarProdutos
}

