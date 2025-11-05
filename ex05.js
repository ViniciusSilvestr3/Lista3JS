// Exerc´ıcio 5 Implemente uma fun¸c˜ao que, a partir de uma lista de objetos rep-
// resentando alunos e suas notas, utilize filter para selecionar apenas os alunos
// com nota maior ou igual a 7, e ent˜ao aplique map para exibir seus nomes em
// elementos li dentro de uma lista n˜ao ordenada no DOM.

function alunosNotas(notas){
  const ul = document.createElement("ul")
  notas.filter((nota)=>{
    if(nota.nota >= 7){
      return nota
    }
  }).map((nota)=>{
    const li = document.createElement("li")
    li.textContent = `${nota.nome} ${nota.nota}`
    ul.appendChild(li)
  })
  document.body.appendChild(ul)
}