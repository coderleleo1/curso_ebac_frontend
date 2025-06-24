let estaChovendo: boolean = false // TIPAGEM EXPLICITA, UTILIZAR QUASE SEMPRE PARA FACILITAR A LEITURA DO CÓDIGO

estaChovendo = true

let idade: number = 27

let altura: number = 1.75

const nacionalidade: string = 'brasileira'

const colegas: string[] = ['lucas', 'fernanda']
const tecnologias: Array<string> = ['html', 'css', 'js']
const notas: ReadonlyArray<number> = [7, 9, 5, 8] // array de apenas leitura, ele não permite adicionar novos itens sem ser diretamente na linha de código que ela está

const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 27]

let idadeDaAna: number | string = 20 // forma de adicionar mais de um tipo de dado em uma variável

let dadosDaApi: any // não é interessante utilizar o any, necessário tomar cuidado com esse tipo 
dadosDaApi = 20
dadosDaApi = 'Olá'
dadosDaApi = [1, 2, 3]
dadosDaApi = true

let curso = 'frontend' // o typescript reconhece o tipo do valor e deduz que a variável vai apenas utilizar esse tipo de dado

