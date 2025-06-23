function funcaoMuitoPesada() { 
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

// forma de tornar uma função assíncrona

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch(e) {
        reject('Deu erro na iteração dos números')
    }
})

console.log("inicio")
// console.log(funcaoMuitoPesada())
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))

console.log("fim")

// forma de tornar uma função síncrona novamente 

async function execucaoPrincipal() {
    console.log("inicio");

    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado)

    console.log("fim");
}

execucaoPrincipal()

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

promiseComParametros('leonardo@gmail.com', 123456).then(resultado => {console.log(resultado)})