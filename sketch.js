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
}

function draw() {
  Engine.update(engine);
  
  background(0,0,0);  
  drawSprites();
  
  ground.display();
}