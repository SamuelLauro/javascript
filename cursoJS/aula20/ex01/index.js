class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " Buzinou: Biiiiiiiii"
    }
}

const uno = new Carro("Fiat","Uno","2012");
const gol = new Carro("Volkswagen","Gol","2017")
console.log(uno.buzina())
console.log(gol.buzina())