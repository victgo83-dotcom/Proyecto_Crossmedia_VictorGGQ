# Base de datos visual de Splash Store

Esta base esta pensada para la materia como apoyo visual y logico simple.

En esta version estatica, la "base de datos" que usa la pagina esta en:

- `recursos/articulos.js`

Ese archivo contiene los productos, sus precios, imagenes, descripciones y las listas donde deben aparecer. Por ejemplo, un producto puede estar en `ps-consolas`, `inicio-destacados` o `games-ultimas`.

El archivo `splash_store.sql` queda como referencia si despues quieres llevarlo a MySQL. Contiene una tabla principal:

- `articulos`

Campos incluidos:

- `id`
- `nombre`
- `marca`
- `categoria`
- `precio`
- `descripcion`
- `imagen_url`
- `destacado`
- `popular`
- `ultima_salida`

No incluye usuarios, sesiones, pagos ni carrito real. El carrito de la pagina queda como simulacion visual usando `localStorage` del navegador.

## Estructura recomendada

La estructura actual funciona para un prototipo visual:

- `paginas/`: paginas HTML.
- `estilos/`: estilos CSS.
- `recursos/`: imagenes, video y JavaScript.
- `base_datos/`: referencia SQL y notas.
