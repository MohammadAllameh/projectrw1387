(function(window) {
    let defineLibrary = () => ({
        init : function(imageId) {
            let image = document.querySelector(imageId);
            if (! image) {
                console.error(`image element dosen't exist.`)
                return;
            }
            
            
            let zoomContiainer , zoomResult , zoomLens;
            
            image.addEventListener('mouseenter',function(event) {
                let imageBox = this.getBoundingClientRect()
                
                
                zoomContiainer = document.createElement('div');
                zoomContiainer.classList.add('zoom-container');
                zoomContiainer.style.width = `${imageBox.width}px`;
                zoomContiainer.style.height = `${imageBox.height}px`;
                zoomContiainer.style.position = 'absolute';
                zoomContiainer.style.top = `${imageBox.top + window.pageYOffset}px`;
                zoomContiainer.style.left = `${imageBox.left+ window.pageXOffset}px`;
                
                zoomLens = document.createElement('div');
                zoomLens.classList.add('img-zoom-lens');
                
                
                zoomResult = document.createElement('div');
                zoomResult.classList.add('img-zoom-result')
                zoomResult.style.position = 'absolute';
                zoomResult.style.top = `${imageBox.bottom + window.pageYOffset}px`
                
                
                
                zoomContiainer.insertAdjacentElement('afterbegin' , zoomResult)
                zoomContiainer.insertAdjacentElement('afterbegin' , zoomLens)
                
                document.querySelector('body').insertAdjacentElement('beforeend' ,zoomContiainer)
                let cx = zoomResult.offsetWidth / zoomLens.offsetWidth
                let cy = zoomResult.offsetHeight / zoomLens.offsetHeight
                
                zoomResult.style.backgroundImage = `url('${image.src}')`
                zoomResult.style.backgroundSize = `${image.width * cx}px ${image.height * cy}px`
                
                
                
                zoomContiainer.addEventListener('mousemove' , function(event) {
                    
                    let x = (event.clientX + window.pageXOffset) - imageBox.left;
                    let y = (event.clientY + window.pageYOffset)- imageBox.top;
                    console.log(event.clientY)
                    
                    x = x - (zoomLens.offsetWidth / 2)
                    y = y - (zoomLens.offsetHeight / 2)
                    
                    
                    if (x > image.width - zoomLens.offsetWidth) {x = image.width - zoomLens.offsetWidth}
                    if(x < 0){ x = 0}
                    
                    if(y > image.height - zoomLens.offsetWidth) {y =image.height - zoomLens.offsetWidth}
                    if(y < 0){ y = 0}
                    
                    
                    
                    zoomLens.style.top = `${y}px`
                    zoomLens.style.left = `${x}px`
                    
                    zoomResult.style.backgroundPosition = `-${x * cx}px -${y * cy}px`
                })
                zoomContiainer.addEventListener('mouseleave' , function(event){
                    this.remove();
                })
            })

        }
        
    })
    
    if (typeof(vanillaZoom) == 'undefined') {
        window.vanillaZoom = defineLibrary();
    }else{
        console.log('library already defined.')
    }
})(window)

