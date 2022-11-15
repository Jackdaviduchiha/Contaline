

/*Efecto para las imagenes como E-comerce-----------------------------------------------------------------------------------------------------*/
let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('mouseover', function(){
        console.log(activeImages)
        
        if (activeImages.length > 0){
            activeImages[0].classList.remove('active')
        }
        

        this.classList.add('active')
        document.getElementById('featured').src = this.src
    })
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 180
})

buttonRight.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 180
})

var botones1 = document.querySelectorAll('.btn-expandir')
var texto_expandir = document.querySelectorAll('.texto_expandir')


botones1.forEach((elemento, clave)=>{
    elemento.addEventListener('click', () => {
          
          texto_expandir[clave].classList.toggle("abrir_cerrar")
       

    })

});

window.addEventListener('scroll',function(){
    let animacion = document.getElementById('animado')
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañodePantalla = window.innerHeight/3.5;
     
    if (posicionObj1< tamañodePantalla){

        animacion.style.animation = 'mover 1s ease-out'
    }
})
