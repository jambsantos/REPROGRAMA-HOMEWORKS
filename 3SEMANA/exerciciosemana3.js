// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo: potenciaDeDois(10) // 1024

function potDois(n){
    let potencia = 1
    for(let i=0; i< n;i++){
        potencia = potencia*2
    }
    return potencia
}

console.log(potDois(10))

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo: retornaNumMaior(10, 20, 30) // 30

function compNum(x,y,z){
    if (x>y && x>z){
        console.log(x)
    }
    else if (y>x && y>z){
        console.log(y)
    }
    else {
        console.log(z)
    }
}

compNum(10,20,30)

// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. Em matemática, um número
// primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. Utilize o operador módulo (`%`) para
// determinar se um número é divisível por outro.

function primo(x){
    for(let i=2; i<x; i++){
    if (x% i === 0){
        return `false`}
    else {return `true`}
    }
}

console.log(primo(5))


// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:function contaVogais("carro") // 2 

function contaVogais(str) {
    let ct = 0
    let tex = str.split('')
    for (let i = 0; i < tex.length; i++){
        if (tex[i] == 'a' || tex[i] == 'e' || tex[i] == 'i' || tex[i] == 'o' || tex[i] == 'u') {
            ct++ }
    }
    return ct
}

console.log(contaVogais('banana'))

// Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma array de números e
// retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
// Exemplo:function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]