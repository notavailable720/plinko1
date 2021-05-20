class Division  {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0.5
        }
        this.x = x;
        this.y = y
        this.width = width;
        this.height = height;
        this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body)
    }

    display() {
        fill('grey')
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}