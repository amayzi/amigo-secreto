let listaAmigos = [];

function adicionarAmigo() {
    listaAmigos.push(document.getElementById("amigo").value);
    document.getElementById("listaAmigos").innerHTML += document.getElementById("amigo").value + "<br>";
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    let resultado = Math.floor(Math.random() * listaAmigos.length);
    document.getElementById("resultado").innerHTML = listaAmigos[resultado];
}
