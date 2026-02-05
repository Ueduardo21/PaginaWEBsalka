/**
 * Destination Pages - Aventura Travel
 * Funcionalidades comunes para todas las páginas de destinos
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('📍 Inicializando página de destino...');
    
    // 1. Cargar datos del destino desde localStorage
    loadDestinationData();
    
    // 2. Inicializar carrusel de galería
    initCarouselGallery();

    
    // 5. Efectos de scroll
    initScrollEffects();
    
    // 6. Animaciones
    initAnimations();
    
    // 7. Inicializar notificaciones
    initNotifications();
    
    // 8. Inicializar funcionalidades móviles
    initMobileFeatures();
});

// ========== 1. CARGAR DATOS DEL DESTINO ==========
function loadDestinationData() {
    // Obtener el nombre del destino desde la URL o localStorage
    const path = window.location.pathname;
    const destinationFile = path.split('/').pop().replace('.html', '');
    
    // Mapeo de nombres de archivo a datos
    const destinations = {
        'machupicchu': {
            name: 'Machu Picchu',
            category: 'Maravilla del Mundo',
            heroImage: 'imagenes/machupicchu-hero.jpg',
            price: 499,
            duration: '4 días / 3 noches'
        },
        'lagotiticaca': {
            name: 'Lago Titicaca',
            category: 'Lago más alto del mundo',
            heroImage: 'imagenes/lagotiticaca-hero.jpg',
            price: 399,
            duration: '3 días / 2 noches'
        },
        'lineasnazca': {
            name: 'Líneas de Nazca',
            category: 'Misterio Arqueológico',
            heroImage: 'imagenes/lineasnazca-hero.jpg',
            price: 299,
            duration: '2 días / 1 noche'
        }
    };
    
    const destinationData = destinations[destinationFile];
    
    if (destinationData) {
        // Actualizar título de la página
        document.title = `${destinationData.name} - Aventura Travel`;
        
        // Actualizar datos en la página
        updatePageContent(destinationData);
        
        // Guardar en sessionStorage para referencia
        sessionStorage.setItem('currentDestination', JSON.stringify(destinationData));
        
        console.log(`✅ Página de destino cargada: ${destinationData.name}`);
    } else {
        console.log('⚠️ Destino no reconocido, usando valores por defecto');
    }
    
    // Cargar estadísticas desde localStorage
    loadDestinationStats(destinationFile);
}

function updatePageContent(data) {
    // Actualizar título del hero
    const heroTitle = document.querySelector('.destination-hero-title');
    if (heroTitle) heroTitle.textContent = data.name;
    
    // Actualizar badge del hero
    const heroBadge = document.querySelector('.hero-badge span');
    if (heroBadge) heroBadge.textContent = data.category;
    
    // Actualizar precios
    const priceElements = document.querySelectorAll('.price-amount');
    priceElements.forEach(el => {
        if (el.textContent.includes('$')) {
            el.textContent = `$${data.price}`;
        }
    });
    
    // Actualizar duración
    const durationElements = document.querySelectorAll('.stat-number');
    if (durationElements[0]) {
        durationElements[0].textContent = data.duration.split(' ')[0];
    }
}

function loadDestinationStats(destinationId) {
    // Cargar estadísticas de clicks desde localStorage
    const clicksData = JSON.parse(localStorage.getItem('destinationClicks') || '[]');
    const destinationClicks = clicksData.filter(click => click.destination === destinationId).length;
    
    // Mostrar estadísticas si hay un elemento para ello
    const statsElement = document.getElementById('destinationStats');
    if (statsElement) {
        statsElement.textContent = `${destinationClicks} personas han visto este destino`;
    }
    
    // Track de visualización de página
    trackPageView(destinationId);
}

// ========== 2. CARRUSEL DE GALERÍA INTERACTIVO ==========
function initCarouselGallery() {
    console.log('🖼️ Inicializando carrusel de galería...');
    
    const carouselTrack = document.getElementById('carouselTrack');
    const hoverInstruction = document.getElementById('hoverInstruction');
    
    if (!carouselTrack || !hoverInstruction) {
        console.log('⚠️ No se encontraron elementos del carrusel');
        return;
    }
    
    let slides = document.querySelectorAll('.carousel-slide:not(.clone)');
    let autoScrollInterval;
    let isPaused = false;
    let currentPosition = 0;
    let slideWidth = 0;
    let slidesPerView = 3; // Default para desktop
    
    // Calcular slides visibles según el ancho de pantalla
    function calculateSlidesPerView() {
        const width = window.innerWidth;
        if (width >= 1024) return 3;
        if (width >= 768) return 2;
        return 1;
    }
    
    // Inicializar carrusel
    function initCarousel() {
        slidesPerView = calculateSlidesPerView();
        
        // Limpiar clones previos
        const clones = document.querySelectorAll('.carousel-slide.clone');
        clones.forEach(clone => clone.remove());
        
        // Obtener slides originales
        slides = document.querySelectorAll('.carousel-slide:not(.clone)');
        
        if (slides.length === 0) {
            console.log('⚠️ No hay slides en el carrusel');
            return;
        }
        
        slideWidth = slides[0].offsetWidth + 20; // incluye margen
        
        // Duplicar slides para efecto infinito
        duplicateSlides();
        
        // Iniciar auto-scroll
        startAutoScroll();
        
        // Configurar eventos
        setupEventListeners();
        
        // Mostrar instrucción inicial
        showInitialInstruction();
        
        console.log(`✅ Carrusel inicializado con ${slides.length} slides (${slidesPerView} por vista)`);
    }
    
    // Duplicar slides para efecto infinito
    function duplicateSlides() {
        const originalSlides = Array.from(slides);
        originalSlides.forEach(slide => {
            const clone = slide.cloneNode(true);
            clone.classList.add('clone');
            carouselTrack.appendChild(clone);
        });
    }
    
    // Configurar event listeners
    function setupEventListeners() {
        // Pausar al hacer hover
        carouselTrack.addEventListener('mouseenter', () => {
            pauseCarousel();
            hoverInstruction.classList.add('show');
        });
        
        // Reanudar al salir del hover
        carouselTrack.addEventListener('mouseleave', () => {
            resumeCarousel();
            hoverInstruction.classList.remove('show');
        });
        
        // Reajustar en resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                clearInterval(autoScrollInterval);
                slidesPerView = calculateSlidesPerView();
                const originalSlides = document.querySelectorAll('.carousel-slide:not(.clone)');
                if (originalSlides.length > 0) {
                    slideWidth = originalSlides[0].offsetWidth + 20;
                }
                startAutoScroll();
            }, 250);
        });
        
        // Pausar cuando la ventana pierde el foco
        window.addEventListener('blur', pauseCarousel);
        window.addEventListener('focus', resumeCarousel);
        
        // Touch events para móviles
        let startX = 0;
        let isDragging = false;
        let dragDistance = 0;
        
        carouselTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            dragDistance = 0;
            pauseCarousel();
        }, { passive: true });
        
        carouselTrack.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const currentX = e.touches[0].clientX;
            dragDistance = startX - currentX;
            
            // Mover carrusel manualmente
            carouselTrack.style.transform = `translateX(${currentPosition - dragDistance}px)`;
        }, { passive: true });
        
        carouselTrack.addEventListener('touchend', () => {
            if (!isDragging) return;
            
            isDragging = false;
            
            // Si se arrastró suficiente distancia, ajustar posición
            if (Math.abs(dragDistance) > 50) {
                if (dragDistance > 0) {
                    // Arrastre hacia la izquierda (siguiente)
                    currentPosition -= slideWidth;
                } else {
                    // Arrastre hacia la derecha (anterior)
                    currentPosition += slideWidth;
                }
                
                // Asegurar que la posición esté dentro de límites
                const totalSlides = slides.length * 2; // originales + clones
                if (Math.abs(currentPosition) >= slideWidth * slides.length) {
                    currentPosition = 0;
                    carouselTrack.style.transition = 'none';
                }
                
                carouselTrack.style.transform = `translateX(${currentPosition}px)`;
                
                if (Math.abs(currentPosition) >= slideWidth * slides.length) {
                    setTimeout(() => {
                        carouselTrack.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    }, 50);
                }
            } else {
                // Volver a la posición original
                carouselTrack.style.transform = `translateX(${currentPosition}px)`;
            }
            
            setTimeout(resumeCarousel, 2000);
        });
        
        // Click en slides para lightbox
        const slideContainers = document.querySelectorAll('.carousel-image-container');
        slideContainers.forEach(container => {
            container.addEventListener('click', function(e) {
                if (isDragging) return; // Evitar que se active durante el drag
                
                const img = this.querySelector('.carousel-image');
                const title = this.querySelector('.carousel-title');
                const description = this.querySelector('.carousel-description');
                
                if (img) {
                    openLightbox({
                        src: img.src,
                        alt: img.alt,
                        title: title ? title.textContent : '',
                        description: description ? description.textContent : ''
                    });
                }
            });
        });
    }
    
    // Auto-scroll suave
    function startAutoScroll() {
        if (autoScrollInterval) clearInterval(autoScrollInterval);
        
        autoScrollInterval = setInterval(() => {
            if (isPaused) return;
            
            const totalSlides = slides.length * 2; // originales + clones
            
            // Mover a la izquierda
            currentPosition -= slideWidth / 30;
            
            // Reset cuando llegue al final de los clones
            if (Math.abs(currentPosition) >= slideWidth * slides.length) {
                currentPosition = 0;
                carouselTrack.style.transition = 'none';
                carouselTrack.style.transform = `translateX(${currentPosition}px)`;
                
                setTimeout(() => {
                    carouselTrack.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 50);
            } else {
                carouselTrack.style.transform = `translateX(${currentPosition}px)`;
            }
        }, 50);
    }
    
    // Pausar carrusel
    function pauseCarousel() {
        if (!isPaused) {
            isPaused = true;
            clearInterval(autoScrollInterval);
            console.log('⏸️ Carrusel pausado');
        }
    }
    
    // Reanudar carrusel
    function resumeCarousel() {
        if (isPaused) {
            isPaused = false;
            startAutoScroll();
            console.log('▶️ Carrusel reanudado');
        }
    }
    
    // Mostrar instrucción inicial
    function showInitialInstruction() {
        setTimeout(() => {
            hoverInstruction.classList.add('show');
            setTimeout(() => {
                hoverInstruction.classList.remove('show');
            }, 3000);
        }, 1000);
    }
    
    // Lightbox para ver imágenes en grande
    function openLightbox(data) {
        pauseCarousel();
        
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img src="${data.src}" alt="${data.alt}" class="lightbox-image">
                <div class="lightbox-info">
                    ${data.title ? `<h3 class="lightbox-title">${data.title}</h3>` : ''}
                    ${data.description ? `<p class="lightbox-description">${data.description}</p>` : ''}
                </div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Forzar reflow para animación
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
        
        // Event listeners para el lightbox
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                closeLightbox();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
        
        function closeLightbox() {
            lightbox.classList.remove('active');
            setTimeout(() => {
                if (lightbox.parentNode) {
                    lightbox.remove();
                }
                document.body.style.overflow = '';
                resumeCarousel();
            }, 300);
        }
    }
    
    // Inicializar al cargar
    initCarousel();
    
    // Limpiar intervalo al salir de la página
    window.addEventListener('beforeunload', () => {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
        }
    });
    
    // Añadir estilos para el lightbox
    if (!document.querySelector('.lightbox-styles')) {
        const lightboxStyles = document.createElement('style');
        lightboxStyles.className = 'lightbox-styles';
        lightboxStyles.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(10, 31, 58, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
            }
            
            .lightbox.active {
                opacity: 1;
                pointer-events: all;
            }
            
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
                background: white;
                border-radius: 15px;
                overflow: hidden;
                transform: scale(0.9);
                transition: transform 0.3s ease;
            }
            
            .lightbox.active .lightbox-content {
                transform: scale(1);
            }
            
            .lightbox-image {
                width: 100%;
                max-height: 70vh;
                object-fit: contain;
            }
            
            .lightbox-info {
                padding: 20px;
                background: white;
            }
            
            .lightbox-title {
                color: #0a1f3a;
                font-size: 1.5rem;
                margin-bottom: 10px;
            }
            
            .lightbox-description {
                color: #666;
                font-size: 1rem;
                line-height: 1.5;
            }
            
            .lightbox-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
                transition: background 0.3s ease;
            }
            
            .lightbox-close:hover {
                background: rgba(0, 0, 0, 0.9);
            }
            
            @media (max-width: 768px) {
                .lightbox-content {
                    max-width: 95%;
                }
                
                .lightbox-title {
                    font-size: 1.2rem;
                }
                
                .lightbox-description {
                    font-size: 0.9rem;
                }
            }
        `;
        document.head.appendChild(lightboxStyles);
    }
}


// ========== 5. EFECTOS DE SCROLL ==========
function initScrollEffects() {
    // Header fijo con efecto de scroll
    const header = document.querySelector('.destination-header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = 'none';
            header.style.background = 'linear-gradient(rgba(10, 31, 58, 0.9), rgba(26, 83, 92, 0.8))';
        } else if (currentScroll > lastScroll) {
            // Scroll hacia abajo
            header.style.transform = 'translateY(-100%)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            // Scroll hacia arriba
            header.style.transform = 'translateY(0)';
            header.style.background = 'rgba(10, 31, 58, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Animación de aparición de secciones
    const sections = document.querySelectorAll('.destination-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Animar elementos dentro de la sección
                const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
                animatedElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animate');
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// ========== 6. ANIMACIONES ==========
function initAnimations() {
    // Añadir clases para animación
    const elementsToAnimate = document.querySelectorAll('.two-column-grid, .itinerary-day, .pricing-card, .testimonial-card');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Añadir estilos para las animaciones
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-on-scroll.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .destination-section.animated {
            animation: fadeIn 0.8s ease-out;
        }
    `;
    document.head.appendChild(animationStyles);
}

// ========== 7. NOTIFICACIONES ==========
function initNotifications() {
    if (!document.querySelector('.notification-styles')) {
        const styles = document.createElement('style');
        styles.className = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 10px;
                color: white;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                max-width: 400px;
                transform: translateX(120%);
                transition: transform 0.3s ease;
                z-index: 10000;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-info {
                background: #1a535c;
            }
            
            .notification-success {
                background: #06d6a0;
            }
            
            .notification-error {
                background: #ef476f;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 25px;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `;
        document.head.appendChild(styles);
    }
}

// ========== 8. FUNCIONALIDADES MÓVILES ==========
function initMobileFeatures() {
    console.log('📱 Inicializando funcionalidades móviles...');
    
    // Detectar si es móvil
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Cambiar el texto de hover instruction para móvil
    function adjustMobileInstructions() {
        if (isMobile()) {
            const hoverInstruction = document.getElementById('hoverInstruction');
            if (hoverInstruction) {
                hoverInstruction.textContent = "Desliza para explorar";
                hoverInstruction.classList.add('show');
                
                // Ocultar después de 5 segundos
                setTimeout(() => {
                    hoverInstruction.classList.remove('show');
                }, 5000);
            }
        }
    }
    
    // Inicializar
    adjustMobileInstructions();
    
    // Recalcular en redimensionamiento
    window.addEventListener('resize', function() {
        adjustMobileInstructions();
    });
}

// ========== FUNCIONES DE TRACKING ==========
function trackPageView(destinationId) {
    const pageView = {
        event: 'page_view',
        destination: destinationId,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        referrer: document.referrer || 'direct'
    };
    
    // Guardar en localStorage
    const pageViews = JSON.parse(localStorage.getItem('pageViews') || '[]');
    pageViews.push(pageView);
    localStorage.setItem('pageViews', JSON.stringify(pageViews.slice(-100)));
    
    console.log(`📊 Page view trackeado: ${destinationId}`);
}

function trackBookingAttempt(destination, plan, price) {
    const bookingAttempt = {
        event: 'booking_attempt',
        destination: destination,
        plan: plan,
        price: price,
        timestamp: new Date().toISOString()
    };
    
    // Guardar en localStorage
    const bookings = JSON.parse(localStorage.getItem('bookingAttempts') || '[]');
    bookings.push(bookingAttempt);
    localStorage.setItem('bookingAttempts', JSON.stringify(bookings));
    
    console.log(`📊 Booking attempt trackeado: ${destination} - ${plan}`);
}

function trackInquiry(data) {
    const inquiry = {
        event: 'destination_inquiry',
        ...data
    };
    
    // Guardar en localStorage
    const inquiries = JSON.parse(localStorage.getItem('trackedInquiries') || '[]');
    inquiries.push(inquiry);
    localStorage.setItem('trackedInquiries', JSON.stringify(inquiries));
    
    console.log(`📊 Inquiry trackeado: ${data.destination}`);
}

// ========== FUNCIONES AUXILIARES ==========
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Cerrar notificación
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto-remove después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// ========== FUNCIONES PÚBLICAS ==========
window.destinationPage = {
    // Obtener datos del destino actual
    getCurrentDestination: function() {
        return JSON.parse(sessionStorage.getItem('currentDestination') || '{}');
    },
    
    // Controlar el carrusel de galería
    carousel: {
        play: function() {
            const event = new Event('mouseleave');
            const track = document.getElementById('carouselTrack');
            if (track) track.dispatchEvent(event);
        },
        
        pause: function() {
            const event = new Event('mouseenter');
            const track = document.getElementById('carouselTrack');
            if (track) track.dispatchEvent(event);
        },
        
        next: function() {
            const slides = document.querySelectorAll('.carousel-slide:not(.clone)');
            const track = document.getElementById('carouselTrack');
            if (!track || !slides.length) return;
            
            const currentPosition = parseFloat(track.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
            const slideWidth = slides[0].offsetWidth + 20;
            
            track.style.transform = `translateX(${currentPosition - slideWidth}px)`;
        },
        
        prev: function() {
            const slides = document.querySelectorAll('.carousel-slide:not(.clone)');
            const track = document.getElementById('carouselTrack');
            if (!track || !slides.length) return;
            
            const currentPosition = parseFloat(track.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
            const slideWidth = slides[0].offsetWidth + 20;
            
            track.style.transform = `translateX(${currentPosition + slideWidth}px)`;
        }
    },
    
    // Controlar FAQ
    faq: {
        filterByCategory: function(category) {
            const button = document.querySelector(`.category-btn[data-category="${category}"]`);
            if (button) {
                button.click();
            }
        },
        
        openAll: function() {
            const items = document.querySelectorAll('.faq-item');
            items.forEach(item => {
                if (!item.classList.contains('active')) {
                    openFAQItem(item);
                }
            });
        },
        
        closeAll: function() {
            closeAllFAQItems();
        },
        
        getActiveCategory: function() {
            const activeButton = document.querySelector('.category-btn.active');
            return activeButton ? activeButton.getAttribute('data-category') : 'all';
        }
    },
    
    // Scroll a una sección específica
    scrollToSection: function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },
    
    // Simular reserva
    simulateBooking: function(planName) {
        const button = document.querySelector(`.pricing-card:contains("${planName}") .book-button`);
        if (button) {
            button.click();
        }
    },
    
    // Obtener estadísticas de la página
    getPageStats: function() {
        return {
            pageViews: JSON.parse(localStorage.getItem('pageViews') || '[]').length,
            bookingAttempts: JSON.parse(localStorage.getItem('bookingAttempts') || '[]').length,
            inquiries: JSON.parse(localStorage.getItem('trackedInquiries') || '[]').length
        };
    }
};

console.log('✅ JavaScript de destino cargado completamente');