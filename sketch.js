const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(200,300,20);
    ball2 = new Ball(230,300,20);
    ball3 = new Ball(260,300,20);
    ball4 = new Ball(290,300,20);
    ball5 = new Ball(320,300,20);
    
    bar = new Bar(150, 100, 220, 20);

    rope = new Rope(ball.body, bar.body ,{x: 10, y: 20});
    rope2 = new Rope(ball2.body, bar.body, {x: 50, y: 20});
    rope3 = new Rope(ball3.body,bar.body, {x: 90, y: 20});
    rope4 = new Rope(ball4.body,bar.body, {x: 130, y: 20});
    rope5 = new Rope(ball5.body, bar.body,{x: 170, y: 20});

    
}

function draw(){
    
    background(150, 50, 0);
    
    Engine.update(engine);

    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

    rope.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    bar.display();
}
function keyPressed(){
	if (keyCode == UP_ARROW){
        Matter.Body.applyForce(ball.body, ball.position, {x:-75, y:-10});
	}
}
