function mostrarHora() {
    const reloj = document.getElementById('reloj');
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
  
    reloj.innerHTML = `${hora}:${minutos}:${segundos}`;
  }
  
  setInterval(mostrarHora, 1000);
  