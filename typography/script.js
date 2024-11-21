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

//---------------------------------

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 500 px

hero.addEventListener('mousemove' , function(event) {
    const { offsetWidth : width , offsetHeight : height } = hero; 
    let { offsetX : x , offsetY : y } = event;

    x += event.target.offsetLeft;
    y += event.target.offsetTop;

    const xWalk = Math.round((x / width * walk) - (walk / 2))
    const yWalk =  Math.round((y / height * walk) - (walk / 2))
    console.log(xWalk , yWalk);

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(187, 223, 27, 0.836),
        ${xWalk * -1}px ${yWalk}px 0 rgba(38, 226, 85, 0.836),
        ${yWalk}px ${xWalk * -1}px 0 rgba(24, 152, 226, 0.822),
        ${yWalk * -1}px ${xWalk}px 0 rgba(162, 24, 226, 0.822)
    `
})