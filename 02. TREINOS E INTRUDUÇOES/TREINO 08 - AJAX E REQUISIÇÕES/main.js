// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endPoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endPoint);
//         xhttp.send();   
//     })
// })

$(document).ready(function(){
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function(){
        const cep = $('#cep').val();
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this); // this é o mesmo que colocar #btn-buscar-cep

        $(botao).find('i').addClass('d-none') 
        $(botao).find('span').removeClass('d-none');

    //     $.ajax(endPoint).done(function(resposta){
    //         const logradouro = resposta.logradouro;
    //         const bairro = resposta.bairro;
    //         const cidade = resposta.localidade;
    //         const estado = resposta.uf;
    //         const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
    //         $('#endereco').val(endereco);

    //         setTimeout(function(){
    //             $(botao).find('i').removeClass('d-none');
    //             $(botao).find('span').addClass('d-none');
    //         },2000);
    //     })

        fetch(endPoint).then(function(resposta){
            return resposta.json();
        })
            .then(function(json){       // THEN É IGUAL TRY, BLOCO "POSITIVO" O PROGRMAA VAI TENTAR EXECUTAR
                const logradouro = json.logradouro;
                const bairro = json.bairro;
                const cidade = json.localidade;
                const estado = json.uf;
                const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
                $('#endereco').val(endereco);
            })
            .catch(function(erro){              // BLOCO CATCH É EXECUTDO EM CASO DE ERRO
                alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
            })
            .finally(function(){     // BLOCO FINALLY É EXECUTADO INDEPENDENTE DO QUE ACONTEÇA COM O CÓDIGO (EM CASO DE ERRO)
                setTimeout(function(){
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');
                }, 1000);
            })
    })

    $('#formulario-pedido').submit(function(evento) {
        evento.preventDefault();

        if ($('#nome').val().length == 0){
            throw new Error('*Digite o nome');
        }
    })
})