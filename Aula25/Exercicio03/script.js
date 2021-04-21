function calcular(){
    let num = document.querySelector('#num')
    let sel = document.querySelector('#sel')
    let opcao = document.getElementsByName('radop')

    //Soma
    if(opcao[0].checked){
        if(num.value.length != 0){
            let n = Number(num.value)
            sel.innerHTML = ''
            for(let c = 1; c<=10;c++){
                let item = document.createElement('option')
                item.text = `${c} + ${n} = ${c + n}`
                sel.appendChild(item)
            }
        }else{
            alert('Digite um número')
        }
    }
    //Subtração
    else if(opcao[1].checked){
        if(num.value.length != 0){
            let n = Number(num.value)
            sel.innerHTML = ''
            for(let c = 1; c<=10;c++){
                let item = document.createElement('option')
                item.text = `${c} - ${n} = ${c - n}`
                sel.appendChild(item)
            }
        }else{
            alert('Digite um número')
        }
    }
    //Multiplicação
    else if(opcao[2].checked){
        if(num.value.length != 0){
            let n = Number(num.value)
            sel.innerHTML = ''
            for(let c = 1; c<=10;c++){
                let item = document.createElement('option')
                item.text = `${c} * ${n} = ${c * n}`
                sel.appendChild(item)
            }
        }else{
            alert('Digite um número')
        }
    }
    //Divisão
    else if(opcao[3].checked){
        if(num.value.length != 0){
            let n = Number(num.value)
            sel.innerHTML = ''
            for(let c = 1; c<=10;c++){
                let item = document.createElement('option')
                item.text = `${c} / ${n} = ${c / n}`
                sel.appendChild(item)
            }
        }else{
            alert('Digite um número')
        }
    }    
}