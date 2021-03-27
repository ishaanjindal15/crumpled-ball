class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            frictio:0.5,
            density:1.,
            restitution:0.3,
        }
    this.body=Bodies.circle(x,y,20,options)
    this.radius=40;
    
    }
    
    display(){
    var pos= this.body.position;
    push();
    translate(pos.x,pos.y)
    ellipseMode(RADIUS)
    fill("pink")
    ellipse(0,0,20)
    pop();
    }
    }
    