new slider({
    element : document.querySelector('#sliders'),
    sliderClass : 'slider',
    currentSlider : (slider) => {
        console.log(slider)
    },
    auto : 3000
})