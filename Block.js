class Block {
    constructor(x, y) {
      var options = {
          restitution: 0.6,
          friction: 0.6,
          density: 0.5
      }
      this.width = 30;
      this.height = 50;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
      this.visibility = 255
    }

    display(){
      //console.log(this.body.speed)
      var pos =this.body.position;
      var angle = this.body.angle;
      
      
      if(this.body.speed < 7.3){
        push();
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        stroke(0)
        strokeWeight(2)
        rect(0, 0, this.width, this.height);
        pop();
      }
      else {
        push();
        //console.log(alpha(col))
        World.remove(world,this.body)
        col.setAlpha(this.visibility,this.visibility)
        fill(col)
        stroke(0,this.visibility)
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
        this.visibility = this.visibility - 40

      }
      
    }

    score(){
      if(this.visibility<255 && this.visibility > 40){
        score ++;
      }
    }
  };