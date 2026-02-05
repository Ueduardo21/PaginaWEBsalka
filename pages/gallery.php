<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perú Tours | Dashboard Visual</title>
    <link rel="stylesheet" href="../assets/css/galeria/gallery.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Layout Principal -->
    <div class="app-container">
        <!-- Sidebar Izquierda -->
        <aside class="app-sidebar">
            <!-- Logo -->
            <div class="sidebar-header">
                <div class="logo-container">
                    <div class="logo-icon">
                        <i class="fas fa-mountain-sun"></i>
                    </div>
                    <div class="logo-text">
                        <h1>Perú</h1>
                        <p>Tours Exclusive</p>
                    </div>
                </div>
                <button class="menu-toggle" id="menuToggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

            <!-- Estadísticas Rápidas -->
            <div class="sidebar-stats">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-images"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number" id="totalPhotos">27</span>
                        <span class="stat-label">Contenidos Totales</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-video"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number">3</span>
                        <span class="stat-label">Videos</span>
                    </div>
                </div>
            </div>

            <!-- Filtros de Tours -->
            <nav class="sidebar-nav">
                <h3 class="nav-title">
                    <i class="fas fa-filter"></i>
                    <span>Filtrar Tours</span>
                </h3>
                
                <div class="nav-filters">
                    <button class="nav-filter active" data-filter="all">
                        <div class="filter-content">
                            <div class="filter-icon">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <div class="filter-text">
                                <span class="filter-name">Todos los Tours</span>
                                <span class="filter-count">27 contenidos</span>
                            </div>
                        </div>
                        <div class="filter-indicator"></div>
                    </button>

                    <button class="nav-filter" data-filter="machupicchu">
                        <div class="filter-content">
                            <div class="filter-icon mp-icon">
                                <i class="fas fa-mountain"></i>
                            </div>
                            <div class="filter-text">
                                <span class="filter-name">Machu Picchu</span>
                                <span class="filter-count">9 contenidos</span>
                            </div>
                        </div>
                        <div class="filter-indicator"></div>
                    </button>

                    <button class="nav-filter" data-filter="titicaca">
                        <div class="filter-content">
                            <div class="filter-icon tt-icon">
                                <i class="fas fa-water"></i>
                            </div>
                            <div class="filter-text">
                                <span class="filter-name">Lago Titicaca</span>
                                <span class="filter-count">9 contenidos</span>
                            </div>
                        </div>
                        <div class="filter-indicator"></div>
                    </button>

                    <button class="nav-filter" data-filter="nazca">
                        <div class="filter-content">
                            <div class="filter-icon nz-icon">
                                <i class="fas fa-draw-polygon"></i>
                            </div>
                            <div class="filter-text">
                                <span class="filter-name">Líneas de Nazca</span>
                                <span class="filter-count">9 contenidos</span>
                            </div>
                        </div>
                        <div class="filter-indicator"></div>
                    </button>
                </div>
            </nav>

            <!-- Información del Filtro Actual -->
            <div class="current-filter">
                <h3 class="filter-title">
                    <i class="fas fa-eye"></i>
                    <span>Viendo:</span>
                </h3>
                <div class="filter-display">
                    <span class="current-filter-name" id="currentFilterDisplay">Todos los Tours</span>
                    <span class="current-filter-count" id="currentFilterCount">27 contenidos</span>
                </div>
            </div>

            <!-- Contacto Rápido -->
            <div class="sidebar-contact">
                <h3 class="contact-title">
                    <i class="fas fa-headset"></i>
                    <span>Contacto Rápido</span>
                </h3>
                <div class="contact-buttons">
                    <button class="contact-btn whatsapp-btn">
                        <i class="fab fa-whatsapp"></i>
                        <span>WhatsApp</span>
                    </button>
                    <button class="contact-btn email-btn">
                        <i class="fas fa-envelope"></i>
                        <span>Email</span>
                    </button>
                </div>
            </div>

            <!-- Footer Sidebar -->
            <div class="sidebar-footer">
                <p>&copy; 2023 Perú Tours</p>
                <p>Galería Visual v2.0</p>
            </div>
        </aside>

        <!-- Contenido Principal -->
        <main class="app-main">
            <!-- Header del Contenido -->
            <header class="content-header">
                <div class="breadcrumb">
                    <span class="breadcrumb-item">Galería</span>
                    <i class="fas fa-chevron-right"></i>
                    <span class="breadcrumb-item active" id="breadcrumbFilter">Todos los Tours</span>
                </div>
                
                <div class="header-actions">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Buscar en galería..." id="searchInput">
                    </div>
                    <button class="btn-view-mode" id="viewModeToggle">
                        <i class="fas fa-th"></i>
                    </button>
                </div>
            </header>

<!-- Galería de Imágenes -->
<section class="gallery-section">
    <!-- Indicador de Vista -->
    <div class="view-indicator">
        <div class="view-stats">
            <span class="view-count" id="viewCount">27</span>
            <span class="view-label">contenidos mostrados</span>
        </div>
        <div class="view-sort">
            <select id="sortSelect">
                <option value="default">Ordenar por: Predeterminado</option>
                <option value="newest">Más recientes</option>
                <option value="popular">Más populares</option>
            </select>
        </div>
    </div>

    <!-- Grid de Galería -->
    <div class="gallery-grid" id="galleryGrid">
        
        <!-- MACHU PICCHU - Video Primero (YouTube) - ID ACTUALIZADO -->
        <div class="gallery-card machupicchu video-card youtube-video">
            <div class="card-image">
                <div class="video-wrapper youtube-wrapper" data-youtube-id="ArF0GNuww4c">
                    <!-- Thumbnail de YouTube ACTUALIZADO -->
                    <img class="youtube-thumbnail" 
                         src="https://img.youtube.com/vi/ArF0GNuww4c/maxresdefault.jpg" 
                         alt="Machu Picchu en 360°"
                         onerror="this.src='https://img.youtube.com/vi/ArF0GNuww4c/hqdefault.jpg'">
                    <div class="youtube-overlay">
                        <div class="youtube-play-button">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="youtube-logo">
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div class="video-indicator">
                    <i class="fab fa-youtube"></i> YOUTUBE
                </div>
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="mp-youtube1" data-type="youtube" data-youtube-id="ArF0GNuww4c">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge mp-badge">
                    <i class="fas fa-mountain"></i>
                    Machu Picchu
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Machu Picchu en 360°</h3>
                <p class="card-desc">Recorrido virtual completo por la ciudadela inca</p>
                <div class="card-meta">
                    <span><i class="far fa-clock"></i> 3:02 min</span>
                    <span><i class="fas fa-hd"></i> 4K</span>
                </div>
            </div>
        </div>

        <!-- Machu Picchu Imágenes -->
        <div class="gallery-card machupicchu">
            <div class="card-image">
                <img src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Vista panorámica de Machu Picchu"
                     loading="lazy">
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="mp1">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge mp-badge">
                    <i class="fas fa-mountain"></i>
                    Machu Picchu
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Vista Panorámica</h3>
                <p class="card-desc">Vista completa desde el mirador principal</p>
                <div class="card-meta">
                    <span><i class="far fa-calendar"></i> Todo el año</span>
                    <span><i class="fas fa-camera"></i> DSLR</span>
                </div>
            </div>
        </div>

        <div class="gallery-card machupicchu">
            <div class="card-image">
                <img src="https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Templo del Sol"
                     loading="lazy">
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="mp2">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge mp-badge">
                    <i class="fas fa-mountain"></i>
                    Machu Picchu
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Templo del Sol</h3>
                <p class="card-desc">Arquitectura ceremonial inca</p>
                <div class="card-meta">
                    <span><i class="fas fa-history"></i> Siglo XV</span>
                    <span><i class="fas fa-star"></i> Popular</span>
                </div>
            </div>
        </div>

        <!-- Agregar más imágenes de Machu Picchu -->
        <div class="gallery-card machupicchu">
            <div class="card-image">
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Intihuatana"
                     loading="lazy">
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="mp3">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge mp-badge">
                    <i class="fas fa-mountain"></i>
                    Machu Picchu
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Intihuatana</h3>
                <p class="card-desc">Reloj solar inca</p>
                <div class="card-meta">
                    <span><i class="fas fa-sun"></i> Astronomía</span>
                    <span><i class="fas fa-landmark"></i> Sagrado</span>
                </div>
            </div>
        </div>

        <!-- LAGO TITICACA - Video Primero (YouTube) - ID ACTUALIZADO -->
        <div class="gallery-card titicaca video-card youtube-video">
            <div class="card-image">
                <div class="video-wrapper youtube-wrapper" data-youtube-id="k4GgT3DvH3E">
                    <!-- Thumbnail de YouTube ACTUALIZADO -->
                    <img class="youtube-thumbnail" 
                         src="https://img.youtube.com/vi/k4GgT3DvH3E/maxresdefault.jpg" 
                         alt="Lago Titicaca"
                         onerror="this.src='https://img.youtube.com/vi/k4GgT3DvH3E/hqdefault.jpg'">
                    <div class="youtube-overlay">
                        <div class="youtube-play-button">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="youtube-logo">
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div class="video-indicator">
                    <i class="fab fa-youtube"></i> YOUTUBE
                </div>
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="tt-youtube1" data-type="youtube" data-youtube-id="k4GgT3DvH3E">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge tt-badge">
                    <i class="fas fa-water"></i>
                    Titicaca
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Navegando el Lago Titicaca</h3>
                <p class="card-desc">Recorrido en bote por las aguas sagradas</p>
                <div class="card-meta">
                    <span><i class="far fa-clock"></i> 4:30 min</span>
                    <span><i class="fas fa-hd"></i> 4K</span>
                </div>
            </div>
        </div>

        <!-- Lago Titicaca Imágenes -->
        <div class="gallery-card titicaca">
            <div class="card-image">
                <img src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Islas Uros"
                     loading="lazy">
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="tt1">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge tt-badge">
                    <i class="fas fa-water"></i>
                    Titicaca
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Islas Flotantes Uros</h3>
                <p class="card-desc">Comunidad ancestral en totora</p>
                <div class="card-meta">
                    <span><i class="fas fa-ruler-vertical"></i> 3,812 msnm</span>
                    <span><i class="fas fa-users"></i> Cultura viva</span>
                </div>
            </div>
        </div>

        <div class="gallery-card titicaca">
            <div class="card-image">
                <img src="https://images.unsplash.com/photo-1578662990686-89112680867d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Amanecer en el lago"
                     loading="lazy">
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="tt2">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge tt-badge">
                    <i class="fas fa-water"></i>
                    Titicaca
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Amanecer Sagrado</h3>
                <p class="card-desc">Primeros rayos sobre el lago navegable más alto</p>
                <div class="card-meta">
                    <span><i class="fas fa-sunrise"></i> Amanecer</span>
                    <span><i class="fas fa-mountain"></i> Andes</span>
                </div>
            </div>
        </div>

        <div class="gallery-card titicaca">
            <div class="card-image">
                <img src="https://images.unsplash.com/photo-1564574662336-88c9f5a6c8d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Botes de totora"
                     loading="lazy">
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="tt3">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge tt-badge">
                    <i class="fas fa-water"></i>
                    Titicaca
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Botes de Totora</h3>
                <p class="card-desc">Artesanía tradicional flotante</p>
                <div class="card-meta">
                    <span><i class="fas fa-ship"></i> Navegación</span>
                    <span><i class="fas fa-leaf"></i> Totora</span>
                </div>
            </div>
        </div>

        <!-- LÍNEAS DE NAZCA - Video Primero (YouTube) - ID ACTUALIZADO -->
        <div class="gallery-card nazca video-card youtube-video">
            <div class="card-image">
                <div class="video-wrapper youtube-wrapper" data-youtube-id="WS7HPSsy1vU">
                    <!-- Thumbnail de YouTube ACTUALIZADO -->
                    <img class="youtube-thumbnail" 
                         src="https://img.youtube.com/vi/WS7HPSsy1vU/maxresdefault.jpg" 
                         alt="Líneas de Nazca"
                         onerror="this.src='https://img.youtube.com/vi/WS7HPSsy1vU/hqdefault.jpg'">
                    <div class="youtube-overlay">
                        <div class="youtube-play-button">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="youtube-logo">
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div class="video-indicator">
                    <i class="fab fa-youtube"></i> YOUTUBE
                </div>
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="nz-youtube1" data-type="youtube" data-youtube-id="WS7HPSsy1vU">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge nz-badge">
                    <i class="fas fa-draw-polygon"></i>
                    Nazca
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Vuelo sobre las Líneas de Nazca</h3>
                <p class="card-desc">Recorrido aéreo completo de las figuras</p>
                <div class="card-meta">
                    <span><i class="far fa-clock"></i> 3:45 min</span>
                    <span><i class="fas fa-plane"></i> Aéreo</span>
                </div>
            </div>
        </div>

        <!-- Líneas de Nazca Imágenes -->
        <div class="gallery-card nazca">
            <div class="card-image">
                <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Colibrí de Nazca"
                     loading="lazy">
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="nz1">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge nz-badge">
                    <i class="fas fa-draw-polygon"></i>
                    Nazca
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Colibrí Gigante</h3>
                <p class="card-desc">Figura de 93 metros de largo</p>
                <div class="card-meta">
                    <span><i class="fas fa-feather-alt"></i> Aves</span>
                    <span><i class="fas fa-ruler"></i> 93m</span>
                </div>
            </div>
        </div>

        <div class="gallery-card nazca">
            <div class="card-image">
                <img src="https://images.unsplash.com/photo-1564574662336-88c9f5a6c8d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Mono de Nazca"
                     loading="lazy">
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="nz2">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge nz-badge">
                    <i class="fas fa-draw-polygon"></i>
                    Nazca
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Mono Espiral</h3>
                <p class="card-desc">Figura con cola en espiral</p>
                <div class="card-meta">
                    <span><i class="fas fa-paw"></i> Animales</span>
                    <span><i class="fas fa-history"></i> 2000 años</span>
                </div>
            </div>
        </div>

        <div class="gallery-card nazca">
            <div class="card-image">
                <img src="https://images.unsplash.com/photo-1578662990686-89112680867d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Araña de Nazca"
                     loading="lazy">
                <div class="card-hover">
                    <button class="card-btn view-btn" data-id="nz3">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="card-btn fav-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="card-badge nz-badge">
                    <i class="fas fa-draw-polygon"></i>
                    Nazca
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">Araña Gigante</h3>
                <p class="card-desc">Figura de 46 metros de largo</p>
                <div class="card-meta">
                    <span><i class="fas fa-spider"></i> Insectos</span>
                    <span><i class="fas fa-ruler"></i> 46m</span>
                </div>
            </div>
        </div>

    </div>

    <!-- Indicador de Carga -->
    <div class="loading-indicator" id="loadingIndicator">
        <div class="spinner">
            <div class="spinner-ring"></div>
        </div>
        <p>Filtrando contenidos...</p>
    </div>

    <!-- Sin Resultados -->
    <div class="no-results" id="noResults">
        <div class="no-results-icon">
            <i class="fas fa-images"></i>
        </div>
        <h3>No se encontraron contenidos</h3>
        <p>Prueba con otro filtro o cambia los términos de búsqueda</p>
        <button class="btn-reset" id="resetFilter">
            <i class="fas fa-redo"></i>
            Mostrar todos
        </button>
    </div>
</section>

            <!-- Footer del Contenido -->
            <footer class="content-footer">
                <div class="footer-info">
                    <p>Galería interactiva de Perú Tours - Todos los derechos reservados</p>
                    <p class="footer-stats">
                        <span id="footerCount">27</span> contenidos disponibles | 
                        Última actualización: <span id="updateDate">Hoy</span>
                    </p>
                </div>
            </footer>
        </main>
    </div>

    <!-- Modal de Vista Completa -->
    <div class="modal-overlay" id="modalOverlay">
        <div class="modal-container">
            <!-- Controles del Modal -->
            <div class="modal-header">
                <button class="modal-close" id="modalClose">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-nav">
                    <button class="modal-nav-btn" id="modalPrev">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="modal-counter">
                        <span id="modalCurrent">1</span> / <span id="modalTotal">27</span>
                    </div>
                    <button class="modal-nav-btn" id="modalNext">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="modal-actions">
                    <button class="modal-action-btn" id="modalShare">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>

            <!-- Contenido del Modal -->
            <div class="modal-content">
                <div class="modal-image-container" id="modalImageContainer">
                    <img id="modalImage" src="" alt="" style="display: none;">
                    <div id="modalYoutubePlayer" style="display: none;"></div>
                </div>
                
                <div class="modal-info">
                    <div class="modal-badge" id="modalBadge"></div>
                    <h2 id="modalTitle"></h2>
                    <p id="modalDescription"></p>
                    
                    <div class="modal-details">
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <span class="detail-label">Ubicación</span>
                                <span id="modalLocation"></span>
                            </div>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-calendar-alt"></i>
                            <div>
                                <span class="detail-label">Mejor época</span>
                                <span id="modalSeason"></span>
                            </div>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-info-circle"></i>
                            <div>
                                <span class="detail-label">Datos técnicos</span>
                                <span id="modalCamera"></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="modal-tour-btn" id="modalTourBtn">
                            <i class="fas fa-calendar-check"></i>
                            Reservar este tour
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- API de YouTube -->
    <script src="https://www.youtube.com/iframe_api"></script>
    <script src="../assets/js/galeria/gallery.js"></script>
</body>
</html>