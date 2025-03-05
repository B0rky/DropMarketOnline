document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.getElementById('carrusel');
    const productos = Array.from(carrusel.children);

    // Precios y nombres
    const nombres = [
        "Tops de manga corta Harajuku", "Top de manga corta", "pantalones deportivos", "Sudaderas con estampado de NY",
        "Estampado Brooklyn NY", "Sudaderas de The Weeknd", "Abrigo de invierno de pana", "Pulsera cubana - baño 24k"
    ];
    const precios = [
        "$8.000", "$10.000", "$20.000", "$18.000",
        "$18.000", "$20.000", "$14.000", "$10.000"
    ];

    // Asignar textos y precios a cada producto (original y clonados)
    productos.forEach((producto, index) => {
        setDatosProducto(producto, index);
    });

    // Clonar productos para efecto infinito
    productos.forEach((producto, index) => {
        const clon = producto.cloneNode(true);
        setDatosProducto(clon, index); // asignar texto/precio a clon
        carrusel.appendChild(clon);
    });

    const totalProductos = productos.length; // 8 originales
    const productoWidth = productos[0].offsetWidth; // Ancho de cada producto

    let currentIndex = 0;

    // Función para mover carrusel
    function moverCarrusel() {
        currentIndex++;
        carrusel.style.transition = 'transform 0.6s ease';
        carrusel.style.transform = `translateX(-${currentIndex * productoWidth}px)`;

        // Cuando termina el primer set de 8, resetea sin transición
        if (currentIndex >= totalProductos) {
            setTimeout(() => {
                currentIndex = 0;
                carrusel.style.transition = 'none';
                carrusel.style.transform = `translateX(0)`;
            }, 600);
        }
    }

    // Mover cada 4 segundos
    setInterval(moverCarrusel, 4000);

    // Función para setear nombre y precio (evita hacerlo manualmente en HTML)
    function setDatosProducto(producto, index) {
        const nombreProducto = producto.querySelector('.nombre-producto');
        const precioProducto = producto.querySelector('.precio-producto');

        const cicloIndex = index % nombres.length; // Para que 9 sea 1, 10 sea 2, etc.
        nombreProducto.textContent = nombres[cicloIndex];
        precioProducto.textContent = precios[cicloIndex];
    }
});
