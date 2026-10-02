const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

function mostrarMensagem() {
    mensagem.textContent = "A primeira linguagem de programação foi criada na década de 1950!";
}

botao.addEventListener("click", mostrarMensagem);
