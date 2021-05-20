class Plinko {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 0.5,
            density: 1
        }

        this.x = x;
        this.y = y;
        this.radius = 10;
        this.body = Matter.Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }

    display() {
        fill('white');
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}