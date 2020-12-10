// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"

const array = ["baunilha", "nata goiaba", "chocolate", "coco", "tapioca"]

function printIndEle(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`O índice ${i} é o sabor ${arr[i]}`)
  }
}

printIndEle(array)

// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

function somar(arr) {
  let soma = 0
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i]
  }
  return soma
}

console.log(somar([10,11,12]))

// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores 
// que 5. Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

function maiorQCinco(arr) {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      newArray.push(arr[i])
    }
  }
  return newArray
}

console.log(maiorQCinco([88,55,0,2,85,81,24,12]))  
// esse jeito esta mais correto nao ficar colocando constante dentro do código 


// Resolução com filter()

function maiorQCincoFil(arr) {
  const maiorCinco = arr.filter(i => i > 5)
  return maiorCinco
}

console.log(maiorQCincoFil([88,55,0,2,85,81,24,12]))

// 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo 
// como número 5). Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

function maiorQComp(arr, num) {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      newArray.push(arr[i])
    }
  }
  return newArray
}

console.log(maiorQComp([88,55,0,2,85,81,24,12], 20))

// // Resolução com filter()

function maiorQCompFil(arr, num) {
    const maiorComp = arr.filter(i => i > num)
    return maiorComp
}

console.log(maiorQCompFil([88,55,0,2,85,81,24,12], 20))

// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

function maiorNum(arr) {
    arrayNewOrdem = arr.sort((a, b) => b - a)
    // console.log(arrayNewOrdem)
    let comparar = arrayNewOrdem[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > comparar) {
         
            comparar = arr[i]
        }
    }
    return   comparar
}

console.log(maiorNum([56, 12, 168, 66]))


// 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array,
// no seguinte formato: "o menor número é X e o maior número é Y".
// Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 e o menor número é -5"

function menorEMaior(arr) {
    arrayNewOrdem = arr.sort((a, b) => a - b)
    // console.log (arrayNewOrdem)
    let maior = arrayNewOrdem[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i]
        }
    }
    return `O menor número é ${arrayNewOrdem[0]} e o maior número é ${maior}`        
}

 console.log(menorEMaior([5, 37, 18, 12, 59, -5]))
