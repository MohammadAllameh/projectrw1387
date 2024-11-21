let blue = document.querySelector('#blue');
let green = document.querySelector('#green');
let red = document.querySelector('#red');
let withc = document.querySelector('#withc');

blue.addEventListener('click', function(element){
    document.querySelector('body').style.backgroundColor = 'rgb(16, 165, 211)'
})
green.addEventListener('click', function(element){
    document.querySelector('body').style.backgroundColor = 'rgb(27, 131, 27)'
})
red.addEventListener('click', function(element){
    document.querySelector('body').style.backgroundColor = 'rgb(194, 117, 46)'
})
withc.addEventListener('click', function(element){
    document.querySelector('body').style.backgroundColor = '#ffff'
})

//------------------------------------

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext('2d');

let snake = [
    { x : 150 , y : 150 },
    { x : 140 , y : 150 },
    { x : 130 , y : 150 },
    { x : 120 , y : 150 },
    { x : 110 , y : 150 },
]
// food`s location
let foodX;
let foodY;

// snake path
let dx = 10;
let dy = 0;

let score = 0;



let changeDirections = false;

document.addEventListener('keydown' , changeDirection)


let timer = 100
main()

createFood()


function main() {
    if(didGameEnd()) return;
    setTimeout(() => {
        changeDirections = false;
        clearCanvas()
        drawFood()
        advanceSnake()	
        drawSnake()
        
        main();
    }, timer);
}

function didGameEnd() {
    for (let i = 1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) return true
    }
    const hitleftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > gameCanvas.width - 10;
    const hitTopWall = snake[0].y < 0;
    const hitBottonWall = snake[0].y > gameCanvas.height - 10
    return hitleftWall || hitRightWall || hitTopWall || hitBottonWall;
}

function clearCanvas(){
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'
    
    ctx.fillRect(0 , 0 , gameCanvas.width , gameCanvas.height)
    ctx.strokeRect(0,0 ,gameCanvas.width, gameCanvas.height)
}

function randomNumber(max , min){return  Math.round((Math.random() * (max - min) + min) / 10) * 10}
function createFood() {
    foodX = randomNumber(0,gameCanvas.width - 10);
    foodY = randomNumber(0,gameCanvas.height - 10);
    snake.forEach(snakePart => {
        if(snakePart.x === foodX && snakePart.y === foodY) {
            createFood()
        }
    })
}





function advanceSnake () {
    const head = {x : snake[0].x  + dx, y : snake[0].y  + dy}
    
    
    snake.unshift(head);
    if(head.x == foodX && head.y == foodY ){
        score += 10
        
        document.getElementById('score').innerHTML = score
        timer -= 5
        createFood();
    }else{
        snake.pop()
    }
    
}

function drawSnake() {return snake.forEach(drawSnakePart)}
function drawSnakePart(snakePart) {
    ctx.fillStyle = 'rgb(111, 192, 18)'
    ctx.strokeStyle = 'rgb(49, 46, 45)'
    
    ctx.fillRect(snakePart.x ,snakePart.y,10,10);
    ctx.strokeRect(snakePart.x , snakePart.y , 10,10);   
}
function drawFood(){
    ctx.fillStyle = 'rgb(243, 44, 18)'
    ctx.strokeStyle = 'darkred'
    
    ctx.fillRect(foodX,foodY,10,10)
    ctx.strokeRect(foodX,foodY,10,10)
    
}

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY  = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    
    if(changeDirections) return;
    
    changeDirections = true;
    
    const keyPressed = event.keyCode;
    if (keyPressed == LEFT_KEY && dx !== 10) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed == RIGHT_KEY && dx !== -10) {
        dx = +10;
        dy = 0;
    }
    if (keyPressed == UP_KEY && dy !== 10) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed == DOWN_KEY && dy !== - 10) {
        dx = 0;
        dy = +10;
    }
}

