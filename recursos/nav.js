var CLAVE_CARRITO = 'splashStoreCarrito';

function leerCarrito() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_CARRITO)) || [];
    } catch (error) {
        return [];
    }
}

function guardarCarrito(carrito) {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

function obtenerItemsCarrito() {
    return leerCarrito().map(function(item) {
        var articulo = obtenerArticuloPorId(item.id);
        return articulo ? { articulo: articulo, cantidad: item.cantidad } : null;
    }).filter(Boolean);
}

function contarItemsCarrito() {
    return leerCarrito().reduce(function(total, item) {
        return total + item.cantidad;
    }, 0);
}

function calcularTotalCarrito() {
    return obtenerItemsCarrito().reduce(function(total, item) {
        return total + item.articulo.precio * item.cantidad;
    }, 0);
}

function actualizarContadorCarrito() {
    document.querySelectorAll('[data-cart-count]').forEach(function(contador) {
        contador.textContent = contarItemsCarrito();
    });
}

function agregarAlCarrito(id) {
    var carrito = leerCarrito();
    var item = carrito.find(function(producto) {
        return producto.id === Number(id);
    });

    if (item) {
        item.cantidad += 1;
    } else {
        carrito.push({ id: Number(id), cantidad: 1 });
    }

    guardarCarrito(carrito);
    actualizarCarrito();
    abrirCarrito();
}

function cambiarCantidad(id, cambio) {
    var carrito = leerCarrito().map(function(item) {
        if (item.id === Number(id)) {
            return { id: item.id, cantidad: item.cantidad + cambio };
        }

        return item;
    }).filter(function(item) {
        return item.cantidad > 0;
    });

    guardarCarrito(carrito);
    actualizarCarrito();
}

function eliminarDelCarrito(id) {
    guardarCarrito(leerCarrito().filter(function(item) {
        return item.id !== Number(id);
    }));
    actualizarCarrito();
}

function crearResumenCarrito() {
    var items = obtenerItemsCarrito();

    if (!items.length) {
        return '<div class="cart-empty"><p>Tu carrito esta vacio.</p><a class="detail-button" href="PagPrincipal.html">Ver productos</a></div>';
    }

    return [
        '<div class="cart-items">',
        items.map(function(item) {
            return [
                '<article class="cart-item">',
                '<img src="' + item.articulo.imagenUrl + '" alt="' + item.articulo.nombre + '">',
                '<div>',
                '<h3>' + item.articulo.nombre + '</h3>',
                '<p>' + formatoPrecio(item.articulo.precio) + '</p>',
                '<div class="quantity-controls">',
                '<button type="button" data-cart-change="-1" data-cart-id="' + item.articulo.id + '">-</button>',
                '<span>' + item.cantidad + '</span>',
                '<button type="button" data-cart-change="1" data-cart-id="' + item.articulo.id + '">+</button>',
                '</div>',
                '<button class="remove-cart-button" type="button" data-cart-remove="' + item.articulo.id + '">Quitar</button>',
                '</div>',
                '</article>'
            ].join('');
        }).join(''),
        '</div>',
        '<div class="cart-total"><span>Total</span><strong>' + formatoPrecio(calcularTotalCarrito()) + '</strong></div>',
        '<a class="checkout-button" href="Carrito.html">Ver carrito</a>'
    ].join('');
}

function actualizarCarrito() {
    var panelContenido = document.querySelector('[data-cart-panel-content]');
    var paginaContenido = document.querySelector('[data-cart-page-content]');
    var totalPago = document.querySelector('[data-payment-total]');

    if (panelContenido) {
        panelContenido.innerHTML = crearResumenCarrito();
    }

    if (paginaContenido) {
        paginaContenido.innerHTML = crearResumenCarrito().replace('href="Carrito.html">Ver carrito', 'href="Pago.html">Ir a pagar');
    }

    if (totalPago) {
        totalPago.textContent = formatoPrecio(calcularTotalCarrito());
    }

    actualizarContadorCarrito();
}

function abrirCarrito() {
    var cartPanel = document.querySelector('.cart-panel');
    var cartOverlay = document.querySelector('.cart-overlay');

    if (!cartPanel || !cartOverlay) {
        return;
    }

    cartPanel.classList.add('active');
    cartOverlay.classList.add('active');
    cartPanel.setAttribute('aria-hidden', 'false');
}

function cerrarCarrito() {
    var cartPanel = document.querySelector('.cart-panel');
    var cartOverlay = document.querySelector('.cart-overlay');

    if (!cartPanel || !cartOverlay) {
        return;
    }

    cartPanel.classList.remove('active');
    cartOverlay.classList.remove('active');
    cartPanel.setAttribute('aria-hidden', 'true');
}

document.addEventListener('click', function(event) {
    var abrir = event.target.closest('.cart-button');
    var cerrar = event.target.closest('.cart-close');
    var agregar = event.target.closest('[data-add-cart]');
    var cambio = event.target.closest('[data-cart-change]');
    var quitar = event.target.closest('[data-cart-remove]');

    if (abrir) {
        abrirCarrito();
    }

    if (cerrar || event.target.classList.contains('cart-overlay')) {
        cerrarCarrito();
    }

    if (agregar) {
        event.preventDefault();
        agregarAlCarrito(agregar.dataset.addCart);
    }

    if (cambio) {
        cambiarCantidad(cambio.dataset.cartId, Number(cambio.dataset.cartChange));
    }

    if (quitar) {
        eliminarDelCarrito(quitar.dataset.cartRemove);
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarCarrito();
    }
});

actualizarCarrito();
