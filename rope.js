class Rope {
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            body1 : body1,
            body2 : body2,
            pointB : {x : this.offsetX, y : this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    } 
    display(){
        //name spacing
         var pointA = this.rope.body1.position;
         var pointB = this.rope.body2.position;
         line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
 }
 