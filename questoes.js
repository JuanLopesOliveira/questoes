//Questão 1

indice = 13
soma = 0
k = 0

while (k < indice) {
    k = k + 1
    soma = soma + k
}

console.log(`A soma é: ${soma}`)

//Questão 2

const numberToTest = 55
const fibonacciArray = [0, 1]

while (true) {
    let nextValue = fibonacciArray[fibonacciArray.length -1] + fibonacciArray[fibonacciArray.length -2]
    if (nextValue > numberToTest) {
        break
    }
    fibonacciArray.push(nextValue)
}

fibonacciArray.includes(numberToTest) ?
console.log(`${numberToTest} Pertence a sequência`) :
console.log(`${numberToTest} Não pertence a sequência fibonacci`)

//Questão 3

//a) 1, 3, 5, 7, 9 - o próximo elemento é a soma do anterior com 2
//b) 2, 4, 8, 16, 32, 64 - o próximo elemento é o dobro do anterior
//c) 0, 1, 4, 9, 16, 25, 36, 49 - nessa sequência, cada número é o quadrado de seu índice
//d) 4, 16, 36, 64, 100 - cada número é o quadrado de um número par
//e) 1, 1, 2, 3, 5, 8, 13 - sequência fibonacci, o próximo número é a soma dos dois anteriores
//f) 2, 10, 12, 16, 17, 18, 19, 200 - a única relação entre os números é que o nome dos números começam com 'd'

//Questão 4

//Eu ligaria o primeiro interruptore e esperaria cerca de 5 minutos, então
//desligaria e ligaria o segundo, e rapidamente iria para a sala das lâmpadas
//a lâmpada ligada é referente ao segundo interruptor, a lâmpada desligada e quente,
//é referente ao primeiro interruptor, a lâmpada desligada e fria é referente ao
//terceiro interruptor

//Questâo 5

const string = 'teste'
let newString = ''

for (let i = 1; i <= string.length; i++) {
    newString += string[string.length - i]
}

console.log(newString)
