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

window.addEventListener('keydown' , function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if(! key) return;
    
    videoTime.textContent = getTime(media.duration);
    if(media.paused) {
        togglePlayIcon();
        media.play();
    } else {
        togglePlayIcon();
        media.pause();
    }
});


let playerArea = document.querySelector('.myplayer');
let media = playerArea.querySelector('video');
let controls = playerArea.querySelector('.myplayer__controls');

let play = controls.querySelector('.play');
let rwd = controls.querySelector('.rewind');
let fwd = controls.querySelector('.forward');
let fullscreen = controls.querySelector('.fullscreen');


let volumeIcon = controls.querySelector('.volume .icon');
let volumeProgressBar = controls.querySelector('.volume .volume__progress')
let volumeProgressBarInput = volumeProgressBar.querySelector('input');


let timerArea = controls.querySelector('.timer');
let currentTime = timerArea.querySelector('.currentTime');
let videoTime = timerArea.querySelector('.videoTime');

let timerBar = controls.querySelector('.controls__progressbar-current');



media.volume = .5;

let video = document.querySelector('video')

video.addEventListener('click' , function() {
    videoTime.textContent = getTime(media.duration);
    if(media.paused) {
        togglePlayIcon();
        media.play();
    } else {
        togglePlayIcon();
        media.pause();
    }
})


media.addEventListener('timeupdate' , function() {
    currentTime.textContent = getTime(media.currentTime);

    let barLength = (media.currentTime / media.duration) * 100;
    timerBar.style = `background : linear-gradient(90deg, rgba(230,126,34,1) ${barLength}%, #e1e1e1 0%);`
    timerBar.value = barLength;
})

play.addEventListener('click' , function() {
    videoTime.textContent = getTime(media.duration);
    if(media.paused) {
        togglePlayIcon();
        media.play();
    } else {
        togglePlayIcon();
        media.pause();
    }
})

rwd.addEventListener('click' , function() {
    media.currentTime = media.currentTime - 5;
});


fwd.addEventListener('click' , function() {
    media.currentTime = media.currentTime + 5;
});


timerBar.addEventListener('input' , function() {
    media.currentTime = (this.value / 100) * media.duration
})

fullscreen.addEventListener('click' , function(){
    if (!document.fullscreenElement) {
        if (playerArea.requestFullscreen) {
            playerArea.requestFullscreen();
        }else if(playerArea.mozFullscreenElemment){
            playerArea.mozFullscreenElemment();
        }else if(playerArea.msFullscreenElemment){
            playerArea.msFullscreenElemment();
        }else if(playerArea.webkitFullscreenElemment){
            playerArea.webkitFullscreenElemment();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }else if(document.mozCancelFullscreen){
            document.mozCancelFullscreen();
        }else if(document.msCancelFullscreen){
            document.msCancelFullscreen();
        }else if(document.webkitCancelFullscreen){
            document.webkitCancelFullscreen();
        }
    }
})
volumeIcon.addEventListener('click' , function() {
    volumeProgressBar.classList.toggle('active');
})

volumeIcon.addEventListener('mouseover' , function() {
    volumeProgressBar.classList.toggle('active');
})

volumeProgressBarInput.addEventListener('input' , function() {
   media.volume = this.value / 100; 
   this.style = `background : linear-gradient(90deg, rgba(230,126,34,1) ${this.value}%, #e1e1e1 0%);`
})

function togglePlayIcon() {
    let icon = play.querySelector('i');
    icon.classList.toggle('ion-md-pause');
    icon.classList.toggle('ion-md-play');
}

function getTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - ( minutes * 60 ))
    let minuteValue;
    let secondsValue;

    if(minutes < 10) {
        minuteValue = '0' + minutes;
    } else {
        minuteValue = minutes;
    }

    if(seconds < 10) {
        secondsValue = '0' + seconds;
    } else {
        secondsValue = seconds;
    }

    return minuteValue + ':' + secondsValue
} 