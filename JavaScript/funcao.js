function saudação(nome) {
    console.log("Olá, " + nome)
}

saudação("Marta");

function some (a, b){
    return a+b;
}

let result = soma(5,3);
console.log("result");

function calcularSalario(salario) {
    if (salario > 2300) {
        let salarioTotal = salario + (salario * 0.6);

        console.log(
            "Parabéns! Você recebeu um bônus. Seu salário total é: R$ " +
            salarioTotal
        );
    } else { 
        console.log("Você não recebe bonús grr")
    }
}

calcularSalario(3000);

function maiorNumero(numeros) {
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    console.log("O maior número é: " + maior);
}
maiorNumero([1, 2, 3]);

function mediaCalcular(a,b,c){
    let media = (a+b+c)/2;
    console.log(media)
}

mediaCalcular(2,6,8);

function verificarIdade(idade){
    if (idade>=18){
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}

verificarIdade(16)

function vereficarSituacao(media){
    if (media>=7){
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

vereficarSituacao(9)

function calcularDesconto(compra){
    return compra-(compra*0.10);
}

let valorfinal = calcularDesconto(200);

console.log("O valor final é " + valorfinal);