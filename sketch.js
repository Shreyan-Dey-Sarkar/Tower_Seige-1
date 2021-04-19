const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var chain;
var polygon, polygonImg;

function preload(){
  polygonImg = loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(640,300,250,10);
  stand2 = new Stand(950,200,200,10);
 
  //level one
  block1 = new Block(550,275,30,40);
  block2 = new Block(580,275,30,40);
  block3 = new Block(610,275,30,40);
  block4 = new Block(640,275,30,40);
  block5 = new Block(670,275,30,40);
  block6 = new Block(700,275,30,40);
  block7 = new Block(730,275,30,40);
  //level two
  block8 = new Block(580,235,30,40);
  block9 = new Block(610,235,30,40);
  block10 = new Block(640,235,30,40);
  block11 = new Block(670,235,30,40);
  block12 = new Block(700,235,30,40);
  //level three
  block13 = new Block(610,195,30,40);
  block14 = new Block(640,195,30,40);
  block15 = new Block(670,195,30,40);
  //top
  block16 = new Block(640,155,30,40);
  
  //polygon holder with slings
  polygon = Bodies.circle(250,200,20);
  World.add(world,polygon);

  chain = new Slingshot(this.polygon,{x:250,y:200})

  //adds image to polygon
  //polygon.addImage(polygonImg);

  
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();              
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  imageMode(CENTER);
  image(polygonImg ,polygon.position.x,polygon.position.y,40,40);
 

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  chain.fly();    
}
