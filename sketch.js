const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var world, engine;

var div1, div2, div3, div4, div5, edge1, edge2, topEdge, floor;

var plinkos = [];

var particles = [];

function setup() {
  createCanvas(1366,625);
  engine = Engine.create();
  world = engine.world;

  div1 = new Division(227, 425, 20, 200);
  div2 = new Division(454, 425, 20, 200);
  div3 = new Division(681, 425, 20, 200);
  div4 = new Division(908, 425, 20, 200);
  div5 = new Division(1136, 425, 20, 200);

  for(var i=75; i < 1366; i = i + 50) {
    plinkos.push(new Plinko(i, 75))
    plinkos.push(new Plinko(i+25, 150))
    plinkos.push(new Plinko(i, 225))
    plinkos.push(new Plinko(i-25, 300))
    plinkos.push(new Plinko(i, 375))
  }
  
}

function draw() {
  Engine.run(engine);
  background("black");  
  drawSprites();

  if(frameCount%60 == 0) {
      particles.push(new Particles(random(0, 1366),-10));
  }

  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();

  for(var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for( var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
}