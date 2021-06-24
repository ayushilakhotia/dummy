var trex, trex_running;
var edges;
function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200);
  edges=createEdgeSprites();

  trex=createSprite(50,170,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  

}
function draw(){
  background("black");
  drawSprites();

  if(keyDown("space")){
    trex.velocityY = -10;
  }
// add gravity
  trex.velocityY=trex.velocityY+0.8;
  trex.collide(edges[3]);


}
