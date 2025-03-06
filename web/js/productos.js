// Array con la información de cada producto (con el link incluido)
const productos = [
    {
        imagen: '../componentes/productos/tecnologia-02.jpg',
        titulo: 'Cámara de seguridad con IA',
        descripcion: 'Cámara CCTV Wifi de vigilancia inalámbricas - 4X Zoom, AI seguimiento inteligente, Audio bidireccional IP66',
        link: 'https://s.click.aliexpress.com/e/_oppSrMy'
    },
    {
        imagen: '../componentes/productos/tecnologia-03.jpg',
        titulo: 'Auriculares QKZ',
        descripcion: 'Auriculares QKZ AK6 con Cable de 3,5mm, cascos con sonido HiFi de calidad',
        link: 'https://s.click.aliexpress.com/e/_omTCzQu'
    },
    {
        imagen: '../componentes/productos/tecnologia-04.jpg',
        titulo: 'Paneles de aislamiento acústico',
        descripcion: 'espuma acústica, 1 "x 12" x 12 ", para barra KTV, cuñas de estudio insonorizadas, insonorización, varios colores, 1 ud.',
        link: 'https://s.click.aliexpress.com/e/_oDFuH2o'
    },
    {
        imagen: '../componentes/productos/tecnologia-05.png',
        titulo: 'Ordenador todo en uno con pantalla táctil',
        descripcion: 'CPU i7 i9 de 24 pulgadas, monobloque de escritorio, todo en uno, elige la RAM y el almacenamiento que necesites',
        link: 'https://s.click.aliexpress.com/e/_okEJbCc'
    },
    {
        imagen: '../componentes/productos/tecnologia-06.jpg',
        titulo: 'FIFINE Micrófono de condensador USB',
        descripcion: 'Microfono para PC PS4 PS5 MAC con soporte de choque, filtro pop y control de ganancia para podcasts, Ampligame A6V',
        link: 'https://s.click.aliexpress.com/e/_om1dDJS'
    },
    {
        imagen: '../componentes/productos/tecnologia-07.jpg',
        titulo: 'Razer-ratón con cable DeathAdder Essential',
        descripcion: 'Dispositivo con 5 botones independientes para ordenador portátil y PC, 6400DPI',
        link: 'https://s.click.aliexpress.com/e/_oCBrEqy'
    },
    {
        imagen: '../componentes/productos/tecnologia-08.jpg',
        titulo: 'Disipador de calor RAM ARGB de 5V-3PIN',
        descripcion: 'Enfriador de memoria RAM Aura Sync DDR con almohadilla térmica de silicona para memoria de ordenador de escritorio y PC',
        link: 'https://s.click.aliexpress.com/e/_oBT0hPw'
    },
    {
        imagen: '../componentes/productos/tecnologia-09.jpg',
        titulo: 'Alfombrilla de ratón grande',
        descripcion: 'Alfombrilla de escritorio con almohadilla, accesorios para juegos, alfombrilla acolchada para teclado XXL Prime Gaming',
        link: 'https://s.click.aliexpress.com/e/_ono5aPQ'
    },
    {
        imagen: '../componentes/productos/tecnologia-10.jpg',
        titulo: 'Mini escáner para traducir libros y textos',
        descripcion: 'Escáner portátil A4 de documentos de mano para JPG formato PDF 300/600/900 DPI lector de escaneo pluma traducción de idiomas',
        link: 'https://s.click.aliexpress.com/e/_oEMZG5i'
    }
];


const productos_sub = [
    {
        imagen: '../componentes/productos/ropa-01.png',
        titulo: 'camiseta Polo clásico - manga corta',
        descripcion: 'Camiseta informal de verano con solapa de botón, Polo informal de S-3XL súper grande',
        link: 'https://s.click.aliexpress.com/e/_omQlIhw'
    },
    {
        imagen: '../componentes/productos/ropa-02.png',
        titulo: 'Polo deportivo de manga corta',
        descripcion: 'Polo con botones, Tops ajustados a la moda.',
        link: 'https://s.click.aliexpress.com/e/_onOmbLw'
    },
    {
        imagen: '../componentes/productos/ropa-03.png',
        titulo: 'Camisas antiarrugas de fibra de bambú',
        descripcion: 'camisas de vestir de manga larga para Camisa ajustada',
        link: 'https://s.click.aliexpress.com/e/_oFOnLXw'
    },
    {
        imagen: '../componentes/productos/ropa-04.png',
        titulo: 'Polo camiseta para hombre manga corta',
        descripcion: 'Camiseta para hombre manga corta antiarrugas Homme',
        link: 'https://s.click.aliexpress.com/e/_oDtcgFq'
    },
    {
        imagen: '../componentes/productos/ropa-05.png',
        titulo: 'Pantalones vaqueros',
        descripcion: 'pantalones vaqueros cónicos de algodón elásticos oversize',
        link: 'https://s.click.aliexpress.com/e/_oDt5ygs'
    },
    {
        imagen: '../componentes/productos/ropa-06.png',
        titulo: 'Sueter Nike - Original',
        descripcion: 'Sueter nike para hombre ropa deportiva',
        link: 'https://s.click.aliexpress.com/e/_omJ1vdA'
    },
    {
        imagen: '../componentes/productos/ropa-07.png',
        titulo: 'Buzo nike - Original',
        descripcion: 'Pantalón Nike tipo leging deportivo para mujer',
        link: 'https://s.click.aliexpress.com/e/_oEwtDzO'
    },
    {
        imagen: '../componentes/productos/ropa-08.png',
        titulo: 'Buzo deportivo Nike - Original',
        descripcion: 'Pantalones deportivos para mujer',
        link: 'https://s.click.aliexpress.com/e/_oEZKMaU'
    },
    {
        imagen: '../componentes/productos/ropa-09.png',
        titulo: 'Pantalón de moda para mujer',
        descripcion: 'Pantalones Cargo con estampado de letras para mujer',
        link: 'https://s.click.aliexpress.com/e/_oBhb7NI'
    }
];

// Función de carga superior
function cargarProductos() {
    productos.forEach((producto, index) => {
        const numero = (index + 1).toString().padStart(2, '0');

        const card = document.querySelector(`#card-${numero}`);
        const img = card.querySelector('img');
        const titulo = card.querySelector(`#titulo-${numero}`);
        const parrafo = card.querySelector(`#parrafo-${numero}`);
        const link = card.querySelector('a');

        if (img && titulo && parrafo && link) {
            img.src = producto.imagen;
            img.alt = `Imagen de ${producto.titulo}`;
            titulo.textContent = producto.titulo;
            parrafo.textContent = producto.descripcion;
            link.href = producto.link;
        }
    });
}

// función de carga inferior
function cargarProductosSub() {
    productos_sub.forEach((producto, index) => {
        const numero = (index + 1).toString().padStart(2, '0');

        const card = document.querySelector(`#productos-sub #card-${numero}`);
        if (!card) return; // Por si hay menos cards en el HTML

        const img = card.querySelector('img');
        const titulo = card.querySelector(`#titulo-${numero}`);
        const parrafo = card.querySelector(`#parrafo-${numero}`);
        const link = card.querySelector('a');

        if (img && titulo && parrafo && link) {
            img.src = producto.imagen;
            img.alt = `Imagen de ${producto.titulo}`;
            titulo.textContent = producto.titulo;
            parrafo.textContent = producto.descripcion;
            link.href = producto.link;
        }
    });
}

document.addEventListener('DOMContentLoaded', cargarProductos);
document.addEventListener('DOMContentLoaded', cargarProductosSub);

