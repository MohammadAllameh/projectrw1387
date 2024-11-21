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

class draggable {
    dragSrcElement;
    list;
    update;
    constructor(options) {
        this.setupList(options);
        this.list = options.list;
        if(options.update) this.update = options.update;
        for(let listItem of options.el.children) {
            this.addDnDHandlers(listItem)
        }
    }
    
    
    setupList(options) {
        let {list , el : element , template } = options;
        
        if(! element ) throw Error('the list is not exists');
        if(! list ) throw Error('the data is not exists')
        if(! Array.isArray(list)) throw Error('the list is not an array, please insert an array')
        if(! template) throw Error('please add a Tempalte function')
        if(typeof template !== "function") throw Error('please add a function as template') 
        
        list.forEach(item => element.innerHTML += template(item))
    }
    
    
    addDnDHandlers(element) {
        element.setAttribute('draggable' , true);
        
        
        element.addEventListener('dragstart' , this.handleDragStart.bind(this))
        element.addEventListener('drageneter' , this.handleDragEneter.bind(this))
        element.addEventListener('dragover' , this.handleDragOver.bind(this))
        element.addEventListener('dragleave' , this.handleDragLeave.bind(this))
        element.addEventListener('drop' , this.handleDragDrop.bind(this))
        element.addEventListener('dragend' , this.handleDragEnd.bind(this))
    }
    
    handleDragStart(e) {
        this.dragSrcElement = e.target;
        
        e.dataTransfer.setData('text/html' , e.target.outerHTML)
        
        e.target.classList.add('dragElement')
    }
    
    handleDragEneter(e) {
    }
    
    handleDragOver(e) {
        if(e.preventDefault) e.preventDefault();
        
        e.target.classList.add('over');
        
    }
    
    handleDragLeave(e) {
        e.target.classList.remove('over');
    }
    
    handleDragDrop(e) {
        let target = e.target.closest('.list-item');
        
        if(this.dragSrcElement != target) {
            target.parentNode.removeChild(this.dragSrcElement);
            let dropHTML = e.dataTransfer.getData('text/html');
            target.insertAdjacentHTML('beforebegin' , dropHTML);
            this.addDnDHandlers(target.previousSibling)
        }
        e.target.classList.remove('over');
        
    }
    
    handleDragEnd(e) {
        e.target.classList.remove('dragElement');
        
        let newlist = [];
        list.querySelectorAll('.list-item').forEach(elm => newlist.push(this.list.find(item => elm.id == item.id)))
        this.update(newlist)
    }
}