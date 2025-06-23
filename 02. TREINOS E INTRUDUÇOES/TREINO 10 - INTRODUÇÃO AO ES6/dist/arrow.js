"use strict";

var _this = void 0;
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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

// DESESTRUTURAÇÃO

// const motorDoCarroDaAna = carroDaAna.motor 
// const { motor} = carroDaAna;

var _carroDaAna = carroDaAna,
  motorDoCarroDaAna = _carroDaAna.motor;
var _carroDaJulia = carroDaJulia,
  motorDoCarroDaJulia = _carroDaJulia.motor;
var _timesDeFutebol = timesDeFutebol,
  _timesDeFutebol2 = _toArray(_timesDeFutebol),
  item1 = _timesDeFutebol2[0],
  item2 = _timesDeFutebol2[1],
  item3 = _timesDeFutebol2[2],
  outrosTimes = _timesDeFutebol2.slice(3);
console.log(item1);
console.log(item2);
console.log(item2);
console.log(outrosTimes);

// o console vai me entregar:

// 1
// 2
// 3
// 4, 5, 6, 7... etc