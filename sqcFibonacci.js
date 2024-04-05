/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

function pertSqcFibonacci(fi){
    let num1 = 0;
    let num2 = 1

    while (num2 < fi){
        let fibonacci = num2
        num2 = num1 + num2
        num1 = fibonacci
    }
    return num2 === fi
}

const numero = parseInt (prompt("Digite um número para verificar se pertence a sequência de Fibonacci"));

if(pertSqcFibonacci(numero)){
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
}else{
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}