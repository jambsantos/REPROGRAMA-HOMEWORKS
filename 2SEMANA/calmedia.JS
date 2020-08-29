// EXERCICIO DA SEMANA 2 //

const input = require("readline-sync") 

// receber as seis notas e verificar se é número//

let nota1 = input.question('Digite a nota 1: ')
if (isNaN(nota1)) {
nota1 = input.question('Digite uma nota valida: ')
}

let nota2 = input.question('Digite a nota 2: ')
if (isNaN(nota2)) {
    nota2 = input.question('Digite uma nota valida: ')
}

 let nota3 = input.question ('Digite a nota 3: ')
if (isNaN(nota3)) {
    nota3 = input.question('Digite uma nota valida: ')
}

let nota4 =  input.question('Digite a nota 4: ')
if (isNaN(nota4)) {
    nota4 = input.question('digite um valor valida: ')
}

let nota5 = input.question('Digite a nota 5: ')
if (isNaN(nota1)) {
nota5 = input.question('Digite uma nota valida: ')
}

let nota6 = input.question('Digite a nota 6: ')
if (isNaN(nota1)) {
nota6 = input.question('Digite uma nota valida: ')
} 

// calculando a média//

const soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) 
const media = soma / 6
console.log('Sua média: ' + media.toFixed(2))

// descobrindo a situação do aluno//

if (media >= 7) {
    console.log( '----- Parabéns, você foi aprovado! -----')
}
    else if (media < 7 && media >= 5) {
        console.log('----- Você está de recuperação -----')
    }
    else {
        console.log('----- Você está reprovado -----')
    }

// **Feito por Jessica Montenegro** :woman_technologist: //