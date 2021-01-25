const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var backgroundImg
var score=0;
function preload() {
    getBackgroundImg();
}
function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
    world = engine.world;
    ground=new Ground(450,870,900,20);
    stand=new Ground(500,800,300,20);
   box1=new Box(380,790,50,50);
   box2=new Box(430,790,50,50);
   box3=new Box(480,790,50,50);
   box4=new Box(530,790,50,50);
   box11=new Box(580,790,50,50);
   box12=new Box(630,790,50,50);
   box5=new Box(380,740,50,50);
   box6=new Box(430,740,50,50);
   box9=new Box(580,740,50,50);
   box10=new Box(630,740,50,50);
   box7=new Box(480,740,50,50);
   box8=new Box(530,740,50,50);

    polygon1=new Polygon(100,750);
    chain=new Chain(polygon1.body,{x:100,y:750});
}
function draw(){
      if(backgroundImg)
      background(backgroundImg);
    Engine.update(engine);
    ground.display();
    noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
        box1.score();
        box2.score();
        box3.score();
        box4.score();
        box5.score();
        box6.score();
        box7.score();
        box8.score();
        box9.score();
        box10.score();
        box11.score();
        box12.score();
    stand.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
    polygon1.display();
   chain.display(); 
}

function mouseReleased(){
chain.fly();
}
function mouseDragged(){
   Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}