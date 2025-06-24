type aluno = {
    nome: string;
    cursos?: string[]; // ? representa uma propriedade opcional de ser preenchida
    idade: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 29
})

const novoAluno: aluno = {
    nome: 'Lucas',
    idade: 32
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}