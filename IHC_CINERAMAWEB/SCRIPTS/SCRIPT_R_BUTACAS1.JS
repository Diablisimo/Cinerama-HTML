document.addEventListener("DOMContentLoaded", function () {
    const seats = document.querySelectorAll(".row .seat:not(.sold)");
    const count = document.getElementById("count");
    const total = document.getElementById("total");
    const bookingApp = document.querySelector(".booking-app");
    const movieSelect = document.getElementById("movie");
  
    let ticketPrice = 5.50; // Precio inicial, ajusta según corresponda
  
    // Actualiza el contador y el total
    function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll(".row .seat.selected");
      const selectedSeatsCount = selectedSeats.length;
      count.innerText = selectedSeatsCount;
      total.innerText = selectedSeatsCount * ticketPrice;
    }
  
    // Marca/desmarca el asiento seleccionado
    bookingApp.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("sold")
      ) {
        e.target.classList.toggle("selected");
        updateSelectedCount();
      }
    });
  
    // Selecciona una película
    movieSelect.addEventListener("change", function (e) {
      ticketPrice = +e.target.value;
      updateSelectedCount();
    });
  
    // Inicializa el contador y el total
    updateSelectedCount();
  });
  