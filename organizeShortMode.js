const { edGalho, edFolha } = require('./arrays');

function juntaListas(lista1, lista2) {
  const listaFinal = [...lista1, ...lista2]; // Combina as duas listas em uma nova lista

  listaFinal.sort((produto1, produto2) => produto1.preco - produto2.preco); // Ordena a lista com base no preço

  return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));
