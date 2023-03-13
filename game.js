const canvas = document.getElementById('container')
const context = canvas.getContext("2d")
sessionStorage.setItem("winner", "None");

const ball = {
    radius: 8,
    positionX: canvas.width / 2 + 8,
    positionY: canvas.height / 2 + 8,
    velocityX: 2,
    velocityY: 2,
    color: 'white'
}

const leftPlayer = {
    height: 100,
    width: 10,
    positionX: 10,
    positionY: canvas.height / 2 - 100 / 2,
    color: 'white',
    player: 'left',
    speed: 5
}

const rightPlayer = {
    height: 100,
    width: 10,
    positionX: canvas.width - 20,
    positionY: canvas.height / 2 - 100 / 2,
    color: 'white',
    player: 'right',
    speed: 5
}

const game = {
    leftScore: 0,
    rightScore: 0,
    turn: 0,
    topScore: 5,
    speedIncreaseHit: 5,
}

const keyPressed = {
    W: false,
    S: false,
    Up: false,
    Down: false
}

let activated = true;
let hits = 0;

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    if (code === 'KeyS') {
        keyPressed['S'] = true;
    }
    if (code === 'KeyW') {
        keyPressed['W'] = true;
    }
    if (code === 'ArrowUp') {
        keyPressed['Up'] = true;
    }
    if (code === 'ArrowDown') {
        keyPressed['Down'] = true;
    }

}, false);



document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;

    if (code === 'KeyS') {
        keyPressed['S'] = false;
    }
    if (code === 'KeyW') {
        keyPressed['W'] = false;
    }
    if (code === 'ArrowUp') {
        keyPressed['Up'] = false;
    }
    if (code === 'ArrowDown') {
        keyPressed['Down'] = false;
    }

}, false);

