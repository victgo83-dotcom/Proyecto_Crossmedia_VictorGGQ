function mostrarDetalleProducto() {
    var contenedor = document.querySelector('[data-product-detail]');

    if (!contenedor) {
        return;
    }

    var parametros = new URLSearchParams(window.location.search);
    var slug = parametros.get('slug') || 'playstation-5';
    var articulo = obtenerArticuloPorSlug(slug);

    if (!articulo) {
        document.title = 'Producto no encontrado | Splash Store';
        contenedor.innerHTML = [
            '<section class="product-info">',
            '<h1>Producto no encontrado</h1>',
            '<p>No pudimos encontrar el producto seleccionado.</p>',
            '<a class="detail-button" href="PagPrincipal.html">Volver al inicio</a>',
            '</section>'
        ].join('');
        return;
    }

    document.title = articulo.nombre + ' | Splash Store';
    contenedor.innerHTML = [
        '<img src="' + articulo.imagenUrl + '" alt="' + articulo.nombre + '">',
        '<section class="product-info">',
        '<p class="product-meta">' + articulo.plataforma + ' / ' + articulo.tipo + '</p>',
        '<h1>' + articulo.nombre + '</h1>',
        '<p class="price">' + formatoPrecio(articulo.precio) + '</p>',
        '<p>' + articulo.descripcion + '</p>',
        '<ul>',
        articulo.detalles.map(function(detalle) {
            return '<li>' + detalle + '</li>';
        }).join(''),
        '</ul>',
        '<div class="product-actions">',
        '<button class="detail-button" type="button" data-add-cart="' + articulo.id + '">Agregar al carrito</button>',
        '<a class="detail-button secondary" href="PagPrincipal.html">Volver al inicio</a>',
        '</div>',
        '</section>'
    ].join('');
}

mostrarDetalleProducto();
