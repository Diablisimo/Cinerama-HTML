function obtenerFechas() {
    var fechas = [];
    for (var i = 0; i < 4; i++) {   // Lo limite a 5 ya que en varios lugares también renuevan programación a los 4 días
      var fecha = new Date();
      fecha.setDate(fecha.getDate() + i);
      fechas.push(fecha.toLocaleDateString());
    }
    return fechas;
  }
  
  function mostrarFechas() {
    var fechas = obtenerFechas();
    var fechaSelect = document.getElementById("fecha-select");
    fechas.forEach(function(fecha) {
      var option = document.createElement("option");
      option.value = fecha;
      option.textContent = fecha;
      fechaSelect.appendChild(option);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    mostrarFechas();
  });
  