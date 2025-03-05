document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector('.carrusel-comentarios');
    const items = Array.from(carrusel.children);

    // Duplicamos comentarios para efecto de loop
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carrusel.appendChild(clone);
    });
});