namespace casting { // forma de criar uma "pasta virtual" no computador, permitindo criar a variavel repetida
    let idade: any = 25;
    (idade as number).toFixed(); // forma de declarar para o typescript tratar uma variavel como um determinado tipo de dado, toFixed adiciona casas decimais e esta disponivel apenas para tipos numericos 
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })

    let nome: string = 35 as unknown as string 
}   