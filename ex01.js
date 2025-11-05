// // Exercício 1 Implemente uma função que receba uma lista de cores e, usando
// map, altere a cor de fundo de cada elemento <li> de acordo com o seu índice

function ListaDeCores(cores){

  let li = document.querySelectorAll("li")

    cores.map((element, i)=>{
    li[i].style.backgroundColor = element
  })

}
