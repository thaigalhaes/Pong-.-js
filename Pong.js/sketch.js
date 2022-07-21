//Variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;
let colisao = false;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis Tamanho da Raquete
let comprimento = 10;
let altura = 90;

//variaveis da raquete 1
let xRaquete1 = 5;
let yRaquete1 = 150;

//variaveis da raquete 2
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidaYR2;

// Pontos
let pontos1 = 0;
let pontos2 = 0;

//Sons
let raquetada;
let ponto;
let trilha;
function preload (){
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");

}



//dimensão da tela
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
//cor da tela
function draw() {
  background(10);
  mostrarBolinha ();
  movimentaBolinha ();
  verificaBorda ();
  mostrarRaquete (xRaquete1, yRaquete1);
  movimentaRaquete1();
  colisaoRaquete(xRaquete1, yRaquete1);
  mostrarRaquete (xRaquete2, yRaquete2);
  movimentaRaquete2();
  colisaoRaquete(xRaquete2, yRaquete2);
  incluirPlacar();
  marcaPonto ();
  bolinhaNaoFicaPresa ();
}
function mostrarBolinha (){
  circle (xBolinha,yBolinha,diametro);
}

function movimentaBolinha (){
   
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}
function verificaBorda (){
  if(xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeYBolinha *= -1;
     }
}
function mostrarRaquete (x,y){
  rect (x, y, comprimento, altura);
  
}
function movimentaRaquete1 (){
  
  if (keyIsDown (UP_ARROW)){
    yRaquete1 -= 10;
  }
   if (keyIsDown (DOWN_ARROW)){
    yRaquete1 += 10;
  } 
}
function colisaoRaquete(x,y){
 colisao = collideRectCircle(x, y, comprimento, altura, xBolinha, yBolinha, raio);
  if (colisao){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  
}


function movimentaRaquete2(){
  /* jogar com o computador 
  velocidadeYR2 = yBolinha -yRaquete2 - comprimento / 2 - 30; yRaquete2 += velocidadeYR2 */
  
  //multiplayer
  if (keyIsDown (87)){
    yRaquete2 -= 10;
  }
   if (keyIsDown (83)){
    yRaquete2 += 10;
  } 
}

function incluirPlacar(){
  textAlign (CENTER);
  textSize (16);
  stroke (255);
  //placar raquete 1
  fill(color(255,140,0));
  rect (150, 10, 40, 20)
  fill(255);
  text (pontos1, 170, 26);
  //placar raquete 2
  fill(color(255,140,0));
  rect (450, 10, 40, 20)
  fill(255);
  text (pontos2, 470, 26);
}

function marcaPonto (){
  if (xBolinha > 590){
    pontos1 += 1;
    ponto.play ();
  }
  if (xBolinha < 10){
    pontos2 += 1;
    ponto.play ();
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    XBolinha = 23
    }
}



