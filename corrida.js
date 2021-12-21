const Pedro = {
    carrodacorrida: [],
    volta: [],
    contadorvolta: [0],
    pontuacao: [0],
}

const Edna = {
    carrodacorrida: [],
    volta: [],
    contadorvolta: [0],
    pontuacao: [0],
}

const Juca = {
    carrodacorrida: [],
    volta: [],
    contadorvolta: [0],
    pontuacao: [0],
}

//Sorteio dos carros //
function tipocarro() {
    const carro = [];
    for (let index = 0; index < 3; index++) {
        randomico = Math.random() * 100;
            if(randomico <= 60){
                carro.push("Popular"); 
            }else if(randomico <= 95){
                carro.push("Sport");  
            }else if(randomico <= 100){
                carro.push("Super Sport"); 
        }      
    }
    //carro de qual jogador corresponde a qual numero:
    Pedro.carrodacorrida = carro[2];
    Edna.carrodacorrida = carro[0];
    Juca.carrodacorrida = carro[1];
    //mostra quem corre com cada carro//
    document.getElementById("caredna").innerHTML = "O carro de Edna é " + Edna.carrodacorrida;
    document.getElementById("carjuca").innerHTML = "O carro de Juca é " + Juca.carrodacorrida;
    document.getElementById("carpedro").innerHTML = "O carro de Pedro é " + Pedro.carrodacorrida;
}

//configurações dos carro nos objetos 
//1- valor velmax, 2- valor velmin e 3- diferença entre velmax e velmin

const popular = {
    velmax: [180, 200, 20],
    velmin: [110, 130, 20],
    derr: [0.03, 0.04, 0.01],
}

const sport = {
    velmax: [195, 215, 20],
    velmin: [125, 145, 20],
    derr: [0.02, 0.03, 0.01],
}

const supersport = {
    velmax: [210, 230, 20],
    velmin: [140, 160, 20],
    derr: [0.01, 0.0175, 0.0075],
}



//função calcula a volta
function volta(velmax, velmin, derr) {
    velocidademaxima = Math.round(Math.random()*velmax[2]) + velmax[0];
    velocidademinima = Math.round(Math.random()*velmin[2]) + velmin[0];
    derr = Math.round(Math.random()*derr[2]) + derr[0];
    diff = velocidademaxima - velocidademinima;
    sortedValue = Math.round(Math.random()*diff) + velocidademinima;
    carrovolta = sortedValue - sortedValue*derr;
    return carrovolta;
}


//função que primeiro acha qual carro foi sorteado, realiza a função deste carro e retorna a velocidade da volta //
function Pedrofunc() {
    console.log("o carro de pedro na função pedro é:")
    console.log(Pedro.carrodacorrida);
    if (Pedro.carrodacorrida === "Popular"){
        volta(popular.velmax, popular.velmin, popular.derr);
    }else if (Pedro.carrodacorrida === "Sport"){
        volta(sport.velmax, sport.velmin, sport.derr);
        }else if(Pedro.carrodacorrida === "Super Sport"){
        volta(supersport.velmax, supersport.velmin, supersport.derr);
    }
    Pedro.volta = carrovolta;
    return true;
}

function Jucafunc() {
    console.log("o carro de juca na função juca é:")
    console.log(Juca.carrodacorrida);
    if (Juca.carrodacorrida === "Popular"){
        volta(popular.velmax, popular.velmin, popular.derr)
    }else if (Juca.carrodacorrida === "Sport"){
        volta(popular.velmax, popular.velmin, popular.derr);
    }else if(Juca.carrodacorrida === "Super Sport"){
        volta(supersport.velmax, supersport.velmin, supersport.derr);
    }
    Juca.volta = carrovolta;
    return true;
}

function Ednafunc() {
    console.log("o carro de edna na função edna é:")
    console.log(Edna.carrodacorrida);
    if (Edna.carrodacorrida === "Popular"){
        volta(popular.velmax, popular.velmin, popular.derr);
    }else if (Edna.carrodacorrida === "Sport"){
        volta(popular.velmax, popular.velmin, popular.derr);
    }else if(Edna.carrodacorrida === "Super Sport"){
        volta(supersport.velmax, supersport.velmin, supersport.derr);
    }
    Edna.volta = carrovolta;
    return true;
}

// verifica o ganhador de cada volta//
function corrida () {
    for (var i = 0; i < numeroVoltas; i++) {
        Ednafunc ();
        Jucafunc ();
        Pedrofunc ();
        console.log("volta da Edna");
        console.log(Edna.volta);
        console.log("volta do Juca");
        console.log(Juca.volta);
        console.log("volta do Pedro");
        console.log(Pedro.volta);
        if (Edna.volta > Juca.volta && Edna.volta > Pedro.volta) {
            Edna.contadorvolta = parseInt(Edna.contadorvolta + 1);
        }
        if (Juca.volta > Edna.volta && Juca.volta > Pedro.volta) {
            Juca.contadorvolta = parseInt(Juca.contadorvolta + 1);
        }
        if (Pedro.volta > Juca.volta && Pedro.volta > Edna.volta) {
            Pedro.contadorvolta = parseInt(Pedro.contadorvolta + 1);
        }
    }
}

//verifica quem ganhou a corrida toda = quem tem o contador de vitorias mais alto//
function ganhador() {
    console.log("contador voltas Edna" + Edna.contadorvolta);
    console.log("contador voltas Juca" + Juca.contadorvolta);
    console.log("contador voltas Pedro" + Pedro.contadorvolta);
    if (Edna.contadorvolta > Juca.contadorvolta && Edna.contadorvolta > Pedro.contadorvolta) {
        document.getElementById("campeao").innerHTML = "Edna Campeã /" + "\n" + "Edna ganhou:" + Edna.contadorvolta;
        if (numeroVoltas === 10){
            Edna.pontuacao = parseInt(Edna.pontuacao + 200);
            }else if (numeroVoltas === 70){
                Edna.pontuacao = parseInt(Edna.pontuacao + 220);
            }else if (numeroVoltas === 160){
                Edna.pontuacao = parseInt(Edna.pontuacao + 250);
        }

        if (Juca.contadorvolta > Pedro.contadorvolta){
            document.getElementById("vice").innerHTML = "Juca Vice /" + "\n" + "Juca ganhou:" + Juca.contadorvolta;
            document.getElementById("terceiro").innerHTML = "Pedro Terceiro /" + "\n" + "Pedro ganhou:" + Pedro.contadorvolta;
            if (numeroVoltas === 10){
                Juca.pontuacao = parseInt(Juca.pontuacao + 120);
                Pedro.pontuacao = parseInt(Pedro.pontuacao + 50);
                }else if (numeroVoltas === 70){
                    Juca.pontuacao = parseInt(Juca.pontuacao + 130);
                    Pedro.pontuacao = parseInt(Pedro.pontuacao + 75);
                }else if (numeroVoltas === 160){
                    Juca.pontuacao = parseInt(Juca.pontuacao + 150);
                    Pedro.pontuacao = parseInt(Pedro.pontuacao + 90);
            }

        }else{
            document.getElementById("vice").innerHTML = "Pedro Vice /" + "\n" + "Pedro ganhou:" + Pedro.contadorvolta;
            document.getElementById("terceiro").innerHTML = "Juca Terceiro /" + "\n" + "Juca ganhou:" + Juca.contadorvolta;
            if (numeroVoltas === 10){
                Juca.pontuacao = parseInt(Juca.pontuacao + 50);
                Pedro.pontuacao = parseInt(Pedro.pontuacao + 120);
                }else if (numeroVoltas === 70){
                    Juca.pontuacao = parseInt(Juca.pontuacao + 75);
                    Pedro.pontuacao = parseInt(Pedro.pontuacao + 130);
                }else if (numeroVoltas === 160){
                    Juca.pontuacao = parseInt(Juca.pontuacao + 90);
                    Pedro.pontuacao = parseInt(Pedro.pontuacao + 150);
            }

        }
    }

    if (Juca.contadorvolta > Edna.contadorvolta && Juca.contadorvolta > Pedro.contadorvolta) {
        document.getElementById("campeao").innerHTML = "Juca Campeão /" + "\n" + "Juca ganhou:" + Juca.contadorvolta;
        if (numeroVoltas === 10){
            Juca.pontuacao = parseInt(Juca.pontuacao + 200);
            }else if (numeroVoltas === 70){
                Juca.pontuacao = parseInt(Juca.pontuacao + 220);
            }else if (numeroVoltas === 160){
                Juca.pontuacao = parseInt(Juca.pontuacao + 250);
        }

        if (Edna.contadorvolta > Pedro.contadorvolta){
            document.getElementById("vice").innerHTML = "Edna Vice /" + "\n" + "Edna ganhou:" + Edna.contadorvolta;
            document.getElementById("terceiro").innerHTML = "Pedro Terceiro /" + "\n" + "Pedro ganhou:" + Pedro.contadorvolta;
            if (numeroVoltas === 10){
                Edna.pontuacao = parseInt(Edna.pontuacao + 120);
                Pedro.pontuacao = parseInt(Pedro.pontuacao + 50);
                }else if (numeroVoltas === 70){
                    Edna.pontuacao = parseInt(Edna.pontuacao + 130);
                    Pedro.pontuacao = parseInt(Pedro.pontuacao + 75);
                }else if (numeroVoltas === 160){
                    Edna.pontuacao = parseInt(Edna.pontuacao + 150);
                    Pedro.pontuacao = parseInt(Pedro.pontuacao + 90);
            }

        }else{
            document.getElementById("vice").innerHTML = "Pedro Vice /" + "\n" + "Pedro ganhou:" + Pedro.contadorvolta;
            document.getElementById("terceiro").innerHTML = "Edna Terceiro /" + "\n" + "Edna ganhou:" + Edna.contadorvolta;
            if (numeroVoltas === 10){
                Edna.pontuacao = parseInt(Edna.pontuacao + 50);
                Pedro.pontuacao = parseInt(Pedro.pontuacao + 120);
                }else if (numeroVoltas === 70){
                    Edna.pontuacao = parseInt(Edna.pontuacao + 75);
                    Pedro.pontuacao = parseInt(Pedro.pontuacao + 130);
                }else if (numeroVoltas === 160){
                    Edna.pontuacao = parseInt(Edna.pontuacao + 90);
                    Pedro.pontuacao = parseInt(Pedro.pontuacao + 150);
            }

        }
    } 

    if (Pedro.contadorvolta > Juca.contadorvolta && Pedro.contadorvolta > Edna.contadorvolta) {
        document.getElementById("campeao").innerHTML = "Pedro Campeão /" + "\n" + "Pedro ganhou:" + Pedro.contadorvolta;
        if (numeroVoltas === 10){
            Pedro.pontuacao = parseInt(Pedro.pontuacao + 200);
            }else if (numeroVoltas === 70){
                Pedro.pontuacao = parseInt(Pedro.pontuacao + 220);
            }else if (numeroVoltas === 160){
                Pedro.pontuacao = parseInt(Pedro.pontuacao + 250);
        }

        if (Edna.contadorvolta > Juca.contadorvolta){
            document.getElementById("vice").innerHTML = "Edna Vice /" + "\n" + "Edna ganhou:" + Edna.contadorvolta;
            document.getElementById("terceiro").innerHTML = "Juca Terceiro /" + "\n" + "Juca ganhou:" + Juca.contadorvolta;
            if (numeroVoltas === 10){
                Edna.pontuacao = parseInt(Edna.pontuacao + 120);
                Juca.pontuacao = parseInt(Juca.pontuacao + 50);
                }else if (numeroVoltas === 70){
                    Edna.pontuacao = parseInt(Edna.pontuacao + 130);
                    Juca.pontuacao = parseInt(Juca.pontuacao + 75);
                }else if (numeroVoltas === 160){
                    Edna.pontuacao = parseInt(Edna.pontuacao + 150);
                    Juca.pontuacao = parseInt(Juca.pontuacao + 90);
            }

        }else{
            document.getElementById("vice").innerHTML = "Juca Vice /" + "\n" + "Juca ganhou:" + Juca.contadorvolta;
            document.getElementById("terceiro").innerHTML = "Edna Terceiro /" + "\n" + "Edna ganhou:" + Edna.contadorvolta;
            if (numeroVoltas === 10){
                Edna.pontuacao = parseInt(Edna.pontuacao + 50);
                Juca.pontuacao = parseInt(Juca.pontuacao + 120);
                }else if (numeroVoltas === 70){
                    Edna.pontuacao = parseInt(Edna.pontuacao + 75);
                    Juca.pontuacao = parseInt(Juca.pontuacao + 130);
                }else if (numeroVoltas === 160){
                    Edna.pontuacao = parseInt(Edna.pontuacao + 90);
                    Juca.pontuacao = parseInt(Juca.pontuacao + 150);
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
    Pedro.contadorvolta = 0;
    Juca.contadorvolta = 0;
    Edna.contadorvolta = 0;
}

//corrida gp de 70 voltas//
function gp() {
    numeroVoltas = 70;
    corrida();
    ganhador();
    //zera os contadores 
    Pedro.contadorvolta = 0;
    Juca.contadorvolta = 0;
    Edna.contadorvolta = 0;
}

//corrida enduro de 160 voltas//
function enduro() {
    numeroVoltas = 160;
    corrida();
    ganhador();
   //zera os contadores 
   Pedro.contadorvolta = 0;
   Juca.contadorvolta = 0;
   Edna.contadorvolta = 0;
}