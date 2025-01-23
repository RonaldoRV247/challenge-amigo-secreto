
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para añadir un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
        inputAmigo.value = ""
        console.log("Amigos:", amigos);
        showAmigos(); 
    }
}
// Función para mostrar el listado de amigos
function showAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`; 
    } 
}
//Función para sortear y elegir un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Aún no tienes amigos para sortear");
    } else if (amigos.length < 2) {
        alert("Tiene que haber 2 o más amigos para sortear");
    } else {
        const listaResultado = document.getElementById("resultado");
        listaResultado.innerHTML = "";
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        listaResultado.innerHTML += `<li>${amigos[indiceAleatorio]}</li>`; 
    }
}
