function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    
    if(fano.value.length == 0 || fano.value >= ano){
        alert('[ERROR]Corrija o ano!')
    }else{
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var fsex = document.getElementsByName('radsex')
        
        var genero = fsex[0].checked?'Homem':'Mulher'
        var idade = ano - Number(fano.value)
        
        if (genero == 'Homem'){
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', '/Aula21/img/foto-bebe-m.png')
            }
            else if (idade < 22){
                img.setAttribute('src', '/Aula21/img/foto-jovem-m.png')
            }
            else if (idade < 50){
                img.setAttribute('src', '/Aula21/img/foto-adulto-m.png')
            } else{
                img.setAttribute('src', '/Aula21/img/foto-idoso-m.png')
            }
        } else {
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', '/Aula21/img/foto-bebe-f.png')
            }
            else if (idade < 22){
                img.setAttribute('src', '/Aula21/img//foto-jovem-f.png')
            }
            else if (idade < 50){
                img.setAttribute('src', '/Aula21/img/foto-adulto-f.png')
            } else{
                img.setAttribute('src', '/Aula21/img/foto-idoso-f.png')
            }
        }

        res.innerHTML = `Você informou que é ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}   