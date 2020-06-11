
class Paper {
constructor(x, y,) {
    var options = { 
      'isStatic' : false,
      'restitution':0.3,
      'friction':10,
      'density':0.2650
    }
    this.body = Bodies.circle(x, y, 45, options);
    this.width = 100;
    this.height = 100;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
   // pos.x = mouseX;
    //pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 10, 10, this.width, this.height);
    pop();
  }
};
