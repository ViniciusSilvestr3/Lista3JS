// Exerc´ıcio 6 Implemente uma fun¸c˜ao que, a partir de uma lista de objetos rep-
// resentando produtos (com campos nome, pre¸co e quantidade), utilize filter
// para selecionar apenas os produtos com quantidade maior que 5, e ent˜ao aplique
// reduce para calcular o valor total do estoque (multiplique o pre¸co pela quanti-
// dade de todos os produtos e depois some tudo). Em seguida, insira no DOM um
// elemento p que exiba o este valor.

function estoqueTotal(estoque){
  let p = document.createElement("p");

  const produtosEstoque = estoque.filter((quantidade)=>{
    if(quantidade.quantidade > 5){
      return quantidade
    }
  })
  const valorProdutos = produtosEstoque.reduce((total, produto)=>{
    return total + (produto.preco * produto.quantidade)
  }, 0)
  p.textContent = `Valor total do estoque (produtos com mais de 5 unidades): R$ ${valorProdutos}`
  document.body.appendChild(p)
}