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
let myAudio = document.getElementById("myAudio"); 
function playAudio() { 
    myAudio.play(); 
} 
function pauseAudio() { 
    myAudio.pause(); 
} 
pauseAudio()

//------------------------------

let startBox = document.querySelector('.start-box')
let inputConuter = startBox.querySelector('#input-counter');
let startConuter = startBox.querySelector('#start-counter');
let errorElement = document.querySelector('#error-massage');
let timerCirle = document.querySelector('.c100');
let timerNum = document.querySelector('.c100 > span');
let loadingMessage = document.querySelector('.message .loading')
let successMessage = document.querySelector('.message .success')



startConuter.addEventListener('click' , function(element) {
    let seconds = parseInt(inputConuter.value)
    if(isNaN(seconds)) {
        errorElement.textContent = 'زمان را به درستی وارد کنید';
        errorElement.classList.add('active')
        return;
    }
    errorElement.classList.remove('active');
    startBox.classList.remove('active')
    timerCirle.style.display = 'block';
    timerNum.textContent = seconds;
    loadingMessage.style.display = 'block';
    successMessage.style.display = 'none';            
    
    let orginalSeconds = seconds;
    let lastPercent = 'p100'
    let timeid =  setInterval(() => {
        if(lastPercent) timerCirle.classList.remove(lastPercent)
        if (seconds <= 0) {
            clearInterval(timeid);
            startBox.classList.add('active')
            timerCirle.style.display = 'none';
            loadingMessage.style.display = 'none';
            successMessage.style.display = 'block';            
            inputConuter.value = ''
            return;
        }

        seconds -= 1;
        let percent = Math.abs(Math.floor((( (orginalSeconds - seconds) / orginalSeconds) * 100) - 100))
        lastPercent = `p${percent}`;
        timerCirle.classList.add(`p${percent}`)
        timerNum.textContent = seconds;
    },1000)
    let audio = setInterval(() => {
        playAudio()
        if (seconds == 0) {
            pauseAudio() 
            clearInterval(audio)
        }
    }, 0);
})

window.addEventListener('keydown' , function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if(! key) return;
    
    seconds = parseInt(inputConuter.value)
    if(isNaN(seconds)) {
        errorElement.textContent = 'زمان را به درستی وارد کنید';
        errorElement.classList.add('active')
        return;
    }
    errorElement.classList.remove('active');
    startBox.classList.remove('active')
    timerCirle.style.display = 'block';
    timerNum.textContent = seconds;
    loadingMessage.style.display = 'block';
    successMessage.style.display = 'none';            
    
    orginalSeconds = seconds;
    lastPercent = 'p100'
    timeid =  setInterval(() => {
        if(lastPercent) timerCirle.classList.remove(lastPercent)
        if (seconds <= 0) {
            clearInterval(timeid);
            startBox.classList.add('active')
            timerCirle.style.display = 'none';
            loadingMessage.style.display = 'none';
            successMessage.style.display = 'block';            
            inputConuter.value = ''
            return;
        }

        seconds -= 1;
        percent = Math.abs(Math.floor((( (orginalSeconds - seconds) / orginalSeconds) * 100) - 100))
        lastPercent = `p${percent}`;
        timerCirle.classList.add(`p${percent}`)
        timerNum.textContent = seconds;
    },1000)
    audio = setInterval(() => {
        playAudio()
        if (seconds == 0) {
            pauseAudio() 
            clearInterval(audio)
        }
    }, 0);
});