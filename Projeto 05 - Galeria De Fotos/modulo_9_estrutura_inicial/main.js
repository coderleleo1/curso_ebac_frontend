$(document).ready(function(){                    // $() é a forma de chamar o JQuery
    $('header button').click(function() {        // esse código faz o mesmo que: document.querySelector('header button'). addEventListener('click', function(e){})
        $('form').slideDown();                   // essa parte faz com que quando eu clicar no botão (NOVA IMAGEM), o fomulário em questão irá aparecer com uma animação
    })

    $('#cancelar').click(function() {
        $('form').slideUp();                     // quando eu clicar no botão de cancelar, ela faz uma animação contraria ao slideDown
    })

    $('form').on('submit', function(e) {         // uma função dentro de outra função é chamada de call back
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //.val é uma função que funciona igual ao .value
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem); //appendTo, pega o elemento do código antes do . e insere entre a abertura e o fechamento da tag dentro da variavel em (). Essa parte faz com que seja adicionada uma nova imagem na página
        $(`
            <div class="overlay-imagem-link">                         
                <a href="${enderecoDaNovaImagem}" target = "_blank title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);  // essa parte faz com que seja colocado o link da nova imagem inserida
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();   // essa parte adiciona uma animação as imagens inseridas. Detalhe que é preciso adicionar o display: none dentro do li, conforme feito acima
        $('#endereco-imagem-nova').val('') // essa parte limpa o formulário após ter sido inserido um link
    })
})

