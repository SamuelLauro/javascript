const carros = ["Gol", "Fusca", "Corsa", "Fox","Golf","Chevette"];
var tamanho = carros.length;

for(let i = 0; i < tamanho; i++){
    document.getElementById("teste").innerHTML += carros[i] + " - "
}