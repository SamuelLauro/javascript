function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minut = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${minut} horas.`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#C7CFD2'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#F3BF74'
    } else {
        // BOA NOITE
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#081C1E'
    }
    
}

