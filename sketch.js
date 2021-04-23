
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(100, 250, 30)
	bob2 = new Bob(140, 250, 30)
	bob3 = new Bob(180, 250, 30)
	bob4 = new Bob(210, 250, 30)
	bob5 = new Bob(260, 250, 30)

	roof = new Ground(200, 70, 500, 10)

	rope1 = new Rope(bob1, roof, -40*2, 0)
	rope2 = new Rope(bob2, roof, -40*2, 0)
	rope3 = new Rope(bob3, roof, -40*2, 0)
	rope4 = new Rope(bob4, roof, -40*2, 0)
	rope5 = new Rope(bob5, roof, -40*2, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



