function obtenerProductosPorLista(lista) {
    if (lista === 'destacados') {
        return articulos.filter(function(articulo) { return articulo.destacado; });
    }

    if (lista === 'populares') {
        return articulos.filter(function(articulo) { return articulo.popular; });
    }

    if (lista === 'ultimas-salidas') {
        return articulos.filter(function(articulo) { return articulo.ultimaSalida; });
    }

    return articulos.filter(function(articulo) {
        return articulo.listas && articulo.listas.indexOf(lista) !== -1;
    });
}

function crearTarjetaArticulo(articulo) {
    return [
        '<article class="card">',
        '<a class="card-main" href="Producto.html?slug=' + articulo.slug + '">',
        '<img src="' + articulo.imagenUrl + '" alt="' + articulo.nombre + '">',
        '<h3>' + articulo.nombre + '</h3>',
        '<p>' + articulo.marca + '</p>',
        '<p class="price">' + formatoPrecio(articulo.precio) + '</p>',
        '</a>',
        '<button class="add-cart-button" type="button" data-add-cart="' + articulo.id + '">Agregar</button>',
        '</article>'
    ].join('');
}

function mostrarArticulos() {
    document.querySelectorAll('[data-productos]').forEach(function(contenedor) {
        var lista = contenedor.dataset.productos;
        var productosFiltrados = obtenerProductosPorLista(lista);

        contenedor.innerHTML = productosFiltrados.map(crearTarjetaArticulo).join('');
    });
}

mostrarArticulos();
