let cor;
let posicaohorizontal//x
let posicaovertical//y

function setup() {
  
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaovertical=250
  posicaohorizontal=250
}

function draw() {
  
  fill(cor);
 circle(posicaovertical, posicaohorizontal, 50);
  
 if(mouseX < posicaohorizontal){
   posicaohorizontal = posicaohorizontal -1
 }
  
  if(mouseX > posicaohorizontal){
    posicaohorizontal = posicaohorizontal +1
  }
  
  if(mouseY < posicaovertical){
    posicaovertical --
  }
  
  if(mouseY > posicaovertical){
    posicaovertical ++
  }
  
  if(mouseIsPressed)
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  random(0, 100)
  
}