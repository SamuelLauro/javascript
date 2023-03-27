let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }else{
        return false
    }

}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else { 
        return false
    }
}

function adicionar(num){
    if(isNumero(num.value) && inLista(num.value.valores)){
        window.alert('Tudo Ok')
    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}