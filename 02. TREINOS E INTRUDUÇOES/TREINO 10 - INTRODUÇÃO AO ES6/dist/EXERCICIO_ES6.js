"use strict";

var alunos = [{
  nome: "João",
  nota: 7.5
}, {
  nome: "Maria",
  nota: 5.0
}, {
  nome: "Pedro",
  nota: 8.0
}, {
  nome: "Ana",
  nota: 6.0
}, {
  nome: "Lucas",
  nota: 4.5
}];
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(alunos);
console.log(aprovados);