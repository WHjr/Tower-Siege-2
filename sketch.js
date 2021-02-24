

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var ground1, b1, b2;
var ground2, ground3;
var shooter;
var score = 0;

var bg = 0;

function setup(){
  createCanvas(1000,600);
  setBackground();
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500,590,1000,20);
  ground2 = new Ground(500,455,250,10)
  ground3 = new Ground(800,305,200,10)

  b1 = new Block(410,425);
  b2 = new Block(440,425);
  b3 = new Block(470,425);
  b4 = new Block(500,425);
  b5 = new Block(530,425);
  b6 = new Block(560,425);
  b7 = new Block(590,425);

  b8 = new Block(440,400);
  b9 = new Block(470,400);
  b10 = new Block(500,400);
  b11 = new Block(530,400);
  b12 = new Block(560,400);

  b13 = new Block(470,375);
  b14 = new Block(500,375);
  b15 = new Block(530,375);

  b16 = new Block(500,350)

  c1 = new Block(740,275);
  c2 = new Block(770,275);
  c3 = new Block(800,275);
  c4 = new Block(830,275);
  c5 = new Block(860,275);

  c6 = new Block(770,250);
  c7 = new Block(800,250);
  c8 = new Block(830,250);
  c9 = new Block(800,225);
  
  shooter = new Shoot(200,380)
  sling = new Sling(shooter.body,{x:200,y:350})
  
}

function draw(){
  background(bg);

  text("Score : " + score, 500, 30)
  
  Engine.update(engine);

  
  ground1.display();
  ground2.display();
  ground3.display();
  col = color(241,184,255,255)
  fill(col)
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  c6.display();
  c7.display();
  c8.display();
  
  col = color(108,223,225,255)
  fill(col)
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  col = color(112,136,254,255)
  fill(col)
  b13.display();
  b14.display();
  b15.display();
  c9.display();
  col = color(97,205,151,255)
  fill(col)
  b16.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  shooter.display();
  sling.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();

  c1.score();
  c2.score();
  c3.score();
  c4.score();
  c5.score();
  c6.score();
  c7.score();
  c8.score();
  c9.score();
  fill(0)
  text("Press Space to try again!",800,560)
 
}

function mouseDragged(){
  Body.setPosition(shooter.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Body.setPosition(shooter.body,{x:200,y:380})
    sling.attach(shooter.body);
    
  }
}

async function setBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  //console.log(responseJSON)

  var datetime = responseJSON.datetime
  //console.log(datetime)

  var hour = datetime.slice(11,13)
  //console.log(hour)

  if (hour>=06 && hour <19){
    bg =  200
  } else {
    bg =  80
  }
  console.log(bg)
}