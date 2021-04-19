function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${data.getHours()}:${data.getMinutes()} horas`
    
    if(hora >= 5 && hora < 12 ){
        img.src =  '/Aula20/img/manhã.png'
        document.body.style.background = '#869834'
    }
    else if (hora >= 12 && hora <= 18){
        img.src =  '/Aula20/img/tarde.png'
        document.body.style.background = '#b34a26'
    }
    else {
        img.src =  '/Aula20/img/noite.png'
        document.body.style.background = '#091358'
    }
}