// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon("Pikachu", "Elétrico")

// SUBTRAÇÃO
class Pokemon {
    #hp = 100; // torna a propriedade privada, sendo apenas acessível dentro da classe

    nome = '';
    tipo = '';

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com o ataque ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHP() {
        console.log(this.#hp)
    }
}

// forma de declarar uma classe herdeira de outra
class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', "Elétrico")
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

// INSTÂNCIAS                      OBJETOS
const pikachuDoAsh = new Pikachu()



pikachuDoAsh.recebeuAtaque();

pikachuDoAsh.hp = 5000; // o programa entende que criei um novo atributo chamado hp.

pikachuDoAsh.atacar();
pikachuDoAsh.exibeHP();

console.log(pikachuDoAsh.hp)

const pikachu = new Pokemon('Pikachu', 'Elétrico');
pikachu.atacar('choque do trovão')
// pikachu.nome = 'Pikachu';
// pikachu.tipo = 'Elétrico';


console.log(pikachu)
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);
