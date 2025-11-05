// Exerc´ıcio 3 Usando a fun¸c˜ao filter, selecione apenas os n´umeros pares de
// uma lista de inteiros gerados de 1 a 50 usando unfold. Em seguida, exiba esses
// valores (usando forEach) em uma lista (<ul>) no DOM, onde cada elemento
// <li> apresenta o n´umero correspondente.

function unfold(seed, f) {
    if (seed > 50) {
        return []
    }
    return [seed].concat(unfold(f(seed), f));
}

let d = s => s + 1

function paresElemento() {
    const sementeInicial = 1; 

    const sequencia = unfold(sementeInicial, d);

    const ul = document.createElement('ul');

    sequencia.filter((pares)=>{
      if(pares % 2 == 0){
       return pares
      }
      
    }).forEach(pares => {
       const li = document.createElement('li');
        li.textContent = pares;
        ul.appendChild(li);
    });
    
    document.body.appendChild(ul);
}