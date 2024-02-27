const canvasElement = document.getElementById('Swiss-flag') as HTMLCanvasElement;
const ctx = canvasElement.getContext('2d');

const rect1 = {
    width: 50,
    height: 200,
    color: 'white'
};
const rect2 = {
    width: 200,
    height: 50,
    color: 'white'
};

ctx.fillStyle = 'red';
ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

ctx.fillStyle = rect1.color;
ctx.fillRect(canvasElement.width / 2 - rect1.width / 2, canvasElement.height / 2 - rect1.height / 2, rect1.width, rect1.height);

ctx.fillStyle = rect2.color;
ctx.fillRect(canvasElement.width / 2 - rect2.width / 2, canvasElement.height / 2 - rect2.height / 2, rect2.width, rect2.height);

