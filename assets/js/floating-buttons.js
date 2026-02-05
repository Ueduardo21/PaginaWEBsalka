/**
 * BOTONES FLOTANTES - WhatsApp y Volver Arriba
 * VERSIÓN CORREGIDA Y MEJORADA
 */

// Variables globales
let backToTopBtn = null;
let scrollTimeout = null;
let isScrolling = false;

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔘 Inicializando botones flotantes...');
    
    // Pequeño delay para asegurar que el DOM está listo
    setTimeout(initButtons, 100);
});

function initButtons() {
    console.log('🚀 Iniciando configuración de botones...');
    
    // 1. Inicializar botón Volver Arriba
    initBackToTop();
    
    // 2. Inicializar botón de WhatsApp
    initWhatsAppButton();
    
    // 3. Configurar eventos de scroll
    setupScrollEvents();
    
    // 4. Forzar chequeo inicial
    checkBackToTopVisibility();
    
    console.log('✅ Botones configurados correctamente');
}

/**
 * INICIALIZAR BOTÓN VOLVER ARRIBA - CORREGIDO
 */
function initBackToTop() {
    backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) {
        console.error('❌ ERROR: No se encontró el botón con id="backToTop"');
        console.log('🔍 Buscando en el DOM...');
        console.log('- Todos los botones:', document.querySelectorAll('button'));
        console.log('- Elementos con clase .back-to-top:', document.querySelectorAll('.back-to-top'));
        return;
    }
    
    console.log('✅ Botón "Volver Arriba" encontrado:', backToTopBtn);
    
    // Asegurar que el botón sea visible en el DOM
    backToTopBtn.style.display = 'flex';
    backToTopBtn.style.position = 'fixed';
    
    // Agregar evento de clic
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🎯 Click en botón Volver Arriba');
        smoothScrollToTop();
    });
    
    // Agregar atributos de accesibilidad
    backToTopBtn.setAttribute('aria-label', 'Volver al inicio de la página');
    backToTopBtn.setAttribute('title', 'Volver arriba');
    
    // Debug: mostrar información del botón
    console.log('📋 Información del botón:', {
        id: backToTopBtn.id,
        className: backToTopBtn.className,
        style: backToTopBtn.style.cssText,
        computedStyle: window.getComputedStyle(backToTopBtn)
    });
}

/**
 * VERIFICAR VISIBILIDAD DEL BOTÓN
 */
function checkBackToTopVisibility() {
    if (!backToTopBtn) {
        console.warn('⚠️ No hay botón para verificar');
        return;
    }
    
    const scrollPosition = getScrollPosition();
    const shouldShow = scrollPosition > 300;
    
    console.log(`📏 Scroll: ${scrollPosition}px - Mostrar: ${shouldShow}`);
    
    if (shouldShow) {
        backToTopBtn.classList.add('visible');
        backToTopBtn.style.pointerEvents = 'auto';
    } else {
        backToTopBtn.classList.remove('visible');
        backToTopBtn.style.pointerEvents = 'none';
    }
}

/**
 * OBTENER POSICIÓN DEL SCROLL (compatible)
 */
function getScrollPosition() {
    return window.pageYOffset || 
           document.documentElement.scrollTop || 
           document.body.scrollTop || 
           0;
}

/**
 * SCROLL SUAVE MEJORADO
 */
function smoothScrollToTop() {
    if (isScrolling) return;
    
    isScrolling = true;
    console.log('⬆️ Iniciando scroll suave hacia arriba...');
    
    const startPosition = getScrollPosition();
    const startTime = performance.now();
    const duration = 600;
    
    // Función de animación
    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (suave)
        const easeOutCubic = function(t) {
            return 1 - Math.pow(1 - t, 3);
        };
        
        const ease = easeOutCubic(progress);
        const targetPosition = startPosition * (1 - ease);
        
        window.scrollTo(0, startPosition - targetPosition);
        
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        } else {
            isScrolling = false;
            console.log('✅ Scroll completado');
            
            // Forzar ocultar el botón después del scroll
            setTimeout(() => {
                backToTopBtn.classList.remove('visible');
                backToTopBtn.style.pointerEvents = 'none';
            }, 300);
        }
    }
    
    // Usar scroll nativo si está disponible
    if ('scrollBehavior' in document.documentElement.style) {
        console.log('🔄 Usando scroll suave nativo');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            isScrolling = false;
            backToTopBtn.classList.remove('visible');
            backToTopBtn.style.pointerEvents = 'none';
        }, 600);
    } else {
        console.log('🔄 Usando scroll suave manual');
        requestAnimationFrame(animateScroll);
    }
}

/**
 * CONFIGURAR EVENTOS DE SCROLL
 */
function setupScrollEvents() {
    // Debounce para mejor rendimiento
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            checkBackToTopVisibility();
        }, 50);
    });
    
    // También verificar en resize
    window.addEventListener('resize', checkBackToTopVisibility);
    
    // Verificar después de cargar imágenes
    window.addEventListener('load', function() {
        setTimeout(checkBackToTopVisibility, 500);
    });
}

/**
 * INICIALIZAR BOTÓN DE WHATSAPP
 */
function initWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    if (!whatsappBtn) {
        console.warn('⚠️ Botón de WhatsApp no encontrado');
        return;
    }
    
    console.log('✅ Botón de WhatsApp encontrado:', whatsappBtn);
    
    // Asegurar visibilidad
    whatsappBtn.style.display = 'flex';
    whatsappBtn.style.position = 'fixed';
    
    // Agregar atributos de accesibilidad
    whatsappBtn.setAttribute('aria-label', 'Contactar por WhatsApp');
    whatsappBtn.setAttribute('rel', 'noopener noreferrer');
    
    // Evento para dispositivos táctiles
    if ('ontouchstart' in window) {
        whatsappBtn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        whatsappBtn.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    }
}

/**
 * DEBUG: Verificar estado del botón
 */
function debugButtonStatus() {
    console.log('🔍 DEBUG - Estado del botón Volver Arriba:');
    
    if (!backToTopBtn) {
        console.log('❌ Botón no inicializado');
        return;
    }
    
    const rect = backToTopBtn.getBoundingClientRect();
    const styles = window.getComputedStyle(backToTopBtn);
    
    console.log({
        existe: !!backToTopBtn,
        id: backToTopBtn.id,
        clases: backToTopBtn.className,
        visibleEnDOM: rect.width > 0 && rect.height > 0,
        opacidad: styles.opacity,
        visibilidad: styles.visibility,
        display: styles.display,
        position: styles.position,
        zIndex: styles.zIndex,
        scrollActual: getScrollPosition(),
        tieneClaseVisible: backToTopBtn.classList.contains('visible')
    });
}

// Ejecutar debug después de 2 segundos
setTimeout(debugButtonStatus, 2000);

/**
 * API PÚBLICA PARA USO EXTERNO
 */
window.FloatingButtons = {
    // Scroll al inicio
    scrollToTop: smoothScrollToTop,
    
    // Mostrar/ocultar botón manualmente
    show: function() {
        if (backToTopBtn) {
            backToTopBtn.classList.add('visible');
            backToTopBtn.style.pointerEvents = 'auto';
        }
    },
    
    hide: function() {
        if (backToTopBtn) {
            backToTopBtn.classList.remove('visible');
            backToTopBtn.style.pointerEvents = 'none';
        }
    },
    
    // Forzar verificación
    checkVisibility: checkBackToTopVisibility,
    
    // Debug
    debug: debugButtonStatus,
    
    // Actualizar número de WhatsApp
    updateWhatsAppNumber: function(newNumber) {
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (whatsappBtn) {
            whatsappBtn.href = `https://wa.me/${newNumber}`;
            console.log(`📱 Número actualizado: ${newNumber}`);
        }
    }
};

// Exponer funciones globalmente para pruebas
window.checkBackToTopVisibility = checkBackToTopVisibility;
window.smoothScrollToTop = smoothScrollToTop;