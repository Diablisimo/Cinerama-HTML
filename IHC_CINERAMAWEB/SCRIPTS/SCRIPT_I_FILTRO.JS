function buscarPeliculas(pelicula) {
    console.log("Valor seleccionado:", pelicula);
    var peliculas = document.querySelectorAll('.pelicula-item');

    for (var i = 0; i < peliculas.length; i++) {
        peliculas[i].style.display = 'none';
        var nombrePelicula = peliculas[i].querySelector('.descripcion').textContent;
        console.log("Nombre de la película:", nombrePelicula);
        if (nombrePelicula.toUpperCase().includes(pelicula.toUpperCase())) {
            peliculas[i].style.display = 'block';
        }
    }
}
