"use strict";
const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Frontend', 'Ux e Ui'],
        idade: 27
    },
    {
        nome: 'Ana',
        cursos: ['Frontend', 'Python'],
        idade: 24
    }
];
alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 29
});
const novoAluno = {
    nome: 'Lucas',
    idade: 32
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
