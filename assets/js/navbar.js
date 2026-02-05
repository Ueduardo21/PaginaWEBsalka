// Variables globales
let lastScrollTop = 0;
let navbar = document.querySelector('.navbar');
let header = document.getElementById('main-header');
let navMenu = document.querySelector('.nav-menu');
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelectorAll('.nav-link');

// Estado del menú móvil
let isMenuOpen = false;

// Configuración de comportamiento
const SCROLL_THRESHOLD = 50; // Umbral en píxeles para ocultar/mostrar

// Función para manejar el scroll - SOLO para ocultar/mostrar, NO cambia el color
function handleScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Ocultar/mostrar navbar basado en la dirección del scroll
    if (scrollTop > lastScrollTop && scrollTop > SCROLL_THRESHOLD) {
        // Scroll hacia abajo - ocultar navbar
        header.style.top = '-100px';
    } else {
        // Scroll hacia arriba - mostrar navbar
        header.style.top = '0';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
    
    // Actualizar enlace activo
    updateActiveLink();
}

// Función para actualizar el enlace activo según la sección visible
function updateActiveLink() {
    let scrollPosition = window.scrollY + 100; // Offset para activar antes
    
    // Para cada sección
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remover clase active de todos los enlaces
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Agregar clase active al enlace correspondiente
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Función para alternar el menú hamburguesa
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Bloquear/desbloquear scroll del body cuando el menú está abierto
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Función para cerrar el menú al hacer clic en un enlace (en móviles)
function closeMenuOnClick() {
    if (isMenuOpen) {
        toggleMenu();
    }
}

// Función para scroll suave a las secciones
function smoothScrollTo(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        const headerHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Función para manejar clics en enlaces
function handleLinkClick(e) {
    const href = this.getAttribute('href');
    
    // Si es un enlace interno (empieza con #)
    if (href.startsWith('#')) {
        e.preventDefault();
        smoothScrollTo(href);
        closeMenuOnClick();
    }
    // Si es un enlace a otra página (como contacto.html)
    // Dejamos que el navegador navegue normalmente
    else if (href.endsWith('.html')) {
        // Solo cerramos el menú si está abierto
        closeMenuOnClick();
        // NO hacemos e.preventDefault() - dejamos que el enlace funcione normalmente
    }
    // Para otros tipos de enlaces (http, https, mailto, etc.)
    else {
        closeMenuOnClick();
        // Dejamos que el navegador maneje estos enlaces normalmente
    }
}

// Inicializar eventos
function init() {
    // Evento de scroll - SOLO para ocultar/mostrar
    window.addEventListener('scroll', handleScroll);
    
    // Evento para el menú hamburguesa
    hamburger.addEventListener('click', toggleMenu);
    
    // Eventos para los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
    
    // Cerrar menú al hacer clic fuera de él (solo en móviles)
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            toggleMenu();
        }
    });
    
    // Inicializar estado del navbar
    header.style.top = '0'; // Asegurar que esté visible al inicio
    updateActiveLink(); // Activar el enlace inicial
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Función adicional para resetear el navbar
function resetNavbar() {
    header.style.top = '0';
    lastScrollTop = 0;
}

// Exportar funciones si es necesario (para uso en módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { resetNavbar };
}