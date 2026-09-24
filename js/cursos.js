import cursos from "../dados/listagem-cursos.js";

function listarCursos(usuario) {

    const cursosDoUsuario = cursos.filter(function (curso) {
        return curso.emailProfessor === usuario;
    });

    if (cursosDoUsuario.length > 0) {
        return Promise.resolve(cursosDoUsuario);
    } else {
        return Promise.reject("Não há cursos cadastrados para esse usuário");
    }
}
export default listarCursos;
