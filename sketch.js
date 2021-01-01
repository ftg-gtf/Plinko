const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 

var engine, world;

var par = [];
var pli = [];
var div = [];

var divh = 300 ;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(440,height,1200,20); 

  for (var k = 0; k <=width; k = k + 80) {
    div.push(new Div(k, height-divh/2, 10, divh));
}
}

function draw() {
   
  background(0,0,0); 
  Engine.update(engine);
  ground.display();
  for (var k = 0; k < div.length; k++){
    div[k].display();
}
  drawSprites();
  
  
}
