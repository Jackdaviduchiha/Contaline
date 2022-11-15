

$( function(){

   $ (".xzoom, .xzoom-gallery").xzoom({
        zoomWidth: 400,
        tint : "#333",
       Xoffset : 15,
    }) ;
} ) ;

window.addEventListener('scroll',function(){
   let animacion = document.getElementById('animado')
   let posicionObj1 = animacion.getBoundingClientRect().top;
   console.log(posicionObj1);
   let tamañodePantalla = window.innerHeight/3.5;
    
   if (posicionObj1< tamañodePantalla){

       animacion.style.animation = 'mover 1s ease-out'
   }
})
