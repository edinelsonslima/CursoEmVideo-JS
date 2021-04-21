let num = [0,1,6,2,5,8]

num[6] = 3 //Adiciona valor na posição especifica

num.push(4) // Metodo para adicionar valor na ultima posição

console.log(num) // Mostra o array no console

console.log(num[4]) // Mostra o valor que esta armazenado no indice 4

console.log(`O array é: ${num}`)

console.log(`O array tem tamanho de: ${num.length}`) // Mostra o tamanho do array

console.log(`Array ordem crescente: ${num.sort()}`) // Ordena o array de forma crescente

let pos = num.indexOf(9) // Pesquisa por valor

if(pos == -1){ // Se retornar -1 o valor não existe dentro do array
    console.log(`O valor não exite no array`)
}else{ //Caso valor exista o metedo retorna a posição do valor 
    console.log(`Valor está na posição ${pos}`)
}