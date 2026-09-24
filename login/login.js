
import login from "../js/auth.js";

const email = document.getElementById("email");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const formLogin = document.getElementById("form-login");
const esqueci = document.getElementById("esqueci");

formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    login(email.value, senha.value)
        .then(function (usuario) {
            sessionStorage.setItem("usuario", JSON.stringify(usuario));
            window.location.href = "../dashboard/dashboard.html";
        })
        .catch(function (erro) {
            mensagem.textContent = erro;
        });

});
esqueci.addEventListener("click", function (evento) {

    evento.preventDefault();

    window.alert("Funcionalidade em construção");

});

