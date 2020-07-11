class Rope{
    constructor(body1, body2,pointB){
        var options={
            bodyA: body1,
            bodyB:body2,
            pointB: pointB,
          
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            strokeWeight(2);
           var pointB1=pointB.x+this.rope.pointB.x;
           var pointB2=pointB.y+this.rope.pointB.y;
            line(pointA.x, pointA.y, pointB1, pointB2);
        
    }
}