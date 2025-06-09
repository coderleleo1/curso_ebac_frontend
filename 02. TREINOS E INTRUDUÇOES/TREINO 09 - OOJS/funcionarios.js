function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá")
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // aa linha abaixo é o mesmo que this.salario = salario
    let _salario = salario; // _ significa um atributo privado, ele se torna inacessivel para futuras mudanças

    // função para retornar um valor privado - FUNÇÃO GET
    this.getSalario = function() {
        // return `O salário de ${this.nome} é de R$ ${_salario}`;
        return _salario;
    }

    // função para atribuir valor - FUNÇÃO SET
    this.setSalario = function(valor) {
        if (typeof valor == 'number') { // forma de "travar" o tipo de dado
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1; // 1.1 é o mesmo que 10%

        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }

    // Forma de evitar ter que reescrever o código já digitado. Esse método também funciona como uma "herança", a função dizOi também foi chamada consequentemente
    Pessoa.call(this, nome);
}
// POLIMORFISMO
function Estagiario(nome) {
    funcionario.call(this, nome, "Estagiario", 2000)
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07; // 1.07 é o mesmo que 7%
        this.setSalario(novoSalario)

        _salario = novoSalario;
    }
}

const funcionario1 = new funcionario("Maria", "Dev Front-End", 5000);
const funcionario2 = new Estagiario("Pedro");
// funcionario1.dizOi();
// funcionario1.dizCargo();
// console.log(funcionario1.getSalario());

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

