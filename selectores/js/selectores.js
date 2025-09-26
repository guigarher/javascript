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

    console.log("Tenemos " + noticias.length + " noticias");