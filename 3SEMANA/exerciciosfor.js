// 1) crie uma função que receba uma string e devolva seu valor em letras maiúsculas, separadas por um espaço. 
// Exemplo: 'banana' -> 'B A N A N A'
 
function palavraMaius(nome){
    
}

// 2) crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função 
// deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 

function soma(num) {
    let total = 0
   for (let i = 0; i <= num; i++) {
      total = total + i  // total +=1 //
   }
   return total
   }

console.log(soma (5))

function somaProgressiva () {
   
   for (let numero = 1; numero <= 15; numero = numero + numero + 1) {
       console.log (numero)
   }   
} 
somaProgressiva ()


// 3) crie um programa que pergunta seu nome. Depois que digitar o nome, o programa deverá responder 'Olá [nome]'.
// Enquanto digitar qualquer palavra, print o que foi digitado mas avise que, para sair, é só dizer 'Tchau'.
// O programa vai dizer 'Tchau [nome]' e finalizar.

const input = require("readline-sync")

function imprcomando () {
   let nome = input.question("Qual seu nome?  ")
   console.log(`Olá, ${nome}`)
   let texto = 'teste'
   do {
       texto = input.question(`digite algo ou tchau para sair: `)
       console.log(`Você digitou: ${texto}`)
   }
   while (texto != 'tchau')
console.log (`Tchau, ${nome}`)
}

imprcomando ()

// 4) crie uma função que receba dois números e exiba no console uma contagem regressiva entre eles, contando de dois 
// em dois números. Por exemplo: recebendo o número inicial 20 e o final 0, a função deverá imprimir em 
// sequência 20 18 16 14 12 10 8 6 4 2 0.

function contReg (nInic, nFin) {
   for (let i = nInic; i >= nFin; i-=2){
       console.log(i)
   } 
}
contReg (20, 0)


// 5) crie uma função que receba um número e imprima no console de 0 até o número informado. Além disso, cada vez que 
// imprimir o número, informe se é par ou ímpar. Exemplo: recebendo 5, deve imprimir: "0 é par", "1 é ímpar", "2 é par", 
// "3 é ímpar", "4 'par", "5 é ímpar". 
