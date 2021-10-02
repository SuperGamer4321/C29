class Link{
    constructor(bodyA,bodyB){
       var lastIndex =  bodyA.body.bodies.length-2;
 
       this.link = Constraint.create({
            bodyA:bodyA.body.bodies[lastIndex],
            bodyB:bodyB,
            length : -10,
            stiffness: 0.01
       })
       World.add(world,this.link);
    }
}

