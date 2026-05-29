var formularioPago = document.querySelector('[data-payment-form]');
var mensajePago = document.querySelector('[data-payment-error]');

if (formularioPago) {
    formularioPago.addEventListener('submit', function(event) {
        event.preventDefault();

        if (mensajePago) {
            mensajePago.textContent = 'Error: pasarela de pago no disponible. Esta compra es una simulacion para el prototipo.';
            mensajePago.classList.add('active');
        }
    });
}
