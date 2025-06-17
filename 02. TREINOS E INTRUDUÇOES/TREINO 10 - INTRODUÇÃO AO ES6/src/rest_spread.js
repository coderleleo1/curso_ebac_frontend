// REST, sereve como argumento de função

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) { // arguments serve para não depender de uma quantidade especifíca de argumentos em uma função.
        soma = arguments[i];
    }

    return soma
}

console.log(somar(10, 20, 30))

function somarComRest(...numeros) { // forma de utilizar o rest, é basicamente o arguments mas com uma diferença, o rest funciona como um array
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual
        return total
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

// SPREAD, serve para fazer concatenações, preenchimento de objetos

const numeros = [1, 2, 3, 4]
console.log(...numeros);

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo']
const timesDeFutebolDoRj = ['vasco', 'botafogo', 'flamengo', 'fluminense']

const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRj]
// timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRj);

console.log(timesDeFutebol)

const carroDaAna = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaJulia = {
    ...carroDaAna,
    motor: 1.8
}


