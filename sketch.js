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
var ground
var rope
var fruit
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  ground= new Ground(200,690,600,20)
  rope= new Rope(6,{x:245,y:30})
  var fruitProp= {
density:0.01,
isStatic:true

 }
 fruit=Bodies.circle(300,300,15,fruitProp)
 Matter.Composite.add(rope.body,fruit)
}

function draw() 
{
  background(51);
  Engine.update(engine);
   
   ground.display()
   rope.show()
  ellipseMode (RADIUS)
  var pos=fruit.position
ellipse(pos.x,pos.y,15,15)

}




