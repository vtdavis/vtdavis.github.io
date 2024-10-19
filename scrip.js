//funcion que uestra el menu resposive
//funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionado
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className==""){
        x.className= "responsive";
    }else{
        x.className = "";
    }
}

function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    //hacemos desaparecer el menu una vez que se  ha selccionado una opciopn en el modo menu
    var x = document.getElementById("nav");
    x.className = "";
}

//detector el scrolling para aplicar la animaciones de las barras de habilidades 
window.onscroll = function(){
    efectoHabilidades()
}
function efectoHabilidades (){
    var skills = document.getElementById("skillS");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");

    }
}