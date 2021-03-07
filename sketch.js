const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var background_img;
var background;

var ground,hero,monster,rope,rope1;

var block1,block2,block3,clock4,block5,block6,block7,block8;

function preload() {
background_img=loadImage('GamingBackground.png');

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

   ground=new Ground(800,600,800,20);
   hero=new Hero(500,200,100);
   monster=new Monster(700,200,100);
   rope = new Fly(hero.body,{x:500, y:40});
   rope1 = new Fly(monster.body,{x:1400, y:40});

   block1=new Block(700,10,100,100);
   block2=new Block(800,10,100,100);
   block3=new Block(700,10,100,100);
   block4=new Block(800,10,100,100);

   block5=new Block(700,10,100,100);
   block6=new Block(800,10,100,100);
   block7=new Block(700,10,100,100);
   block8=new Block(800,10,100,100);
   
}

function draw() {
  Engine.update(engine);  
  
  background(background_img);
  ground.display();
  rope.display();
  hero.display();
  monster.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  

  

  
}

function mouseDragged(){
  
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

