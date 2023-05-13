let data = new Date();


//PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano)

//PEGAR O MES ATUAL - 0 ATÉ 11 SENDO JANEIRO 0 E DEZEMBRO 11
let mes = data.getMonth();
//console.log(mes);

//MOSTRAR O MES NO FORMATO ESCRITO
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let mesEscrito = mesesDoAno[data.getMonth()]
console.log(mesEscrito)

//PEGAR DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);

//PEGAR O DIA DA SEMANA
let diaSemana = data.getDay();

//MOSTRA DIA DA SEMANA FORMATO ESCRITO
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
let diaEscrito = diasDaSemana[data.getDay()];
console.log(diaEscrito);

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora)


//PEGAR OS MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos)

//PEGAR OS SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos)


//PEGAR A DATA NO PADRAO BRASILEIRO - DIA/MES/ANO
let dataBR = data.toLocaleString('pt-BR',{dateStyle:"short"});
console.log(dataBR)

//COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2024, 0, 15);

if (hoje > vencimento){
    console.log("Sua conta está vencida")
}else{
    console.log("Ainda não venceu, tudo certo!")
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS    
var dataInicial = new Date();
var dataFinal = new Date(2023,11,31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 *1000));
console.log(diferencaDias + " Dias")