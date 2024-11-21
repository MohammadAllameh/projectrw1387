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
    document.querySelector('body').style.backgroundColor = '#29324e'
})

//---------------------------------
let items = document.querySelectorAll('.cd-tabs-navigation li a')

items.forEach((item) => {
    item.addEventListener('click' , function(event){
        event.preventDefault();
        
        document.querySelector('.cd-tabs-navigation li a.selected').classList.remove('selected')
        this.classList.add('selected')
        
        let dataBox = this.getAttribute('data-content');
        
        document.querySelector('.cd-tabs-content li.selected').classList.remove('selected')
        document.querySelector(`.cd-tabs-content li[data-content="${dataBox}"]`).classList.add('selected')
    })
})