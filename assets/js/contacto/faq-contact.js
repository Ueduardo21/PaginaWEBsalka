/**
 * FAQ Contacto - Versión MÍNIMA
 * Solo maneja el filtrado, las preguntas se abren solas
 */
(function() {
    console.log('🔄 FAQ Contacto: Cargando versión mínima...');
    
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFAQContact);
    } else {
        initFAQContact();
    }
    
    function initFAQContact() {
        const faqSection = document.getElementById('contact-faq');
        if (!faqSection) {
            console.log('⚠️ No se encontró FAQ Contacto, pero no es crítico');
            return;
        }
        
        console.log('✅ FAQ Contacto encontrado, configurando filtrado...');
        
        // 1. Asegurar que todas las categorías sean visibles inicialmente
        makeAllCategoriesVisible();
        
        // 2. Configurar botones de filtrado
        setupFilterButtons();
        
        console.log('🎉 FAQ Contacto listo!');
    }
    
    function makeAllCategoriesVisible() {
        const groups = document.querySelectorAll('#contact-faq .faq-group');
        groups.forEach(group => {
            // Remover cualquier estilo que oculte
            group.style.display = 'block';
            group.style.visibility = 'visible';
            group.style.opacity = '1';
            group.style.height = 'auto';
            group.style.overflow = 'visible';
        });
    }
    
    function setupFilterButtons() {
        const buttons = document.querySelectorAll('#contact-faq .category-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const category = this.getAttribute('data-category');
                console.log(`Filtrando: ${category}`);
                
                // Remover active de todos
                buttons.forEach(btn => btn.classList.remove('active'));
                
                // Activar este
                this.classList.add('active');
                
                // Manejar visibilidad
                if (category === 'all') {
                    showAllCategories();
                } else {
                    showOnlyCategory(category);
                }
            });
        });
    }
    
    function showAllCategories() {
        const groups = document.querySelectorAll('#contact-faq .faq-group');
        groups.forEach(group => {
            group.style.display = 'block';
            group.classList.add('visible');
            
            // Animación suave
            setTimeout(() => {
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
            }, 10);
        });
    }
    
    function showOnlyCategory(category) {
        const allGroups = document.querySelectorAll('#contact-faq .faq-group');
        
        allGroups.forEach(group => {
            if (group.getAttribute('data-category') === category) {
                // Mostrar este grupo
                group.style.display = 'block';
                group.classList.add('visible');
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
            } else {
                // Ocultar otros grupos
                group.style.display = 'none';
                group.classList.remove('visible');
            }
        });
    }
})();