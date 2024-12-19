$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        arrow: true
    })

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();             // Executa as animações de SlideUp e SlideDown
    })


    $('#telefone').mask('(00) 00000-0000', { // .mask formata o campo da forma desejada em (), no caso 0 representa números. S representa letras
        placeholder: ''                      // o placeholder aparece dentro do campo do formulário e mostramos como queremos que o usuário preencha o campo
    })                                       // caso o usuário tivesse um telefone ao invés de celular, seria necessário criar um botão informando se é celular ou telefone...
                                             // ... utilizando a seguinte linha código, a formatação correta seria: let mascara = if (celular) ? (00) 00000-0000 : (00) 0000-0000. lembrando, : representa ELSE
                                             //  e na função de formatação, o código necessário é: $('#telefone').mask('mascara')
    $('form').validate({                      
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,             // .validate é o que faz a verificação do formulário, é preciso ter a tag NAME dentro dos inputs no HTML, o mesmo vale para textarea
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            },
        },
        messages: {  // message altera a mensagem que aparece no site após um "erro" do formulário
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail'
        }, 
        submitHandler: function(form) {             // quando o formulário é enviado, as informações colocadas no formulário são impressas no console.log
            console.log(form)
        },
        invalidHandler: function(evento, validador) {               // essa parte envia uma mensagem pelo alert informando a quantidade de campos que estão incorretos
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {      // essa parte seleciona todos os botões dentro da lista de veiculos
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();        // this representa o botão de tenho interesse na lista de veículos

        $('#veiculo-interesse').val(nomeVeiculo);               // nessa parte, ele seleciona a tag H3 dentro da lista de veículos e insere dentro do formulário quando eu clico no botão de interesse

        $('html').animate({     // cria uma animação no html
            scrollTop: destino.offset().top     // animação em questão
        }, 1000)    // duração da animação - 1000 ms ou 1 segundo
    })
}) 