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
class slider {
    sliderIndex = 1;
    
    constructor(options) {
        this.options = options;
        this.intialStuff();
        
        this.createNextAndPrevBtns()
        this.createDots();
        
        this.showSlides(1);
        this.setInterval();
    }
    
    
    intialStuff() {
        let { element : sliderElement , sliderClass , auto} = this.options;
        
        if(! sliderElement ) throw Error('slider element is not exists');
        Number.isInteger(auto) ? this.auto = auto :  this.auto = 0;
        
        this.sliders = [...sliderElement.children].filter(elm => elm.classList.contains(sliderClass))
    }
    
    createNextAndPrevBtns() {
        let { element : sliderElement } = this.options;
        
        sliderElement.insertAdjacentHTML('beforeend' , `
            <a class="next">&#10095;</a>
            <a class="prev">&#10094;</a>
        `);
        
        sliderElement.querySelector('.next').addEventListener('click' , () => this.nextAndPrevSlide(this.sliderIndex += 1))
        sliderElement.querySelector('.prev').addEventListener('click' , () => this.nextAndPrevSlide(this.sliderIndex -= 1))
    }
    
    nextAndPrevSlide = (n) => {
        this.resetInterval();
        this.showSlides(n)
    }
    currentSlide = n => {
        this.resetInterval();
        this.showSlides(this.sliderIndex = n) 
    }
    
    createDots() {
        let { element : sliderElement} = this.options;
        
        let dotElements = [...this.sliders].map((slider , index) => `<span class="dot" data-slide="${index+1}"></span>`)
        
        let dots = document.createElement('div')
        dots.classList.add('dots');
        dots.innerHTML = `${dotElements.join('')}`
        
        sliderElement.after(dots);
        
        this.dots = dots.querySelectorAll('.dot');
        this.dots.forEach(dot => dot.addEventListener('click' , e => this.currentSlide(parseInt(e.target.dataset.slide))))
    
    }
    
    showSlides(number) {
        let { element : sliderElement , sliderClass , currentSlider } = this.options;
        
        if(number > this.sliders.length) this.sliderIndex = 1;
        if(number < 1 ) this.sliderIndex = this.sliders.length
        
        sliderElement.querySelector(`.${sliderClass}.active`).classList.remove('active');
        this.dots.forEach(dot => dot.classList.remove('active'))
        
        this.sliders[this.sliderIndex-1].classList.add('active');
        this.dots[this.sliderIndex-1].classList.add('active')
        
        if(currentSlider) currentSlider(this.sliders[this.sliderIndex-1])
    }
    
    setInterval() {
        if (this.auto !== 0) {
            this.intervalId =  setInterval(() => this.showSlides(this.sliderIndex += 1), this.auto);
        }
    }
    
    resetInterval() {
        clearInterval(this.intervalId);
        this.setInterval()
    }
}