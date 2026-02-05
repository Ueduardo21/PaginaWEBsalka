/**
 * Destinations Section - Aventura Travel
 * Funcionalidades para la sección de destinos
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar cuando el loader termine
    window.addEventListener('loaderComplete', initDestinationsSection);
    
    // O si ya está cargado, inicializar directamente
    if (document.body.classList.contains('page-loaded')) {
        initDestinationsSection();
    }
    
    function initDestinationsSection() {
        console.log('🗺️ Inicializando sección Destinos...');
        
        // 1. Carga optimizada de imágenes
        initImageLoading();
        
        // 2. Efectos hover y animaciones
        initCardAnimations();
        
        // 3. Tracking de clicks
        initClickTracking();
        
        // 4. Filtros y búsqueda (si se implementa después)
        initDestinationFilters();
        
        // 5. Scroll animations
        initScrollAnimations();
    }
    
    // ========== 1. CARGA OPTIMIZADA DE IMÁGENES ==========
    function initImageLoading() {
        const destinationCards = document.querySelectorAll('.destination-card');
        
        destinationCards.forEach(card => {
            const imageContainer = card.querySelector('.card-image');
            const image = card.querySelector('img');
            
            if (image) {
                // Añadir clase de loading
                imageContainer.classList.add('loading');
                
                // Crear una nueva imagen para precargar
                const preloadImage = new Image();
                preloadImage.src = image.src;
                
                preloadImage.onload = function() {
                    // Cuando la imagen cargue, remover el efecto de loading
                    setTimeout(() => {
                        imageContainer.classList.remove('loading');
                        imageContainer.classList.add('loaded');
                        image.style.opacity = '1';
                    }, 300);
                };
                
                preloadImage.onerror = function() {
                    console.log('Error cargando imagen:', image.src);
                    imageContainer.classList.remove('loading');
                };
            }
        });
    }
    
    // ========== 2. EFECTOS HOVER Y ANIMACIONES ==========
    function initCardAnimations() {
        const destinationCards = document.querySelectorAll('.destination-card');
        
        destinationCards.forEach(card => {
            // Efecto al pasar el mouse
            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
                
                // Animación del botón
                const exploreBtn = this.querySelector('.explore-btn');
                if (exploreBtn) {
                    exploreBtn.style.transform = 'translateX(5px)';
                }
                
                // Efecto en el badge
                const badge = this.querySelector('.card-badge');
                if (badge) {
                    badge.style.transform = 'scale(1.1) rotate(5deg)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
                
                // Reset del botón
                const exploreBtn = this.querySelector('.explore-btn');
                if (exploreBtn) {
                    exploreBtn.style.transform = 'translateX(0)';
                }
                
                // Reset del badge
                const badge = this.querySelector('.card-badge');
                if (badge) {
                    badge.style.transform = 'scale(1) rotate(0deg)';
                }
            });
            
            // Click en toda la tarjeta (excepto en el botón)
            card.addEventListener('click', function(e) {
                // Prevenir que el click en el botón active ambos eventos
                if (!e.target.closest('.explore-btn')) {
                    const exploreBtn = this.querySelector('.explore-btn');
                    if (exploreBtn) {
                        // Simular click en el botón
                        exploreBtn.click();
                    }
                }
            });
            
            // Efecto de ripple en el botón
            const exploreBtn = card.querySelector('.explore-btn');
            if (exploreBtn) {
                exploreBtn.addEventListener('click', function(e) {
                    createRippleEffect(e, this);
                    
                    // Track del click
                    const destination = this.getAttribute('data-destination');
                    trackDestinationClick(destination);
                });
            }
        });
    }
    
    // ========== 3. TRACKING DE CLICKS ==========
    function initClickTracking() {
        const exploreButtons = document.querySelectorAll('.explore-btn');
        
        exploreButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const destination = this.getAttribute('data-destination');
                const destinationName = this.closest('.destination-card')
                    .querySelector('.destination-title').textContent;
                
                // Guardar en localStorage para tracking
                localStorage.setItem('lastDestinationClicked', destination);
                localStorage.setItem('lastDestinationName', destinationName);
                
                // Opcional: Guardar en sessionStorage para la próxima página
                sessionStorage.setItem('comingFromDestination', destination);
                
                console.log(`📍 Destino clickeado: ${destinationName} (${destination})`);
                
                // No prevenir el comportamiento por defecto (navegación)
            });
        });
        
        // Botón "Ver Todos"
        const viewAllBtn = document.querySelector('.view-all-btn');
        if (viewAllBtn) {
            viewAllBtn.addEventListener('click', function(e) {
                localStorage.setItem('destinationAction', 'viewAll');
                console.log('📋 Ver todos los destinos');
            });
        }
    }
    
    // ========== 4. FILTROS Y BÚSQUEDA ==========
    function initDestinationFilters() {
        // Preparar para futuros filtros
        const destinationCards = document.querySelectorAll('.destination-card');
        
        // Guardar datos de cada destino en un array
        const destinationsData = Array.from(destinationCards).map(card => {
            return {
                element: card,
                name: card.querySelector('.destination-title').textContent.toLowerCase(),
                tags: Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()),
                difficulty: card.querySelector('.meta-item:nth-child(2)').textContent.toLowerCase(),
                price: parseInt(card.querySelector('.price-amount').textContent.replace('$', ''))
            };
        });
        
        // Función para filtrar destinos (para futura implementación)
        window.filterDestinations = function(filterType, value) {
            destinationCards.forEach(card => card.style.display = 'none');
            
            const filtered = destinationsData.filter(dest => {
                if (filterType === 'tag') {
                    return dest.tags.includes(value.toLowerCase());
                } else if (filterType === 'difficulty') {
                    return dest.difficulty.includes(value.toLowerCase());
                } else if (filterType === 'price') {
                    return dest.price <= value;
                }
                return true;
            });
            
            filtered.forEach(dest => {
                dest.element.style.display = 'block';
            });
            
            // Animar las tarjetas que quedan visibles
            setTimeout(() => {
                filtered.forEach((dest, index) => {
                    dest.element.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
                });
            }, 100);
        };
    }
    
    // ========== 5. ANIMACIONES DE SCROLL ==========
    function initScrollAnimations() {
        const destinationSection = document.querySelector('.destinations-section');
        
        if (!destinationSection) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Añadir clase de activación
                    destinationSection.classList.add('animated');
                    
                    // Animar las tarjetas
                    const cards = entry.target.querySelectorAll('.destination-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                    
                    observer.unobserve(destinationSection);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
        
        observer.observe(destinationSection);
        
        // Preparar estado inicial de las tarjetas
        const cards = destinationSection.querySelectorAll('.destination-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    }
    
    // ========== FUNCIONES AUXILIARES ==========
    function createRippleEffect(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    function trackDestinationClick(destination) {
        // Aquí puedes integrar con Google Analytics o tu sistema de tracking
        console.log(`📊 Tracking: Destino ${destination} clickeado`);
        
        // Ejemplo de datos que podrías enviar a un servicio de analytics
        const analyticsData = {
            event: 'destination_click',
            destination: destination,
            timestamp: new Date().toISOString(),
            page: window.location.pathname
        };
        
        // Guardar en localStorage para referencia
        const clicks = JSON.parse(localStorage.getItem('destinationClicks') || '[]');
        clicks.push(analyticsData);
        localStorage.setItem('destinationClicks', JSON.stringify(clicks.slice(-50))); // Guardar últimos 50 clicks
    }
    
    // ========== FUNCIONES PÚBLICAS ==========
    window.destinationsSection = {
        // Obtener el último destino clickeado
        getLastClickedDestination: function() {
            return {
                id: localStorage.getItem('lastDestinationClicked'),
                name: localStorage.getItem('lastDestinationName')
            };
        },
        
        // Scroll a la sección de destinos
        scrollToSection: function() {
            const section = document.getElementById('destinations');
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        },
        
        // Simular click en un destino específico
        navigateToDestination: function(destinationId) {
            const button = document.querySelector(`[data-destination="${destinationId}"]`);
            if (button) {
                button.click();
            } else {
                // Redirigir directamente si no encuentra el botón
                window.location.href = `destinos/${destinationId}.html`;
            }
        },
        
        // Obtener estadísticas de clicks
        getClickStatistics: function() {
            const clicks = JSON.parse(localStorage.getItem('destinationClicks') || '[]');
            return {
                totalClicks: clicks.length,
                clicksByDestination: clicks.reduce((acc, click) => {
                    acc[click.destination] = (acc[click.destination] || 0) + 1;
                    return acc;
                }, {}),
                lastClick: clicks[clicks.length - 1]
            };
        }
    };
});

// Fallback si el DOM ya está cargado
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => {
        if (typeof initDestinationsSection === 'function') {
            initDestinationsSection();
        }
    }, 1000);
}

// Añadir estilos para el efecto ripple
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .explore-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyles);