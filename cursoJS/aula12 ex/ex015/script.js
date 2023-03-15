function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade <= 10){
                        // CRIANÇA
                img.setAttribute('src','imagens/bebe.m.png')
            }else if(idade > 10 && idade <= 20){
                        // JOVEM
                img.setAttribute('src','imagens/jovem.m.png')
            }else if(idade < 60){
                        // ADULTO
                img.setAttribute('src','imagens/adulto.m.png')
            }else{
                // IDOSO
                img.setAttribute('src','imagens/idoso.m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade <= 10){
                         // CRIANÇA
                img.setAttribute('src','imagens/bebe.f.png')
                }else if(idade > 10 && idade <= 20){
                         // JOVEM
                img.setAttribute('src','imagens/jovem.f.png')
                }else if(idade < 60){
                           // ADULTO
                img.setAttribute('src','imagens/adulto.f.png')
                }else{
                         // IDOSO
                img.setAttribute('src','imagens/idoso.f.png')
                }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img)
    }

}