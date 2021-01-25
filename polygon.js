class Polygon {
  constructor(x,y){
    var options = {
      restitution:0.5,
      density:0.5,
      friction:0.7
   }
   this.body = Bodies.rectangle(x,y,50,50,options);
   this.width = 50;
   this.height = 50;
  this.image=loadImage("polygon.png");
   World.add(world, this.body);
 }
 display(){
   var pos =this.body.position;
   imageMode(CENTER);
   image(this.image,pos.x, pos.y, this.width, this.height);
 }
 };