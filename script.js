function carregar() {
    var msg = document.getElementById('msg1')
    var img = document.getElementById('imagem')
    var mensagem = document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()  
    var min = data.getMinutes()  
    //var hora = 15
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manha.png'
        mensagem.innerHTML = `Tenha uma manhã abençoada!`
        document.body.style.background = `#a9c2c7`
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde.png'
        mensagem.innerHTML = `Tenha uma tarde abençoada!`
        document.body.style.background = `#a17959`
    } else {
        //Boa noite!
        img.src = 'noite.png'
        mensagem.innerHTML = `Tenha uma noite abençoada!`
        document.body.style.background = `#3d351c`
    }
}
