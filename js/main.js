// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});


/*Mostrar y ocultar los videos*/ 
var botones1 = document.querySelectorAll('.btn-expandir')
var texto_expandir = document.querySelectorAll('.texto_expandir')


botones1.forEach((elemento, clave)=>{
    elemento.addEventListener('click', () => {
          
          texto_expandir[clave].classList.toggle("abrir_cerrar")
       

    })

});



window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});
window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    apertura();
});



let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}



function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";

}
/*hacer zoom en imagenes*/ 

document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});





let ubicacionPrincipal = window.pageYOffset; //0


AOS.init({
  
});

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})


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








$( function(){

    $ (".xzoom, .xzoom-gallery").xzoom({
         zoomWidth: 400,
         tint : "#333",
        Xoffset : 15,
     }) ;
 } ) ;
 
 var botones1 = document.querySelectorAll('.btn-expandir')
var texto_expandir = document.querySelectorAll('.texto_expandir')


botones1.forEach((elemento, clave)=>{
    elemento.addEventListener('click', () => {
          
          texto_expandir[clave].classList.toggle("abrir_cerrar")
       

    })

});

/*efecto scrock  */

window.addEventListener('scroll',function(){
    let animacion = document.getElementById('animado')
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañodePantalla = window.innerHeight/3.5;
     
    if (posicionObj1< tamañodePantalla){

        animacion.style.animation = 'mover 1s ease-out'
    }
})
