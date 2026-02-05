<!-- components/destinations.html -->
<section class="destinations-section" id="destinations">
    <div class="destinations-container">
        <!-- Encabezado -->
        <div class="destinations-header">
            <span class="section-subtitle">Explora el Perú</span>
            <h2 class="section-title">
                <span class="title-line">Destinos</span>
                <span class="title-line accent">Imperdibles</span>
            </h2>
            <p class="section-description">
                Descubre las maravillas del Perú, desde antiguas ciudadelas incas 
                hasta paisajes naturales que quitan el aliento.
            </p>
        </div>
        
        <!-- Grid de Destinos -->
        <div class="destinations-grid">
            <!-- Machu Picchu -->
            <div class="destination-card" data-destination="machupicchu">
                <div class="card-image">
                    <img src="imagenes/machupicchu-card.jpg" alt="Machu Picchu" 
                         onerror="this.src='https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                    <div class="image-overlay">
                        <span class="overlay-text">Maravilla del Mundo</span>
                    </div>
                    <div class="card-badge">
                        <i class="fas fa-crown"></i>
                        <span>TOP 1</span>
                    </div>
                </div>
                <div class="card-content">
                    <div class="destination-info">
                        <div class="destination-meta">
                            <span class="meta-item">
                                <i class="fas fa-clock"></i>
                                2-4 días
                            </span>
                            <span class="meta-item">
                                <i class="fas fa-hiking"></i>
                                Moderado
                            </span>
                        </div>
                        <h3 class="destination-title">Machu Picchu</h3>
                        <p class="destination-description">
                            La ciudad sagrada de los Incas, una de las 7 maravillas 
                            del mundo moderno. Descubre su magia y misterio.
                        </p>
                        <div class="destination-tags">
                            <span class="tag">Historia</span>
                            <span class="tag">Aventura</span>
                            <span class="tag">Cultura</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="destination-price">
                            <span class="price-from">Desde</span>
                            <span class="price-amount">$499</span>
                        </div>
                        <a href="destinos/machupicchu.html" class="explore-btn" data-destination="machupicchu">
                            <span>Explorar Tour</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Lago Titicaca -->
            <div class="destination-card" data-destination="lagotiticaca">
                <div class="card-image">
                    <img src="imagenes/lagotiticaca-card.jpg" alt="Lago Titicaca" 
                         onerror="this.src='https://images.pexels.com/photos/734953/pexels-photo-734953.jpeg?cs=srgb&dl=pexels-ignacio-sottano-231424-734953.jpg&fm=jpg'">
                    <div class="image-overlay">
                        <span class="overlay-text">Lago más alto</span>
                    </div>
                    <div class="card-badge">
                        <i class="fas fa-water"></i>
                        <span>Único</span>
                    </div>
                </div>
                <div class="card-content">
                    <div class="destination-info">
                        <div class="destination-meta">
                            <span class="meta-item">
                                <i class="fas fa-clock"></i>
                                3-5 días
                            </span>
                            <span class="meta-item">
                                <i class="fas fa-ship"></i>
                                Tranquilo
                            </span>
                        </div>
                        <h3 class="destination-title">Lago Titicaca</h3>
                        <p class="destination-description">
                            El lago navegable más alto del mundo. Visita las islas 
                            flotantes de los Uros y la Isla del Sol.
                        </p>
                        <div class="destination-tags">
                            <span class="tag">Naturaleza</span>
                            <span class="tag">Cultura Viva</span>
                            <span class="tag">Paisajes</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="destination-price">
                            <span class="price-from">Desde</span>
                            <span class="price-amount">$399</span>
                        </div>
                        <a href="destinos/lagotiticaca.html" class="explore-btn" data-destination="lagotiticaca">
                            <span>Explorar Tour</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Líneas de Nazca -->
            <div class="destination-card" data-destination="lineasnazca">
                <div class="card-image">
                    <img src="imagenes/lineasnazca-card.jpg" alt="Líneas de Nazca" 
                         onerror="this.src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/4c/a1/6d/caption.jpg?w=1200&h=-1&s=1'">
                    <div class="image-overlay">
                        <span class="overlay-text">Misterio Ancestral</span>
                    </div>
                    <div class="card-badge">
                        <i class="fas fa-question-circle"></i>
                        <span>Enigmático</span>
                    </div>
                </div>
                <div class="card-content">
                    <div class="destination-info">
                        <div class="destination-meta">
                            <span class="meta-item">
                                <i class="fas fa-clock"></i>
                                1-2 días
                            </span>
                            <span class="meta-item">
                                <i class="fas fa-plane"></i>
                                Aéreo
                            </span>
                        </div>
                        <h3 class="destination-title">Líneas de Nazca</h3>
                        <p class="destination-description">
                            Figuras gigantes visibles solo desde el aire. Un misterio 
                            arqueológico que sigue desafiando a la ciencia.
                        </p>
                        <div class="destination-tags">
                            <span class="tag">Misterio</span>
                            <span class="tag">Arqueología</span>
                            <span class="tag">Aventura</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="destination-price">
                            <span class="price-from">Desde</span>
                            <span class="price-amount">$299</span>
                        </div>
                        <a href="destinos/lineasnazca.html" class="explore-btn" data-destination="lineasnazca">
                            <span>Explorar Tour</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>