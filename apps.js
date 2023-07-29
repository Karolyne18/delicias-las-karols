//Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 5));
    }
}

//Menu-Hamburguesa
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){

        menu.classList.toggle("spread")
    }
})

