//referencias
let salida = document.getElementById("salida");
let opUserAgent = document.getElementById("opUserAgent");
let opLanguage  = document.getElementById("opLanguage");
let opLocationpathname = document.getElementById("opLocationpathname");

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