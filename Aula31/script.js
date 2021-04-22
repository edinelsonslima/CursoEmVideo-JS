let array = [] 

function add(){ 
    let num = document.querySelector('#num');
    let sel = document.querySelector('#sel')
    let item = document.createElement('option')
    res.innerHTML = ''
    function verificar(valor){
        if(valor >= 1 && valor <= 100){
            return true
        }else{
            return false
        }
    }
    
    if(!verificar(Number(num.value))){
        alert(`Valores apenas entre 1 e 100`)
    }
    else{
        if(array.length == 0){
            array.push(Number(num.value))
            item.text = `O valor ${array[0]} foi adicionado`
            sel.appendChild(item)
        }
        else{
            function adicionar(){
                if(array.indexOf(Number(num.value)) == -1){
                    return true
                }
                else{
                    return false
                }
            }

            if(adicionar()){
                array.push(Number(num.value))
                item.text = ` O valor ${Number(num.value)} foi adicionado`
                sel.appendChild(item)
            }
            else{
                alert('Valor já inserido')
            }
        }
    }
    num.value = ''
    num.focus()       
}

function finalizar(){
    let res = document.querySelector('#res')
    let cont = 0
    let max = Math.max(...array)
    let min = Math.min(...array)
    
    if(array.length != 0){
        for(let i = 0; i < array.length; i++){
            cont += array[i]
        }

        let media = Number(cont) / Number(array.length)
        res.innerHTML = ''
        res.innerHTML = `Ao todo, temos ${array.length} números cadastrados <br>`
        res.innerHTML += `O maior valor informado foi ${max} <br>`
        res.innerHTML += `O menor valor informado foi ${min} <br>`
        res.innerHTML += `Somando todos os valores, temos ${cont} <br>`
        res.innerHTML += `A média dos valores digitados é ${media}`
    }
    else{
        alert('Primeiro adicione os números')
    }
}