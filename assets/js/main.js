// Presentación personal

var español = "Ella soy yo, natural de la ciudad de Ayacucho - Huamanga. Estoy cursando la carrera de Ingeniería de Software con Inteligencia Artificial en el Intituto de Senati, para ser mas especifico,en el CFP de Ayacucho.<br><br>Estudié mi primaria en la institución Abraham Valdelomar, ubicado en el distrito Carmen Alto. Mis dos primeros años de educación secundaria la lleve en el Colegio Abraham Valdelomar, mientras que mis ultimos tres grados de secundaria las lleve en el Colegio de Alto Rendimiento de Ayacucho (CoAR Ayacucho).<br><br>En el cuarto y quinto grado del CoAR Ayachucho, cursé y culminé satisfactoriamente el Programa Diploma del Bachillerato Internacional. Asimismo, alcancé un nivel intermedio en el habla inglesa.<br><br>En mi último año en el CoAR logré llegar a la Etapa Nacional en los Juegos Florales del Perú en la Disciplina de Robótica y programación.<br><br>Mis gustos actualmente tienen que ver con la robótica, la programación y la inteligencia Artificial, del mismo modo, facilitar la vida de las personas a través del uso de la tecnología y los distintos avances que pueda tener.";
var ingles = "This is me, a native of the city of Ayacucho - Huamanga. I am studying Software Engineering with Artificial Intelligence at the Senati Institute, to be more specific, at the CFP of Ayacucho.<br><br>I studied my elementary school at the Abraham Valdelomar institution, located in the Carmen Alto district. I took my first two years of secondary education at the Abraham Valdelomar School, while my last three high school grades were taken at the Ayacucho High Performance School (CoAR Ayacucho).<br><br>In the fourth and fifth grade from CoAR Ayachucho, I attended and successfully completed the International Baccalaureate Diploma Program. Also, I reached an intermediate level in English speaking.<br><br>In my last year at CoAR I managed to reach the National Stage in the Floral Games of Peru in the Discipline of Robotics and programming.<br><br>My tastes currently have to do with robotics, programming and Artificial intelligence, in the same way, facilitating people's lives through the use of technology and the different advances that it may have.";

$("#button1").click(function(){
    $("#button1").removeClass('non-active');
    $("#button1").addClass('active');
    $("#button1").html('Español');

    $("#button2").removeClass('active');
    $("#button2").addClass('non-active');
    $("#button2").html('Inglés');

    $("#description-about-me").html(español);
});

$("#button2").click(function(){
    $("#button2").removeClass('non-active');
    $("#button2").addClass('active');
    $("#button2").html('English');

    $("#button1").removeClass('active');
    $("#button1").addClass('non-active');
    $("#button1").html('Spanish');

    $("#description-about-me").html(ingles);
});

// Slider de fotos
jQuery(document).ready(function() {
    $('#slide').slippry()
});

// Mostrar certificados
$("#ib-btn").click(function(){
    $("#ib-iframe").toggle(300);
});
$("#sing-btn").click(function(){
    $("#sing-iframe").toggle(300);
});
$("#empr-btn").click(function(){
    $("#empr-iframe").toggle(300);
});
$("#gcon-btn").click(function(){
    $("#gcon-iframe").toggle(300);
});
$("#cyber-btn").click(function(){
    $("#cyber-iframe").toggle(300);
});
$("#iot-btn").click(function(){
    $("#iot-iframe").toggle(300);
});
$("#cambridge-btn").click(function(){
    $("#cambridge-iframe").toggle(300);
});

/* Descargar proyectos */
$(".donwload-project").click(function(){
    urlProjects = $(this).val();

    if (urlProjects === "this-page") {
        location.href='https://drive.google.com/u/0/uc?id=17AHyTxHx9C5Sq354qtxpG0krFOMnZCvh&export=download';
    } else {
        switch (urlProjects) {
            case "python":
                location.href='https://drive.google.com/u/0/uc?id=1XqCCEI4mgOtM8-YgBxeX0UMtTH14dBq5&export=download';
                break;
            case "java":
                location.href='https://drive.google.com/u/0/uc?id=1B1YX-RfxKHXMrNqYds3ekJsN-U5cXqve&export=download';
                break;
            case "php-mysql":
                location.href='https://drive.google.com/u/0/uc?id=1yRdo8h950ppFqBXGjAAVtx3pe3jbLkGE&export=download';
                break;
            default:
                alert("Opción inválida")
                break;
        }
    }
});
