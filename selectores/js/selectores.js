/***********************************************************
* METODOS DE ACCESO AL DOM
*
*
* getElementById   
* getElementByClassName
* getElementByTagName
*
* querySelector
* querySelectorAll
* 
***********************************************************/              

 //Accedemos al elemento del dom por el id

 document.getElementById("capa-container").innerHTML += "Accedemos al elemento del dom por el id";

 //Accedemos al elemento del dom por la clase
    let num=1;
    let elementos = document.getElementsByClassName("capa");
    console.log(elementos);
    for (const elemento of elementos) {
        elemento.innerHTML = num;
        num++;
    }
    


//Accedemos al elemento del dom por la etiqueta
    let elementos2 = document.getElementsByTagName("div");
    console.log(elementos2);


//un ejemplo de noticias

    let capa_noticia = document.getElementById("capa-noticia");
    let noticias = document.getElementsByTagName("p");

    

    let ultima_noticia = document.createElement("p");
    ultima_noticia.innerHTML = "Ultima noticia";
    capa_noticia.appendChild(ultima_noticia);

    let noticia_destacada = document.createElement("p");
    noticia_destacada.innerHTML = "Noticia destacada";
    capa_noticia.prepend(noticia_destacada);

    let noticia_mitad = document.createElement("p");
    noticia_mitad.innerHTML = "Noticia en mitad";
    capa_noticia.insertBefore(noticia_mitad, capa_noticia.children[noticias.length/2]);

    console.log("Tenemos " + noticias.length + " noticias");


//querySelector y querySelectorAll
    let capa_container = document.querySelector("#capa-container");
    console.log(capa_container);

    let primera_capa = document.querySelector(".capa");
    console.log(primera_capa);

    let todas_las_capas = document.querySelectorAll(".capa");
    console.log(todas_las_capas);

//vamos a repetir la consulta que hicimos con getElementsByClassName pero con querySelectorAll
    let capa_resultado = document.querySelector(".capa.hola");
    console.log(capa_resultado);

//vamos a ver la diferencia entre querySelectorAll y getElementsByClassName
    let hijos = document.getElementsByClassName("hijo");
    console.log(hijos);
    console.log(hijos.length);
    let hijos2 = document.querySelectorAll(".hijo");
    console.log(hijos2);
    console.log(hijos2.length);
    

//vamos a cambiar el texto del parrafo al pulsar el boton
    let parrafo = document.getElementById("parrafo");
    let boton = document.getElementById("btnCambiarTexto");
    boton.addEventListener("click", function() {
        parrafo.innerHTML = "Texto cambiado";
    });