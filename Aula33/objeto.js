let amigo = {
    nome: 'Edinelson',
    sexo: 'M',
    idade: '22',
    peso: 60,
    engordar(p=0){
        console.log(`Engordou ${p}kg`)
        this .peso += p
    }
}

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)