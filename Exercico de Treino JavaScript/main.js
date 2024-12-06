const form = document.getElementById('form');
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const messageSucess = document.getElementById('sucess-message');
const messageError = document.getElementById('error-message');

function verify(num1, num2) {
    return parseFloat(num1) < parseFloat(num2);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valor1 = numero1.value;
    const valor2 = numero2.value;

    if (verify(valor1, valor2)) {
        messageSucess.textContent = 'Sucesso: O número de 1 é menor que o número 2.';
        messageSucess.style.display = 'block';
        messageError.style.display = 'none';
    } else {
        messageError.textContent = 'Erro: O número de 1 deve ser menor o número 2.';
        messageError.style.display = 'block';
        messageSucess.style.display = 'none';
    }
});