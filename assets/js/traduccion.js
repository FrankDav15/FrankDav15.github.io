$(document).ready(function(){
    // Función para cambiar el idioma
    function cambiarIdioma(idioma) {
        if (idioma === "it") {
            $("html").attr("lang", "it");
            $("#btn-it").hide();
            $("#btn-en").show();
            $("#btn-it-mov").hide();
            $("#btn-en-mov").show();
            $("#menu-inicio").text('Inizio');
            $("#menu-about").text('Chi Siamo');
            $("#menu-contact").text('Contattaci');
            $("#menu-inicio-mov").text('Inizio');
            $("#menu-about-mov").text('Chi Siamo');
            $("#menu-contact-mov").text('Contattaci');
            $(".contact-button").text('CONTATTACI');
            $("#header-description").text('Il primo Marketplace AI per PMI e Startup. Cambiare il paradigma M&A.');
            

        } else if (idioma === "en") {
            $("html").attr("lang", "en");
            $("#btn-en").hide();
            $("#btn-it").show();
            $("#btn-en-mov").hide();
            $("#btn-it-mov").show();
            $("#menu-inicio").text('Home');
            $("#menu-about").text('About Us');
            $("#menu-contact").text('Contact'); 
            $("#menu-inicio-mov").text('Home');
            $("#menu-about-mov").text('About Us');
            $("#menu-contact-mov").text('Contact');
            $(".contact-button").text('CONTACT US');
            $("#header-description").text('The first AI Marketplace for SMEs and Startups. Changing the M&A paradigm.');
           
            
        }
    }

    //Por default al cargar en inglés
    cambiarIdioma("en");

    // Al hacer clic en el botón de Español
    $("#btn-it").click(function(){
        cambiarIdioma("it");
    });

    // Al hacer clic en el botón de Inglés
    $("#btn-en").click(function(){
        cambiarIdioma("en");
    });

     // Al hacer clic en el botón de Español
    $("#btn-it-mov").click(function(){
        cambiarIdioma("it");
    });

    // Al hacer clic en el botón de Inglés
    $("#btn-en-mov").click(function(){
        cambiarIdioma("en");
    });
});