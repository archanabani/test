var ballimage;
var ball;

function preload(){

ballimage=loadImage("balll.png");

}

function setup(){

  canvas=createCanvas(400,400);

  ball = createSprite(200,200,20,20)
  ball.addImage(ballimage);
  ball.scale=0.02;

  ball.velocityY=-2;

}


function draw(){
background("pink");

drawSprites();



}

