const minhaFuncao = () => "Diz olá";

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'ford'
})

console.log(minhaFuncao())
console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10; // incrementa o valor
    },
    frear: () => { // arrow function
        this.velocidadeAtual -= 10; // a propriedade this funciona de forma diferente dentro de uma arrow function
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);

// DESESTRUTURAÇÃO

// const motorDoCarroDaAna = carroDaAna.motor 
// const { motor} = carroDaAna;

const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol

console.log(item1)
console.log(item2)
console.log(item2)
console.log(outrosTimes)

// o console vai me entregar:

// 1
// 2
// 3
// 4, 5, 6, 7... etc