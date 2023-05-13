function diaDaSemana(){
    var dia = new Date().getDay();

    switch (dia){
        case 0:
            document.getElementById("teste").innerHTML ="Hoje é Domingo"
            break
        case 1:
            document.getElementById("teste").innerHTML ="Hoje é Segunda-Feira"
            break
        case 2:
            document.getElementById("teste").innerHTML ="Hoje é Terça-Feira"
            break
        case 3:
            document.getElementById("teste").innerHTML ="Hoje é Quarta-Feira"
            break
        case 4:
            document.getElementById("teste").innerHTML ="Hoje é Quinta-Feira"
            break  
        case 5:
            document.getElementById("teste").innerHTML ="Hoje é Sexta-Feira"
            break
        case 6:
            document.getElementById("teste").innerHTML ="Hoje é Sabado"
            break
    }

}