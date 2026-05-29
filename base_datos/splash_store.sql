CREATE DATABASE IF NOT EXISTS splash_store
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE splash_store;

CREATE TABLE articulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    categoria VARCHAR(80) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen_url TEXT NOT NULL,
    destacado BOOLEAN NOT NULL DEFAULT FALSE,
    popular BOOLEAN NOT NULL DEFAULT FALSE,
    ultima_salida BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO articulos
(nombre, marca, categoria, precio, descripcion, imagen_url, destacado, popular, ultima_salida)
VALUES
('PlayStation 5', 'Sony', 'Consolas', 6000.00, 'Consola de nueva generacion con SSD de alta velocidad, graficos 4K y control DualSense.', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566040_sd.jpg', TRUE, TRUE, FALSE),
('Xbox Series X', 'Microsoft', 'Consolas', 5800.00, 'Consola Xbox de alto rendimiento para juegos en 4K y experiencia next-gen.', 'https://cdn.alfabetajuega.com/alfabetajuega/2020/09/Xbox-Series-X-caja-10092020.jpg', TRUE, TRUE, FALSE),
('Nintendo Switch 2', 'Nintendo', 'Consolas', 5000.00, 'Consola hibrida para jugar en modo portatil o conectada al televisor.', 'https://www.digitaltrends.com/wp-content/uploads/2025/05/nintendo-switch-2-box.png', TRUE, TRUE, TRUE),
('Control DualSense', 'Sony', 'Mandos', 800.00, 'Mando inalambrico para PlayStation 5 con respuesta haptica y gatillos adaptativos.', 'https://areajugones.sport.es/wp-content/uploads/2020/09/ps5-accesorios-1.jpeg', TRUE, FALSE, FALSE),
('Control Xbox', 'Microsoft', 'Mandos', 700.00, 'Mando inalambrico para Xbox con diseno ergonomico y conectividad estable.', 'https://mercadocompras.co.cr/wp-content/uploads/sites/74/2021/02/image019.png', TRUE, FALSE, FALSE),
('Razer Barracuda X', 'Razer', 'Auriculares', 1300.00, 'Auriculares gamer inalambricos para partidas largas y comunicacion clara.', 'https://tse1.mm.bing.net/th/id/OIP.3v1wwVcM1Mf3KRO0w6cxZQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', TRUE, FALSE, FALSE),
('Redragon Kumara K552', 'Redragon', 'Teclados', 700.00, 'Teclado mecanico compacto con iluminacion y switches para gaming.', 'https://tse2.mm.bing.net/th/id/OIP.EH4bViyrFmUkxFNEWl5evAHaF1?rs=1&pid=ImgDetMain&o=7&rm=3', TRUE, FALSE, FALSE),
('Redragon Griffin M607', 'Redragon', 'Mouse', 500.00, 'Mouse gamer RGB con buen agarre y precision para juegos competitivos.', 'https://tse4.mm.bing.net/th/id/OIP.XOToQ2q45yqgB0xRXxm1DwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', TRUE, FALSE, FALSE),
('God of War Ragnarok', 'PlayStation Studios', 'Juegos PlayStation', 500.00, 'Juego de accion y aventura ambientado en la mitologia nordica.', 'https://placehold.co/600x800/151515/ffffff.png?text=God+of+War+Ragnarok', FALSE, TRUE, FALSE),
('Spider-Man 2', 'Insomniac Games', 'Juegos PlayStation', 520.00, 'Aventura de superheroes con accion, exploracion y combate dinamico.', 'https://placehold.co/600x800/151515/ffffff.png?text=Spider-Man+2', FALSE, TRUE, TRUE),
('COD Black Ops Cold War', 'Activision', 'Juegos Xbox', 400.00, 'Shooter de accion con campana y modos multijugador.', 'https://placehold.co/600x800/0f2416/ffffff.png?text=COD+Black+Ops+Cold+War', FALSE, TRUE, FALSE),
('Halo Infinite', 'Xbox Game Studios', 'Juegos Xbox', 430.00, 'Juego de accion futurista con campana y multijugador competitivo.', 'https://placehold.co/600x800/0f2416/ffffff.png?text=Halo+Infinite', FALSE, FALSE, TRUE),
('Zelda TOTK', 'Nintendo', 'Juegos Nintendo', 500.00, 'Aventura de mundo abierto para Nintendo con exploracion y puzzles.', 'https://placehold.co/600x800/bb0011/ffffff.png?text=Zelda+TOTK', FALSE, TRUE, TRUE),
('Mario Kart 8 Deluxe', 'Nintendo', 'Juegos Nintendo', 450.00, 'Juego de carreras arcade con personajes clasicos de Nintendo.', 'https://placehold.co/600x800/bb0011/ffffff.png?text=Mario+Kart+8+Deluxe', FALSE, TRUE, FALSE);
