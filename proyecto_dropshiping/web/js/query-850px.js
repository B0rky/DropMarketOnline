function ajustarElementos() {
  const carrusel = document.getElementById('carrusel');
  const banner = document.querySelector('.baner-doble section:nth-of-type(1)');
  const navBar = document.querySelector('.nav-bar');
  const logo = document.getElementById('logo');
  const seccion = document.querySelector('.baner-doble section:nth-of-type(2) div');
  const navMenu = document.getElementById('nav-menu');
  const botonesNav = document.querySelectorAll('.nav-btn');
  const contenedorProductos = document.querySelector('.contenedor-productos');

  if (!navBar || !logo || !navMenu || botonesNav.length === 0) {
    // Si faltan elementos críticos como el nav principal, mejor salir.
    return;
  }

  if (window.innerWidth <= 850) {
    if (carrusel) carrusel.classList.add('invisible');
    
    if (banner) {
      banner.style.position = 'relative';
      banner.style.marginTop = '30vh';
    }

    navBar.style.paddingRight = '20px';
    logo.style.fontSize = '15px';
    navBar.style.gridTemplateColumns = '1fr 2fr';
    
    if (seccion) {
      seccion.style.margin = '0';
      seccion.style.paddingLeft = '10px';
    }

    navMenu.style.position = 'absolute';
    navMenu.style.top = '120px';
    navMenu.style.left = '70vw';
    navMenu.style.transform = 'translateX(-50%)';
    navMenu.style.display = 'flex';
    navMenu.style.flexDirection = 'column';
    navMenu.style.alignItems = 'center';
    navMenu.style.gap = '3px';

    botonesNav.forEach(boton => {
      boton.style.width = '300px';
      boton.style.minHeight = '40px';
    });

    if (contenedorProductos) contenedorProductos.style.padding = '0';

  } else {
    if (carrusel) carrusel.classList.remove('invisible');

    if (banner) {
      banner.style.position = '';
      banner.style.marginTop = '';
    }

    navBar.style.paddingRight = '';
    logo.style.fontSize = '';
    navBar.style.gridTemplateColumns = '';

    if (seccion) {
      seccion.style.margin = '';
      seccion.style.paddingLeft = '';
    }

    navMenu.style.position = '';
    navMenu.style.top = '';
    navMenu.style.left = '';
    navMenu.style.transform = '';
    navMenu.style.display = '';
    navMenu.style.flexDirection = '';
    navMenu.style.alignItems = '';
    navMenu.style.gap = '';

    botonesNav.forEach(boton => {
      boton.style.width = '';
    });

    if (contenedorProductos) contenedorProductos.style.padding = '';
  }
}

window.addEventListener('load', ajustarElementos);
window.addEventListener('resize', ajustarElementos);


