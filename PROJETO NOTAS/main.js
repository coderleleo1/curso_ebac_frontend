const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';
const atividades = [];                   // arrays
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite uma nota mínima:"))

let linhas = '';

form.addEventListener('submit', function (e){ // adicionei o evento de submit do botão do formulário e para evitar o comportamento paddrão do botão, foi criado a função (e) //
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {   // Essa função IF (Se) verifica se um valor na array atividades já foi inserido
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value); // aqui eu chamei a array atividades, utilizei o comando push que envia um valor para a array...
        notas.push(parseFloat(inputNotaAtividade.value));      // e fiz que  o valor inserido dentro do inputNomeAtividades seja enviado para a array em questão. //
                // parseFloat arredonda o valor para um número, o padrão era que seria considerado como uma string e não faria a soma correta dos números como a gente quer //
    
        let linha = '<tr>';                                 // Nessa parte, é aonde é criado uma linha após o envio das informações cadastradas no formulário //
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;  // ? reprensenta um SE e : representa um ELSE //
        linha += `</tr>`;
    
        linhas += linha;                                                    // essa parte faz com que eu consiga adicionar mais de uma linha dentro da tabela //
    }

    inputNomeAtividade.value = '';      // essa parte faz com que após o envio do formulário, o campo seja resetado para o valor vazio //
    inputNotaAtividade.value = '';   
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');              // querySelector seleciona um elemento ou tag dentro do HTML, no caso é <tbody> </tbody> //
    corpoTabela.innerHTML = linhas;                                  // innerHTML insere um conteúdo dentro do HTML //
}

function atualizaMediaFinal(){            // Essa função atualiza o valor da média final na tabela 
    const mediaFinal = calculaMediaFinal();  // aqui eu chamo a função que calcula a média das notas                                                               

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);                // Chamo a parte que está escrita a média das notas na tabela 
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado; // Aqui chamo a parte se está aprovado ou não, fazendo uma função SE a 
}                                                                                                            // média final é maior ou igual a 7, se sim o valor mostra Aprovado

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++) {     // for é chamado de laço. notas.length é o número de notas que foi inserido pelo usuário
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}