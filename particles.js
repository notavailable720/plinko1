class Particles {
    constructor(x, y) {
        var options = {
            restitution: 0.7,
            density: 0.4
        }
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.body = Matter.Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }

    display() {
        fill('blue');
        console.log(this.body);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}