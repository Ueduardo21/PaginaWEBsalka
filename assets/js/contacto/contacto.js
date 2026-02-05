/**
 * Contacto.js - Funcionalidades para la página de contacto
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('📞 Inicializando página de contacto...');
    
    // Elementos del DOM
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const contactForm = document.getElementById('contactForm');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const backToTop = document.getElementById('backToTop');
    const travelerMinus = document.querySelector('.traveler-btn.minus');
    const travelerPlus = document.querySelector('.traveler-btn.plus');
    const travelersInput = document.getElementById('travelers');
    const travelDateInput = document.getElementById('travelDate');
    
    // 1. Menú Hamburguesa
    function initHamburgerMenu() {
        if (!hamburger) return;
        
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Bloquear scroll cuando el menú está abierto
            document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
        });
        
        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // 2. Formulario de Contacto
    function initContactForm() {
        if (!contactForm) return;
        
        // Configurar fecha mínima (mañana)
        if (travelDateInput) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            travelDateInput.min = tomorrow.toISOString().split('T')[0];
            
            // Configurar fecha máxima (2 años desde hoy)
            const maxDate = new Date();
            maxDate.setFullYear(maxDate.getFullYear() + 2);
            travelDateInput.max = maxDate.toISOString().split('T')[0];
        }
        
        // Controlador de viajeros
        if (travelerMinus && travelerPlus && travelersInput) {
            travelerMinus.addEventListener('click', () => {
                let value = parseInt(travelersInput.value);
                if (value > 1) {
                    travelersInput.value = value - 1;
                }
            });
            
            travelerPlus.addEventListener('click', () => {
                let value = parseInt(travelersInput.value);
                if (value < 20) {
                    travelersInput.value = value + 1;
                }
            });
        }
        
        // Validación en tiempo real
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        
        if (nameInput) nameInput.addEventListener('input', validateName);
        if (emailInput) emailInput.addEventListener('input', validateEmail);
        if (phoneInput) phoneInput.addEventListener('input', validatePhone);
        if (messageInput) messageInput.addEventListener('input', validateMessage);
        
        // Envío del formulario
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    function validateName() {
        const name = this.value.trim();
        const errorElement = document.getElementById('nameError');
        
        if (name.length < 2) {
            showError(errorElement, 'El nombre debe tener al menos 2 caracteres');
            return false;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) {
            showError(errorElement, 'El nombre solo puede contener letras y espacios');
            return false;
        } else {
            clearError(errorElement);
            return true;
        }
    }
    
    function validateEmail() {
        const email = this.value.trim();
        const errorElement = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            showError(errorElement, 'Por favor ingresa un correo electrónico válido');
            return false;
        } else {
            clearError(errorElement);
            return true;
        }
    }
    
    function validatePhone() {
        const phone = this.value.trim();
        const errorElement = document.getElementById('phoneError');
        
        if (phone && !/^[\d\s\-\+\(\)]+$/.test(phone)) {
            showError(errorElement, 'Por favor ingresa un número de teléfono válido');
            return false;
        } else {
            clearError(errorElement);
            return true;
        }
    }
    
    function validateMessage() {
        const message = this.value.trim();
        const errorElement = document.getElementById('messageError');
        
        if (message.length < 10) {
            showError(errorElement, 'El mensaje debe tener al menos 10 caracteres');
            return false;
        } else {
            clearError(errorElement);
            return true;
        }
    }
    
    function showError(element, message) {
        if (element) {
            element.textContent = message;
            element.style.display = 'block';
        }
    }
    
    function clearError(element) {
        if (element) {
            element.textContent = '';
            element.style.display = 'none';
        }
    }
    
    async function handleFormSubmit(e) {
        e.preventDefault();
        
        // Validar todos los campos
        const isNameValid = validateName.call(document.getElementById('name'));
        const isEmailValid = validateEmail.call(document.getElementById('email'));
        const isPhoneValid = validatePhone.call(document.getElementById('phone'));
        const isMessageValid = validateMessage.call(document.getElementById('message'));
        
        if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
            showNotification('Por favor corrige los errores en el formulario', 'error');
            return;
        }
        
        // Mostrar estado de carga
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        try {
            // Simular envío a servidor (en producción, usaría fetch)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Mostrar éxito
            showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
            
            // Resetear formulario
            contactForm.reset();
            travelersInput.value = 1;
            
            // Limpiar errores
            document.querySelectorAll('.error-message').forEach(clearError);
            
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            showNotification('Hubo un error al enviar el mensaje. Intenta nuevamente.', 'error');
        } finally {
            // Restaurar botón
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }
    
    function showNotification(message, type) {
        // Crear notificación
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Estilos de la notificación
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#06d6a0' : '#ef476f'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            max-width: 400px;
        `;
        
        // Animación CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Botón de cierre
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Añadir al documento
        document.body.appendChild(notification);
        
        // Auto-remover después de 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease-out forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // 3. FAQ Accordion
    function initFAQ() {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                
                // Cerrar otros items
                faqQuestions.forEach(q => {
                    if (q !== question) {
                        const otherItem = q.parentElement;
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        otherAnswer.style.maxHeight = null;
                    }
                });
                
                // Alternar item actual
                item.classList.toggle('active');
                const answer = item.querySelector('.faq-answer');
                
                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = null;
                }
            });
        });
    }
    
    // 4. Botón Volver Arriba
    function initBackToTop() {
        if (!backToTop) return;
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 5. Animaciones al Scrollear
    function initScrollAnimations() {
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.info-card, .social-link, .faq-item');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Configurar elementos inicialmente
        document.querySelectorAll('.info-card, .social-link, .faq-item').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Ejecutar una vez al cargar
    }
    
    // 6. Máscara para teléfono
    function initPhoneMask() {
        const phoneInput = document.getElementById('phone');
        if (!phoneInput) return;
        
        phoneInput.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                value = '+51 ' + value;
                if (value.length > 8) {
                    value = value.substring(0, 8) + ' ' + value.substring(8);
                }
                if (value.length > 13) {
                    value = value.substring(0, 13);
                }
            }
            
            this.value = value;
        });
    }
    
    // 7. Pre-carga de recursos
    function preloadResources() {
        const images = [
            'imagenes/contacto-hero.jpg',
            'imagenes/map-placeholder.jpg'
        ];
        
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // 8. Inicialización
    function initialize() {
        console.log('🚀 Inicializando funcionalidades de contacto...');
        
        initHamburgerMenu();
        initContactForm();
        initFAQ();
        initBackToTop();
        initScrollAnimations();
        initPhoneMask();
        preloadResources();
        
        console.log('✅ Página de contacto inicializada correctamente');
    }
    
    // Iniciar
    initialize();
});