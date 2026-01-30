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
        
        // Inicializar YouTube API
        this.setupYouTube();
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
        this.youtubePlayers = new Map(); // Almacena instancias de reproductores
        this.currentYouTubeId = null;
        this.youtubeAPIReady = false;
        this.pendingYouTubeLoads = [];
    }

    initializeData() {
        // Datos de las imágenes y videos de YouTube
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
                youtubeId: "KZR1p6_1bHA"
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
                youtubeId: "U5g1T9fEb_8"
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
                youtubeId: "6v2L2zZ0uMk"
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
        this.activeYouTubePlayer = null;
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
        this.menuToggle.addEventListener('click', () => this.toggleSidebar());
        
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
            wrapper.addEventListener('click', (e) => this.openYouTubeModal(e));
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
        
        // Detener videos de YouTube cuando se cierra el modal
        this.modalClose.addEventListener('click', () => {
            this.stopAllYouTubePlayers();
        });
    }

    setupYouTube() {
        // Verificar si la API de YouTube ya está cargada
        if (window.YT && window.YT.Player) {
            this.youtubeAPIReady = true;
            this.processPendingYouTubeLoads();
        } else {
            // Configurar callback cuando la API esté lista
            window.onYouTubeIframeAPIReady = () => {
                this.youtubeAPIReady = true;
                this.processPendingYouTubeLoads();
            };
        }
    }

    processPendingYouTubeLoads() {
        if (this.youtubeAPIReady && this.pendingYouTubeLoads.length > 0) {
            this.pendingYouTubeLoads.forEach(loadFn => loadFn());
            this.pendingYouTubeLoads = [];
        }
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
        
        // Detener reproductores de YouTube
        this.stopAllYouTubePlayers();
        
        // Aplicar filtro
        this.currentFilter = filter;
        this.applyFilter();
    }

    applyFilter() {
        this.showLoading();
        
        // Obtener todas las tarjetas visibles (no ocultas por otros filtros)
        const visibleCards = Array.from(this.galleryCards).filter(card => 
            !card.classList.contains('hidden')
        );
        
        // Filtrar tarjetas según filtro actual y búsqueda
        const filteredCards = visibleCards.filter(card => {
            const matchesFilter = this.currentFilter === 'all' || 
                                 card.classList.contains(this.currentFilter);
            const matchesSearch = this.searchTerm === '' || 
                                 card.querySelector('.card-title').textContent.toLowerCase().includes(this.searchTerm) ||
                                 card.querySelector('.card-desc').textContent.toLowerCase().includes(this.searchTerm);
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
            if (!card.classList.contains('hidden')) {
                card.style.animation = 'cardExit 0.3s ease';
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 150);
            }
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
        this.currentFilterDisplay.textContent = filterName;
        this.breadcrumbFilter.textContent = filterName;
        this.currentFilterCount.textContent = `${filteredCount} contenidos`;
        
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
        this.totalPhotos.textContent = this.filterCounts.all;
    }

    handleSearch(event) {
        this.searchTerm = event.target.value.toLowerCase();
        this.applyFilter();
    }

    resetFilter() {
        this.searchInput.value = '';
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
        this.loadingIndicator.classList.add('active');
        this.noResults.style.display = 'none';
    }

    hideLoading() {
        this.loadingIndicator.classList.remove('active');
    }

    checkNoResults(count) {
        if (count === 0) {
            this.noResults.style.display = 'block';
        } else {
            this.noResults.style.display = 'none';
        }
    }

    openModal(event) {
        event.stopPropagation();
        
        const button = event.currentTarget;
        const mediaId = button.dataset.id;
        const isYoutube = button.dataset.type === 'youtube';
        
        // Detener reproductores de YouTube activos
        this.stopAllYouTubePlayers();
        
        // Encontrar índice de la tarjeta en las tarjetas filtradas
        const currentCards = Array.from(this.galleryCards).filter(card => !card.classList.contains('hidden'));
        const cardIndex = currentCards.findIndex(card => 
            card.querySelector(`[data-id="${mediaId}"]`) === button
        );
        
        if (cardIndex === -1) return;
        
        this.modalIndex = cardIndex;
        this.showModal(mediaId, isYoutube);
    }

    openYouTubeModal(event) {
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
        if (!mediaData) return;
        
        // Configurar modal según tipo de contenido
        if (isYouTube) {
            const actualYoutubeId = youtubeId || mediaData.youtubeId;
            this.showYouTubeModal(mediaData, actualYoutubeId);
        } else {
            this.showImageModal(mediaData, mediaId);
        }
        
        // Configurar badge
        this.modalBadge.className = `modal-badge ${mediaData.badgeClass}`;
        this.modalBadge.innerHTML = `<i class="fas fa-${mediaData.badgeClass.includes('mp') ? 'mountain' : 
                                                         mediaData.badgeClass.includes('tt') ? 'water' : 'draw-polygon'}"></i> ${mediaData.badge}`;
        
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
        this.modalYoutubePlayer.innerHTML = '';
        this.modalYoutubePlayer.style.display = 'none';
        
        // Mostrar imagen
        this.modalImage.style.display = 'block';
        
        // Buscar la imagen original
        const originalCard = document.querySelector(`[data-id="${mediaId}"]`).closest('.gallery-card');
        const imgElement = originalCard.querySelector('img:not(.youtube-thumbnail)');
        
        if (imgElement) {
            this.modalImage.src = imgElement.src;
            this.modalImage.alt = imgElement.alt || mediaData.title;
            this.modalImage.style.opacity = '0';
            
            // Animación de aparición
            setTimeout(() => {
                this.modalImage.style.opacity = '1';
                this.modalImage.style.transition = 'opacity 0.3s ease';
            }, 50);
        }
    }

    showYouTubeModal(mediaData, youtubeId) {
        // Ocultar imagen
        this.modalImage.style.display = 'none';
        
        // Mostrar contenedor de YouTube
        this.modalYoutubePlayer.style.display = 'block';
        this.modalYoutubePlayer.innerHTML = '';
        
        // Crear contenedor para el reproductor
        const playerContainer = document.createElement('div');
        playerContainer.className = 'youtube-player-container';
        playerContainer.id = `youtube-player-${youtubeId}`;
        this.modalYoutubePlayer.appendChild(playerContainer);
        
        // Configurar para cargar el reproductor
        const loadYouTubePlayer = () => {
            if (this.youtubeAPIReady) {
                this.createYouTubePlayer(youtubeId, playerContainer.id);
            } else {
                // Esperar a que la API esté lista
                this.pendingYouTubeLoads.push(() => {
                    this.createYouTubePlayer(youtubeId, playerContainer.id);
                });
            }
        };
        
        loadYouTubePlayer();
    }

    createYouTubePlayer(youtubeId, containerId) {
        // Detener reproductor anterior si existe
        if (this.activeYouTubePlayer) {
            this.activeYouTubePlayer.stopVideo();
        }
        
        // Crear nuevo reproductor
        const player = new YT.Player(containerId, {
            height: '100%',
            width: '100%',
            videoId: youtubeId,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'rel': 0,
                'showinfo': 0,
                'modestbranding': 1,
                'playsinline': 1
            },
            events: {
                'onReady': (event) => {
                    this.activeYouTubePlayer = event.target;
                    this.currentYouTubeId = youtubeId;
                },
                'onStateChange': (event) => {
                    // Manejar cambios de estado si es necesario
                    if (event.data === YT.PlayerState.ENDED) {
                        // Video terminado
                    }
                }
            }
        });
        
        this.youtubePlayers.set(youtubeId, player);
    }

    navigateModal(direction) {
        const currentCards = Array.from(this.galleryCards).filter(card => !card.classList.contains('hidden'));
        
        if (currentCards.length === 0) return;
        
        // Detener reproductor de YouTube actual
        this.stopAllYouTubePlayers();
        
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
        this.modalImage.style.opacity = '0';
        this.modalYoutubePlayer.style.opacity = '0';
        
        setTimeout(() => {
            this.showModal(newMediaId, isYoutube, youtubeId);
            
            if (isYoutube) {
                this.modalYoutubePlayer.style.opacity = '1';
            } else {
                this.modalImage.style.opacity = '1';
            }
        }, 300);
    }

    closeModal() {
        // Detener todos los reproductores de YouTube
        this.stopAllYouTubePlayers();
        
        // Limpiar contenedor de YouTube
        this.modalYoutubePlayer.innerHTML = '';
        
        // Cerrar modal
        this.modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Resetear variables
        this.activeYouTubePlayer = null;
        this.currentYouTubeId = null;
    }

    stopAllYouTubePlayers() {
        // Detener reproductor activo
        if (this.activeYouTubePlayer) {
            try {
                this.activeYouTubePlayer.stopVideo();
            } catch (e) {
                console.log("Error deteniendo video:", e);
            }
            this.activeYouTubePlayer = null;
        }
        
        // Detener todos los reproductores en el mapa
        this.youtubePlayers.forEach(player => {
            try {
                player.stopVideo();
            } catch (e) {
                // Ignorar errores si el reproductor no está disponible
            }
        });
        
        this.youtubePlayers.clear();
    }

    shareMedia() {
        const isYouTube = this.modalYoutubePlayer.style.display === 'block';
        const mediaType = isYouTube ? 'video de YouTube' : 'imagen';
        const title = this.modalTitle.textContent;
        const text = this.modalDescription.textContent;
        
        if (navigator.share) {
            navigator.share({
                title: title,
                text: `${text}\n\nMira este ${mediaType} de Perú Tours`,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert(`¡Enlace del ${mediaType} copiado al portapapeles!`);
            }).catch(err => {
                alert('Error al copiar el enlace. Por favor, copia la URL manualmente.');
            });
        }
    }

    bookTour() {
        const tourName = this.modalBadge.textContent.trim();
        
        // En un caso real, esto redirigiría a un formulario de reserva
        alert(`¡Excelente elección! Estás interesado en el tour de: ${tourName}\n\nSerás redirigido al formulario de reserva.`);
        
        // Simular redirección (en producción, usar window.location)
        setTimeout(() => {
            console.log(`Redirigiendo a formulario de reserva para: ${tourName}`);
        }, 500);
    }

    toggleFavorite(event) {
        event.stopPropagation();
        const button = event.currentTarget;
        const icon = button.querySelector('i');
        
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            button.style.color = '#e53e3e';
            
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
            case ' ':
                // Espacio para pausar/reproducir YouTube
                if (this.activeYouTubePlayer) {
                    event.preventDefault();
                    const state = this.activeYouTubePlayer.getPlayerState();
                    if (state === YT.PlayerState.PLAYING) {
                        this.activeYouTubePlayer.pauseVideo();
                    } else if (state === YT.PlayerState.PAUSED) {
                        this.activeYouTubePlayer.playVideo();
                    }
                }
                break;
        }
    }

    updateUI() {
        // Actualizar contadores iniciales
        this.totalPhotos.textContent = this.filterCounts.all;
        this.viewCount.textContent = this.filterCounts.all;
        this.footerCount.textContent = this.filterCounts.all;
    }

    setUpdateDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('es-ES', options);
        document.getElementById('updateDate').textContent = dateStr;
    }

    setupResponsive() {
        // Cerrar sidebar al hacer clic fuera en móvil
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 992 && 
                this.sidebar.classList.contains('active') &&
                !this.sidebar.contains(e.target) &&
                e.target !== this.menuToggle) {
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
            if (document.hidden && this.activeYouTubePlayer) {
                this.activeYouTubePlayer.pauseVideo();
            }
        });
        
        // Detener YouTube en orientación change (móviles)
        window.addEventListener('orientationchange', () => {
            if (this.activeYouTubePlayer) {
                this.activeYouTubePlayer.pauseVideo();
            }
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const gallery = new PeruToursGallery();
    
    // Exponer globalmente si es necesario
    window.PeruGallery = gallery;
});

// Efecto de carga suave
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Cargar API de YouTube si no está cargada
if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}