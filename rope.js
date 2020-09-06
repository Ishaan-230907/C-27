class Rope {
    constructor(bodyA,bodyB){
    
     var options={
     bodyA:bodyA,
     bodyB:bodyB,
     stiffness:1,
     length:70
     }   
     this.chain=Matter.Constraint.create(options)
    World.add(world,this.chain)
    
    
    }
    display(){
    var pointa= this.chain.bodyA.position;
    var pointb= this.chain.bodyB.position;
    
    strokeWeight (5);
    stroke ("green");
    line(pointa.x,pointa.y,pointb.x,pointb.y);
    
    
    }
    
    }