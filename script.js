function actualizarHora() {
    let fecha = new Date();
    let segundos = fecha.getSeconds();
    let minutos = fecha.getMinutes();
    let horas = fecha.getHours();

    let segundosH = document.getElementById("segundosA");
    let minutosH = document.getElementById("minutosA");
    let horasH = document.getElementById("horasA");
    let saludoD = document.getElementById("saludo");
    let horarioH = document.getElementById("horario");

    segundosH.textContent = segundos;
    minutosH.textContent = minutos;
    horasH.textContent = horas;

    if ( horas >= 8 && minutos >= 1 && horas < 12) {
        saludoD.textContent = `BUENOS DIAS!!!! :D`;
        horarioH.textContent = ` a.m.`
    }
    if (horas >= 12 && minutos >= 1 && horas < 19) {
        saludoD.textContent = `BUENAS TARDES!!!! :|`;
        horarioH.textContent = `     p.m.`
    }
    if (horas >= 19 && minutos >= 1 ) {
        saludoD.textContent = `BUENAS NOCHES!!!! :3`;
    }
}

setInterval (actualizarHora,1000);


