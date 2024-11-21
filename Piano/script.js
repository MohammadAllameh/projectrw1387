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

const note = document.querySelector('.nowplaying');
const keys = document.querySelectorAll('.key')
const hints = document.querySelectorAll('.hints')

window.addEventListener('keydown' , function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    
    if(! key) return;
    
    const keyNote = key.getAttribute('data-note');
    
    key.classList.add('playing')
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
});

function removeTransition(){
    this.classList.remove('playing')
}

keys.forEach(key  => key.addEventListener('transitionend' , removeTransition))

hints.forEach(function(element , index){
    // element.style = `transition-delay : ${index * 50}ms`
    element.setAttribute('style' , `transition-delay : ${index * 50}ms`)
})