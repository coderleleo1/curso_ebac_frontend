const form = document.getElementById('formDeposito');
const nomeBeneficiario = document.getElementById('nomeBeneficiario');
let formValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroConta = document.getElementById('numeroConta');
    const valorDeposito = document.getElementById('valor');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido){
        const containerMensagemSucesso = document.querySelector('.sucessMessage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1 px solid red'
        document.querySelector('.errorMessage').style.display = 'block';    
    }
})  

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = validaNome(e.target.value);
    
    if (!formValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.errorMessage').style.display = 'block';    
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.errorMessage').style.display = 'none';    
    }
});
