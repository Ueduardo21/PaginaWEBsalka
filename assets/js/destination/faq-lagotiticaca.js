/**
 * FAQ Lago Titicaca - Versión PROFESIONAL
 * Mismo funcionamiento que Machu Picchu
 */
console.log('🚀 FAQ Lago Titicaca: Iniciando versión profesional...');

(function() {
    console.log('🔄 FAQ Lago Titicaca: Cargando...');
    
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFAQTiticaca);
    } else {
        initFAQTiticaca();
    }
    
    function initFAQTiticaca() {
        const faqSection = document.getElementById('titicaca-faq');
        
        if (!faqSection) {
            console.error('❌ ERROR: No se encontró #titicaca-faq');
            return;
        }
        
        console.log('✅ FAQ Lago Titicaca encontrado');
        
        // 1. Inicializar acordeón profesional (una pregunta abierta a la vez)
        initProfessionalAccordion();
        
        // 2. Inicializar filtrado por categorías (cierra preguntas al cambiar categoría)
        initProfessionalFilter();
        
        // 3. Asegurar estado inicial correcto
        setupProfessionalState();
        
        console.log('🎉 FAQ Lago Titicaca configurado profesionalmente!');
    }
    
    // ========== ACORDEÓN PROFESIONAL ==========
    function initProfessionalAccordion() {
        console.log('📖 Configurando acordeón profesional...');
        
        const faqItems = document.querySelectorAll('#titicaca-faq .faq-item');
        console.log(`Encontradas ${faqItems.length} preguntas`);
        
        faqItems.forEach((item, index) => {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                // Configurar estado inicial con CSS
                item.style.setProperty('--answer-height', '0px');
                
                // Agregar evento click
                question.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log(`📌 Click en pregunta ${index + 1} - Titicaca`);
                    
                    // CERRAR TODAS LAS OTRAS PREGUNTAS ANTES
                    closeAllFAQItemsExcept(item);
                    
                    // Alternar estado de ESTA pregunta
                    if (item.classList.contains('active')) {
                        closeFAQItemProfessional(item);
                    } else {
                        openFAQItemProfessional(item);
                    }
                });
            }
        });
    }
    
    function openFAQItemProfessional(item) {
        console.log('📖 Abriendo pregunta profesionalmente...');
        const answer = item.querySelector('.faq-answer');
        const toggleIcon = item.querySelector('.faq-toggle i');
        
        if (!answer) return;
        
        // Calcular altura exacta
        const scrollHeight = answer.scrollHeight + 'px';
        
        // Usar CSS custom property para animación suave
        item.style.setProperty('--answer-height', scrollHeight);
        item.classList.add('active', 'opening');
        
        // Rotar ícono
        if (toggleIcon) {
            toggleIcon.style.transform = 'rotate(180deg)';
        }
        
        // Remover clase de apertura después de la animación
        setTimeout(() => {
            item.classList.remove('opening');
        }, 400);
    }
    
    function closeFAQItemProfessional(item) {
        console.log('📖 Cerrando pregunta...');
        const toggleIcon = item.querySelector('.faq-toggle i');
        
        item.style.setProperty('--answer-height', '0px');
        item.classList.remove('active', 'opening');
        
        // Rotar ícono
        if (toggleIcon) {
            toggleIcon.style.transform = 'rotate(0deg)';
        }
    }
    
    function closeAllFAQItemsExcept(exceptItem = null) {
        const allItems = document.querySelectorAll('#titicaca-faq .faq-item.active');
        
        allItems.forEach(item => {
            if (item !== exceptItem) {
                closeFAQItemProfessional(item);
            }
        });
    }
    
    function closeAllFAQItems() {
        const allItems = document.querySelectorAll('#titicaca-faq .faq-item');
        allItems.forEach(item => {
            closeFAQItemProfessional(item);
        });
    }
    
    // ========== FILTRADO PROFESIONAL ==========
    function initProfessionalFilter() {
        console.log('🔘 Configurando filtrado profesional...');
        
        const buttons = document.querySelectorAll('#titicaca-faq .category-btn');
        
        if (buttons.length === 0) return;
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const category = this.getAttribute('data-category');
                console.log(`🎯 Filtrando Titicaca por: ${category}`);
                
                // Remover active de todos los botones
                buttons.forEach(btn => btn.classList.remove('active'));
                
                // Activar este botón
                this.classList.add('active');
                
                // CERRAR TODAS LAS PREGUNTAS AL CAMBIAR CATEGORÍA
                closeAllFAQItems();
                
                // Aplicar filtro
                if (category === 'all') {
                    showAllCategoriesProfessional();
                } else {
                    showOnlyCategoryProfessional(category);
                }
            });
        });
    }
    
    function showAllCategoriesProfessional() {
        const groups = document.querySelectorAll('#titicaca-faq .faq-group');
        
        groups.forEach((group, index) => {
            group.style.display = 'block';
            group.classList.add('visible');
            
            // Animación escalonada
            setTimeout(() => {
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }
    
    function showOnlyCategoryProfessional(category) {
        const allGroups = document.querySelectorAll('#titicaca-faq .faq-group');
        
        allGroups.forEach((group, index) => {
            const groupCategory = group.getAttribute('data-category');
            
            if (groupCategory === category) {
                // Mostrar este grupo con animación
                group.style.display = 'block';
                group.classList.add('visible');
                
                setTimeout(() => {
                    group.style.opacity = '1';
                    group.style.transform = 'translateY(0)';
                }, index * 50);
            } else {
                // Ocultar otros grupos
                group.style.display = 'none';
                group.classList.remove('visible');
                group.style.opacity = '0';
                group.style.transform = 'translateY(20px)';
            }
        });
    }
    
    // ========== CONFIGURACIÓN INICIAL ==========
    function setupProfessionalState() {
        console.log('⚙️ Configurando estado inicial profesional...');
        
        // Asegurar que todos los grupos sean visibles inicialmente
        const groups = document.querySelectorAll('#titicaca-faq .faq-group');
        groups.forEach(group => {
            group.style.display = 'block';
            group.classList.add('visible');
        });
    }
    
    // ========== FUNCIONES PÚBLICAS MEJORADAS ==========
    window.faqTiticacaPro = {
        // Abrir una pregunta específica (cierra las demás)
        openQuestion: function(questionText) {
            const items = document.querySelectorAll('#titicaca-faq .faq-item');
            let found = false;
            
            items.forEach(item => {
                const title = item.querySelector('h4');
                if (title && title.textContent.includes(questionText)) {
                    // Cerrar todas las demás
                    closeAllFAQItemsExcept(item);
                    
                    // Abrir esta
                    if (!item.classList.contains('active')) {
                        openFAQItemProfessional(item);
                    }
                    
                    // Scroll suave
                    setTimeout(() => {
                        item.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                        });
                    }, 300);
                    
                    found = true;
                }
            });
            
            return found;
        },
        
        // Filtrar por categoría (cierra todas las preguntas)
        filterByCategory: function(category) {
            const button = document.querySelector(`#titicaca-faq .category-btn[data-category="${category}"]`);
            if (button) {
                button.click();
                return true;
            }
            return false;
        },
        
        // Abrir todas las preguntas (todas a la vez)
        expandAll: function() {
            const items = document.querySelectorAll('#titicaca-faq .faq-item');
            items.forEach(item => {
                if (!item.classList.contains('active')) {
                    openFAQItemProfessional(item);
                }
            });
        },
        
        // Cerrar todas las preguntas
        collapseAll: function() {
            closeAllFAQItems();
        },
        
        // Obtener categoría activa
        getActiveCategory: function() {
            const activeBtn = document.querySelector('#titicaca-faq .category-btn.active');
            return activeBtn ? activeBtn.getAttribute('data-category') : 'all';
        },
        
        // Obtener pregunta activa
        getActiveQuestion: function() {
            const activeItem = document.querySelector('#titicaca-faq .faq-item.active');
            if (activeItem) {
                const title = activeItem.querySelector('h4');
                return title ? title.textContent : null;
            }
            return null;
        }
    };
    
    console.log('🔧 Funciones profesionales disponibles: window.faqTiticacaPro');
    
})();