const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling;
var polygon, polygonImg;
var ground1, ground2, ground3;
var block1, block2, block3, block4, block5, block6, block7, block8;
var block9, block10, block11, block12, block13, block14, block15;
var block16, block17, block18, block19, block20, block21;
var block22, block23, block24, block25, block26;
var block27, block28, block29, block30;
var block31, block32, block33;
var block34, block35;
var block36;
var block37, block38, block39, block40, block41, block42;
var block43, block44, block45, block46, block47;
var block48, block49, block50, block51;
var block52, block53, block54;

function preload() {
    polygonImg = loadImage("polygon.png");
}
function setup() {
    createCanvas(1366,621);

    engine = Engine.create();
    world = engine.world;

    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }

    polygon = Bodies.circle(200, 400, 30,options);
    World.add(world, polygon);

    sling = new SlingShot(polygon,{x:200, y:400});

    ground1 = new Ground(683, 621, 1366, 20);
    ground2 = new Ground(755, 494, 260, 15);
    ground3 = new Ground(1105, 219, 200, 15);
    
    block1 = new Box(650, 465.75);                         
    block2 = new Box(680, 465.75);                         
    block3 = new Box(710, 465.75);                         
    block4 = new Box(740, 465.75);                         
    block5 = new Box(770, 465.75);                         
    block6 = new Box(800, 465.75);                         
    block7 = new Box(830, 465.75);                         
    block8 = new Box(860, 465.75);                                                             
    block9 = new Box(665, 424);                             
    block10 = new Box(695, 424);                            
    block11 = new Box(725, 424);                           
    block12 = new Box(755, 424);                            
    block13 = new Box(785, 424);                           
    block14 = new Box(815, 424);                             
    block15 = new Box(845, 424);                             
    block16 = new Box(680, 383);                             
    block17 = new Box(710, 383);                            
    block18 = new Box(740, 383);                            
    block19 = new Box(770, 383);
    block20 = new Box(800, 383);
    block21 = new Box(830, 383);
    block22 = new Box(695, 342);
    block23 = new Box(725, 342);
    block24 = new Box(755, 342);
    block25 = new Box(785, 342);
    block26 = new Box(815, 342);
    block27 = new Box(710, 301);
    block28 = new Box(740, 301);
    block29 = new Box(770, 301);
    block30 = new Box(800, 301);
    block31 = new Box(725, 260);
    block32 = new Box(755, 260);
    block33 = new Box(785, 260);
    block34 = new Box(740, 219);
    block35 = new Box(770, 219);
    block36 = new Box(755, 178);


    block37 = new Box(1030, 200);
    block38 = new Box(1060, 200);
    block39 = new Box(1090, 200);
    block40 = new Box(1120, 200);
    block41 = new Box(1150, 200);
    block42 = new Box(1180, 200);
    block43 = new Box(1045, 159);
    block44 = new Box(1075, 159);                                    
    block45 = new Box(1105, 159); 
    block46 = new Box(1135, 159); 
    block47 = new Box(1165, 159); 
    block48 = new Box(1060, 118); 
    block49 = new Box(1090, 118);
    block50 = new Box(1120, 118);
    block51 = new Box(1150, 118);
    block52 = new Box(1075, 77);
    block53 = new Box(1105, 77);
    block54 = new Box(1135, 77);

}
function draw() {
    background("White");
    Engine.update(engine);

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 50, 50);

    sling.display();
    
    ground1.display();
    ground2.display();
    ground3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();

    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();
    block42.display();
    block43.display();
    block44.display();
    block45.display();
    block46.display();
    block47.display();
    block48.display();
    block49.display();
    block50.display();
    block51.display();
    block52.display();
    block53.display();
    block54.display();

drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x:mouseX , y:mouseY});
}
    
function mouseReleased(){
    sling.fly();
}