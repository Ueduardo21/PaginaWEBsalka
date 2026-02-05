<!-- components/hero.php -->
 <section class="hero" id="hero">
                <!-- Fondo del hero con overlay -->
                <div class="hero-background">
                    <div class="bg-overlay"></div>
                    <!-- Imagen de fondo -->
                    <div class="bg-image" style="background-image: url('assets/imagenes/machupicchufondo.jpeg');"></div>
                    
                    <!-- Elementos decorativos -->
                    <div class="decorative-elements">
                        <div class="deco-plane">
                            <i class="fas fa-plane"></i>
                        </div>
                        <div class="deco-palm">
                            <i class="fas fa-tree"></i>
                        </div>
                        <div class="deco-sun">
                            <i class="fas fa-sun"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Contenido principal del hero -->
                <div class="hero-container">
                    <div class="hero-content">
                        <!-- Badge/Tag de promoción -->
                        <div class="promo-tag">
                            <span class="promo-text">OFERTA EXCLUSIVA</span>
                            <div class="tag-dot"></div>
                            <span class="promo-desc">Tiempo Limitado</span>
                        </div>
                        
                        <!-- Título principal -->
                        <h1 class="hero-title">
                            <span class="title-line">AVENTURA</span>
                            <span class="title-line accent">TRAVEL</span>
                        </h1>
                        
                        <!-- Subtítulo -->
                        <h2 class="hero-subtitle">
                            Explora el mejor lado del mundo
                        </h2>
                        
                        <!-- Línea decorativa -->
                        <div class="title-divider">
                            <div class="divider-line"></div>
                            <div class="divider-icon">
                                <i class="fas fa-compass"></i>
                            </div>
                            <div class="divider-line"></div>
                        </div>
                        
                        <!-- Descripción -->
                        <p class="hero-description">
                            Descubre destinos impresionantes, experiencias inolvidables 
                            y ofertas exclusivas creadas especialmente para ti.
                        </p>
                        
                        <!-- Botones de acción -->
                        <div class="hero-actions">
                            <a href="pages/gallery.php" class="btn btn-primary">
                                <i class="fas fa-crown"></i>
                                <span> Preview</span>
                                <div class="btn-hover-effect"></div>
                            </a>
                        </div>       
                        <!-- Contador de oferta -->
                        <div class="offer-counter">
                            <div class="counter-title">La oferta termina en:</div>
                            <div class="counter-timer">
                                <div class="time-unit">
                                    <span class="time-value" id="days">05</span>
                                    <span class="time-label">Días</span>
                                </div>
                                <div class="time-separator">:</div>
                                <div class="time-unit">
                                    <span class="time-value" id="hours">18</span>
                                    <span class="time-label">Horas</span>
                                </div>
                                <div class="time-separator">:</div>
                                <div class="time-unit">
                                    <span class="time-value" id="minutes">42</span>
                                    <span class="time-label">Minutos</span>
                                </div>
                                <div class="time-separator">:</div>
                                <div class="time-unit">
                                    <span class="time-value" id="seconds">30</span>
                                    <span class="time-label">Segundos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
 <!-- Video preview section (VERSIÓN IN-PLACE CORREGIDA) -->
 <div class="hero-video-preview">
    <div class="video-container">
        <!-- Contenedor del video - AÑADE ID -->
        <div class="video-player" id="videoPlayer">
            <!-- Video REAL directamente aquí -->
            <video id="heroVideo" controls style="display: none;">
                <source src="assets/video/animacion_cusco.mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
            
            <!-- Thumbnail (solo se muestra al inicio) -->
            <div class="video-thumbnail" id="videoThumbnail">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                    <div class="play-pulse"></div>
                </div>
                <div class="video-overlay-text">
                    <i class="fas fa-video"></i>
                    <span>Ver Video</span>
                </div>
            </div>
            
            <!-- Añade este div para el indicador de carga -->
            <div class="video-loading"></div>
        </div>
        
        <!-- Descripción del video -->
        <div class="video-description">
            <h3>Tour Virtual Cusco</h3>
            <p>Descubre los secretos mejor guardados de la ciudad imperial 
            a través de nuestro exclusivo tour virtual.</p>
        </div>
    </div>
 </div>
                
  <!-- Scroll indicator -->
        <div class="scroll-indicator">
        <div class="mouse">
        <div class="wheel"></div>
        </div>
                <div class="arrow-down">
                    <i class="fas fa-chevron-down"></i>
                </div>
        </div>
</section>
            