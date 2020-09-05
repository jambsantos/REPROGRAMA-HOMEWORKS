// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"

const array = ["baunilha", "nata goiaba", "chocolate", "coco", "tapioca"]

function imprimeIndiceEElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`índice ${i}, elemento ${arr[i]}`)
  }
}

imprimeIndiceEElemento(arrei)



// const cores = ['azul', 'verde', 'vermelho', 'amarelo', 'roxo']

// function indiceArray(arr) {    
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`índice: ${i}, cor: ${arr[i]}`)
//     }
// }

// indiceArray(cores)

// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

const arrNums = [10,11,12,10,11,12,10,11,12,10,11,12]

function soma(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

console.log(soma(arrNums))

// const inteiros = [2, 3, 1, 0]

// function somarInteiros(arr) {
//     let soma = 0
//     for (let i = 0; i < arr.length; i++) {
//         soma += arr[i]
//     }
//     return soma
// }

// console.log(somarInteiros(inteiros))

// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

function maioresQueCinco(arr) {
  const numerosMaiores = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      numerosMaiores.push(arr[i])
    }
  }
  return numerosMaiores
}

console.log(maioresQueCinco([88,55,0,2,85,81,24,12]))  // esse jeito esta mais correto nao ficar colocando constante dentro do código 

// const numeros3 = [88, 55, 0, 2, 85, 81, 24, 12]

// function maiorQueCinco(arr) {
//     const novaArray = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 5) {
//             novaArray.push(arr[i])
//         }
//     }
//     return novaArray
// }

// console.log(maiorQueCinco(numeros3))


// :// Resolução com filter()

// function maiorQueCincoFilter(arr) {
//   const maiorCinco = arr.filter(i => i > 5)
//   return maiorCinco
// }

// console.log(maiorQueCincoFilter(numeros3))

// 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

function maioresQueNumero(arr, num) {
  const numerosMaiores = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      numerosMaiores.push(arr[i])
    }
  }
  return numerosMaiores
}

console.log(maioresQueNumero([88,55,0,2,85,81,24,12], 20))



// // Resolução com push()

// const numeros4 = [88, 55, 0, 2, 85, 81, 24, 12]

// function maiorQueCinco(arr, num) {
//     const novaArray = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             novaArray.push(arr[i])
//         }
//     }
//     return novaArray
// }

// console.log(maiorQueCinco(numeros4, 20))

// // Resolução com filter()

// function maiorQueCincoFilter(arr, num) {
//     const maiorCinco = arr.filter(i => i > num)
//     return maiorCinco
// }

// console.log(maiorQueCincoFilter(numeros4, 20))

// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

// const numeros5 = [56, 12, 168, 66]

// function maiorNumero(arr) {
//     arrayOrdenado = arr.sort((a, b) => a - b)
//     let maior = arrayOrdenado[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maior) {
//             maior = arr[i]
//         }
//     }
//     return maior    
// }

// console.log(maiorNumero(numeros5))


// 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array,
// no seguinte formato: "o menor número é X e o maior número é Y".
// Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 e o menor número é -5"

// const numeros6 = [5, 37, 18, 59, 12, -5]

// function maiorEMenor(arr) {
//     arrayOrdenado = arr.sort((a, b) => a - b)
//     let maior = arrayOrdenado[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maior) {
//             maior = arr[i]
//         }
//     }
//     return `O maior número é ${maior} e o menor número é ${arrayOrdenado[0]}`        
// }

// console.log(maiorEMenor(numeros6))