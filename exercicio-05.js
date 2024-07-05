function contarVogais(frase) {
    let resultado = 0
    for(let i = 0; i < frase.length; i++) {
        if (frase[i] == "A" || frase[i] == "E" || frase[i] == "I" || frase[i] == "O" || frase[i] == "U" || frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u"){
            resultado = resultado + 1
        }
    }

    return resultado
}

console.log(contarVogais("Cauan"))
console.log(contarVogais("Paralelépipedo"))