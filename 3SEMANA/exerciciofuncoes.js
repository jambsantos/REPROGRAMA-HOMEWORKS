// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas 
// recebendo 2 números como parâmetros e retornando o resultado

function soma (num1, num2) {
    const somaTotal = num1 + num2
    return somaTotal
}

function subtrai (num1, num2) {
    const subtraiTotal = num1 - num2
return subtraiTotal
}

function multiplica (num1, num2) {
    const multiTotal = num1 * num2
    return multiTotal
}

function dividi (num1, num2) {
    const divTotal = num1 / num2
    return divTotal
}

console.log(soma(2,2))
console.log(subtrai(2,1))
console.log(multiplica(2,3))
console.log(dividi(9,3))


// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). 
// Adicione esta lógica nas funções.

function multiplicaSzero (num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return `operação não pode ocorrer`
    }
    const multiTotal = num1 * num2
    return `o resultado da multiplicação é ${multiTotal}`
}

function dividiSzero (num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return `operação não pode ocorrer`
    }
    const divTotal = num1 / num2
    return `o resultado da divisão é ${divTotal}`
}

console.log(multiplicaSzero(2,0))
console.log(multiplicaSzero(2,1))
console.log(dividiSzero(0,3))
console.log(dividiSzero(3,3))
    
// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String. 
// Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

let resp = 0 
function chamaFuncao(n1,n2, ope) {
    switch (ope) {
        case 'soma':
            resp = soma(n1,n2)
            break;
        case 'subtraçao':
            resp = subtrai(n1,n2)
            break;
        case 'multiplicaçao':
            resp = multiplica(n1,n2)
            break;
        case 'divisao':
            resp = dividi(n1,n2)
            break;    
    }
        return `O resultado da operação é ${resp}`
}

console.log(chamaFuncao(4,2,'soma'))
console.log(chamaFuncao(4,2,'subtraçao'))
console.log(chamaFuncao(4,2,'multiplicaçao'))
console.log(chamaFuncao(4,2,'divisao'))

// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, 
// crie uma função que resolva a conta 36325 * (9824 + 777).

let s = 0 
function resolva(n1,n2,n3) {
    s = soma(n2,n3)
    return multiplica (n1,s)
}
console.log(resolva(36325,9824,777))

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. 
// Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. 
// Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e 
// [número aleatório] é XXX".  Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

function aleatorio(min,max) {
    pr = Math.floor(Math.random() * (max - min + 1) ) + min
    se = Math.floor(Math.random() * (max - min + 1) ) + min
    return `A soma de ${pr} e ${se} é ${soma(pr,se)}`
  }
  console.log(aleatorio(1,100))

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

function multiplicaSoma(p1,p2,p3) {
    if (p1 === undefined && p2 === undefined && p3 === undefined) {
    console.log('Preencha todos os valores corretamente')}
    else { 
        return  (p1*p2*p3) + 2 }
}

console.log(multiplicaSoma(1,2,3))
console.log(multiplicaSoma())

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo,e o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"

function operaTresParam(p1,p2,p3) {
    if (p1 != undefined && p2 === undefined && p3 === undefined) {
        return p1 }
        else if (p1 != undefined && p2 != undefined && p3 === undefined) {
            return p1 + p2 }
            else if (p1 != undefined && p2 != undefined && p3 != undefined){
                return (p1 + p2) / p3}
                else {
                    return `não recebeu parâmetro`}
    }

console.log(operaTresParam(1))
console.log(operaTresParam(1,2))
console.log(operaTresParam(3,1,2))
console.log(operaTresParam())

// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, 
// recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

function inverter(nome){
    return nome.split('').reverse('').join('')
}

console.log(inverter("jessica"))

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e 
// retorne true ou false. Exemplo de palíndromo: "arara".

function palindromo(nome) {
    inv = nome.split('').reverse('').join('')
    if (inv === nome){
        return true}
        else {return false}
    }

console.log(palindromo('arara'))
console.log(palindromo('jessica'))

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. 
// Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"

function comparaPalavras(name1, name2){
    if (name1.length < name2.length) {
        return name2}
        else {
            return name1}
 }

 console.log(comparaPalavras('banana', 'chocolate'))
 console.log(comparaPalavras('jessica','ana'))




