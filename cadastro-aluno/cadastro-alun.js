
import Aluno from "../js/Aluno.js";
import cadastrarAluno from "../js/alunos.js";

const formAluno = document.getElementById("form-aluno");

const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

function limparEndereco() {
    logradouro.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
}

cep.addEventListener("blur", function () {
    const cepLimpo = cep.value.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
        limparEndereco();
        document.getElementById("mensagem").textContent = "CEP inválido!";
        return;
    }
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {

            if (dados.erro) {

                limparEndereco();

                document.getElementById("mensagem").textContent =
                    "CEP não encontrado!";
                return;
            }
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            estado.value = dados.uf;
        })
        .catch(function () {
            limparEndereco();

            document.getElementById("mensagem").textContent =
                "Erro ao consultar o CEP!";
        });

});

formAluno.addEventListener("submit", function (evento) {
    evento.preventDefault();

    document.getElementById("mensagem").textContent = "";

    const nome = document.getElementById("nome").value;
    const genero = document.getElementById("genero").value;
    const campoDataNascimento = document.getElementById("dataNascimento");
    const dataNascimento = campoDataNascimento.value;

    const data = moment(dataNascimento, "YYYY-MM-DD", true);
    const dataMinima = moment("1900-01-01", "YYYY-MM-DD", true);
    const dataLimiteIdade = moment().subtract(7, "years");

    if (!data.isValid()) {
        document.getElementById("mensagem").textContent =
            "Data de nascimento inválida!";
        return;
    }

    if (!data.isAfter(dataMinima)) {
        document.getElementById("mensagem").textContent =
            "A data de nascimento deve ser posterior a 01/01/1900!";
        return;
    }

    if (data.isAfter(dataLimiteIdade, "day")) {
        document.getElementById("mensagem").textContent =
            "O aluno deve ter pelo menos 7 anos de idade!";
        return;
    }


    const cpf = document.getElementById("cpf").value;
    const cpfLimpo = cpf.replace(/\D/g, "");

    if (cpfLimpo.length !== 11) {
        document.getElementById("mensagem").textContent = "CPF inválido!";
        return;
    }
    const telefone = document.getElementById("telefone").value;
    const telefoneLimpo = telefone.replace(/\D/g, "");

    if (telefoneLimpo.length < 10) {
        document.getElementById("mensagem").textContent = "Telefone inválido!";
        return;
    }
    const email = document.getElementById("email").value;
    const cepLimpo = cep.value.replace(/\D/g, "");
    if (cepLimpo.length !== 8) {
        document.getElementById("mensagem").textContent = "CEP inválido!";
        return;
    }
    if (
        !logradouro.value ||
        !bairro.value ||
        !cidade.value ||
        !estado.value
    ) {
        document.getElementById("mensagem").textContent =
            "Consulte um CEP válido antes de cadastrar o aluno!";
        return;
    }
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;

    const aluno = new Aluno(
        nome,
        genero,
        data.format("DD/MM/YYYY"),
        cpf,
        telefone,
        email,
        cepLimpo,
        cidade.value,
        estado.value,
        logradouro.value,
        numero,
        complemento,
        bairro.value
    );
    cadastrarAluno(aluno)
    .then((mensagem) => {
        document.getElementById("mensagem").textContent = mensagem;

        formAluno.reset();
        limparEndereco();
    })
    .catch(function (erro) {
        document.getElementById("mensagem").textContent = erro;
    });
});
