function fadeOutEffect() {
    var fadeTarget = document.getElementById("carregando");
    var fadeEffect = setInterval(function (){
        if(!fadeTarget.style.opacity){
            fadeTarget.style.opacity = 1;
        }
        if(fadeTarget.style.opacity > 0){
            fadeTarget.style.opacity -= 0.1;
        }
        else{
            clearInterval(fadeEffect);
            fadeTarget.style.display = 'none';
        }
        
    }, 40);
    animateImages();
}

window.onload = function (){
    fadeOutEffect();
}