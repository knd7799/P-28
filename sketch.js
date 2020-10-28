
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var tree1;
var mango1;
var mango2;
var mango3;
var mango4;
var world,boy1;
var stone1;
var slingshot;

function preload()
{
	boyImage = loadImage ("boy.png");
	//tree1 = loadImage ("tree.png");
}

function setup() {
	createCanvas(800, 700);
	background(255);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(width/2,670,width,20);
	tree1=new tree (610,418,490,50);
	mango1=new mango (700,300,50,50);
	mango2=new mango (770,300,50,50);
	mango3=new mango (600,300,50,50);
	mango4=new mango (650,200,50,50);
	boy1 = new boy (150,560,300,100);
	
	stone1 = new Stone(235,420,30);
    World.add(world,stone1);
    

  slingshot = new slingShot(stone1.body,{x:60,y:495});

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boyImage ,200,340,200,300);

  ground1.display ();
  tree1.display ();
  mango1.display ();
  mango2.display ();
  mango3.display ();
  mango4.display ();
  boy1.display();
  slingshot.display();
  stone1.display();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:235,y:420});
		slingshot.attach(this.stone1);
	}
}

function detectollision(lstone,lmango){
	
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
		if(distance<=lmango.r+lstone.r)
	  {
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}

