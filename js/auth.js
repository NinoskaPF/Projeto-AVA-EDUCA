import usuarios from "../dados/listagem-usuarios.js";

function login(usuario, senha) {

    const usuarioEncontrado = usuarios.find(function (usuarioLista) {
        return usuarioLista.email === usuario && usuarioLista.senha === senha;
    });

    if (usuarioEncontrado) {
        return Promise.resolve(usuarioEncontrado);
    } else {
        return Promise.reject("Dados incorretos. Favor verificar e tentar novamente");
    }
}

export default login;