var wall
var bullut
var speed
var weight
var deformation 


function setup() {
  createCanvas(800,400);
  wall=createSprite(600, 200, 20, 100);
  wall.shapeColor="orange";
  bullut=createSprite(200,200,10,10);
  bullut.shapeColor="white";
speed=random(55,90);
weight=random(400,1500);
bullut.velocityX=speed;
deformation=0.5*weight*speed*speed/22500

}

function draw() {
  background("black");  
  drawSprites();
  if (bullut.collide(wall)) {
    bullut.velocityX=0
    var deformation=0.5 * weight *   speed* speed/25509
   if (deformation>180) {
    wall.shapeColor=color(255,0,0);
   }
   if (deformation<180 && deformation>100) {
    wall.shapeColor=color(230,230,0);
   }
   if (deformation<100) {
     wall.shapeColor=color(0,255,0);
   }
  }
}
