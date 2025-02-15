//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const listaAmigos = document.getElementById("listaAmigos");
const inputAmigo = document.getElementById("amigo");

function adicionarAmigo() {
    const nome = inputAmigo.value.trim();
    if (nome !== "") {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
        inputAmigo.value = "";
        inputAmigo.focus();
    }
}
function sortearAmigo() {
    const amigos = Array.from(listaAmigos.getElementsByTagName("li"));
    if (amigos.length > 0) {
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)].textContent;
        resultado.textContent = `Amigo secreto sorteado: ${sorteado}`;
    } else {
        alert("Adicione pelo menos um nome antes de sortear!");
    }
}