const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var PaperBall1;

var Dl,Dr,Db

var opti = {
  isStatic:true,
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = Bodies.rectangle(400,200,800,30,opti);
  World.add(world,ground)


  PaperBall1 = new PaperBallZ(10);
  
  Dl = new Dustbin(350,325,20,100,PI/2);
  Dr = new Dustbin(225,325,20,100,PI/2);
  Db = new Dustbin(280,370,120,20,PI/180)

}

function draw() {
  Engine.update(engine);
  background(0);
  fill("brown")
  rectMode(CENTER);
  rect(400,390,800,30)
  
  PaperBall1.display()
  
  Dl.display();
  Dr.display();
  Db.display();

  bounce()
}
function bounce () {
  if (keyWentDown(UP_ARROW)){
    Matter.Body.applyForce(PaperBall1.body,PaperBall1.body.position,{x:-5,y:-11})
  }
}