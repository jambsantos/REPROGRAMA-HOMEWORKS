// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. 
// Retorne um objeto no formato: {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}

// Exemplo: 
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

// retorna o objeto:
// {
//   titulo: 'Antes do Baile Verde', 
//   paginas: 234,
//   autoria: 'Lygia Fagundes Telles'
// }

function objBook(titulo, paginas, autoria) {
    return ({
      titulo : titulo,  // pode escrever titulo, paginas, autoria
      paginas: paginas,
      autoria: autoria
    }) 
  }
  
  console.log(objBook('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))


  // 2) Aproveite a função acima em outra função, que deve retornar a seguinte frase: "O livro XXXX foi escrito por XXX 
  // e tem XXX páginas". Você deve utilizar a função que já está pronta, e não reescrever a lógica dela dentro 
  // dessa nova função.

  // Forma 1

  function infoLivro(obj) {
    ({
      titulo : titulo,  // pode escrever titulo, paginas, autoria
      paginas: paginas,
      autoria: autoria
    }) 
      return `O livro ${obj.titulo} foi escrito por ${obj.autor} e tem ${obj.paginas} páginas.`
  }
  
  console.log(infoBook('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))

  // Forma 2

  // function printBook(obj){
  //   return `O livro ${obj.titulo} foi escrito por ${obj.autoria} e tem ${obj.paginas} páginas.`
  // }

  // console.log(printBook(objBook))
  
  // 3) Crie uma função que receba um objeto como o abaixo:
  
  // const pessoa = {
  //   nome: 'Nazaré',
  //   sobrenome: 'Tedesco',
  // }
  
  // Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome', a função deve retornar um novo objeto com as mesmas propriedades que o objeto recebido e mais uma propriedade, chamada 'nomeCompleto', cujo valor é uma string com o nome e sobrenome separados por um espaço.
  
  // Exemplo de retorno:
  // {
  //   nome: 'Nazaré',
  //   sobrenome: 'Tedesco',
  //   nomeCompleto: 'Nazaré Tedesco'
  // }

  const pessoa = {
    nome: 'Nazaré',
    sobrenome: 'Tedesco',
}

function nomeCompl(obj) {
    dados = {
        nome: obj.nome,
        sobrenome: obj.sobrenome,
        nomeCompl: obj.nome + ' ' + obj.sobrenome
    }
    return dados
}

console.log(nomeCompl(pessoa))
  
  // 4) Crie uma função que receba o objeto abaixo e o nome de uma das chaves, e retorne a soma de todos 
  // os elementos do array que for selecionado através da chave.
  
  const objArrays = {
    array1: [1, 2, 3],
    array2: [5, 6, 7, 8],
    array3: [9, 9, 9],
  }
  
  function somaArray(obj, chave) {
    let somaA = 0
    const arr = obj[chave]
    for (let i = 0; i < arr.length; i++) {
     somaA += arr[i]
    }
    return somaA

    console.log(somaArray(objArrays,'array1'))


  // forEach não retorna nada, só faz

  function somaArrayForEach(obj, chave) {
    let somaE = 0
    obj[chave].forEach( function(indice) {
      somaE += indice
    })
    return somaE
  }
  console.log(somaArrayForEach(objArrays, "array2"))

  // map SEMPRE retorna uma array
  function somaArrayMap(obj, chave) {
    let somaM = 0
    const arrResul = obj[chave].map( function(indice) {
      somaM += indice
      return somaM
    })
    return arrResul
  }
  console.log(somaArrayMap(objArrays, "array3"))