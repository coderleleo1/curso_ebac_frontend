"use strict";
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(); // forma de declarar para o typescript tratar uma variavel como um determinado tipo de dado, toFixed adiciona casas decimais e esta disponivel apenas para tipos numericos 
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    let nome = 35;
})(casting || (casting = {}));
