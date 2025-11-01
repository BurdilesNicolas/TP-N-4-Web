document.addEventListener("DOMContentLoaded", function (){
    const botonCuenta = document.getElementById("cuenta"); // Establece la existencia del botón 
    
    if (botonCuenta) {
        botonCuenta.addEventListener("click", function (){
            window.location.href = "cuenta.html"; // Te dirige al formulario de inicio de sesión de cuenta.html
        });
    }
});