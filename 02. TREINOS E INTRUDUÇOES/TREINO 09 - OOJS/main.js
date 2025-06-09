const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log('vrum kakakaka')
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log('vrum kakakaka')
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('acelerar');
    }
}

const carroDaMaria2 = new Carro('Ka', 'Ford', 2021, 2010);
const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);

console.log(carroDaMaria2);
console.log(carroDoJoao2);

// VERIFICAÇÃO DE INSTANCIAS CUSTOMIZADAS

const nome = "Leonardo";
const idade = "19";
const ehMaiorDeIdade = true;
const conhecimento = ["HTML", "CSS", "JavaScrip"];

const pessoa = {
    nome: nome, 
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimento:  conhecimento
}

// VERIFICAR O TIPO DE DADO
// console.log(typeof nome); // STRING
// console.log(typeof idade); // STRING
// console.log(typeof ehMaiorDeIdade); // BOOLEAN
// console.log(typeof conhecimento); // OBJECT
// console.log(typeof pessoa); // OBJECT

// PARA COMPARAR DOIS DADOS SE SÃO IGUAIS 

// console.log(carroDaMaria2 instanceof Carro);
// console.log(conhecimento instanceof Carro);
// console.log(nome instanceof Carro);

// FORMA PARA ACESSAR TODOS OS VALORES DOS ATRIBUTOS QUE COMPOEM O OBJETO
console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));

