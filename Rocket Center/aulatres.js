let PilotoNome = prompt(`Nome do agente espacial: `);
alert(`Sua velocidade é zero!`);

let VelocidadeV = 0

let VelocidadeD = prompt(`Escolha uma velocidade desejada: `);
confirm(`Você está indo para á velocidade: ` + VelocidadeD );

if (VelocidadeD <= 0) {
    alert(`Você está parado!`);
} else if(VelocidadeD <= 40) { 
    alert(`Você está devagar, considere aumentar a velocidade!`);
} else if (VelocidadeD > 40 && VelocidadeD < 80) {
    alert(`Velocidade ideal!`);
} else if (VelocidadeD >= 80 && VelocidadeD < 100) {
    alert(`Velocidade alta, considere diminuir!`);
} else if (VelocidadeD >= 100) {
    alert(`Velocidade PERIGOSA. Controle automático forçado!`);
}

alert(`Dados do Responsável\nNome: ` + PilotoNome + `\nVelocidade: ` + VelocidadeD);
