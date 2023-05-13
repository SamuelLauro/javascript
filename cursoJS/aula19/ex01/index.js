function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contar!";

    //ATIVA A FUNÇÃO APENAS UMA VEZ QUANDO O TEMPO FOR ESPECIFFICADO
    tempo = setTimeout(function(){ 
        document.getElementById('tempo').innerHTML = "Executou o setTimeout!";
    }, 5000);

}

function pararContagem(){
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem";
}