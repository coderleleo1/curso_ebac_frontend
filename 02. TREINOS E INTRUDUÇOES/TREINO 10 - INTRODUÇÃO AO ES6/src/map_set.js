let meuMap = new Map();
meuMap.set("nome", "leleo")
         // chave | valor

meuMap.set("stack", "html, css, js")

const nome = meuMap.get("nome");

console.log(nome)

console.log(meuMap.size) // forma de obter a quantidade de itens que tem dentro de um Map

console.log(meuMap.has("nome")) // forma de obter um boleano de verdadeiro ou falso, verificando a existencia de uma chave que tem dentro de um Map

// meuMap.clear() // forma de limpar todos os elementos presentes no Map
// console.log(meuMap.size) // retorno do console: 0 

for (let chave of meuMap.keys()) { // comando .keys para recuperar as chaves que um map tem 
    console.log(chave)
}

for (let valor of meuMap.values()) { // .value para recuperar os valores do map
    console.log(valor)
}

for (let entrada of meuMap.entries()) {
    console.log(entrada)
}

// o comando acima demonstra no console:

// ['nome' => 'leleo']
// ['stack' => 'html, css, js']


// É POSSÍVEL FAZER A DESESTRUTURAÇÃO, TROCANDO A VARIAVEL POR UM ARRAY
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

meuMap.delete("stack") // forma de remover uma chave do Map
console.log(meuMap) // o console apenas retorna o "nome"



// SET 


const cpfs = new Set()

cpfs.add('62760120090')
cpfs.add('67118327018')
cpfs.add('05314223058') // não é permitido um número iniciar com 0, por isso é necessário tratar os números como strings(textos)

console.log(cpfs) // dentro do SET, diferentemente do MAP, a chave é o valor x

// Ambos os comandos existem também no SET, mas entregam a mesma coisa
console.log(cpfs.keys()) 
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})


// !!! IMPORTANTE 
// Como remover itens duplicados em um array

const array = ['Jose Paulo', 'Gian Souza', 'Maria Eduarda', 'Luana', 'Luana', 'Gian Souza', 'Luana']

const arrayComoSet = new Set([...array]) // o SET não permite itens duplicados, com isso, ele removeu os valores que estavam duplicados pelo array acima

// após transformar o array em SET, é necessário refazer a conversão para array, com o código abaixo:
const arraySemItensDuplicados = [...arrayComoSet] 

console.log(arrayComoSet) // { SET }
console.log(arraySemItensDuplicados) // [ ARRAY ]