<script setup>
import { reactive } from 'vue';

const nome = 'leleo';
const meuObj = {
  nome: 'leleo',
  filme: 'A Chegada'
}

function dizOla(nome) {
  return `${nome} diz oi`;
}

const gostaDeGatos = false
const enderecoImagem = "https://i.pinimg.com/736x/be/80/e8/be80e8ca99825ccab23f489ab95ce3b1.jpg"

const gostaDaVolcanoManor = true
const imagemVolcanoManor = "https://i.pinimg.com/736x/df/cf/1b/dfcf1bcfb2c8a4d692a90bd75ce7179d.jpg"

const estaAutorizado = false

const botaoEstaDesHabilitado = false

// let contador = 0
const estado = reactive({
  contador: 0,
  email: ''
})

const estado1 = reactive({
  email: ''
})

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value;
}

</script>

<template>
<h1>{{ dizOla('paula') }}</h1>
<!-- <img v-bind:src="enderecoImagem" alt=""> FORMA DA IMAGEM SEMPRE SER EXIBIDA -->
<!-- <img v-show='gostaDeGatos':src="enderecoImagem" alt="">FORMA DA IMAGEM SER EXIBIDA APENAS SE A VARIAVEL FOR VERDADEIRA, ELE OCULTA E EXIBE -->
<img v-if='gostaDeGatos':src="enderecoImagem" alt=""> <!-- FORMA DA IMAGEM SER RENDERIZADA SE A VARIAVEL DECLARADA FOR VERDADEIRA -->
<img v-else-if="gostaDaVolcanoManor" :src="imagemVolcanoManor" alt="">
<h2 v-else>Não curte gatos ou cobras do Elden Ring</h2> <!-- É necessário criar um agrupamento do v-if e do v-else, se não o código não vai funcionar bem-->

<h1 v-if="estaAutorizado">Bem-vindo</h1>
<h1 v-else>Não possui acesso</h1>
<button :disabled="!botaoEstaDesHabilitado">ENVIAR MENSAGEM</button>

<br>
<hr>

{{ estado.contador }}

<button @click="incrementar" type="button">+</button>
<button @click="decrementar" type="button">-</button>

<br>
<hr>

<h2>@keyup</h2>
{{ estado.email }}

<input type="email" @keyup="alteraEmail"> <!-- MUDANÇA EM TEMPO REAL -->

<br>

<h2>@change</h2>
{{ estado1.email }}

<input type="email" @change="evento => estado1.email = evento.target.value"> <!-- NECESSITA QUE VOCÊ SAIA DO CAMPO PARA APLICAR A MUDANÇA -->


</template>

<style scoped>

img {
  max-width: 400px;
  margin: 0 20px;
}

</style>
