$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: ''
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            }, 
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: '*Por favor, insira seu nome',
            email: '*Por favor, insira seu e-mail',
            mensagem: '*Por favor, insira sua mensagem'
        },
        submitHandler: function(form) {
            console.log({
                nome: $('#nome').val(),
                email: $('#email').val(),
                telefone: $('#telefone').val(),
                mensagem: $('#mensagem').val(),
            }), 
            $('#sucess-message').show()
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})