let num = [6,8,4,2,9]
console.log(num)

console.log('-----------------------------')

//Percorrer Array Tradicional
for(let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem valor: ${num[i]}`)
}

console.log('-----------------------------')

//Percorrer Array Simplificado
for(let a in num){
    console.log(`A posição ${a} tem valor: ${num[a]}`)
}