// Valor a modificar

/*
A mostrar en el <div class="resultado">
Si es de 5 a 10: "¡¡Has APROBADO!!"(color "green")
o sinó: "Has suspendido" (color "red")

A mostrar en el <div class="nota">
De 9 en adelante:       "Excelente"
De 7 a menos de 9:      "Notable"
De 5 hasta menos de 7:  "Aprobado"
Menos de 5:             "Suspendido"
Menos de 0 o más de 10: "No te flipes"
*/

/* Usar sólo TERNARIOS
(...) ? :
*/

function calcular() {
  // 1) Leer la nota del input
  let nota = Number(document.getElementById("notaInput").value);

  // 2) Seleccionar los <div>
  let resultado = document.querySelector(".resultado");
  let calificativo = document.querySelector(".nota");

  // 3) Mostrar aprobado/suspenso
  resultado.innerHTML = 
    (nota >= 5 && nota <= 10) 
      ? `<span style="color:green">¡¡Has APROBADO!!</span>` 
      : `<span style="color:red">Has suspendido</span>`;

  // 4) Mostrar calificativo
  calificativo.innerHTML = 
    (nota < 0 || nota > 10) ? "No te flipes" :
    (nota < 5) ? "Suspendido" :
    (nota < 7) ? "Aprobado" :
    (nota < 9) ? "Notable" : "Excelente";
}
