const botonPanico = document.getElementById("btnPanico");

botonPanico.addEventListener("click", activarPanico);

function activarPanico() {
    const fecha = new Date().toLocaleString();

    document.getElementById("estado").innerHTML =
        "✅ Tu solicitud de ayuda fue enviada.<br><br>" +
        "Mantente en un lugar seguro. Un contacto de apoyo será notificado.<br><br>" +
        "Hora del evento: " + fecha;

    botonPanico.disabled = true;
}


