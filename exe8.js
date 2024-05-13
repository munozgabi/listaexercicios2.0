/**8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */


function calculaPontos(qtdHoras){
    if(qtdHoras <= 10){
       let qtdPontos = qtdHoras * 2;
       let qtdDinheiro = qtdPontos * 0.05;
       return `Você fez ${qtdPontos} pontos e ganhou ${qtdDinheiro} reais!`;
    }
    else if(qtdHoras > 10 && qtdHoras <=20){
        let qtdPontos = qtdHoras * 5;
        let qtdDinheiro = qtdPontos * 0.05;
        return `Você fez ${qtdPontos} pontos e ganhou ${qtdDinheiro} reais!`;
    }
    else if(qtdHoras > 20){
        let qtdPontos = qtdHoras * 10;
        let qtdDinheiro = qtdPontos * 0.05;
        return `Você fez ${qtdPontos} pontos e ganhou ${qtdDinheiro} reais!`;
    }
    else{
        return "Valor inválido!";
    }
    
}

const prompt = require('prompt-sync')();
let qtdHoras = prompt("Digite a quantidade de horas realizadas: ");
console.log(calculaPontos(qtdHoras));