$(document).ready(function(){
    // Función para cambiar el idioma
    function cambiarIdioma(idioma) {
        if (idioma === "it") {
            $("html").attr("lang", "it");
            $("#btn-es").hide();
            $("#btn-en").show();
            $("#btn-es-mov").hide();
            $("#btn-en-mov").show();
            $("#menu-inicio").text('Inicio');
            $("#menu-servicios").text('Servicios');
            $("#menu-faq").text('Preguntas Frecuentes');
            $("#menu-about").text('Conocenos');
            $("#menu-contact").text('Contactanos');
            $("#menu-inicio-mov").text('Inicio');
            $("#menu-servicios-mov").text('Servicios');
            $("#menu-faq-mov").text('Preguntas Frecuentes');
            $("#menu-about-mov").text('Conocenos');
            $("#menu-contact-mov").text('Contactanos');
           

        } else if (idioma === "en") {
            $("html").attr("lang", "en");
            $("#btn-en").hide();
            $("#btn-es").show();
            $("#btn-en-mov").hide();
            $("#btn-es-mov").show();
            $("#menu-inicio").text('Home');
            $("#menu-servicios").text('Services');
            $("#menu-faq").text('FAQ');
            $("#menu-about").text('About Us');
            $("#menu-contact").text('Contact'); 
            $("#menu-inicio-mov").text('Home');
            $("#menu-servicios-mov").text('Services');
            $("#menu-faq-mov").text('FAQ');
            $("#menu-about-mov").text('About Us');
            $("#menu-contact-mov").text('Contact');
            
        }
    }

    //Por default al cargar es español.
    cambiarIdioma("en");

    // Al hacer clic en el botón de Español
    $("#btn-es").click(function(){
        cambiarIdioma("es");
    });

    // Al hacer clic en el botón de Inglés
    $("#btn-en").click(function(){
        cambiarIdioma("en");
    });

     // Al hacer clic en el botón de Español
    $("#btn-es-mov").click(function(){
        cambiarIdioma("es");
    });

    // Al hacer clic en el botón de Inglés
    $("#btn-en-mov").click(function(){
        cambiarIdioma("en");
    });
});