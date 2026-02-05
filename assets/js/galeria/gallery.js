// Galería Perú Tours - Dashboard Lateral
class PeruToursGallery {
    constructor() {
        this.init();
    }

    init() {
        // Inicializar elementos
        this.cacheElements();
        this.bindEvents();
        this.initializeData();
        this.updateUI();
        
        // Configurar fecha de actualización
        this.setUpdateDate();
        
        // Configurar modo responsive
        this.setupResponsive();
        
        // NOTA: Ya no usamos la API de YouTube directamente
    }

    cacheElements() {
        // Sidebar
        this.sidebar = document.querySelector('.app-sidebar');
        this.menuToggle = document.getElementById('menuToggle');
        
        // Filtros
        this.filterButtons = document.querySelectorAll('.nav-filter');
        this.currentFilterDisplay = document.getElementById('currentFilterDisplay');
        this.currentFilterCount = document.getElementById('currentFilterCount');
        this.breadcrumbFilter = document.getElementById('breadcrumbFilter');
        this.resetFilterBtn = document.getElementById('resetFilter');
        
        // Contadores
        this.totalPhotos = document.getElementById('totalPhotos');
        this.viewCount = document.getElementById('viewCount');
        this.footerCount = document.getElementById('footerCount');
        
        // Búsqueda
        this.searchInput = document.getElementById('searchInput');
        
        // Galería
        this.galleryGrid = document.getElementById('galleryGrid');
        this.galleryCards = document.querySelectorAll('.gallery-card');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        this.noResults = document.getElementById('noResults');
        
        // Modal
        this.modalOverlay = document.getElementById('modalOverlay');
        this.modalImage = document.getElementById('modalImage');
        this.modalImageContainer = document.getElementById('modalImageContainer');
        this.modalYoutubePlayer = document.getElementById('modalYoutubePlayer');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalDescription = document.getElementById('modalDescription');
        this.modalBadge = document.getElementById('modalBadge');
        this.modalLocation = document.getElementById('modalLocation');
        this.modalSeason = document.getElementById('modalSeason');
        this.modalCamera = document.getElementById('modalCamera');
        this.modalCurrent = document.getElementById('modalCurrent');
        this.modalTotal = document.getElementById('modalTotal');
        
        // Botones del modal
        this.modalClose = document.getElementById('modalClose');
        this.modalPrev = document.getElementById('modalPrev');
        this.modalNext = document.getElementById('modalNext');
        this.modalShare = document.getElementById('modalShare');
        this.modalTourBtn = document.getElementById('modalTourBtn');
        
        // Variables de YouTube
        this.currentYouTubeId = null;
        this.activeYouTubeIframe = null;
    }

    initializeData() {
        // Datos de las imágenes y videos de YouTube - ACTUALIZADOS
        this.mediaData = {
            // Machu Picchu - YouTube
            'mp-youtube1': {
                title: "Machu Picchu en 360°",
                description: "Recorrido virtual completo por la ciudadela inca. Disfruta de una experiencia inmersiva que te lleva a través de las principales estructuras arqueológicas. Un video espectacular que muestra la majestuosidad de esta maravilla del mundo.",
                location: "Machu Picchu, Cusco, Perú",
                season: "Todo el año (mejor: abril-octubre)",
                camera: "Video 4K - Duración: 2:45 min - YouTube",
                tour: "machupicchu",
                badge: "Machu Picchu",
                badgeClass: "mp-badge",
                type: "youtube",
                youtubeId: "ArF0GNuww4c"
            },
            // Machu Picchu Imágenes
            'mp1': {
                title: "Vista Panorámica de Machu Picchu",
                description: "Vista aérea completa de la ciudadela inca desde el mirador principal. La ciudad sagrada fue construida en el siglo XV y abandonada durante la conquista española.",
                location: "Machu Picchu, Cusco, Perú",
                season: "Todo el año (recomendado: abril-octubre)",
                camera: "Panorámica 360° desde Huayna Picchu",
                tour: "machupicchu",
                badge: "Machu Picchu",
                badgeClass: "mp-badge",
                type: "image"
            },
            'mp2': {
                title: "Templo del Sol",
                description: "Estructura ceremonial construida con precisión astronómica para marcar los solsticios. Los incas realizaban ceremonias de culto solar en este templo.",
                location: "Sector Religioso, Machu Picchu",
                season: "Solsticios de junio y diciembre",
                camera: "Angulo cerrado con teleobjetivo 70-200mm",
                tour: "machupicchu",
                badge: "Machu Picchu",
                badgeClass: "mp-badge",
                type: "image"
            },
            'mp3': {
                title: "Intihuatana - Reloj Solar Inca",
                description: "Piedra sagrada que servía como reloj solar y calendario astronómico. Los incas la usaban para determinar los solsticios y equinoccios.",
                location: "Zona Sagrada, Machu Picchu",
                season: "Todo el año",
                camera: "Macro 100mm f/2.8",
                tour: "machupicchu",
                badge: "Machu Picchu",
                badgeClass: "mp-badge",
                type: "image"
            },
            // Lago Titicaca - YouTube
            'tt-youtube1': {
                title: "Navegando el Lago Titicaca",
                description: "Recorrido en bote tradicional por las aguas sagradas del lago navegable más alto del mundo. Observa las islas flotantes de los Uros y la vida lacustre. Una experiencia única en el lago sagrado de los incas.",
                location: "Lago Titicaca, Puno, Perú",
                season: "Mayo a septiembre (estación seca)",
                camera: "Video 4K - Duración: 3:15 min - YouTube",
                tour: "titicaca",
                badge: "Titicaca",
                badgeClass: "tt-badge",
                type: "youtube",
                youtubeId: "k4GgT3DvH3E"
            },
            // Lago Titicaca Imágenes
            'tt1': {
                title: "Islas Flotantes Uros",
                description: "Comunidad ancestral que vive en islas artificiales hechas de totora. Mantienen tradiciones pre-incas y una forma de vida única en el mundo.",
                location: "Bahía de Puno, Lago Titicaca",
                season: "Todo el año (menos lluvias: mayo-sept)",
                camera: "Gran angular 16-35mm",
                tour: "titicaca",
                badge: "Titicaca",
                badgeClass: "tt-badge",
                type: "image"
            },
            'tt2': {
                title: "Amanecer Sagrado",
                description: "Primeros rayos del sol sobre el lago navegable más alto del mundo (3,812 msnm). Considerado sagrado por las culturas andinas.",
                location: "Lago Titicaca, frontera Perú-Bolivia",
                season: "Todo el año (amanecer más claro: invierno)",
                camera: "Time-lapse 5D Mark IV",
                tour: "titicaca",
                badge: "Titicaca",
                badgeClass: "tt-badge",
                type: "image"
            },
            'tt3': {
                title: "Botes de Totora Tradicionales",
                description: "Embarcaciones hechas completamente de totora, siguiendo técnicas ancestrales. Usadas por la comunidad Uros para pesca y transporte.",
                location: "Islas Uros, Lago Titicaca",
                season: "Todo el año",
                camera: "Retrato 85mm f/1.8",
                tour: "titicaca",
                badge: "Titicaca",
                badgeClass: "tt-badge",
                type: "image"
            },
            // Líneas de Nazca - YouTube
            'nz-youtube1': {
                title: "Vuelo sobre las Líneas de Nazca",
                description: "Recorrido aéreo completo sobre las misteriosas figuras gigantes trazadas en el desierto. Descubre el colibrí, mono, araña y otras figuras desde el aire. Un espectáculo visual que revela los secretos de esta antigua civilización.",
                location: "Pampas de Jumana, Nazca, Perú",
                season: "Todo el año (mejor visibilidad: verano)",
                camera: "Video 4K - Duración: 4:20 min - YouTube",
                tour: "nazca",
                badge: "Nazca",
                badgeClass: "nz-badge",
                type: "youtube",
                youtubeId: "WS7HPSsy1vU"
            },
            // Líneas de Nazca Imágenes
            'nz1': {
                title: "Colibrí Gigante",
                description: "Figura de 93 metros de largo trazada hace más de 2000 años. Representa un colibrí, ave sagrada para la cultura Nazca.",
                location: "Pampas de Nazca, Ica, Perú",
                season: "Todo el año (mejor: diciembre-marzo)",
                camera: "Foto aérea desde avioneta",
                tour: "nazca",
                badge: "Nazca",
                badgeClass: "nz-badge",
                type: "image"
            },
            'nz2': {
                title: "Mono Espiral",
                description: "Figura de 135 metros con cola en espiral. Su diseño geométrico sugiere conocimientos astronómicos avanzados de la cultura Nazca.",
                location: "Desierto de Nazca, Perú",
                season: "Todo el año",
                camera: "Foto aérea con polarizador",
                tour: "nazca",
                badge: "Nazca",
                badgeClass: "nz-badge",
                type: "image"
            },
            'nz3': {
                title: "Araña Gigante",
                description: "Figura de 46 metros asociada con la fertilidad y la lluvia. Los Nazca la relacionaban con constelaciones y ciclos agrícolas.",
                location: "Pampas de Jumana, Nazca",
                season: "Todo el año",
                camera: "Foto aérea 24mm desde 500m",
                tour: "nazca",
                badge: "Nazca",
                badgeClass: "nz-badge",
                type: "image"
            }
        };

        // Configuración inicial
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.currentCards = Array.from(this.galleryCards);
        this.modalIndex = 0;
        this.filterCounts = this.calculateFilterCounts();
    }

    calculateFilterCounts() {
        const totalCards = this.galleryCards.length;
        const videoCards = document.querySelectorAll('.video-card').length;
        const imageCards = totalCards - videoCards;
        
        return {
            all: totalCards,
            machupicchu: document.querySelectorAll('.gallery-card.machupicchu').length,
            titicaca: document.querySelectorAll('.gallery-card.titicaca').length,
            nazca: document.querySelectorAll('.gallery-card.nazca').length,
            videos: videoCards,
            images: imageCards
        };
    }

    bindEvents() {
        // Toggle del menú móvil
        this.menuToggle?.addEventListener('click', () => this.toggleSidebar());
        
        // Filtros
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });
        
        // Botón reset
        this.resetFilterBtn?.addEventListener('click', () => this.resetFilter());
        
        // Búsqueda
        this.searchInput?.addEventListener('input', (e) => this.handleSearch(e));
        
        // Botones de vista en tarjetas
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.openModal(e));
        });
        
        // Botones de favoritos
        document.querySelectorAll('.fav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.toggleFavorite(e));
        });
        
        // Botones de YouTube en tarjetas
        document.querySelectorAll('.youtube-wrapper').forEach(wrapper => {
            wrapper.addEventListener('click', (e) => this.openYouTubeFromWrapper(e));
        });
        
        // Modal controls
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalPrev.addEventListener('click', () => this.navigateModal(-1));
        this.modalNext.addEventListener('click', () => this.navigateModal(1));
        this.modalShare.addEventListener('click', () => this.shareMedia());
        this.modalTourBtn.addEventListener('click', () => this.bookTour());
        
        // Eventos de teclado
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Cerrar modal al hacer clic fuera
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) this.closeModal();
        });
    }

    toggleSidebar() {
        this.sidebar.classList.toggle('active');
    }

    handleFilter(event) {
        const button = event.currentTarget;
        const filter = button.dataset.filter;
        
        // Actualizar botones activos
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Detener videos de YouTube
        this.stopYouTubePlayer();
        
        // Aplicar filtro
        this.currentFilter = filter;
        this.applyFilter();
    }

    applyFilter() {
        this.showLoading();
        
        // Obtener todas las tarjetas
        const allCards = Array.from(this.galleryCards);
        
        // Filtrar tarjetas según filtro actual y búsqueda
        const filteredCards = allCards.filter(card => {
            const matchesFilter = this.currentFilter === 'all' || 
                                 card.classList.contains(this.currentFilter);
            
            // Solo verificar búsqueda si hay término de búsqueda
            let matchesSearch = true;
            if (this.searchTerm.trim() !== '') {
                const title = card.querySelector('.card-title')?.textContent?.toLowerCase() || '';
                const desc = card.querySelector('.card-desc')?.textContent?.toLowerCase() || '';
                const searchLower = this.searchTerm.toLowerCase();
                matchesSearch = title.includes(searchLower) || desc.includes(searchLower);
            }
            
            return matchesFilter && matchesSearch;
        });
        
        // Animar transición
        this.animateFilterTransition(filteredCards);
        
        // Actualizar UI
        this.updateFilterUI(filteredCards.length);
    }

    animateFilterTransition(filteredCards) {
        // Ocultar todas las tarjetas primero
        this.galleryCards.forEach(card => {
            card.style.animation = 'cardExit 0.3s ease';
            setTimeout(() => {
                card.classList.add('hidden');
            }, 150);
        });
        
        // Mostrar tarjetas filtradas después de un delay
        setTimeout(() => {
            filteredCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.remove('hidden');
                    card.style.animation = `cardEnter 0.5s ease ${index * 0.05}s both`;
                }, 50);
            });
            
            this.hideLoading();
            this.checkNoResults(filteredCards.length);
        }, 300);
    }

    updateFilterUI(filteredCount) {
        // Actualizar contadores
        this.viewCount.textContent = filteredCount;
        this.footerCount.textContent = filteredCount;
        
        // Actualizar filtro actual
        const filterNames = {
            'all': 'Todos los Tours',
            'machupicchu': 'Machu Picchu',
            'titicaca': 'Lago Titicaca',
            'nazca': 'Líneas de Nazca'
        };
        
        const filterName = filterNames[this.currentFilter];
        if (this.currentFilterDisplay) this.currentFilterDisplay.textContent = filterName;
        if (this.breadcrumbFilter) this.breadcrumbFilter.textContent = filterName;
        if (this.currentFilterCount) this.currentFilterCount.textContent = `${filteredCount} contenidos`;
        
        // Actualizar contadores en botones
        this.filterButtons.forEach(btn => {
            const btnFilter = btn.dataset.filter;
            const countEl = btn.querySelector('.filter-count');
            if (countEl) {
                const count = btnFilter === 'all' 
                    ? this.filterCounts.all 
                    : this.filterCounts[btnFilter];
                countEl.textContent = `${count} contenidos`;
            }
        });
        
        // Actualizar estadísticas en sidebar
        if (this.totalPhotos) this.totalPhotos.textContent = this.filterCounts.all;
    }

    handleSearch(event) {
        this.searchTerm = event.target.value;
        this.applyFilter();
    }

    resetFilter() {
        if (this.searchInput) this.searchInput.value = '';
        this.searchTerm = '';
        this.currentFilter = 'all';
        
        // Restaurar botón activo
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === 'all') {
                btn.classList.add('active');
            }
        });
        
        this.applyFilter();
    }

    showLoading() {
        if (this.loadingIndicator) {
            this.loadingIndicator.classList.add('active');
        }
        if (this.noResults) {
            this.noResults.style.display = 'none';
        }
    }

    hideLoading() {
        if (this.loadingIndicator) {
            this.loadingIndicator.classList.remove('active');
        }
    }

    checkNoResults(count) {
        if (this.noResults) {
            if (count === 0) {
                this.noResults.style.display = 'block';
            } else {
                this.noResults.style.display = 'none';
            }
        }
    }

    openModal(event) {
        event.stopPropagation();
        
        const button = event.currentTarget;
        const mediaId = button.dataset.id;
        const isYoutube = button.dataset.type === 'youtube';
        
        // Detener reproductor de YouTube si existe
        this.stopYouTubePlayer();
        
        // Encontrar índice de la tarjeta en las tarjetas filtradas
        const currentCards = Array.from(this.galleryCards).filter(card => !card.classList.contains('hidden'));
        const cardIndex = currentCards.findIndex(card => 
            card.querySelector(`[data-id="${mediaId}"]`) === button
        );
        
        if (cardIndex === -1) return;
        
        this.modalIndex = cardIndex;
        this.showModal(mediaId, isYoutube);
    }

    openYouTubeFromWrapper(event) {
        event.stopPropagation();
        
        const wrapper = event.currentTarget;
        const youtubeId = wrapper.dataset.youtubeId;
        const card = wrapper.closest('.gallery-card');
        const viewBtn = card.querySelector('.view-btn');
        
        if (!viewBtn) return;
        
        const mediaId = viewBtn.dataset.id;
        
        // Encontrar índice de la tarjeta en las tarjetas filtradas
        const currentCards = Array.from(this.galleryCards).filter(card => !card.classList.contains('hidden'));
        const cardIndex = currentCards.findIndex(c => c === card);
        
        if (cardIndex === -1) return;
        
        this.modalIndex = cardIndex;
        this.showModal(mediaId, true, youtubeId);
    }

    showModal(mediaId, isYouTube = false, youtubeId = null) {
        const mediaData = this.mediaData[mediaId];
        if (!mediaData) {
            console.error('Datos no encontrados para:', mediaId);
            return;
        }
        
        // Detener reproductor anterior
        this.stopYouTubePlayer();
        
        // Configurar modal según tipo de contenido
        if (isYouTube) {
            const actualYoutubeId = youtubeId || mediaData.youtubeId;
            this.showYouTubeModal(mediaData, actualYoutubeId);
        } else {
            this.showImageModal(mediaData, mediaId);
        }
        
        // Configurar badge
        this.modalBadge.className = `modal-badge ${mediaData.badgeClass}`;
        const iconClass = mediaData.badgeClass.includes('mp') ? 'mountain' : 
                         mediaData.badgeClass.includes('tt') ? 'water' : 'draw-polygon';
        this.modalBadge.innerHTML = `<i class="fas fa-${iconClass}"></i> ${mediaData.badge}`;
        
        // Configurar información común
        this.modalTitle.textContent = mediaData.title;
        this.modalDescription.textContent = mediaData.description;
        this.modalLocation.textContent = mediaData.location;
        this.modalSeason.textContent = mediaData.season;
        this.modalCamera.textContent = mediaData.camera;
        
        // Actualizar contador
        const currentCards = Array.from(this.galleryCards).filter(card => !card.classList.contains('hidden'));
        this.modalCurrent.textContent = this.modalIndex + 1;
        this.modalTotal.textContent = currentCards.length;
        
        // Mostrar modal
        this.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Enfocar el botón de cerrar para accesibilidad
        this.modalClose.focus();
    }

    showImageModal(mediaData, mediaId) {
        // Limpiar contenedor de YouTube
        if (this.modalYoutubePlayer) {
            this.modalYoutubePlayer.innerHTML = '';
            this.modalYoutubePlayer.style.display = 'none';
        }
        
        // Mostrar imagen
        if (this.modalImage) {
            this.modalImage.style.display = 'block';
            
            // Buscar la imagen original
            const originalButton = document.querySelector(`[data-id="${mediaId}"]`);
            if (!originalButton) return;
            
            const originalCard = originalButton.closest('.gallery-card');
            if (!originalCard) return;
            
            const imgElement = originalCard.querySelector('img:not(.youtube-thumbnail)');
            
            if (imgElement) {
                this.modalImage.src = imgElement.src;
                this.modalImage.alt = imgElement.alt || mediaData.title;
                this.modalImage.style.opacity = '0';
                
                // Asegurarse de que la imagen se cargue
                if (!this.modalImage.complete) {
                    this.modalImage.onload = () => {
                        this.modalImage.style.opacity = '1';
                        this.modalImage.style.transition = 'opacity 0.3s ease';
                    };
                } else {
                    this.modalImage.style.opacity = '1';
                    this.modalImage.style.transition = 'opacity 0.3s ease';
                }
            }
        }
    }

    showYouTubeModal(mediaData, youtubeId) {
        console.log('Cargando video de YouTube ID:', youtubeId);
        
        // Ocultar imagen
        if (this.modalImage) {
            this.modalImage.style.display = 'none';
        }
        
        // Mostrar contenedor de YouTube
        if (this.modalYoutubePlayer) {
            this.modalYoutubePlayer.style.display = 'block';
            
            // Crear iframe simple y directo - SIN API
            this.modalYoutubePlayer.innerHTML = `
                <div class="youtube-iframe-wrapper">
                    <iframe 
                        src="https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        title="${mediaData.title}">
                    </iframe>
                </div>
            `;
            
            // Guardar referencia al iframe
            this.activeYouTubeIframe = this.modalYoutubePlayer.querySelector('iframe');
            this.currentYouTubeId = youtubeId;
        }
    }

    stopYouTubePlayer() {
        if (this.activeYouTubeIframe) {
            // Cambiar el src para detener el video
            this.activeYouTubeIframe.src = '';
            this.activeYouTubeIframe = null;
            this.currentYouTubeId = null;
        }
        
        // Limpiar contenedor si existe
        if (this.modalYoutubePlayer) {
            this.modalYoutubePlayer.innerHTML = '';
        }
    }

    navigateModal(direction) {
        const currentCards = Array.from(this.galleryCards).filter(card => !card.classList.contains('hidden'));
        
        if (currentCards.length === 0) return;
        
        // Detener video actual
        this.stopYouTubePlayer();
        
        // Calcular nuevo índice
        this.modalIndex = (this.modalIndex + direction + currentCards.length) % currentCards.length;
        
        // Obtener nuevo contenido
        const newButton = currentCards[this.modalIndex].querySelector('.view-btn');
        if (!newButton) return;
        
        const newMediaId = newButton.dataset.id;
        const isYoutube = newButton.dataset.type === 'youtube';
        
        // Obtener YouTube ID si es un video de YouTube
        let youtubeId = null;
        if (isYoutube) {
            const card = newButton.closest('.gallery-card');
            const youtubeWrapper = card.querySelector('.youtube-wrapper');
            youtubeId = youtubeWrapper ? youtubeWrapper.dataset.youtubeId : null;
        }
        
        // Animación de transición
        if (this.modalImage) {
            this.modalImage.style.opacity = '0';
        }
        if (this.modalYoutubePlayer) {
            this.modalYoutubePlayer.style.opacity = '0';
        }
        
        setTimeout(() => {
            this.showModal(newMediaId, isYoutube, youtubeId);
            
            if (isYoutube && this.modalYoutubePlayer) {
                this.modalYoutubePlayer.style.opacity = '1';
            } else if (this.modalImage) {
                this.modalImage.style.opacity = '1';
            }
        }, 300);
    }

    closeModal() {
        // Detener reproductor de YouTube
        this.stopYouTubePlayer();
        
        // Cerrar modal
        this.modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    shareMedia() {
        const isYouTube = this.modalYoutubePlayer && this.modalYoutubePlayer.style.display === 'block';
        const mediaType = isYouTube ? 'video de YouTube' : 'imagen';
        const title = this.modalTitle.textContent;
        const text = this.modalDescription.textContent;
        
        if (navigator.share) {
            navigator.share({
                title: title,
                text: `${text}\n\nMira este ${mediaType} de Perú Tours`,
                url: window.location.href
            }).catch(err => {
                console.log('Error al compartir:', err);
                this.copyToClipboard();
            });
        } else {
            this.copyToClipboard();
        }
    }
    
    copyToClipboard() {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('¡Enlace copiado al portapapeles!');
        }).catch(err => {
            alert('Error al copiar el enlace. Por favor, copia la URL manualmente.');
        });
    }

    bookTour() {
        const tourName = this.modalBadge.textContent.trim();
        
        // En un caso real, esto redirigiría a un formulario de reserva
        alert(`¡Excelente elección! Estás interesado en el tour de: ${tourName}\n\nSerás redirigido al formulario de reserva.`);
        
        // Simular redirección (en producción, usar window.location)
        setTimeout(() => {
            console.log(`Redirigiendo a formulario de reserva para: ${tourName}`);
            // window.location.href = `/reservar?tour=${encodeURIComponent(tourName)}`;
        }, 500);
    }

    toggleFavorite(event) {
        event.stopPropagation();
        const button = event.currentTarget;
        const icon = button.querySelector('i');
        
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            button.style.color = '#f59e0b';
            
            // Animación de corazón
            button.style.transform = 'scale(1.2)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 300);
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            button.style.color = '';
        }
    }

    handleKeydown(event) {
        if (!this.modalOverlay.classList.contains('active')) return;
        
        switch(event.key) {
            case 'Escape':
                this.closeModal();
                break;
            case 'ArrowLeft':
                this.navigateModal(-1);
                break;
            case 'ArrowRight':
                this.navigateModal(1);
                break;
        }
    }

    updateUI() {
        // Actualizar contadores iniciales
        if (this.totalPhotos) this.totalPhotos.textContent = this.filterCounts.all;
        if (this.viewCount) this.viewCount.textContent = this.filterCounts.all;
        if (this.footerCount) this.footerCount.textContent = this.filterCounts.all;
    }

    setUpdateDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('es-ES', options);
        const updateDateEl = document.getElementById('updateDate');
        if (updateDateEl) {
            updateDateEl.textContent = dateStr;
        }
    }

    setupResponsive() {
        // Cerrar sidebar al hacer clic fuera en móvil
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 992 && 
                this.sidebar && 
                this.sidebar.classList.contains('active') &&
                !this.sidebar.contains(e.target) &&
                (!this.menuToggle || e.target !== this.menuToggle)) {
                this.sidebar.classList.remove('active');
            }
        });
        
        // Ajustar contadores en resize
        window.addEventListener('resize', () => {
            this.filterCounts = this.calculateFilterCounts();
            this.updateUI();
        });
        
        // Detener YouTube cuando se cambia a otra pestaña
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && this.activeYouTubeIframe) {
                this.stopYouTubePlayer();
            }
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const gallery = new PeruToursGallery();
    
    // Exponer globalmente si es necesario
    window.PeruGallery = gallery;
    
    // Mostrar mensaje de depuración
    console.log('Galería Perú Tours inicializada');
    console.log('IDs de YouTube disponibles:');
    console.log('- Machu Picchu: ArF0GNuww4c');
    console.log('- Lago Titicaca: k4GgT3DvH3E');
    console.log('- Líneas de Nazca: WS7HPSsy1vU');
});

// Efecto de carga suave
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
