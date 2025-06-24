class Pessoa {
    nome: string 
    renda?: number

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} diz oi`
    }
}

class ContaBancaria {
    protected saldo: number = 0 // a propriedade com private só é acessível dentro do código aonde foi declarada, as classes herdeiras não podem acessa-la 
    public numeroConta: number         // a propriedade protected permite que classes herdeiras acessem seu valor, diferente da de private
    
    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta
    }

    static retornaNumeroDoBanco() { // disponivel apenas ao nivel da classe 
        return 125;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456)
ContaBancaria.retornaNumeroDoBanco()