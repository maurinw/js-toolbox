const radius = 10;
const ball = {x:20, y:20, dx: 20, dy: 5};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    // Remember the old position for efficient clearing.
    old.x = ball.x;
    old.y = ball.y;

    // Apply gravitational acceleration.
    const gravity = 0.5;
    ball.dy += gravity;

    // Apply medium resistance to horizontal movement.
    const friction = 0.99;
    ball.dx *= friction;

    // Update ball position.
    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;

    // Handle collision with the left and right boundaries.
    if (ball.x > 400 - radius) {
        ball.x = 400 - radius;
        ball.dx = -ball.dx * 0.9;
    } else if (ball.x < radius) {
        ball.x = radius;
        ball.dx = -ball.dx * 0.9;
    }

    // Handle collision with the top and bottom boundaries.
    if (ball.y > 400 - radius) {
        ball.y = 400 - radius;
        ball.dy = -ball.dy * 0.9;
    } else if (ball.y < radius) {
        ball.y = radius;
        ball.dy = -ball.yx * 0.9;
    }
}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}