<!-- components/about.html -->
  <section class="about-section" id="about">
    <div class="about-container">
        <!-- Encabezado con efecto parallax -->
        <div class="about-header">
            <div class="header-background"></div>
            <div class="header-content">
                <span class="about-subtitle">Descubre Quiénes Somos</span>
                <h2 class="about-title">
                    <span class="title-line">Creadores de</span>
                    <span class="title-line accent">Experiencias Inolvidables</span>
                </h2>
                <p class="header-description">
                    Más de una década transformando sueños de viaje en recuerdos eternos
                </p>
            </div>
        </div>

        <!-- Contenido principal -->
        <div class="about-content">
            <!-- Columna izquierda - Texto y estadísticas -->
            <div class="about-text-column">
                <!-- Misión y Visión -->
                <div class="mission-vision-cards">
                    <div class="mv-card mission-card">
                        <div class="mv-icon">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <h3>Nuestra Misión</h3>
                        <p>Crear experiencias de viaje auténticas que conecten a las personas con culturas, paisajes y comunidades, promoviendo siempre el turismo responsable y sostenible.</p>
                    </div>
                    
                    <div class="mv-card vision-card">
                        <div class="mv-icon">
                            <i class="fas fa-eye"></i>
                        </div>
                        <h3>Nuestra Visión</h3>
                        <p>Ser la agencia de turismo líder en experiencias transformadoras, reconocida por nuestra innovación, sostenibilidad y atención personalizada.</p>
                    </div>
                </div>

                <!-- Nuestra Historia -->
                <div class="history-section">
                    <h3><i class="fas fa-history"></i> Nuestra Historia</h3>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-year">2010</div>
                            <div class="timeline-content">
                                <h4>El Comienzo</h4>
                                <p>Fundación de Aventura Travel con un pequeño equipo de 3 apasionados viajeros.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">2014</div>
                            <div class="timeline-content">
                                <h4>Primera Expansión</h4>
                                <p>Apertura de nuestra segunda oficina y expansión a destinos internacionales.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">2018</div>
                            <div class="timeline-content">
                                <h4>Certificación Sostenible</h4>
                                <p>Obtención de la certificación de turismo sostenible y responsabilidad social.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">2023</div>
                            <div class="timeline-content">
                                <h4>Líderes en Experiencias</h4>
                                <p>Reconocidos como la mejor agencia de turismo experiencial de la región.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Estadísticas animadas -->
                <div class="stats-section">
                    <h3><i class="fas fa-chart-line"></i> En Números</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-circle">
                                <span class="stat-number" data-count="5000">0</span>
                                <span class="stat-plus">+</span>
                            </div>
                            <p class="stat-label">Viajeros Satisfechos</p>
                        </div>
                        <div class="stat-item">
                            <div class="stat-circle">
                                <span class="stat-number" data-count="150">0</span>
                                <span class="stat-plus">+</span>
                            </div>
                            <p class="stat-label">Destinos Únicos</p>
                        </div>
                        <div class="stat-item">
                            <div class="stat-circle">
                                <span class="stat-number" data-count="12">0</span>
                                <span class="stat-plus"></span>
                            </div>
                            <p class="stat-label">Años de Experiencia</p>
                        </div>
                        <div class="stat-item">
                            <div class="stat-circle">
                                <span class="stat-number" data-count="98">0</span>
                                <span class="stat-percent">%</span>
                            </div>
                            <p class="stat-label">Tasa de Satisfacción</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Columna derecha - Galería y valores -->
            <div class="about-gallery-column">
                <!-- Galería interactiva -->
                <div class="gallery-container">
                    <div class="main-gallery-image">
                        <img src="imagenes/about-main.jpg" alt="Equipo Aventura Travel" 
                             id="mainGalleryImage"
                             onerror="this.src='https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                        <div class="gallery-overlay">
                            <div class="overlay-content">
                                <i class="fas fa-heart"></i>
                                <span>Nuestra Pasión</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="gallery-thumbnails">
                        <div class="thumbnail active" data-image="imagenes/about-team.jpg">
                            <img src="imagenes/about-team.jpg" alt="Nuestro Equipo"
                                 onerror="this.src='https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'">
                        </div>
                        <div class="thumbnail" data-image="imagenes/about-office.jpg">
                            <img src="imagenes/about-office.jpg" alt="Nuestra Oficina"
                                 onerror="this.src='https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'">
                        </div>
                        <div class="thumbnail" data-image="imagenes/about-travelers.jpg">
                            <img src="imagenes/about-travelers.jpg" alt="Viajeros Felices"
                                 onerror="this.src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'">
                        </div>
                    </div>
                </div>

                <!-- Nuestros Valores -->
                <div class="values-section">
                    <h3><i class="fas fa-star"></i> Nuestros Valores</h3>
                    <div class="values-grid">
                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-handshake"></i>
                            </div>
                            <h4>Confianza</h4>
                            <p>Transparencia y honestidad en cada interacción con nuestros clientes.</p>
                        </div>
                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-leaf"></i>
                            </div>
                            <h4>Sostenibilidad</h4>
                            <p>Compromiso con el turismo responsable y cuidado del medio ambiente.</p>
                        </div>
                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-heart"></i>
                            </div>
                            <h4>Pasión</h4>
                            <p>Amamos lo que hacemos y contagiamos esa pasión en cada viaje.</p>
                        </div>
                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-lightbulb"></i>
                            </div>
                            <h4>Innovación</h4>
                            <p>Buscamos constantemente nuevas experiencias y destinos únicos.</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonio destacado -->
                <div class="featured-testimonial">
                    <div class="testimonial-content">
                        <i class="fas fa-quote-left quote-icon"></i>
                        <p class="testimonial-text">"Aventura Travel no solo organizó mi viaje, creó una experiencia que cambió mi perspectiva del mundo. Cada detalle fue perfecto."</p>
                        <div class="testimonial-author">
                            <img src="imagenes/testimonial-1.jpg" alt="María González"
                                 onerror="this.src='https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'">
                            <div class="author-info">
                                <h5>María González</h5>
                                <span>Viajera frecuente desde 2015</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>