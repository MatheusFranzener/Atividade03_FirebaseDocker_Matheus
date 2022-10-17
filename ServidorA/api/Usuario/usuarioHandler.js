const crud = require("../../crud");

async function getUsuarios() {
    const users = await crud.get("Users");
    return users;
}

async function cadastrarUsuario(dados) {
    const usuario = await crud.save("Users", undefined, dados);
    return usuario;
}

async function apagarDados(id) {
    const userDeletado = await crud.remove("Users", id);
    return userDeletado;
}

async function verificarUsuarios(dados) {
    console.log("Dados aq: ", dados);
    let idUsuario = dados.userCPF;
    let senha = dados.userPassword;

    const listaUsuarios = await crud.get("Users");

    if (listaUsuarios.length != 0) {
        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].CPF == idUsuario) {
                if (listaUsuarios[i].Password == senha) {
                    console.log("Lista i: ", listaUsuarios[i]);
                    return true;
                }
            }
        }
    }
    return false;
}

module.exports = {
    getUsuarios,
    cadastrarUsuario,
    apagarDados,
    verificarUsuarios
}