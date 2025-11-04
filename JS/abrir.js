//Script para abrir formulario de cuenta
document.addEventListener("DOMContentLoaded", function (){ // Espera a que carge todo el documento
    const botonCuenta = document.getElementById("cuenta");
    
    if (botonCuenta) {
        botonCuenta.addEventListener("click", function (){ // Escucha el evento de click sobre el botón
            window.location.href = "cuenta.html"; // Te dirige al formulario de inicio de sesión de cuenta.html
        });
    }
});