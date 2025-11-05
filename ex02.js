// Exercicio 2 Implemente uma funcão unfold que gere uma sequencia de numeros
// a partir de uma semente inicial, onde cada elemento e o dobro do anterior, ate
// que o valor ultrapasse 1024. Em seguida, use map para criar uma lista nao orde-
// nada (<ul>) no DOM, em que cada elemento <li> exibe um dos valores gerados
// pela sequencia.


function unfold(seed, f) {
    if (seed > 1024) {
        return []
    }
    return [seed].concat(unfold(f(seed), f));
}

let d = s => s * 2

function gerarElemento() {
    const sementeInicial = 1; 

    const sequencia = unfold(sementeInicial, d);

    const ul = document.createElement('ul');

    sequencia.map(valor => {
        const li = document.createElement('li');
        li.textContent = valor;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}