


window.addEventListener("keydown" , function(event){
    let audio = this.document.getElementById('audio'+event.key);
    let key = this.document.getElementById('key'+event.key);
    
    if(key == null)
        return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    key.addEventListener('transitionend' , function(e){
        if(e.propertyName != 'transform')
            return ;
            
        key.classList.remove('playing');
    });  

});