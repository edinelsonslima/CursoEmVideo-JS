function calcular(){
    let num = document.querySelector('#num')
    let sel = document.querySelector('#sel')

    if(num.value.length != 0){
        let n = Number(num.value)
        sel.innerHTML = ''
        for(let c = 1; c<=10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            sel.appendChild(item)
        }
    }else{
        alert('Digite um número')
    }
}