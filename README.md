# 🎓 AVA-EDUCA+

> Sistema web educacional para organização e gerenciamento de usuários, cursos e alunos.

O **AVA-EDUCA+** é uma aplicação web desenvolvida para centralizar informações acadêmicas em uma interface simples, organizada e responsiva.

A plataforma permite que usuários autenticados visualizem seus cursos e realizem o cadastro de alunos. O sistema também utiliza a API **ViaCEP** para preencher automaticamente os dados de endereço a partir do CEP informado.

---

## 🎯 Objetivo

Criar uma plataforma web simples e intuitiva para facilitar a organização de informações acadêmicas e o gerenciamento de usuários, cursos e alunos.

---

## 🚀 Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| **HTML5** | Estrutura das páginas |
| **CSS3** | Estilização e responsividade |
| **JavaScript** | Lógica e funcionalidades |
| **ES Modules** | Organização dos módulos |
| **SessionStorage** | Controle da sessão |
| **Moment.js** | Validação de datas |
| **ViaCEP** | Consulta de endereços |
| **Git / GitHub** | Versionamento |

---

## ✨ Funcionalidades

### 🔐 Login e autenticação

- Validação de usuário e senha.
- Armazenamento da sessão com `sessionStorage`.
- Redirecionamento para o dashboard.
- Logout e encerramento da sessão.
- Mensagens de feedback para dados inválidos.

### 📊 Dashboard

- Exibição dos cursos relacionados ao usuário autenticado.
- Cards com informações dos cursos.
- Imagens específicas para cada curso.
- Formatação das datas.
- Navegação entre as páginas.

### 👨‍🎓 Cadastro de alunos

- Formulário completo para cadastro.
- Validação dos campos obrigatórios.
- Validação da data de nascimento com **Moment.js**.
- Validação de CPF, telefone e CEP.
- Criação de objetos através da classe `Aluno`.
- Cadastro utilizando **Promises**.

### 📍 Consulta de endereço

- Integração com a API **ViaCEP**.
- Preenchimento automático de:
  - Logradouro
  - Bairro
  - Cidade
  - Estado
- Tratamento de CEP inválido ou não encontrado.
- Limpeza dos dados quando necessário.

---
## ▶️ Como executar

### 1. Clonar o repositório

Abra o PowerShell e navegue até a pasta onde deseja salvar o projeto:

cd C:\Users\SEU_USUARIO\OneDrive\Desktop

Depois, faça o clone do repositório:

git clone https://github.com/NinoskaPF/Projeto-AVA-EDUCA.git

Entre na pasta do projeto:

cd Projeto-AVA-EDUCA
### Instalar as dependências

Com o projeto aberto no PowerShell, execute:

npm install

Esse comando instala as dependências necessárias para executar o projeto.

### Executar o projeto

Depois da instalação, execute:

npm start

O projeto será iniciado localmente.

Em seguida, abra o endereço informado no terminal, normalmente:

http://localhost:3000

### Observação

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript, com utilização de módulos JavaScript (import / export default), sessionStorage, API ViaCEP e Moment.js.

Para executar corretamente o projeto, é recomendado iniciar o ambiente pelo terminal e acessar o projeto através do endereço local informado pelo servidor.

---

## 🌿 Organização das branches

O desenvolvimento foi organizado utilizando branches de funcionalidade:

    main
      │
      └── develop
            │
            ├── feature/estrutura-projeto
            ├── feature/criar-logica-js-implementacao-funcoes
            ├── feature/implementaçao-login
            ├── feature/dashboard
            └── feature/cadastro-aluno

- `main` → versão principal do projeto.
- `develop` → integração das funcionalidades.
- `feature/*` → desenvolvimento de funcionalidades específicas.

---

## 📚 Conceitos utilizados

Durante o desenvolvimento foram aplicados conceitos de:

- Manipulação do DOM
- Eventos e formulários
- Funções e callbacks
- Promises
- `fetch()`
- Consumo de APIs
- `sessionStorage`
- JSON
- Arrays e métodos como `find()` e `filter()`
- Classes e objetos
- Módulos JavaScript
- `import` e `export default`
- Responsividade com CSS

---

## 🔮 Possíveis melhorias futuras

Com a evolução do projeto, algumas funcionalidades poderão ser incorporadas:

- 💾 Persistência dos dados através de backend e banco de dados.
- 🔐 Autenticação e gerenciamento de usuários mais seguros.
- 👥 Gerenciamento completo de alunos e cursos.
- 🔎 Recursos de busca, filtros e melhorias na experiência do usuário.
- 🧪 Testes automatizados e melhorias de acessibilidade.

---

## 📌 Status

🚧 **Projeto em desenvolvimento**

O projeto já conta com a estrutura principal, autenticação, dashboard, navegação, integração com a API ViaCEP e cadastro de alunos.


## 📁 Estrutura do projeto
```
ava-educa/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── cadastro-aluno/
│   ├── cadastro-alun.html
│   ├── cadastro-alun.css
│   └── cadastro-alun.js
│
├── dashboard/
│   ├── dashboard.html
│   ├── dashboard.css
│   └── dashboard.js
│
├── dados/
│   ├── listagem-alunos.js
│   ├── listagem-cursos.js
│   └── listagem-usuarios.js
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── Aluno.js
│   ├── alunos.js
│   ├── cursos.js
│   └── geral.js
│
├── login/
│   ├── login.html
│   ├── login.css
│   └── login.js
│
├── css/
│   └── style.css
│
├── index.html
├── package.json
└── README.md

---

👩‍💻 Autora

**Ninoska Palmares**

Projeto desenvolvido para prática e consolidação de conhecimentos em desenvolvimento web.
