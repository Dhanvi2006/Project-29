const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  block3, block4, block5, block6, block7;
var block8, block9, block10 //block11;
var ground, base1, base2;
var slingshot, rock;

function setup(){
    var canvas = createCanvas(1200,450);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    //first set:
    base1 = new Ground(610,350,320,10);
    //bottom row-
    block3 = new Block(490,315);
    block4 = new Block(530,315); 
    block5 = new Block(570,315); 
    block6 = new Block(610,315); 
    block7 = new Block(650,315);  
    block8 = new Block(690,315); 
    block9 = new Block(730,315);
    //2nd last row-
    block10 = new Block(530,255); 
    block11 = new Block(570,255);
    block12 = new Block(610,255);
    block13 = new Block(650,255);
    block14 = new Block(690,255);
    //second row-
    block15 = new Block(570,195);
    block16 = new Block(610,195);
    block17 = new Block(650,195);
    //top block-
    block18 = new Block(610,135);

    //2nd set:
    base2 = new Ground(1000,250,230,10);
    //bottom row-
    block19 = new Block(920,215);
    block20 = new Block(960,215);
    block21 = new Block(1000,215);
    block22 = new Block(1040,215);
    block23 = new Block(1080,215);
    block24 = new Block(960,155);
    block25 = new Block(1000,155);
    block26 = new Block(1040,155);
    block27 = new Block(1000,95);

    rock = new Rock(200,250);

    slingshot = new SlingShot(rock.body,{x:200, y:250});
}



    function draw()
    {
            background("black");
            Engine.update(engine);
            
            base1.display();
            base2.display();
            ground.display();
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
            rock.display();
            slingshot.display();
    }
    
    function mouseDragged(){
        Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingshot.fly();
    }

