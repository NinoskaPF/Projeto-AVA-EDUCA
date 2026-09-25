import listarCursos from "../js/cursos.js";

const usuario = JSON.parse(sessionStorage.getItem("usuario"));

const containerCursos = document.getElementById("cards-cursos");

const imagensCursos = {
    1: "../assets/images/Desenvolvimento-Web.jpg",
    2: "../assets/images/HTML-CSS.jpg",
    3: "../assets/images/JavaScript-Iniciantes.jpg",
    4: "../assets/images/Front-End.jpg",
    5: "../assets/images/JavaScript-Avançado.jpg",
    6: "../assets/images/Banco-Dados.jpg",
    7: "../assets/images/Back-End.jpg",
    8: "../assets/images/APIs.jpg"
};

function formatarData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

listarCursos(usuario.email)
    .then(function (cursos) {

        cursos.forEach(function (curso) {

            const card = document.createElement("div");

            card.classList.add("card-curso");

            card.innerHTML = `

            <img 
            src="${imagensCursos[curso.id]}" 
            alt="${curso.nomeCurso}"
            >
                <h2>${curso.nomeCurso}</h2>
                <p>Data de início: ${formatarData(curso.dataInicio)}</p>
                <p>Data de fim: ${formatarData(curso.dataFim)}</p>
            `;

            containerCursos.appendChild(card);
        });

    })
    .catch(function (erro) {

        containerCursos.innerHTML = `
            <p class="mensagem-erro">${erro}</p>
        `;

    });
