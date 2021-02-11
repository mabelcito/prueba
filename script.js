$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("mabel");
        }else{
            $('.navbar').removeClass("mabel");
        }
    });

    // Comando de menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".prueba2", {
        strings: ["Mabelcito", "mabelcito.site"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing", {
        strings: ["Sitio Web.", "Portafolio."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing2", {
        strings: ["Pre-Desarrollador", "Pre-Dinesador.", "Un buen esclavo."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});