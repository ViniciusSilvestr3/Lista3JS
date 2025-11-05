// Exercıcio 4 Implemente uma funcao que use o reduce para concatenar todos
// os conteudos texto de todas as divs de uma pagina

function reduceDivs(){
  const div = Array.from(document.querySelectorAll("div"))
  
  return div.reduce((a,b)=>{
   return a+b.textContent
  }, "")
  
}