/* Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/


function inverterString(string) {
    let invertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }
    return invertida;
}

// Inserção de String

const stringOriginal = prompt("Digite uma string para inverter:");
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);