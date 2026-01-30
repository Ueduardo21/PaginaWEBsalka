/**
 * FAQ Section - Aventura Travel
 * Funcionalidades interactivas para la sección de preguntas frecuentes
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar cuando el loader termine
    window.addEventListener('loaderComplete', initFAQSection);
    
    // O si ya está cargado, inicializar directamente
    if (document.body.classList.contains('page-loaded')) {
        initFAQSection();
    }
    
    function initFAQSection() {
        console.log('❓ Inicializando sección FAQ...');
        
        // 1. Sistema de filtrado por categorías
        initCategoryFilter();
        
        // 2. Acordeón de preguntas y respuestas
        initFAQAccordion();
        
        // 3. Búsqueda de preguntas (si se implementa después)
        initSearchFunctionality();
        
        // 4. Animaciones de scroll
        initScrollAnimations();
        
        // 5. Tracking de interacciones
        initInteractionTracking();
        
        // 6. Botones de contacto
        initContactButtons();
    }
    
    // ========== 1. FILTRADO POR CATEGORÍAS ==========
    function initCategoryFilter() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const faqGroups = document.querySelectorAll('.faq-group');
        
        if (!categoryButtons.length || !faqGroups.length) return;
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Remover clase active de todos los botones
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Añadir clase active al botón clickeado
                this.classList.add('active');
                
                // Ocultar todos los grupos FAQ
                faqGroups.forEach(group => {
                    group.classList.remove('active');
                    group.style.display = 'none';
                });
                
                // Mostrar el grupo correspondiente
                if (category === 'all') {
                    faqGroups.forEach(group => {
                        group.classList.add('active');
                        setTimeout(() => {
                            group.style.display = 'block';
                        }, 10);
                    });
                } else {
                    const targetGroup = document.querySelector(`.faq-group[data-category="${category}"]`);
                    if (targetGroup) {
                        targetGroup.classList.add('active');
                        setTimeout(() => {
                            targetGroup.style.display = 'block';
                        }, 10);
                    }
                }
                
                // Track de categoría seleccionada
                trackCategorySelection(category);
                
                // Scroll suave al inicio de las preguntas
                setTimeout(() => {
                    document.querySelector('.faq-questions').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            });
        });
    }
    
    // ========== 2. ACORDEÓN DE PREGUNTAS Y RESPUESTAS ==========
    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        if (!faqItems.length) return;
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            question.addEventListener('click', function() {
                // Cerrar otros items abiertos en el mismo grupo
                const parentGroup = item.closest('.faq-group');
                const otherItems = parentGroup.querySelectorAll('.faq-item');
                
                otherItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        otherAnswer.style.maxHeight = '0';
                        otherAnswer.style.padding = '0 30px';
                    }
                });
                
                // Alternar el item actual
                item.classList.toggle('active');
                
                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.padding = '0 30px 30px';
                    
                    // Track de pregunta abierta
                    const questionText = item.querySelector('h4').textContent;
                    trackQuestionOpen(questionText);
                } else {
                    answer.style.maxHeight = '0';
                    answer.style.padding = '0 30px';
                }
            });
        });
        
        // Abrir primera pregunta de cada grupo por defecto
        const faqGroups = document.querySelectorAll('.faq-group.active');
        faqGroups.forEach(group => {
            const firstItem = group.querySelector('.faq-item');
            if (firstItem) {
                firstItem.classList.add('active');
                const answer = firstItem.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 30px 30px';
            }
        });
    }
    
    // ========== 3. FUNCIONALIDAD DE BÚSQUEDA ==========
    function initSearchFunctionality() {
        // Crear campo de búsqueda si no existe
        const searchContainer = document.createElement('div');
        searchContainer.className = 'faq-search-container';
        searchContainer.innerHTML = `
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" id="faqSearch" placeholder="Buscar en preguntas frecuentes...">
                <button class="search-clear" id="clearSearch">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        const faqHeader = document.querySelector('.faq-header');
        if (faqHeader) {
            faqHeader.appendChild(searchContainer);
            
            // Estilos para la búsqueda
            const searchStyles = document.createElement('style');
            searchStyles.textContent = `
                .faq-search-container {
                    max-width: 600px;
                    margin: 30px auto 0;
                }
                
                .search-box {
                    position: relative;
                    display: flex;
                    align-items: center;
                    background: var(--faq-white);
                    border-radius: 50px;
                    padding: 5px 20px;
                    box-shadow: var(--faq-shadow);
                    border: 2px solid rgba(10, 31, 58, 0.1);
                    transition: all 0.3s ease;
                }
                
                .search-box:focus-within {
                    border-color: var(--faq-secondary);
                    box-shadow: 0 10px 30px rgba(6, 214, 160, 0.2);
                }
                
                .search-box i {
                    color: var(--faq-text-light);
                    font-size: 1.1rem;
                }
                
                #faqSearch {
                    flex: 1;
                    border: none;
                    padding: 15px 20px;
                    font-size: 1rem;
                    background: transparent;
                    outline: none;
                    color: var(--faq-text);
                }
                
                #faqSearch::placeholder {
                    color: var(--faq-text-light);
                }
                
                .search-clear {
                    background: none;
                    border: none;
                    color: var(--faq-text-light);
                    cursor: pointer;
                    padding: 5px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .search-clear.visible {
                    opacity: 1;
                }
                
                .search-clear:hover {
                    color: var(--faq-secondary);
                }
                
                .search-results-info {
                    text-align: center;
                    margin-top: 15px;
                    color: var(--faq-text-light);
                    font-size: 0.9rem;
                }
            `;
            document.head.appendChild(searchStyles);
            
            // Funcionalidad de búsqueda
            const searchInput = document.getElementById('faqSearch');
            const clearButton = document.getElementById('clearSearch');
            const faqItems = document.querySelectorAll('.faq-item');
            
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase().trim();
                
                // Mostrar/ocultar botón de limpiar
                if (searchTerm.length > 0) {
                    clearButton.classList.add('visible');
                } else {
                    clearButton.classList.remove('visible');
                    resetSearch();
                    return;
                }
                
                // Filtrar preguntas
                let foundCount = 0;
                faqItems.forEach(item => {
                    const questionText = item.querySelector('h4').textContent.toLowerCase();
                    const answerText = item.querySelector('.faq-answer').textContent.toLowerCase();
                    
                    if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                        item.style.display = 'block';
                        foundCount++;
                        
                        // Resaltar término buscado
                        highlightText(item, searchTerm);
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Mostrar contador de resultados
                showSearchResults(foundCount, searchTerm);
                
                // Track de búsqueda
                trackSearch(searchTerm, foundCount);
            });
            
            clearButton.addEventListener('click', function() {
                searchInput.value = '';
                this.classList.remove('visible');
                resetSearch();
            });
        }
    }
    
    // ========== 4. ANIMACIONES DE SCROLL ==========
    function initScrollAnimations() {
        const faqSection = document.querySelector('.faq-section');
        
        if (!faqSection) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    faqSection.classList.add('animated');
                    
                    // Animación escalonada para los items
                    const faqItems = entry.target.querySelectorAll('.faq-item');
                    faqItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                    
                    observer.unobserve(faqSection);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
        
        observer.observe(faqSection);
        
        // Preparar estado inicial de los items
        const faqItems = faqSection.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.5s ease';
        });
    }
    
    // ========== 5. TRACKING DE INTERACCIONES ==========
    function initInteractionTracking() {
        // Guardar preguntas frecuentes vistas
        const viewedQuestions = new Set();
        const faqItems = document.querySelectorAll('.faq-item');
        
        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const questionText = entry.target.querySelector('h4').textContent;
                    if (!viewedQuestions.has(questionText)) {
                        viewedQuestions.add(questionText);
                        trackQuestionView(questionText);
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        });
        
        faqItems.forEach(item => itemObserver.observe(item));
    }
    
    // ========== 6. BOTONES DE CONTACTO ==========
    function initContactButtons() {
        const contactButtons = document.querySelectorAll('.contact-option, .cta-btn');
        
        contactButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const contactMethod = this.classList.contains('whatsapp') ? 'whatsapp' :
                                    this.classList.contains('email') ? 'email' :
                                    this.classList.contains('primary') ? 'email_form' : 'phone';
                
                trackContactClick(contactMethod);
                
                // No prevenir comportamiento por defecto (navegación)
            });
        });
    }
    
    // ========== FUNCIONES AUXILIARES ==========
    function highlightText(element, searchTerm) {
        const textElements = element.querySelectorAll('h4, .faq-answer p, .faq-answer li');
        
        textElements.forEach(textElement => {
            const originalHTML = textElement.innerHTML;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const highlightedHTML = originalHTML.replace(
                regex, 
                '<span class="search-highlight">$1</span>'
            );
            textElement.innerHTML = highlightedHTML;
        });
    }
    
    function showSearchResults(count, term) {
        // Remover info anterior si existe
        const existingInfo = document.querySelector('.search-results-info');
        if (existingInfo) existingInfo.remove();
        
        const infoElement = document.createElement('div');
        infoElement.className = 'search-results-info';
        
        if (count === 0) {
            infoElement.innerHTML = `
                <p>No encontramos resultados para "<strong>${term}</strong>"</p>
                <p style="margin-top: 5px; font-size: 0.8rem;">
                    Prueba con otras palabras o <a href="#contact" style="color: var(--faq-secondary);">contáctanos</a>
                </p>
            `;
        } else {
            infoElement.innerHTML = `
                <p>Encontramos <strong>${count}</strong> resultado${count !== 1 ? 's' : ''} para "<strong>${term}</strong>"</p>
            `;
        }
        
        const searchContainer = document.querySelector('.faq-search-container');
        if (searchContainer) {
            searchContainer.appendChild(infoElement);
        }
        
        // Estilos para resaltado
        if (!document.querySelector('.highlight-styles')) {
            const styles = document.createElement('style');
            styles.className = 'highlight-styles';
            styles.textContent = `
                .search-highlight {
                    background: rgba(255, 209, 102, 0.5);
                    padding: 2px 4px;
                    border-radius: 3px;
                    font-weight: 600;
                }
            `;
            document.head.appendChild(styles);
        }
    }
    
    function resetSearch() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            item.style.display = 'block';
            
            // Remover resaltado
            const highlights = item.querySelectorAll('.search-highlight');
            highlights.forEach(highlight => {
                const parent = highlight.parentNode;
                parent.innerHTML = parent.innerHTML.replace(/<span class="search-highlight">(.*?)<\/span>/gi, '$1');
            });
        });
        
        // Remover info de resultados
        const resultsInfo = document.querySelector('.search-results-info');
        if (resultsInfo) resultsInfo.remove();
    }
    
    // ========== FUNCIONES DE TRACKING ==========
    function trackCategorySelection(category) {
        const trackingData = {
            event: 'faq_category_selected',
            category: category,
            timestamp: new Date().toISOString()
        };
        
        console.log(`📊 Categoría FAQ seleccionada: ${category}`);
        saveTrackingData('faqCategoryClicks', trackingData);
    }
    
    function trackQuestionOpen(question) {
        const trackingData = {
            event: 'faq_question_opened',
            question: question,
            timestamp: new Date().toISOString()
        };
        
        console.log(`📊 Pregunta FAQ abierta: ${question.substring(0, 50)}...`);
        saveTrackingData('faqQuestionOpens', trackingData);
    }
    
    function trackQuestionView(question) {
        const trackingData = {
            event: 'faq_question_viewed',
            question: question,
            timestamp: new Date().toISOString()
        };
        
        saveTrackingData('faqQuestionViews', trackingData);
    }
    
    function trackSearch(term, results) {
        const trackingData = {
            event: 'faq_search_performed',
            search_term: term,
            results_count: results,
            timestamp: new Date().toISOString()
        };
        
        console.log(`🔍 Búsqueda FAQ: "${term}" (${results} resultados)`);
        saveTrackingData('faqSearches', trackingData);
    }
    
    function trackContactClick(method) {
        const trackingData = {
            event: 'faq_contact_click',
            contact_method: method,
            timestamp: new Date().toISOString()
        };
        
        console.log(`📞 Contacto FAQ: ${method}`);
        saveTrackingData('faqContactClicks', trackingData);
    }
    
    function saveTrackingData(key, data) {
        const existingData = JSON.parse(localStorage.getItem(key) || '[]');
        existingData.push(data);
        localStorage.setItem(key, JSON.stringify(existingData.slice(-100))); // Últimos 100 registros
    }
    
    // ========== FUNCIONES PÚBLICAS ==========
    window.faqSection = {
        // Abrir una pregunta específica por su texto
        openQuestion: function(questionText) {
            const faqItems = document.querySelectorAll('.faq-item');
            
            for (const item of faqItems) {
                const itemQuestion = item.querySelector('h4').textContent;
                if (itemQuestion.includes(questionText)) {
                    item.click(); // Simular click para abrir
                    
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
            
            return false;
        },
        
        // Filtrar por categoría programáticamente
        filterByCategory: function(category) {
            const button = document.querySelector(`.category-btn[data-category="${category}"]`);
            if (button) {
                button.click();
            }
        },
        
        // Buscar preguntas
        searchQuestions: function(searchTerm) {
            const searchInput = document.getElementById('faqSearch');
            if (searchInput) {
                searchInput.value = searchTerm;
                searchInput.dispatchEvent(new Event('input'));
            }
        },
        
        // Obtener estadísticas de uso
        getUsageStats: function() {
            return {
                categoryClicks: JSON.parse(localStorage.getItem('faqCategoryClicks') || '[]').length,
                questionOpens: JSON.parse(localStorage.getItem('faqQuestionOpens') || '[]').length,
                searches: JSON.parse(localStorage.getItem('faqSearches') || '[]').length,
                contactClicks: JSON.parse(localStorage.getItem('faqContactClicks') || '[]').length
            };
        },
        
        // Expandir todas las preguntas
        expandAll: function() {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                if (!item.classList.contains('active')) {
                    item.classList.add('active');
                    const answer = item.querySelector('.faq-answer');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.padding = '0 30px 30px';
                }
            });
        },
        
        // Contraer todas las preguntas
        collapseAll: function() {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    const answer = item.querySelector('.faq-answer');
                    answer.style.maxHeight = '0';
                    answer.style.padding = '0 30px';
                }
            });
        }
    };
});

// Fallback si el DOM ya está cargado
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => {
        if (typeof initFAQSection === 'function') {
            initFAQSection();
        }
    }, 1000);
}