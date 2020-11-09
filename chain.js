class chain{
constructor(bodyA, bodyB){

    var cstOptions ={
    
        bodyA: bodyA,
        bodyB: bodyB,
    
        stiffness:0.04, length:10
    
        }
    
        //console.log(bird);
    
    this.chain = Constraint.create(cstOptions)
        World.add(world, this.chain)
        
    }
display()
{
    var posA= this.chain.bodyA.position
    var posB= this.chain.bodyB.position
    strokeWeight(3)
    line(posA.x, posA.y, posB.x, posB.y)

}
}


