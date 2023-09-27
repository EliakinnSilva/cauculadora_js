let a = parseFloat(prompt('Digite o primeiro número: '));
let b = parseFloat(prompt('Digite o segundo número: '));
let operacao = prompt('Digite a operação (soma, subtracao, multiplicacao, divisao): ');

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        return 'Erro: Divisão por zero não é permitida';
    }
}

let resultado;

if (operacao == 'soma') {
    resultado = soma(a, b);
} else if (operacao == 'subtracao') {
    resultado = subtracao(a, b);
} else if (operacao == 'multiplicacao') {
    resultado = multiplicacao(a, b);
} else if (operacao == 'divisao') {
    resultado = divisao(a, b);
} else {
    resultado = 'Erro: Operação inválida';
}

console.log('Resultado: ', resultado);
