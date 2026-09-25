
const usuario = JSON.parse(sessionStorage.getItem("usuario"));

const usuarioLogado = document.getElementById("usuario-logado");

usuarioLogado.textContent = usuario.nome;


const btnDashboard = document.getElementById("btn-dashboard");
const btnAlunos = document.getElementById("btn-alunos");
const btnSair = document.getElementById("btn-sair");


btnDashboard.addEventListener("click", function () {

    window.location.href = "../dashboard/dashboard.html";

});


btnAlunos.addEventListener("click", function () {

    window.location.href = "../cadastro-aluno/cadastro-alun.html";

});


btnSair.addEventListener("click", function () {

    sessionStorage.removeItem("usuario");

    window.location.href = "../index.html";

});