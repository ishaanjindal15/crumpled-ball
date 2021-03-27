
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball
var stick1;
var engine,world


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
ground = new Ground(600,400,900,15);
paper= new Paper(180,372);
stick1= new Box(700,342,15,100);
stick2= new Box(850,342,15,100);
stick3= new Box(775.5,384,134,15);
	
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  stick1.display();
  stick2.display();
  stick3.display();
 
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-85});
  }
}



