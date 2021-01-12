class Paper {
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(100,680,20,options);
        World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position;
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10);
    }
    
}