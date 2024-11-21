(function(window) {
    let defineLibrary = () => ({
        init : function(galleryId) {
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
                document.querySelector('body').style.backgroundColor = '#fff'
            })
            //---------------------------------
            let container = document.querySelector(galleryId);
            
            if(! container) {
                console.error('please add the correct element')
                return;
            }
            
            let firstImage = container.querySelector('.small-preview')
            let zoomedImage = container.querySelector('.zoomed-image');
            
            if(! zoomedImage) {
                console.error('please add a .zoomed-image tag');
                return;
            }
            
            if(! firstImage) {
                console.log('please add images with .small-preview class to your gallery');
                return;
            }
            
            zoomedImage.style.backgroundImage = `url(${firstImage.src})`
            
            container.addEventListener('click' , function(event) {
                let element = event.target;
                
                if (element.classList.contains('small-preview')) {
                    zoomedImage.style.backgroundImage = `url(${element.src})`
                }
            })
            
            zoomedImage.addEventListener('mouseenter' , function(){
                this.style.backgroundSize = '250%'
            })
            
            
            zoomedImage.addEventListener('mousemove' , function(event){
                let dimentions = this.getBoundingClientRect()
                
                let  x = event.clientX - dimentions.left
                let  y = event.clientY - dimentions.top
                
                x = Math.round(100 / (dimentions.width / x));
                y = Math.round(100 / (dimentions.height / y));
                
                this.style.backgroundPosition = `${x}% ${y}%`
            })
            zoomedImage.addEventListener('mouseleave' , function(){
                this.style.backgroundSize = 'cover'
                this.style.backgroundPosition = 'center'
            })
            
        }
    })
    
    if (typeof(vanillaZoom) == 'undefined') {
        window.vanillaZoom = defineLibrary();
    }else{
        console.log('library already defined.')
    }
})(window)
