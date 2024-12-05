const form = document.getElementById('form')
const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const containerMensagemSucesso = document.querySelector('sucess-message')
const containerMensagemErro = document.querySelector('error-message')

function verificar (numero1, numero2) {
    return numero1 < numero2
}   

form.addEventListener('submit', function (e){
    const mensagemSucesso = `Sucesso: O número 2 (${numero2.value}) é maior que o numéro 1(${numero1.value})!`
    const mensagemErro = `Erro: O número 1 (${numero1.value}): é maior que o número 2 (${numero2.value}). Inverta os números dos campos!`
    formEValido = verificar (numero1.value, numero2.value)
})
