/**
 * FAQ Section - Aventura Travel
 * Funcionalidades interactivas para la sección de preguntas frecuentes
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM cargado, inicializando FAQ...');
    initFAQSection();
    
    function initFAQSection() {
        console.log('❓ Inicializando sección FAQ...');
        
        // 1. Sistema de filtrado por categorías
        initCategoryFilter();
        
        // 2. Acordeón de preguntas y respuestas
        initFAQAccordion();
        
        // 3. Inicializar animaciones
        initAnimations();
        
        // 4. Botones de contacto
        initContactButtons();
        
        console.log('✅ FAQ inicializado correctamente');
    }
    
    // ========== 1. FILTRADO POR CATEGORÍAS ==========
    function initCategoryFilter() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const faqGroups = document.querySelectorAll('.faq-group');
        
        if (!categoryButtons.length) {
            console.warn('⚠️ No se encontraron botones de categoría');
            return;
        }
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                console.log(`📂 Filtrando por categoría: ${category}`);
                
                // Remover clase active de todos los botones
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Añadir clase active al botón clickeado
                this.classList.add('active');
                
                // Ocultar todos los grupos FAQ
                faqGroups.forEach(group => {
                    group.classList.remove('active');
                });
                
                // Mostrar el grupo correspondiente
                if (category === 'all') {
                    faqGroups.forEach(group => {
                        group.classList.add('active');
                    });
                } else {
                    const targetGroup = document.querySelector(`.faq-group[data-category="${category}"]`);
                    if (targetGroup) {
                        targetGroup.classList.add('active');
                    }
                }
                
                // Scroll suave al inicio de las preguntas
                setTimeout(() => {
                    const faqQuestions = document.querySelector('.faq-questions');
                    if (faqQuestions) {
                        faqQuestions.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 100);
            });
        });
    }
    
    // ========== 2. ACORDEÓN DE PREGUNTAS Y RESPUESTAS ==========
    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        if (!faqItems.length) {
            console.warn('⚠️ No se encontraron preguntas FAQ');
            return;
        }
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            // Inicializar altura de respuestas
            if (answer) {
                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = '0';
                    answer.style.overflow = 'hidden';
                }
            }
            
            question.addEventListener('click', function() {
                // Alternar el item actual
                const isActive = item.classList.contains('active');
                
                // Cerrar otros items abiertos en el mismo grupo
                const parentGroup = item.closest('.faq-group');
                if (parentGroup) {
                    const otherItems = parentGroup.querySelectorAll('.faq-item');
                    otherItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            closeFAQItem(otherItem);
                        }
                    });
                }
                
                // Abrir o cerrar el item actual
                if (isActive) {
                    closeFAQItem(item);
                } else {
                    openFAQItem(item);
                }
            });
        });
    }
    
    // Función para abrir un item FAQ
    function openFAQItem(item) {
        const answer = item.querySelector('.faq-answer');
        item.classList.add('active');
        
        if (answer) {
            // Calcular altura exacta
            const contentHeight = answer.scrollHeight;
            answer.style.maxHeight = contentHeight + 'px';
            answer.style.paddingTop = '20px';
            answer.style.paddingBottom = '30px';
        }
        
        // Actualizar icono
        const toggleIcon = item.querySelector('.faq-toggle i');
        if (toggleIcon) {
            toggleIcon.className = 'fas fa-chevron-up';
        }
    }
    
    // Función para cerrar un item FAQ
    function closeFAQItem(item) {
        const answer = item.querySelector('.faq-answer');
        item.classList.remove('active');
        
        if (answer) {
            answer.style.maxHeight = '0';
            answer.style.paddingTop = '0';
            answer.style.paddingBottom = '0';
        }
        
        // Actualizar icono
        const toggleIcon = item.querySelector('.faq-toggle i');
        if (toggleIcon) {
            toggleIcon.className = 'fas fa-chevron-down';
        }
    }
    
    // ========== 3. ANIMACIONES ==========
    function initAnimations() {
        // Observador para animaciones al hacer scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observar la sección FAQ
        const faqSection = document.querySelector('.faq-section');
        if (faqSection) {
            observer.observe(faqSection);
        }
    }
    
    // ========== 4. BOTONES DE CONTACTO ==========
    function initContactButtons() {
        const contactButtons = document.querySelectorAll('.contact-option, .cta-btn');
        
        contactButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                const text = this.textContent.trim();
                console.log(`📞 Contacto clickeado: ${text} -> ${href}`);
                
                // No necesitamos prevenir el comportamiento por defecto
                // Los enlaces se abrirán normalmente
            });
        });
    }
    
    // ========== FUNCIONES PÚBLICAS ==========
    window.faqSection = {
        // Abrir una pregunta específica por su texto
        openQuestion: function(questionText) {
            const faqItems = document.querySelectorAll('.faq-item');
            
            for (const item of faqItems) {
                const itemQuestion = item.querySelector('h4');
                if (itemQuestion && itemQuestion.textContent.includes(questionText)) {
                    openFAQItem(item);
                    
                    // Scroll a la pregunta
                    setTimeout(() => {
                        item.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }, 300);
                    
                    return true;
                }
            }
            
            console.warn(`❌ Pregunta no encontrada: "${questionText}"`);
            return false;
        },
        
        // Filtrar por categoría programáticamente
        filterByCategory: function(category) {
            const button = document.querySelector(`.category-btn[data-category="${category}"]`);
            if (button) {
                button.click();
                console.log(`✅ Filtrado a categoría: ${category}`);
            } else {
                console.warn(`❌ Categoría no encontrada: ${category}`);
            }
        },
        
        // Expandir todas las preguntas
        expandAll: function() {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                if (!item.classList.contains('active')) {
                    openFAQItem(item);
                }
            });
            console.log('✅ Todas las preguntas expandidas');
        },
        
        // Contraer todas las preguntas
        collapseAll: function() {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                if (item.classList.contains('active')) {
                    closeFAQItem(item);
                }
            });
            console.log('✅ Todas las preguntas contraídas');
        }
    };
});

// Inicialización de emergencia si falla DOMContentLoaded
setTimeout(function() {
    if (!document.querySelector('.faq-section .faq-item.active')) {
        console.log('🔄 Inicialización de emergencia FAQ');
        if (typeof initFAQSection === 'function') {
            initFAQSection();
        }
    }
}, 2000);