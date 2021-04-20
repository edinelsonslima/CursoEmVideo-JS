function contador(){
    var ini = document.querySelector('#ini')
    var fim = document.querySelector('#fim')
    var pas = document.querySelector('#pas')
    var res = document.querySelector('#res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Preencha todos os campos'
    }else{    
        
        if(Number(pas.value) <= 0){
            alert('Impossivel sair com 0 passos, considerando Passo como 1 !!!')
            pas.value = 1
        }

        res.innerHTML = '\n Contando: <br>'
        //Contagem Crescente
        if(Number(ini.value) < Number(fim.value)){
            for(let c = Number(ini.value); c <= Number(fim.value); c+=Number(pas.value)){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } 
        //Contagem Decresente
        else{
            for(let c = Number(ini.value); c >= Number(fim.value); c-=Number(pas.value)){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}