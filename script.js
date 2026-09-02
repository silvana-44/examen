const boton = document.getElementById("btnIntegrantes");
const integrantes = document.getElementById("integrantes");

boton.addEventListener("click", function () {

    if (integrantes.style.display === "none") {
        integrantes.style.display = "block";
        boton.textContent = "Ocultar integrantes";
    } else {
        integrantes.style.display = "none";
        boton.textContent = "Ver integrantes";
    }

});