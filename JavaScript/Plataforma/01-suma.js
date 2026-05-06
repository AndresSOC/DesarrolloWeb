process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputData = ' ';

process.stdin.on('data', (data) => {
    inputData += data;
});

process.stdin.on('end', () => {
    const input = inputData.trim().split(' ');
    const num1 = parseInt(input[0]);
    const num2 = parseInt(input[1]);

    // Suma los dos números
    const resultado = num1 + num2;

    // Imprime el resultado
    console.log(resultado);
});