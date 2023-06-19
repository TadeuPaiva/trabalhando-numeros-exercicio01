let num1 = prompt('Digite um numero: ')
let num2 = prompt('Digite outro numero: ')

num1 = Number(num1)
num2 = Number(num2)

const soma = num1 + num2
const subtracao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2
const resto = num1 % num2

alert(`A soma dos dois números: ${soma}`)
alert(`A subtração dos dois números: ${subtracao}`)
alert(`A multiplicação dos dois números: ${multiplicacao}`)
alert(`A divisão dos dois números: ${divisao}`)
alert(`O resto da divisão dos dois números: ${resto}`)
// Verificando se os numeros sao impar ou par
let imparPar = soma % 2;
if(imparPar == 0) {
  alert(`A soma dos dois numeros e par: ${soma}`)
} else {
  alert(`A soma dos dois numeros e impar: ${soma}`)
}
// verificando se os numeros sao iguais
let igualDiferente = num1 === num2
if(igualDiferente) {
  alert('Os numeros inseridos sao iguais')
} else {
  alert('Os numeros inseridos sao diferentes')
}