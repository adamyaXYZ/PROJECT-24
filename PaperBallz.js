
class PaperBallZ {
    constructor (radi){
        var Opt ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(300,175,radi,Opt);
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position;
        var r = this.body.radius
        push();
            translate(pos.x,pos.y);
            fill(255)
            ellipseMode(CENTER);
            ellipse(pos.x,pos.y,r,r)
        pop();
    }
}