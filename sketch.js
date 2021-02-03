
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Trashcan, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();
Trashcan.display();



  drawSprites();
 
}

function keyPressed (){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce (paperObject.body,paperObject.body.position,{x:85, y:85})
}


}