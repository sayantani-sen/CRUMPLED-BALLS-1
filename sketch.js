const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin, paperObject; 
var boxSide1, boxSide2, boxSide3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,690);
	// paperObject = new Paper(200,680);
	ground = new Ground(1,690,400,20);

	boxSide1 = createSprite(565,690,140,10);
	boxSide1.shapeColor = "white";

	boxSide2 = createSprite(500,660,10,50);
	boxSide2.shapeColor = "white";

	boxSide3 = createSprite(630,660,10,50);
	boxSide3.shapeColor = "white";

	Engine.run(engine);
  
}
function draw() {
  	background(0);
	  Engine.update(engine);
	  
	//   paperObject.x = paper.x;
	//   paperObject.y = paper.y;
  
	paper.display();
	// paperObject.display();
  	ground.display();
 	
  
  	keyPressed();
  	drawSprites();
}
function keyPressed(){
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-5});
	}
	
}
