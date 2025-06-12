const redesSociais = ['Facebook', 'Instagram', 'Twitter']

// MÉTODO 01 PARA UTILIZAR ARRAYS

redesSociais.forEach(function(nomeRedeSocial, indice) {  // FOR EACH APENAS NÃO RETORNA NADA, DIFERENTE DO MAP
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeRedeSocial}`) 
})

// O MÉTODO ACIMA FAZ A MESMA COISA QUE: 

// for (i = 0; i < redesSocias.length; i++) {
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
// }

// MÉTODO 02 - .MAP | MUITO UTILIZADO

const alunos = ['Gustavo', 'João', 'Paula', 'Wagner']

const alunos2 = alunos.map(function(itemAtual){ // O MAP PERMITE ALTERAR OS VALORES DE UM ARRAY E TAMBÉM RETORNAR UM NOVO ARRAY
    itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual
})

console.log(alunos2);

const paula = alunos2.find(function(item) { // FIND PERMITE ENCONTRAR UM ITEM DENTRO DE UM ARRAY
    return item.nome == 'Paula'; // essa expressão retorna um boleano, devolvendo true ou false
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item) { // FINDINDEX PERMITE ENCONTRAR O INDICE DE UM ITEM DENTRO DE UM ARRAY
    return item.nome == 'Paula';
})

console.log(indiceDaPaula)

// MÉTODO 02 - EXEMPLO 02

const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    numeroAtual = numeroAtual * 2
    return numeroAtual // também pode ser feito no return, como no exemplo abaixo
//  return numeroAtual * 2
})

console.log(dobroDosNumeros)

// MÉTODO 03 - VERIFICAÇÃO DOS VALORES DENTRO DE UM ARRAY

alunos2.push({ // forma de adicionar um objeto
    nome: 'Lucio',
    curso: 'Backend'
})

// FORMA DE VALIDAR SE TODOS OS ITENS DENTRO DA VARIÁVEL POSSUEM UM DETERMINADO VALOR
const todosAlunosSaoDeFrontEnd = alunos2.every(function(item) {
    return item.curso === 'Frontend' // também é um boleano e é necessário ter uma variável para armazenar os valores de true ou false
})

console.log(todosAlunosSaoDeFrontEnd)

// FORMA DE VALIDAR SE ALGUM ITEM DENTRO DA VARIÁVEL POSSUE UM DETERMINADO VALOR
const existeAlgumAlunoDeBackend = alunos.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend' // && REPRESENTA SE TAMBÉM POSSUE O VALOR DETERMINADO, QUASE COMO UM SE X E Y 
}) 

console.log(existeAlgumAlunoDeBackend)


//FUNÇÕES PARA FILTRAR ITENS DE ARRAYS

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend'
}
const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend) // UMA FORMA DE ECONOMIZAR ESPAÇO

console.log(alunosDeBackend) // CONSOLE APENAS RETORNA O OBJETO DO LUCIO


// MÉTODO 04 - REDUCE, REDUZIR O CONTEÚDO DE UM ARRAY EM UM ÚNICO VALOR

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual // += é o mesmo que o incrementar i++
    return acumulador
}, 0) // É NECESSÁRIO PASSAR UM VALOR INICIAL PARA ESTA FUNÇÃO, LOGO APÓS A VIRGULA

console.log(soma)

let somaComFor = 0


// OUTRA FORMA DE FAZER A MESMA FUNÇÃO ACIMA
for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i]
}

console.log(somaComFor);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `
    return acumulador
}, '')

console.log(nomesDosAlunos);
