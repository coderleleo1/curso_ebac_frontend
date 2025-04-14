document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){ // o comportamento padrão de um formulário é atualizar a página após ser enviado, para evitar isso é necessário escrever o comando abaixo
        evento.preventDefault(); // previne que o formulário atualize a página após ser enviado
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1) // existem 3 formas de arredondar um número em JavaScript, o .round arredonda para o inteiro mais próximo (ex: 1,6 = 2 | 1,4 = 1). o .ceil arredonda sempre para cima e o .floor sempre para baixo

        document.getElementById('resultado-valor').innerText = numeroAleatorio // innerText é um comando para escrever no texto, se fosse para alterar algo no HTML seria innerHTML
        document.querySelector('.resultado').style.display = 'block'; // forma de alterar a propriedade do CSS com o JavaScript
    })
})