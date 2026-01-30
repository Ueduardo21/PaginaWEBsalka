/**
 * Footer Minimalista - Aventura Travel
 * Funcionalidades específicas para el footer elegante
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('👣 Inicializando footer minimalista...');
    
    // 1. Contador de seguidores animado
    initFollowersCounter();
    
    // 2. Botón de volver arriba
    initBackToTop();
    
    // 3. Formulario de newsletter
    initNewsletterForm();
    
    // 4. Efectos en redes sociales
    initSocialEffects();
    
    // 5. Animaciones de entrada
    initAnimations();
    
    console.log('✅ Footer minimalista listo');
});

// ========== 1. CONTADOR DE SEGUIDORES ==========
function initFollowersCounter() {
    const followersData = [12.5, 25.3, 8.7, 15.2, 18.9, 5.4]; // K followers
    const totalElement = document.getElementById('totalFollowers');
    
    if (!totalElement) return;
    
    const totalFollowers = followersData.reduce((a, b) => a + b, 0);
    
    // Animar contador
    let current = 0;
    const increment = totalFollowers / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= totalFollowers) {
            totalElement.textContent = totalFollowers.toFixed(1) + 'K';
            clearInterval(timer);
        } else {
            totalElement.textContent = current.toFixed(1) + 'K';
        }
    }, 20);
}

// ========== 2. BOTÓN DE VOLVER ARRIBA ==========
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    if (!backToTopBtn) return;
    
    // Mostrar/ocultar al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll suave
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Efecto de pulsación
        backToTopBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            backToTopBtn.style.transform = '';
        }, 200);
        
        // Scroll suave al inicio
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        console.log('⬆️ Volviendo al inicio...');
    });
}

// ========== 3. FORMULARIO DE NEWSLETTER ==========
function initNewsletterForm() {
    const newsletterForm = document.getElementById('minimalNewsletterForm');
    const newsletterInput = newsletterForm?.querySelector('.newsletter-input');
    const submitBtn = newsletterForm?.querySelector('.newsletter-submit');
    
    if (!newsletterForm || !newsletterInput || !submitBtn) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = newsletterInput.value.trim();
        
        if (!validateEmail(email)) {
            showInputError(newsletterInput, 'Email inválido');
            return;
        }
        
        // Efecto de carga
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        // Simular envío
        setTimeout(() => {
            // Guardar suscripción
            saveSubscription(email);
            
            // Mostrar éxito
            showSuccessMessage(newsletterForm, '¡Gracias por suscribirte!');
            
            // Resetear formulario
            newsletterForm.reset();
            
            // Restaurar botón
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
            
            console.log(`📧 Newsletter suscrito: ${email}`);
        }, 1500);
    });
    
    // Validación en tiempo real
    newsletterInput.addEventListener('input', function() {
        if (this.value.trim()) {
            this.style.borderColor = '';
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showInputError(input, message) {
    input.style.borderColor = '#ef476f';
    
    // Crear mensaje de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'input-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ef476f;
        font-size: 0.8rem;
        margin-top: 5px;
        animation: fadeIn 0.3s ease;
    `;
    
    // Insertar después del input
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        errorDiv.remove();
        input.style.borderColor = '';
    }, 3000);
}

function showSuccessMessage(form, message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'newsletter-success';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    successDiv.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
        background: rgba(6, 214, 160, 0.1);
        border: 1px solid rgba(6, 214, 160, 0.3);
        padding: 12px 20px;
        border-radius: 10px;
        margin-top: 10px;
        animation: fadeIn 0.5s ease;
    `;
    
    form.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            successDiv.remove();
        }, 500);
    }, 4000);
}

function saveSubscription(email) {
    const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
    subscriptions.push({
        email: email,
        date: new Date().toISOString()
    });
    localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
}

// ========== 4. EFECTOS EN REDES SOCIALES ==========
function initSocialEffects() {
    const socialIcons = document.querySelectorAll('.social-icon-wrapper');
    
    if (!socialIcons.length) return;
    
    // Efecto de click
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            // Efecto de pulsación
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Track del click
            const platform = this.querySelector('i').className.split(' ')[1];
            trackSocialClick(platform);
        });
        
        // Efecto hover mejorado
        icon.addEventListener('mouseenter', function() {
            this.style.zIndex = '100';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });
}

function trackSocialClick(platform) {
    const clicks = JSON.parse(localStorage.getItem('socialClicks') || '[]');
    clicks.push({
        platform: platform,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('socialClicks', JSON.stringify(clicks.slice(-50))); // Últimos 50 clicks
    
    console.log(`📱 Click en ${platform}`);
}

// ========== 5. ANIMACIONES DE ENTRADA ==========
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar elementos del footer
    const elementsToAnimate = document.querySelectorAll('.social-icon-wrapper, .stat-item, .footer-brand, .footer-newsletter, .links-column');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// ========== FUNCIONES PÚBLICAS ==========
window.footerMinimal = {
    // Obtener estadísticas
    getStats: function() {
        const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
        const socialClicks = JSON.parse(localStorage.getItem('socialClicks') || '[]');
        
        return {
            subscribers: subscriptions.length,
            socialClicks: socialClicks.length,
            lastSubscription: subscriptions[subscriptions.length - 1]?.date || null
        };
    },
    
    // Suscribir email manualmente
    subscribeEmail: function(email) {
        if (!validateEmail(email)) return false;
        
        saveSubscription(email);
        console.log(`📧 Email suscrito manualmente: ${email}`);
        return true;
    },
    
    // Scroll a la sección de redes
    scrollToSocials: function() {
        const socialsSection = document.querySelector('.footer-socials');
        if (socialsSection) {
            socialsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
};

// Agregar estilos para animaciones
const footerStyles = document.createElement('style');
footerStyles.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .animated {
        animation: fadeInUp 0.6s ease-out forwards;
    }
`;
document.head.appendChild(footerStyles);