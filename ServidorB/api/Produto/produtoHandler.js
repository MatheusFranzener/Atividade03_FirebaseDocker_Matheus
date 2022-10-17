const fetch = require("node-fetch");

let listaProdutos = [];

async function getProdutos() {
    return listaProdutos;
}

async function cadastrarProdutos(dados) {
    let verificacao = true;

    const res = await fetch("http://destino:3000/api/usuario/login", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        if (res.status == 500) {
            verificacao = false;
        } else {
            listaProdutos.push(dados);
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

async function apagarProdutos() {
    listaProdutos = [];
}

module.exports = {
    getProdutos,
    cadastrarProdutos,
    apagarProdutos
}

// let verificacao = true;

// const res = await fetch("http://localhost:3000/api/usuario/login", {
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