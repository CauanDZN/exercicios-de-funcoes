function ehPalindromo(frase){
    if (frase == frase.split("").reverse().join("")){
        console.log(frase)
        console.log(frase.split("").reverse().join(""))
        console.log("É um palíndromo")
    } else {
        console.log(frase)
        console.log(frase.split("").reverse().join(""))
        console.log("Não é um palíndromo")
    }
}

console.log(ehPalindromo("arara"))
