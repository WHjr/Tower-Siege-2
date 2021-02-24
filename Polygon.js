class Shoot{
    constructor(x,y){
        var options ={
            isStatic : false,
            restitution : 0.8,
            density : 1.5
        }
        this.body = Matter.Bodies.polygon(x,y,6,20,options)
        World.add(world,this.body);
        //console.log(this.body)
    }

    display(){
        //console.log(this.body)
        var v = this.body.vertices
        shape(v[0].x,v[0].y,v[1].x,v[1].y,v[2].x,v[2].y,v[3].x,v[3].y,v[4].x,v[4].y,v[5].x,v[5].y)
    }
}