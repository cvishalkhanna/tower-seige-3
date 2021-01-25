class Box  {
  constructor(x, y, width, height) {
    var options = {
     restitution:0.5,
     density:1,
     friction:0.7

  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  this.image=loadImage("box.png");
  this.Visiblity=255
  World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  imageMode(CENTER);
  
  if(this.body.speed < 3){
    image(this.image,pos.x, pos.y, this.width, this.height);
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
}
score(){
  if (this.Visiblity < 0 && this.Visiblity > -1005){
    score++;
  }
}
};
  

