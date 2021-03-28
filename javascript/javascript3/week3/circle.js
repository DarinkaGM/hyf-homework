const canvas = document.getElementById('artCanvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const context = canvas.getContext('2d');

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x
        this.y = y
        this.r = r
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.fillColor = fillColor
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.fillColor);
        context.fillStyle = this.fillColor;
        context.fill();
    }
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * 700);
};

setInterval(() => {
    const maxRadius = 7;
    const minRadius = 1;
    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;
    r = minRadius + (Math.random() * (maxRadius - minRadius));
    startAngle = 0;
    endAngle = 2 * Math.PI
    fillColor = `rgb( ${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
    const c1 = new Circle(x, y, r, startAngle, endAngle, fillColor);
    c1.draw()
},100);