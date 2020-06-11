class Box1 {
    constructor(x, y, width, height) {
      var options = {
          'isStatic': true,  
          'restitution':0.8,
          'friction': 1.0,
          'density':1.0
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
     // this.image = loadImage("dustbingreen.png");
      this.width = 150;
      this.height = 150;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     // imageMode(CENTER);
      //image(this.image, 10, 10, this.width, this.height);
      pop();
    }
  }
  