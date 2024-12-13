$(document).ready(function() {

    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li style="display: none"></li>').text(nomeTarefa); // Adiciona o texto da tarefa ao <li>
        
        novaTarefa.on('click', function(){
            $(this).toggleClass('feito');
        })

        $(novaTarefa).fadeIn();
        $('#lista-tarefas').append(novaTarefa);
        $('#nome-tarefa').val(''); // Limpa o campo de entrada após adicionar a tarefa

    });

    $('#deletar').on('click', function(){
        $('#lista-tarefas').empty();
    })
});