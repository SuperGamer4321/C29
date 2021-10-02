class Ground{

    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.bodies = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.bodies);
        this.width = w;
        this.height = h;
        
    }

    display(){
        var pos = this.bodies.position;
        push();
        rectMode(CENTER);
        fill(148,127,140);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}