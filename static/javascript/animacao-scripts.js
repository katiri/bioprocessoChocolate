var animados = document.getElementsByClassName('animar');

function animateImages(){
    for(i = 0; i < animados.length; i++){
        var bounding = animados[i].getBoundingClientRect();
        if(bounding.top < window.innerHeight){
            animados[i].classList.add('animado');
        }
    }
}

document.addEventListener('scroll', function(){
    animateImages();
    document.removeEventListener('scroll', this);
});