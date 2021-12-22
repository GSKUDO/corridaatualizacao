const corredores = [
    { 
        nome: "Pedro", 
        modeloCarro: "",
        velocidadeVolta: 0,
        contadorvolta: 0,
        pontuacao: 0,
        velmax: [], 
        velmin: [],
        derr: [],
    },
    { 
        nome: "Juca", 
        modeloCarro: "",
        velocidadeVolta: 0,
        contadorvolta: 0,
        pontuacao: 0,
        velmax: [], 
        velmin: [],
        derr: [],
    },
    { 
        nome: "Edna", 
        modeloCarro: "",
        velocidadeVolta: 0,
        contadorvolta: 0,
        pontuacao: 0,
        velmax: [], 
        velmin: [],
        derr: [],
    }
];

 
//Sorteio dos carros //

function tipocarro() {
    const numeroCarro = corredores.length;
    const arrayCorredores = corredores;
        
    arrayCorredores.forEach((elemento, indice) => {const  randomico = Math.random() * 100;
            if (randomico <= 60) {
                corredores[indice].modeloCarro = "popular"; 
                corredores[indice].velmax = [180, 200, 20]; 
                corredores[indice].velmin = [110, 130, 20]; 
                corredores[indice].derr = [0.03, 0.04, 0.01]; 
            } else if (randomico <= 95) {
                corredores[indice].modeloCarro = "sport"; 
                corredores[indice].velmax = [195, 215, 20]; 
                corredores[indice].velmin = [125, 145, 20]; 
                corredores[indice].derr = [0.02, 0.03, 0.01]; 
            } else if (randomico <= 100) {
                corredores[indice].modeloCarro = "Super Sport"; 
                corredores[indice].velmax = [210, 230, 20]; 
                corredores[indice].velmin = [140, 160, 20]; 
                corredores[indice].derr = [0.01, 0.00175, 0.0075]; 
            }      
    });


    //mostra quem corre com cada carro//
    document.getElementById("caredna").innerHTML = "O carro de Edna é " + corredores[2].modeloCarro;
    document.getElementById("carjuca").innerHTML = "O carro de Juca é " + corredores[1].modeloCarro;
    document.getElementById("carpedro").innerHTML = "O carro de Pedro é " + corredores[0].modeloCarro;
}

//função calcula a volta
function volta() {
    const numeroCarro = corredores.length;
    const arrayCorredores = corredores;
        
    arrayCorredores.forEach((elemento, indice) => {
        velocidademaxima = Math.round(Math.random()*corredores[indice].velmax[2]) + corredores[indice].velmax[0];
        console.log("velocidade maxima antes pontuacao" + velocidademaxima);
        velocidademinima = Math.round(Math.random()*corredores[indice].velmin[2]) + corredores[indice].velmin[0];
            if (Math.floor(corredores[indice].pontuacao/450) > 0 && Math.floor(corredores[indice].pontuacao/450) < 10) {
                velocidademaxima = velocidademaxima + (velocidademaxima*(Math.floor(corredores[indice].pontuacao/450)))/100;
                velocidademinima = velocidademinima + (velocidademinima*(Math.floor(corredores[indice].pontuacao/450)))/100;
                console.log("velocidade maxima pontuacao" + velocidademaxima);
            } else if (Math.floor(corredores[indice].pontuacao/450) > 10) {
                velocidademaxima = velocidademaxima + (velocidademaxima*10)/100;
                velocidademinima = velocidademinima + (velocidademinima*10)/100;
                console.log("velocidade maxima pontuacao" + velocidademaxima);
            }
        derrapagem = Math.round(Math.random()*corredores[indice].derr[2]) + corredores[indice].derr[0];
        diff = velocidademaxima - velocidademinima;
        sortedValue = Math.round(Math.random()*diff) + velocidademinima;
        corredores[indice].velocidadeVolta = sortedValue - sortedValue*derrapagem;  
    });
}

// verifica o ganhador de cada volta//
function corrida () {
    for (var i = 0; i < numeroVoltas; i++) {
        volta();
        console.log("volta da Edna");
        console.log(corredores[2].velocidadeVolta);
        console.log("volta do Juca");
        console.log(corredores[1].velocidadeVolta);
        console.log("volta do Pedro");
        console.log(corredores[0].velocidadeVolta);
        if (corredores[2].velocidadeVolta > corredores[1].velocidadeVolta && corredores[2].velocidadeVolta > corredores[0].velocidadeVolta) {
            corredores[2].contadorvolta = parseInt(corredores[2].contadorvolta + 1);
        }
        if (corredores[1].velocidadeVolta > corredores[2].velocidadeVolta && corredores[1].velocidadeVolta > corredores[0].velocidadeVolta) {
            corredores[1].contadorvolta = parseInt(corredores[1].contadorvolta + 1);
        }
        if (corredores[0].velocidadeVolta > corredores[1].velocidadeVolta && corredores[0].velocidadeVolta > corredores[2].velocidadeVolta) {
            corredores[0].contadorvolta = parseInt(corredores[0].contadorvolta + 1);
        }
    }
}

//verifica quem ganhou a corrida toda = quem tem o contador de vitorias mais alto//
function ganhador() {
    console.log("contador voltas Edna" + corredores[2].contadorvolta);
    console.log("contador voltas Juca" + corredores[1].contadorvolta);
    console.log("contador voltas Pedro" + corredores[0].contadorvolta);
    if (corredores[2].contadorvolta > corredores[1].contadorvolta && corredores[2].contadorvolta > corredores[0].contadorvolta) {
        document.getElementById("campeao").innerHTML = "Edna Campeã /" + "\n" + "Edna ganhou:" + corredores[2].contadorvolta;
        if (numeroVoltas === 10){
            corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 200);
            }else if (numeroVoltas === 70){
                corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 220);
            }else if (numeroVoltas === 160){
                corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 250);
        }

        if (corredores[1].contadorvolta > corredores[0].contadorvolta){
            document.getElementById("vice").innerHTML = "Juca Vice /" + "\n" + "Juca ganhou:" + corredores[1].contadorvolta;
            document.getElementById("terceiro").innerHTML = "Pedro Terceiro /" + "\n" + "Pedro ganhou:" + corredores[0].contadorvolta;
            if (numeroVoltas === 10){
                corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 120);
                corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 50);
                }else if (numeroVoltas === 70){
                    corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 130);
                    corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 75);
                }else if (numeroVoltas === 160){
                    corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 150);
                    corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 90);
            }

        }else{
            document.getElementById("vice").innerHTML = "Pedro Vice /" + "\n" + "Pedro ganhou:" + corredores[0].contadorvolta;
            document.getElementById("terceiro").innerHTML = "Juca Terceiro /" + "\n" + "Juca ganhou:" + corredores[1].contadorvolta;
            if (numeroVoltas === 10){
                corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 50);
                corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 120);
                }else if (numeroVoltas === 70){
                    corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 75);
                    corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 130);
                }else if (numeroVoltas === 160){
                    corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 90);
                    corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 150);
            }

        }
    }

    if (corredores[1].contadorvolta > corredores[2].contadorvolta && corredores[1].contadorvolta > corredores[0].contadorvolta) {
        document.getElementById("campeao").innerHTML = "Juca Campeão /" + "\n" + "Juca ganhou:" + corredores[1].contadorvolta;
        if (numeroVoltas === 10){
            corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 200);
            }else if (numeroVoltas === 70){
                corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 220);
            }else if (numeroVoltas === 160){
                corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 250);
        }

        if (corredores[2].contadorvolta > corredores[0].contadorvolta){
            document.getElementById("vice").innerHTML = "Edna Vice /" + "\n" + "Edna ganhou:" + corredores[2].contadorvolta;
            document.getElementById("terceiro").innerHTML = "Pedro Terceiro /" + "\n" + "Pedro ganhou:" + corredores[0].contadorvolta;
            if (numeroVoltas === 10){
                corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 120);
                corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 50);
                }else if (numeroVoltas === 70){
                    corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 130);
                    corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 75);
                }else if (numeroVoltas === 160){
                    corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 150);
                    corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 90);
            }

        }else{
            document.getElementById("vice").innerHTML = "Pedro Vice /" + "\n" + "Pedro ganhou:" + corredores[0].contadorvolta;
            document.getElementById("terceiro").innerHTML = "Edna Terceiro /" + "\n" + "Edna ganhou:" + corredores[2].contadorvolta;
            if (numeroVoltas === 10){
                corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 50);
                corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 120);
                }else if (numeroVoltas === 70){
                    corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 75);
                    corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 130);
                }else if (numeroVoltas === 160){
                    corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 90);
                    corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 150);
            }

        }
    } 

    if (corredores[0].contadorvolta > corredores[1].contadorvolta && corredores[0].contadorvolta > corredores[2].contadorvolta) {
        document.getElementById("campeao").innerHTML = "Pedro Campeão /" + "\n" + "Pedro ganhou:" + corredores[0].contadorvolta;
        if (numeroVoltas === 10){
            corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 200);
            }else if (numeroVoltas === 70){
                corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 220);
            }else if (numeroVoltas === 160){
                corredores[0].pontuacao = parseInt(corredores[0].pontuacao + 250);
        }

        if (corredores[2].contadorvolta > corredores[1].contadorvolta){
            document.getElementById("vice").innerHTML = "Edna Vice /" + "\n" + "Edna ganhou:" + corredores[2].contadorvolta;
            document.getElementById("terceiro").innerHTML = "Juca Terceiro /" + "\n" + "Juca ganhou:" + corredores[1].contadorvolta;
            if (numeroVoltas === 10){
                corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 120);
                corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 50);
                }else if (numeroVoltas === 70){
                    corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 130);
                    corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 75);
                }else if (numeroVoltas === 160){
                    corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 150);
                    corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 90);
            }

        }else{
            document.getElementById("vice").innerHTML = "Juca Vice /" + "\n" + "Juca ganhou:" + corredores[1].contadorvolta;
            document.getElementById("terceiro").innerHTML = "Edna Terceiro /" + "\n" + "Edna ganhou:" + corredores[2].contadorvolta;
            if (numeroVoltas === 10){
                corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 50);
                corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 120);
                }else if (numeroVoltas === 70){
                    corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 75);
                    corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 130);
                }else if (numeroVoltas === 160){
                    corredores[2].pontuacao = parseInt(corredores[2].pontuacao + 90);
                    corredores[1].pontuacao = parseInt(corredores[1].pontuacao + 150);
            }

        }
    }
}

//corrida rapida de 10 voltas//
function rapida() {
    numeroVoltas = 10;
    corrida();
    ganhador();
    //zera os contadores 
    corredores[0].contadorvolta = 0;
    corredores[1].contadorvolta = 0;
    corredores[2].contadorvolta = 0;
}

//corrida gp de 70 voltas//
function gp() {
    numeroVoltas = 70;
    corrida();
    ganhador();
    //zera os contadores 
    corredores[0].contadorvolta = 0;
    corredores[1].contadorvolta = 0;
    corredores[2].contadorvolta = 0;
}

//corrida enduro de 160 voltas//
function enduro() {
    numeroVoltas = 160;
    corrida();
    ganhador();
   //zera os contadores 
   corredores[0].contadorvolta = 0;
   corredores[1].contadorvolta = 0;
   corredores[2].contadorvolta = 0;
}