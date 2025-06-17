"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Diz olá";
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'ford'
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10; // incrementa o valor
  },
  frear: function frear() {
    // arrow function
    _this.velocidadeAtual -= 10; // a propriedade this funciona de forma diferente dentro de uma arrow function
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);