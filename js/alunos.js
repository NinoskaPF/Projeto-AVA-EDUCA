import alunos from "../dados/listagem-alunos.js";

function cadastrarAluno(aluno) {
    try {
        let novoId;

        if (alunos.length > 0) {
            novoId = alunos[alunos.length - 1].id + 1;
        } else {
            novoId = 1;
        }

        aluno.id = novoId;

        alunos.push(aluno);

        return Promise.resolve("Aluno cadastrado com sucesso!");
    } catch (error) {
        return Promise.reject("Erro ao cadastrar o aluno");
    }

}

export default cadastrarAluno;