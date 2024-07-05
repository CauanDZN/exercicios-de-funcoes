function fatorial(numero) {
    let resultado = 1;
    for(let i = numero; i >= 1; i--) {
        resultado = resultado * i;
        console.log("Resultado é esse:", resultado, "e o número iterado é esse:", i);
    }

    return resultado;
}

console.log(fatorial(4));
