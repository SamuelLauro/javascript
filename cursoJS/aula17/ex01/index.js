function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    switch(cor){
        case "azul":
            // o que acontece
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            //o que acontece
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            // o que acontece
            document.body.style.backgroundColor = "yellow";
            break;
        case "verde":
            // o que acontece
            document.body.style.backgroundColor = "green"
        default:
            //o que acontece
            document.getElementById("teste").innerHTML = "Nenhuma cor disponível para: "+cor;
        
    }
}