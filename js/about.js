/**
 * About Section - Aventura Travel
 * Funcionalidades interactivas para la sección About
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar cuando el loader termine
    window.addEventListener('loaderComplete', initAboutSection);
    
    // O si ya está cargado, inicializar directamente
    if (document.body.classList.contains('page-loaded')) {
        initAboutSection();
    }
    
    function initAboutSection() {
        console.log('🎯 Inicializando sección About...');
        
        // 1. Animación de números contadores
        initNumberCounters();
        
        // 2. Galería interactiva
        initGallery();
        
        // 3. Timeline interactivo
        initTimeline();
        
        // 4. Efectos de scroll
        initScrollEffects();
        
        // 5. Eventos de hover
        initHoverEffects();
        
        // 6. Animaciones de entrada
        initEntranceAnimations();
    }
    
    // ========== 1. ANIMACIÓN DE CONTADORES ==========
    function initNumberCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        if (!statNumbers.length) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const numberElement = entry.target;
                    const target = parseInt(numberElement.getAttribute('data-count'));
                    const duration = 2000; // 2 segundos
                    const step = target / (duration / 16); // 60fps
                    let current = 0;
                    
                    const counter = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            numberElement.textContent = target;
                            clearInterval(counter);
                            
                            // Efecto visual al completar
                            numberElement.style.transform = 'scale(1.2)';
                            setTimeout(() => {
                                numberElement.style.transform = 'scale(1)';
                            }, 300);
                        } else {
                            numberElement.textContent = Math.floor(current);
                        }
                    }, 16);
                    
                    observer.unobserve(numberElement);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        });
        
        statNumbers.forEach(number => {
            observer.observe(number);
        });
    }
    
    // ========== 2. GALERÍA INTERACTIVA ==========
    function initGallery() {
        const mainImage = document.getElementById('mainGalleryImage');
        const thumbnails = document.querySelectorAll('.thumbnail');
        
        if (!mainImage || !thumbnails.length) return;
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const newSrc = this.getAttribute('data-image');
                const currentSrc = mainImage.src;
                
                // Remover clase active de todas las miniaturas
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Agregar clase active a la miniatura clickeada
                this.classList.add('active');
                
                // Efecto de transición
                mainImage.style.opacity = '0';
                
                setTimeout(() => {
                    // Intentar cargar la nueva imagen
                    const img = new Image();
                    img.src = newSrc;
                    img.onload = () => {
                        mainImage.src = newSrc;
                        mainImage.style.opacity = '1';
                    };
                    img.onerror = () => {
                        console.log('Error cargando imagen de galería:', newSrc);
                        mainImage.style.opacity = '1';
                    };
                }, 300);
                
                // Trackear interacción
                console.log('🖼️ Galería: Cambiando imagen a', newSrc);
            });
        });
        
        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            const activeThumb = document.querySelector('.thumbnail.active');
            if (!activeThumb) return;
            
            let index = Array.from(thumbnails).indexOf(activeThumb);
            
            if (e.key === 'ArrowRight') {
                index = (index + 1) % thumbnails.length;
            } else if (e.key === 'ArrowLeft') {
                index = (index - 1 + thumbnails.length) % thumbnails.length;
            } else {
                return;
            }
            
            thumbnails[index].click();
        });
    }
    
    // ========== 3. TIMELINE INTERACTIVO ==========
    function initTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        if (!timelineItems.length) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                        
                        // Añadir efecto de rebote al año
                        const yearElement = entry.target.querySelector('.timeline-year');
                        if (yearElement) {
                            yearElement.style.animation = 'bounceIn 0.6s ease';
                        }
                    }, index * 200); // Retraso escalonado
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });
        
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.6s ease';
            observer.observe(item);
        });
        
        // Añadir estilo para la animación de bounce
        const style = document.createElement('style');
        style.textContent = `
            @keyframes bounceIn {
                0% { transform: scale(0.3); opacity: 0; }
                50% { transform: scale(1.05); }
                70% { transform: scale(0.9); }
                100% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ========== 4. EFECTOS DE SCROLL ==========
    function initScrollEffects() {
        const aboutSection = document.querySelector('.about-section');
        
        if (!aboutSection) return;
        
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            const sectionTop = aboutSection.offsetTop;
            const sectionHeight = aboutSection.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Verificar si la sección está en vista
            if (scrollY > sectionTop - windowHeight * 0.8 && 
                scrollY < sectionTop + sectionHeight - windowHeight * 0.2) {
                
                // Efecto parallax en el header
                const headerBg = document.querySelector('.header-background');
                if (headerBg) {
                    const speed = 0.5;
                    const yPos = (scrollY - sectionTop) * speed;
                    headerBg.style.transform = `translate(-50%, calc(-50% + ${yPos}px))`;
                }
                
                // Efecto de aparición en elementos
                const animatedElements = aboutSection.querySelectorAll('.mv-card, .value-card, .featured-testimonial');
                animatedElements.forEach((el, index) => {
                    const elTop = el.getBoundingClientRect().top;
                    if (elTop < windowHeight * 0.8) {
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            }
            
            lastScroll = scrollY;
        });
        
        // Inicializar opacidad de elementos animados
        const animatedElements = aboutSection.querySelectorAll('.mv-card, .value-card, .featured-testimonial');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
        });
    }
    
    // ========== 5. EFECTOS HOVER ==========
    function initHoverEffects() {
        // Efecto hover en tarjetas de valores
        const valueCards = document.querySelectorAll('.value-card');
        valueCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.value-icon');
                if (icon) {
                    icon.style.transform = 'rotate(360deg) scale(1.1)';
                    icon.style.transition = 'transform 0.6s ease';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.value-icon');
                if (icon) {
                    icon.style.transform = 'rotate(0deg) scale(1)';
                }
            });
        });
        
        // Efecto hover en botones CTA
        const ctaButtons = document.querySelectorAll('.cta-btn');
        ctaButtons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // ========== 6. ANIMACIONES DE ENTRADA ==========
    function initEntranceAnimations() {
        const aboutSection = document.querySelector('.about-section');
        
        if (!aboutSection) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Añadir clase de animación
                    aboutSection.classList.add('animated');
                    
                    // Disparar evento personalizado
                    window.dispatchEvent(new CustomEvent('aboutSectionVisible'));
                    
                    observer.unobserve(aboutSection);
                }
            });
        }, {
            threshold: 0.2
        });
        
        observer.observe(aboutSection);
    }
    
    // ========== FUNCIONES PÚBLICAS ==========
    window.aboutSection = {
        // Forzar animación de números
        animateNumbers: function() {
            initNumberCounters();
        },
        
        // Cambiar imagen de galería por índice
        changeGalleryImage: function(index) {
            const thumbnails = document.querySelectorAll('.thumbnail');
            if (thumbnails[index]) {
                thumbnails[index].click();
            }
        },
        
        // Scroll a la sección
        scrollToSection: function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        },
        
        // Reset animaciones
        resetAnimations: function() {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(num => {
                num.textContent = '0';
            });
            
            // Re-inicializar contadores
            setTimeout(initNumberCounters, 500);
        }
    };
});

// Fallback si el DOM ya está cargado
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => {
        if (typeof initAboutSection === 'function') {
            initAboutSection();
        }
    }, 1000);
}