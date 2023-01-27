//Inicializa y actualiza el acordión de Bootstrap segun tamaño de la ventana

var mediaqueryList = window.matchMedia("(min-width:1000px)");

function funcion_reponsive(EventoMediaQueryList) {
    if(EventoMediaQueryList.matches) {
        document.getElementById("panelsStayOpen-collapseOne").classList.add("show");
    } else {
        document.getElementById("panelsStayOpen-collapseThree").classList.add("show");
    }
  }
  
mediaqueryList.addListener(funcion_reponsive);


if (window.innerWidth > 1000) 
    document.getElementById("panelsStayOpen-collapseOne").classList.add("show");

