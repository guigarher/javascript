//referencias
let salida = document.getElementById("salida");
let opUserAgent = document.getElementById("opUserAgent");
let opLanguage  = document.getElementById("opLanguage");
let opLocationpathname = document.getElementById("opLocationpathname");
let opInnerWidth = document.getElementById("opInnerWidth");
let opInnerHeight = document.getElementById("opInnerHeight");


//navigator.userAgent
opUserAgent.addEventListener("mouseover", function () {
  let ua = navigator.userAgent; // leo la info
  salida.textContent = ua; // la muestro
});
opUserAgent.addEventListener("mouseout", function () {
  salida.textContent = ""; // limpio
});

//vabigator.language
opLanguage.addEventListener("mouseover", function () {
  let lang = navigator.language;
  salida.textContent = lang;
});
opLanguage.addEventListener("mouseout", function () {
  salida.textContent = "";
});

//location.pathname
opLocationpathname.addEventListener("mouseover", function () {
  let path = location.pathname;
  salida.textContent = path;
});
opLocationpathname.addEventListener("mouseout", function () {
  salida.textContent = "";
});

//innerWidth
opInnerWidth.addEventListener("mouseover", function () {
  let ancho = window.innerWidth; // leo la info
  salida.textContent = ancho; // la muestro
});

opInnerWidth.addEventListener("mouseout", function () {
  salida.textContent = ""; // limpio
});

//innerHeight
opInnerHeight.addEventListener("mouseover", function () {
  let alto = window.innerHeight; // leo la info
  salida.textContent = alto; // la muestro
});
opInnerHeight.addEventListener("mouseout", function () {
  salida.textContent = ""; // limpio
});