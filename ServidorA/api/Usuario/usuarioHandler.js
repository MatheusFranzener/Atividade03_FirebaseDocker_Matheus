let listaUsuarios = [];

async function getUsuarios(){
    return listaUsuarios;
}

async function cadastrarUsuario(dados){
    listaUsuarios.push(dados);
    return dados;
}

async function apagarDados(){
    listaUsuarios = [];
}

function verificarUsuarios(dados){
    let idUsuario = dados.idUsuario;
    let senha = dados.senha;

    if(listaUsuarios.length!=0){
        for (let i = 0; i < listaUsuarios.length; i++) {
            if(listaUsuarios[i].id == idUsuario){
                if(listaUsuarios[i].senha == senha){
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
}

module.exports = {
    getUsuarios,
    cadastrarUsuario,
    apagarDados,
    verificarUsuarios
}