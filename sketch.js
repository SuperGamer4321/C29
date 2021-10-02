const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit,fruit_con;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  var fruit_options = {
    density : 0.001
  }
  
  fruit = Bodies.circle(250,100,15,fruit_options);
  World.add(world,fruit);

  ground = new Ground(250,690,1400,10);
  
  rope = new Rope(7,{x : 350 , y : 30});

  Matter.Composite.add(rope.body,fruit);
  fruit_con = new Link(rope,fruit);
  
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display();
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,15,15);
}




