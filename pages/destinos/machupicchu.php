<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Machu Picchu - Aventura Travel</title>
    
    <!-- CSS -->
    <link rel="stylesheet" href="../../assets/css/destination/destination.css">
    <link rel="stylesheet" href="../../assets/css/index/faq.css">
    <link rel="stylesheet" href="../../assets/css/floating-buttons.css">
    <link rel="stylesheet" href="../../assets/css/navbar.css">
    <link rel="stylesheet" href="../../assets/css/footer.css">
    
    <!-- Fuentes -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700;800&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../assets/favicon.ico">
</head>
<body>
    <!-- Header/Navbar con Logo de Imagen -->
<header id="main-header">
    <nav class="navbar">
        <div class="logo">
            <a href="../index.html">
                <!-- Tu logo aquí - Solo imagen -->
                <img src="../../assets/imagenes/logo.png" alt="SALKANY Trek & Expedition" class="logo-img">
            </a>
        </div>
        
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#itinerary" class="nav-link">
                    <i class="fas fa-home"></i> Itinerario
                </a>
            </li>
            <li class="nav-item">
                <a href="#gallery" class="nav-link">
                    <i class="fas fa-info-circle"></i> Galería
                </a>
            </li>
            <li class="nav-item">
                <a href="#pricing" class="nav-link">
                    <i class="fas fa-globe-americas"></i> Planes
                </a>
            </li>
            <li class="nav-item">
                <a href="#faq" class="nav-link">
                    <i class="fas fa-envelope"></i> Preguntas Frecuentes
                </a>
            </li>
        </ul>
        
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
</header>

    <!-- Hero Section -->
    <section class="destination-hero" id="hero">
        <div class="hero-background">
            <img src="../imagenes/machupicchu-hero.jpg" alt="Machu Picchu" class="hero-bg-image"
                 onerror="this.src='https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'">
            <div class="hero-overlay"></div>
        </div>
        
        <div class="hero-content">
            <div class="hero-badge">
                <span>Maravilla del Mundo</span>
            </div>
            
            <h1 class="destination-hero-title">Machu Picchu</h1>
            
            <p class="hero-subtitle">
                Descubre la ciudad sagrada de los Incas, una de las 7 maravillas 
                del mundo moderno. Una experiencia que transformará tu vida.
            </p>
            
            <div class="hero-stats">
                <div class="hero-stat">
                    <span class="stat-number">4</span>
                    <span class="stat-label">Días</span>
                </div>
                <div class="hero-stat">
                    <span class="stat-number">Moderado</span>
                    <span class="stat-label">Dificultad</span>
                </div>
                <div class="hero-stat">
                    <span class="stat-number">2,430</span>
                    <span class="stat-label">msnm</span>
                </div>
                <div class="hero-stat">
                    <span class="stat-number">15°C</span>
                    <span class="stat-label">Temperatura</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección Acerca de -->
    <section class="destination-section" id="about">
        <div class="destination-container">
            <div class="section-header">
                <span class="section-subtitle">La Experiencia</span>
                <h2 class="section-title">
                    <span class="title-line">Machu Picchu</span>
                    <span class="title-line accent">Ciudad Sagrada</span>
                </h2>
                <p class="section-description">
                    Un viaje espiritual y cultural a través de la historia inca, 
                    combinando aventura, naturaleza y descubrimiento arqueológico.
                </p>
            </div>
            
            <div class="two-column-grid">
                <div class="text-column">
                    <h3>Un Sueño Hecho Realidad</h3>
                    <p>
                        Machu Picchu, la "ciudad perdida de los Incas", fue construida 
                        en el siglo XV y redescubierta en 1911 por Hiram Bingham. 
                        Esta maravilla arquitectónica se encuentra en lo alto de 
                        los Andes peruanos, rodeada de montañas y selva tropical.
                    </p>
                    
                    <p>
                        Nuestro tour exclusivo te lleva a través del Camino Inca, 
                        una de las rutas de trekking más famosas del mundo, 
                        culminando en la impresionante vista de la ciudadela 
                        desde la Puerta del Sol.
                    </p>
                    
                    <h3>¿Qué Incluye?</h3>
                    <ul class="icon-list">
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span><strong>Guías expertos:</strong> Bilingües y certificados en historia inca</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span><strong>Alojamiento:</strong> Hoteles 3 estrellas y camping en ruta</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span><strong>Alimentación:</strong> Desayunos, almuerzos y cenas incluidos</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span><strong>Transporte:</strong> Tren panorámico y bus de ascenso</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span><strong>Entradas:</strong> A Machu Picchu y sitios arqueológicos</span>
                        </li>
                    </ul>
                </div>
                
                <div class="image-column">
                    <img src="../imagenes/machupicchu-about.jpg" alt="Vista de Machu Picchu"
                         onerror="this.src='https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                </div>
            </div>
        </div>
    </section>

    <!-- Itinerario -->
    <section class="destination-section" id="itinerary" style="background: #f8f9fa;">
        <div class="destination-container">
            <div class="section-header">
                <span class="section-subtitle">El Viaje</span>
                <h2 class="section-title">
                    <span class="title-line">Itinerario</span>
                    <span class="title-line accent">Detallado</span>
                </h2>
                <p class="section-description">
                    4 días de aventura inolvidable desde Cusco hasta la cima de Machu Picchu
                </p>
            </div>
            
            <div class="itinerary-grid">
                <!-- Día 1 -->
                <div class="itinerary-day">
                    <div class="day-header">
                        <div class="day-number">1</div>
                        <div class="day-title">Cusco - Valle Sagrado</div>
                    </div>
                    <ul class="day-activities">
                        <li><i class="fas fa-map-marker-alt"></i> Recojo del hotel en Cusco</li>
                        <li><i class="fas fa-utensils"></i> Desayuno en el Valle Sagrado</li>
                        <li><i class="fas fa-hiking"></i> Visita a Pisac y Ollantaytambo</li>
                        <li><i class="fas fa-train"></i> Tren a Aguas Calientes</li>
                        <li><i class="fas fa-hotel"></i> Noche en Aguas Calientes</li>
                    </ul>
                </div>
                
                <!-- Día 2 -->
                <div class="itinerary-day">
                    <div class="day-header">
                        <div class="day-number">2</div>
                        <div class="day-title">Machu Picchu</div>
                    </div>
                    <ul class="day-activities">
                        <li><i class="fas fa-bus"></i> Bus a Machu Picchu (5:30 AM)</li>
                        <li><i class="fas fa-sun"></i> Amanecer en la ciudadela</li>
                        <li><i class="fas fa-compass"></i> Tour guiado completo (3 horas)</li>
                        <li><i class="fas fa-camera"></i> Tiempo libre para fotos</li>
                        <li><i class="fas fa-hiking"></i> Opcional: Subida al Huayna Picchu</li>
                    </ul>
                </div>
                
                <!-- Día 3 -->
                <div class="itinerary-day">
                    <div class="day-header">
                        <div class="day-number">3</div>
                        <div class="day-title">Camino Inca</div>
                    </div>
                    <ul class="day-activities">
                        <li><i class="fas fa-hiking"></i> Trekking por el Camino Inca</li>
                        <li><i class="fas fa-mountain"></i> Visita a Wiñay Wayna</li>
                        <li><i class="fas fa-campground"></i> Camping en ruta</li>
                        <li><i class="fas fa-utensils"></i> Cena bajo las estrellas</li>
                        <li><i class="fas fa-fire"></i> Fogata y historias incas</li>
                    </ul>
                </div>
                
                <!-- Día 4 -->
                <div class="itinerary-day">
                    <div class="day-header">
                        <div class="day-number">4</div>
                        <div class="day-title">Regreso a Cusco</div>
                    </div>
                    <ul class="day-activities">
                        <li><i class="fas fa-sunrise"></i> Amanecer en Inti Punku</li>
                        <li><i class="fas fa-train"></i> Tren de regreso a Cusco</li>
                        <li><i class="fas fa-utensils"></i> Almuerzo de despedida</li>
                        <li><i class="fas fa-gift"></i> Certificado de completación</li>
                        <li><i class="fas fa-hotel"></i> Traslado al hotel en Cusco</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

 <!-- Galería -->
<section class="destination-section" id="gallery">
    <div class="destination-container">
        <div class="section-header">
            <span class="section-subtitle">Momentos</span>
            <h2 class="section-title">
                <span class="title-line">Galería</span>
                <span class="title-line accent">Fotográfica</span>
            </h2>
            <p class="section-description">
                Capturamos los momentos más especiales de esta aventura única
            </p>
        </div>
        
        <div class="carousel-container">
            <div class="hover-instruction" id="hoverInstruction">Carrusel pausado</div>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="carouselTrack">
                    <!-- Slide 1: Amanecer -->
                    <div class="carousel-slide">
                        <div class="carousel-image-container">
                            <img src="../imagenes/machupicchu-gallery1.jpg" alt="Amanecer en Machu Picchu"
                                 class="carousel-image"
                                 onerror="this.src='https://img.freepik.com/premium-photo/stunning-sunset-view-machu-picchu-ancient-inca-citadel-perched-high-andes-mountains_895651-1693.jpg'">
                            <div class="image-overlay">
                                <h2 class="carousel-title">AMANECER MÁGICO</h2>
                                <p class="carousel-description">Los primeros rayos del sol iluminan las ruinas de Machu Picchu, revelando su esplendor ante los primeros visitantes del día.</p>
                                <div class="features">
                                    <div class="feature">Primera luz</div>
                                    <div class="feature">Vistas únicas</div>
                                    <div class="feature">Momento espiritual</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 2: Camino Inca -->
                    <div class="carousel-slide">
                        <div class="carousel-image-container">
                            <img src="../imagenes/machupicchu-gallery2.jpg" alt="Camino Inca"
                                 class="carousel-image"
                                 onerror="this.src='https://abexpeditions.com/es/wp-content/uploads/2020/01/camino-inca-peru.jpg'">
                            <div class="image-overlay">
                                <h2 class="carousel-title">CAMINO INCA</h2>
                                <p class="carousel-description">La ruta ancestral de 4 días que conduce a Machu Picchu, pasando por bosques nubosos y ruinas incas.</p>
                                <div class="features">
                                    <div class="feature">43 km trekking</div>
                                    <div class="feature">Paso a 4200 msnm</div>
                                    <div class="feature">Aventura extrema</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 3: Templo del Sol -->
                    <div class="carousel-slide">
                        <div class="carousel-image-container">
                            <img src="../imagenes/machupicchu-gallery3.jpg" alt="Templo del Sol"
                                 class="carousel-image"
                                 onerror="this.src='https://blog.incarail.com/wp-content/uploads/2024/10/Templo-del-Sol-2.jpg'">
                            <div class="image-overlay">
                                <h2 class="carousel-title">TEMPLO DEL SOL</h2>
                                <p class="carousel-description">Estructura ceremonial semi-circular con ventanas estratégicamente alineadas con los solsticios.</p>
                                <div class="features">
                                    <div class="feature">Arquitectura fina</div>
                                    <div class="feature">Alineación solar</div>
                                    <div class="feature">Piedra pulida</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 4: Intihuatana -->
                    <div class="carousel-slide">
                        <div class="carousel-image-container">
                            <img src="https://www.peru.travel/Contenido/General/Imagen/es/840/1.1/intihuatana.jpg" alt="Intihuatana de Machu Picchu"
                                 class="carousel-image">
                            <div class="image-overlay">
                                <h2 class="carousel-title">INTIHUATANA</h2>
                                <p class="carousel-description">El "Reloj Solar" inca, una piedra tallada que servía como observatorio astronómico y calendario agrícola.</p>
                                <div class="features">
                                    <div class="feature">Observatorio</div>
                                    <div class="feature">Calendario inca</div>
                                    <div class="feature">Piedra sagrada</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 5: Puerta del Sol -->
                    <div class="carousel-slide">
                        <div class="carousel-image-container">
                            <img src="https://www.perurail.com/wp-content/uploads/2022/08/Intipunku.jpg" alt="Puerta del Sol"
                                 class="carousel-image">
                            <div class="image-overlay">
                                <h2 class="carousel-title">INTIPUNKU</h2>
                                <p class="carousel-description">La "Puerta del Sol", punto de entrada tradicional a Machu Picchu para los caminantes del Camino Inca.</p>
                                <div class="features">
                                    <div class="feature">Primera vista</div>
                                    <div class="feature">Momento épico</div>
                                    <div class="feature">Fotografía icónica</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 6: Huayna Picchu -->
                    <div class="carousel-slide">
                        <div class="carousel-image-container">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDeVOXjNtqixoHLv2JQ8NBsKUz88BuyEi_KQ&s" alt="Huayna Picchu"
                                 class="carousel-image">
                            <div class="image-overlay">
                                <h2 class="carousel-title">HUAYNA PICCHU</h2>
                                <p class="carousel-description">La montaña joven que se eleva sobre Machu Picchu, ofreciendo vistas panorámicas impresionantes.</p>
                                <div class="features">
                                    <div class="feature">2697 msnm</div>
                                    <div class="feature">Hike exigente</div>
                                    <div class="feature">Vista aérea</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 7: Templo de las Tres Ventanas -->
                    <div class="carousel-slide">
                        <div class="carousel-image-container">
                            <img src="https://blog.incarail.com/wp-content/uploads/2024/10/tres-ventanas-machu-picchu-1.jpg" alt="Templo de las Tres Ventanas"
                                 class="carousel-image">
                            <div class="image-overlay">
                                <h2 class="carousel-title">TRES VENTANAS</h2>
                                <p class="carousel-description">Estructura con tres ventanas trapezoidales que simbolizan los tres mundos de la cosmovisión inca.</p>
                                <div class="features">
                                    <div class="feature">Cosmovisión inca</div>
                                    <div class="feature">Arquitectura trapezoidal</div>
                                    <div class="feature">Significado espiritual</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 8: Terrazas Agrícolas -->
                    <div class="carousel-slide">
                        <div class="carousel-image-container">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGkVu7RE_GaZEbVli2tT2DfvJxGW0CEA7DA&s" alt="Terrazas agrícolas"
                                 class="carousel-image">
                            <div class="image-overlay">
                                <h2 class="carousel-title">TERRAZAS AGRÍCOLAS</h2>
                                <p class="carousel-description">Sistema de andenes que demostraban el avanzado conocimiento inca en ingeniería agrícola y control de erosión.</p>
                                <div class="features">
                                    <div class="feature">Ingeniería inca</div>
                                    <div class="feature">Drenaje perfecto</div>
                                    <div class="feature">Microclimas</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slides duplicados para efecto infinito suave -->
                    <!-- Se duplican automáticamente con JavaScript -->
                </div>
            </div>
        </div>
        
        <div class="carousel-info">
            <p><strong>Galería interactiva:</strong> Explora la maravilla de Machu Picchu a través de estas imágenes. Pasa el cursor sobre cualquier foto para detener el carrusel y descubrir detalles fascinantes sobre la ciudadela inca.</p>
        </div>
    </div>
</section>

    <!-- Precios -->
    <section class="destination-section" id="pricing">
        <div class="destination-container">
            <div class="pricing-section">
                <div class="section-header">
                    <span class="section-subtitle">Inversión</span>
                    <h2 class="section-title">
                        <span class="title-line">Planes y</span>
                        <span class="title-line accent">Precios</span>
                    </h2>
                    <p class="section-description">
                        Elige la experiencia que mejor se adapte a tus necesidades
                    </p>
                </div>
                
                <div class="pricing-cards">
                    <!-- Plan Básico -->
                    <div class="pricing-card">
                        <h3 class="plan-name">Básico</h3>
                        <div class="plan-price">
                            <span class="price-amount">$399</span>
                            <div class="price-period">por persona</div>
                        </div>
                        <ul class="plan-features">
                            <li><i class="fas fa-check"></i> Tour guiado en grupo</li>
                            <li><i class="fas fa-check"></i> Entradas a Machu Picchu</li>
                            <li><i class="fas fa-check"></i> Transporte básico</li>
                            <li><i class="fas fa-check"></i> 2 noches de hotel</li>
                            <li><i class="fas fa-times"></i> <s>Camino Inca</s></li>
                        </ul>
                        <a href="#" class="book-button">
                            <i class="fas fa-calendar-check"></i>
                            <span>Reservar Ahora</span>
                        </a>
                    </div>
                    
                    <!-- Plan Premium -->
                    <div class="pricing-card featured">
                        <h3 class="plan-name">Premium</h3>
                        <div class="plan-price">
                            <span class="price-amount">$599</span>
                            <div class="price-period">por persona</div>
                        </div>
                        <ul class="plan-features">
                            <li><i class="fas fa-check"></i> Todo incluido del Básico</li>
                            <li><i class="fas fa-check"></i> Camino Inca completo</li>
                            <li><i class="fas fa-check"></i> Guía privado</li>
                            <li><i class="fas fa-check"></i> Hoteles 4 estrellas</li>
                            <li><i class="fas fa-check"></i> Comidas gourmet</li>
                        </ul>
                        <a href="#" class="book-button">
                            <i class="fas fa-crown"></i>
                            <span>Reservar Premium</span>
                        </a>
                    </div>
                    
                    <!-- Plan VIP -->
                    <div class="pricing-card">
                        <h3 class="plan-name">VIP</h3>
                        <div class="plan-price">
                            <span class="price-amount">$899</span>
                            <div class="price-period">por persona</div>
                        </div>
                        <ul class="plan-features">
                            <li><i class="fas fa-check"></i> Todo incluido del Premium</li>
                            <li><i class="fas fa-check"></i> Helicóptero a Machu Picchu</li>
                            <li><i class="fas fa-check"></i> Hotel 5 estrellas en Cusco</li>
                            <li><i class="fas fa-check"></i> Masaje después del trekking</li>
                            <li><i class="fas fa-check"></i> Fotógrafo personal</li>
                        </ul>
                        <a href="#" class="book-button">
                            <i class="fas fa-star"></i>
                            <span>Reservar VIP</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonios -->
    <section class="destination-section" id="testimonials" style="background: #f8f9fa;">
        <div class="destination-container">
            <div class="section-header">
                <span class="section-subtitle">Experiencias</span>
                <h2 class="section-title">
                    <span class="title-line">Lo que dicen</span>
                    <span class="title-line accent">nuestros viajeros</span>
                </h2>
            </div>
            
            <div class="testimonials-grid">
                <!-- Testimonio 1 -->
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p class="testimonial-text">
                            "La experiencia con Aventura Travel superó todas mis expectativas. 
                            Ver el amanecer en Machu Picchu fue un momento mágico que nunca olvidaré."
                        </p>
                    </div>
                    <div class="testimonial-author">
                        <img src="../imagenes/testimonial1.jpg" alt="María González" class="author-avatar"
                             onerror="this.src='https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'">
                        <div class="author-info">
                            <h4>María González</h4>
                            <span>Viajó en Enero 2024</span>
                        </div>
                    </div>
                </div>
                
                <!-- Testimonio 2 -->
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p class="testimonial-text">
                            "Los guías fueron increíbles, conocían cada detalle histórico. 
                            El Camino Inca fue desafiante pero vale cada paso. ¡Volveré!"
                        </p>
                    </div>
                    <div class="testimonial-author">
                        <img src="../imagenes/testimonial2.jpg" alt="Carlos Mendoza" class="author-avatar"
                             onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'">
                        <div class="author-info">
                            <h4>Carlos Mendoza</h4>
                            <span>Viajó en Marzo 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!-- ========== FAQ SECTION MACHU PICCHU ========== -->
<section class="faq-section" id="machupicchu-faq">
    <div class="faq-container">
        <!-- Encabezado de la sección -->
        <div class="faq-header">
            <span class="section-subtitle">¿Planificando tu viaje?</span>
            <h2 class="section-title">
                <span class="title-line">Machu Picchu</span>
                <span class="title-line accent">Preguntas Frecuentes</span>
            </h2>
            <p class="section-description">
                Resolvemos todas tus dudas sobre el tour a Machu Picchu para que disfrutes 
                de esta maravilla del mundo sin preocupaciones.
            </p>
        </div>
        
        <!-- Contenido principal -->
        <div class="faq-content">
            <!-- Columna izquierda - Categorías -->
            <div class="faq-categories">
                <div class="categories-header">
                    <h3><i class="fas fa-filter"></i> Categorías</h3>
                    <p>Filtra por tema de interés</p>
                </div>
                
                <div class="categories-list">
                    <button class="category-btn active" data-category="all">
                        <i class="fas fa-water"></i>
                        <span>Todas las preguntas</span>
                        <span class="category-count">10</span>
                    </button>
                    
                    <button class="category-btn" data-category="reservas">
                        <i class="fas fa-ticket-alt"></i>
                        <span>Entradas y Reservas</span>
                        <span class="category-count">3</span>
                    </button>
                    
                    <button class="category-btn" data-category="preparacion">
                        <i class="fas fa-hiking"></i>
                        <span>Preparación</span>
                        <span class="category-count">3</span>
                    </button>
                    
                    <button class="category-btn" data-category="tour">
                        <i class="fas fa-map-marked-alt"></i>
                        <span>Durante el Tour</span>
                        <span class="category-count">2</span>
                    </button>
                    
                    <button class="category-btn" data-category="clima">
                        <i class="fas fa-cloud-sun"></i>
                        <span>Clima y Altura</span>
                        <span class="category-count">2</span>
                    </button>
                </div>
                
                <!-- Contacto rápido -->
                <div class="quick-contact">
                    <h4><i class="fas fa-question-circle"></i> ¿Necesitas ayuda?</h4>
                    <p>Especialistas en Machu Picchu</p>
                    <div class="contact-options">
                        <a href="https://wa.me/51987654321" class="contact-option whatsapp" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </a>
                        <a href="mailto:machupicchu@aventuratravel.com" class="contact-option email">
                            <i class="fas fa-envelope"></i>
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Columna derecha - Preguntas y respuestas -->
            <div class="faq-questions">
                <!-- Grupo 1: Entradas y Reservas -->
                <div class="faq-group active" data-category="reservas">
                    <h3 class="group-title">
                        <i class="fas fa-ticket-alt"></i>
                        <span>Entradas y Reservas</span>
                    </h3>
                    
                    <div class="faq-items">
                        <!-- Pregunta 1 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Con cuánta anticipación debo reservar?</h4>
                                    <p>Tiempo de reserva recomendado</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Machu Picchu tiene límite de visitantes diarios:</p>
                                <ul>
                                    <li><strong>Mínimo 3 meses:</strong> Para temporada alta (junio-agosto)</li>
                                    <li><strong>Mínimo 1 mes:</strong> Para temporada media</li>
                                    <li><strong>Al menos 2 semanas:</strong> Para temporada baja</li>
                                </ul>
                                <p><strong>Importante:</strong> Los tickets para Huayna Picchu se agotan con 4-6 meses de anticipación.</p>
                            </div>
                        </div>
                        
                        <!-- Pregunta 2 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Qué incluye el tour?</h4>
                                    <p>Detalles del paquete</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Nuestro tour completo incluye:</p>
                                <ul>
                                    <li><strong>Transporte:</strong> Bus Cusco-Ollantaytambo, tren a Aguas Calientes, bus a Machu Picchu</li>
                                    <li><strong>Guía:</strong> Oficial bilingüe (español/inglés)</li>
                                    <li><strong>Entradas:</strong> Ticket a Machu Picchu</li>
                                    <li><strong>Asistencia:</strong> Permanente durante el tour</li>
                                    <li><strong>Extras:</strong> Box lunch y botella de agua</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Pregunta 3 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Puedo cambiar la fecha de mi tour?</h4>
                                    <p>Política de cambios</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Los cambios de fecha son posibles sujetos a:</p>
                                <ul>
                                    <li><strong>Disponibilidad:</strong> Depende de cupos en la nueva fecha</li>
                                    <li><strong>Tiempo:</strong> Mínimo 48 horas antes del tour</li>
                                    <li><strong>Costo:</strong> Puede aplicar cargo administrativo</li>
                                    <li><strong>Entradas:</strong> Si ya fueron emitidas, cambios limitados</li>
                                </ul>
                                <p><strong>Nota:</strong> Los tickets de ingreso a Machu Picchu tienen política de cambios 
                                muy restrictiva del Ministerio de Cultura.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Grupo 2: Preparación -->
                <div class="faq-group" data-category="preparacion">
                    <h3 class="group-title">
                        <i class="fas fa-hiking"></i>
                        <span>Preparación para el Tour</span>
                    </h3>
                    
                    <div class="faq-items">
                        <!-- Pregunta 4 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Qué debo llevar al tour?</h4>
                                    <p>Lista de equipaje específica</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Esenciales para Machu Picchu:</p>
                                <ul>
                                    <li><strong>Documentos:</strong> Pasaporte original OBLIGATORIO</li>
                                    <li><strong>Protección:</strong> Protector solar SPF 50+, gafas, sombrero</li>
                                    <li><strong>Ropa:</strong> Capas, impermeable, zapatos cómodos</li>
                                    <li><strong>Equipo:</strong> Mochila pequeña (máx. 25L), agua, snacks</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Pregunta 5 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Cómo prepararme para la altura?</h4>
                                    <p>Consejos para el mal de altura</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Machu Picchu está a 2,430 msnm. Recomendaciones:</p>
                                <ul>
                                    <li><strong>Aclimatación:</strong> Llegar a Cusco 2 días antes</li>
                                    <li><strong>Hidratación:</strong> Beber 3-4 litros de agua diarios</li>
                                    <li><strong>Alimentación:</strong> Comidas ligeras, evitar alcohol</li>
                                    <li><strong>Medicación:</strong> Sorojchi pills o mate de coca</li>
                                    <li><strong>Ritmo:</strong> Caminar despacio, sin apuros</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Pregunta 6 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Hay restricciones de equipaje en el tren?</h4>
                                    <p>Política de equipaje PeruRail/Inca Rail</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Las compañías de tren tienen límites estrictos:</p>
                                <ul>
                                    <li><strong>Equipaje de mano:</strong> 5kg máximo</li>
                                    <li><strong>Dimensiones:</strong> Mochila/maleta pequeña</li>
                                    <li><strong>Prohibido:</strong> Bastones de trekking en cabina</li>
                                    <li><strong>Equipaje extra:</strong> Se puede dejar en Cusco</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Grupo 3: Durante el Tour -->
                <div class="faq-group" data-category="tour">
                    <h3 class="group-title">
                        <i class="fas fa-map-marked-alt"></i>
                        <span>Durante el Tour</span>
                    </h3>
                    
                    <div class="faq-items">
                        <!-- Pregunta 7 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Cuánto tiempo estaremos en Machu Picchu?</h4>
                                    <p>Duración del recorrido</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Nuestro itinerario típico incluye:</p>
                                <ul>
                                    <li><strong>4:00 AM:</strong> Recojo del hotel en Cusco</li>
                                    <li><strong>6:30 AM:</strong> Tren a Aguas Calientes</li>
                                    <li><strong>8:00 AM:</strong> Bus a la ciudadela</li>
                                    <li><strong>9:00 - 12:00:</strong> Tour guiado (3 horas)</li>
                                    <li><strong>12:00 - 14:00:</strong> Tiempo libre para explorar</li>
                                    <li><strong>14:30:</strong> Regreso a Aguas Calientes</li>
                                    <li><strong>20:00:</strong> Llegada a Cusco</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Pregunta 8 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Podemos subir al Huayna Picchu o Montaña?</h4>
                                    <p>Opciones de trekking adicional</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Estas son opciones adicionales con costo extra:</p>
                                <ul>
                                    <li><strong>Huayna Picchu:</strong> 400 cupos/día, reservar con 4-6 meses anticipación</li>
                                    <li><strong>Montaña Machu Picchu:</strong> 800 cupos/día, menos demanda</li>
                                    <li><strong>Dificultad:</strong> Media-alta, requiere buen estado físico</li>
                                    <li><strong>Duración:</strong> 2-4 horas adicionales</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Grupo 4: Clima y Altura -->
                <div class="faq-group" data-category="clima">
                    <h3 class="group-title">
                        <i class="fas fa-cloud-sun"></i>
                        <span>Clima y Condiciones</span>
                    </h3>
                    
                    <div class="faq-items">
                        <!-- Pregunta 9 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Cuál es la mejor época para visitar?</h4>
                                    <p>Temporadas y clima</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Cada temporada tiene sus ventajas:</p>
                                <ul>
                                    <li><strong>Temporada Seca (Abril-Octubre):</strong> Días soleados, poca lluvia, más turistas</li>
                                    <li><strong>Temporada Lluviosa (Noviembre-Marzo):</strong> Menos turistas, vegetación verde, lluvias frecuentes</li>
                                    <li><strong>Temperatura:</strong> 8°C - 20°C todo el año</li>
                                    <li><strong>Recomendación:</strong> Mayo o Septiembre - buen clima y menos multitudes</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Pregunta 10 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Qué pasa si llueve el día del tour?</h4>
                                    <p>Contingencias por clima</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Machu Picchu opera llueva o truene:</p>
                                <ul>
                                    <li><strong>Tour se realiza:</strong> Siempre que las condiciones sean seguras</li>
                                    <li><strong>Equipamiento:</strong> Proveemos ponchos de lluvia</li>
                                    <li><strong>Cancelación:</strong> Solo por cierre oficial del Ministerio de Cultura</li>
                                    <li><strong>Alternativas:</strong> Tour del Valle Sagrado si se cancela tren</li>
                                </ul>
                                <p>La lluvia en Machu Picchu suele ser intermitente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- CTA adicional -->
        <div class="faq-cta">
            <div class="cta-content">
                <h3><i class="fas fa-calendar-plus"></i> ¿Listo para vivir esta aventura?</h3>
                <p>Reserva tu tour a Machu Picchu hoy y asegura tu lugar en esta maravilla del mundo.</p>
                <div class="cta-actions">
                    <a href="#booking" class="cta-btn primary">
                        <i class="fas fa-check-circle"></i>
                        <span>Reservar Ahora</span>
                    </a>
                    <a href="#itinerary" class="cta-btn secondary">
                        <i class="fas fa-map"></i>
                        <span>Ver Itinerario</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

                 <!-- Botón de WhatsApp Flotante -->
    <a href="https://wa.me/51987654321" class="whatsapp-float" target="_blank">
        <i class="fab fa-whatsapp"></i>
        <span class="whatsapp-text">¿Necesitas ayuda?</span>
    </a>

    <!-- Botón Volver Arriba -->
    <button class="back-to-top" id="backToTop">
        <i class="fas fa-chevron-up"></i>
    </button>

    <footer class="minimal-footer">
    <!-- Sección superior solo con redes sociales -->
    <div class="footer-socials">
        <div class="socials-container">
            <h3 class="socials-title">Conecta con nosotros</h3>
            <p class="socials-subtitle">Sigue nuestras aventuras en redes sociales</p>
            
            <div class="social-icons-grid">
                <a href="https://facebook.com" class="social-icon-link" target="_blank" aria-label="Facebook">
                    <div class="social-icon-wrapper">
                        <i class="fab fa-facebook-f"></i>
                        <div class="social-tooltip">
                            <span>Facebook</span>
                            <small>12.5K seguidores</small>
                        </div>
                    </div>
                </a>
                
                <a href="https://instagram.com" class="social-icon-link" target="_blank" aria-label="Instagram">
                    <div class="social-icon-wrapper">
                        <i class="fab fa-instagram"></i>
                        <div class="social-tooltip">
                            <span>Instagram</span>
                            <small>25.3K seguidores</small>
                        </div>
                    </div>
                </a>
                
                <a href="https://twitter.com" class="social-icon-link" target="_blank" aria-label="Twitter">
                    <div class="social-icon-wrapper">
                        <i class="fab fa-twitter"></i>
                        <div class="social-tooltip">
                            <span>Twitter</span>
                            <small>8.7K seguidores</small>
                        </div>
                    </div>
                </a>
                
                <a href="https://youtube.com" class="social-icon-link" target="_blank" aria-label="YouTube">
                    <div class="social-icon-wrapper">
                        <i class="fab fa-youtube"></i>
                        <div class="social-tooltip">
                            <span>YouTube</span>
                            <small>15.2K seguidores</small>
                        </div>
                    </div>
                </a>
                
                <a href="https://tiktok.com" class="social-icon-link" target="_blank" aria-label="TikTok">
                    <div class="social-icon-wrapper">
                        <i class="fab fa-tiktok"></i>
                        <div class="social-tooltip">
                            <span>TikTok</span>
                            <small>18.9K seguidores</small>
                        </div>
                    </div>
                </a>
                
                <a href="https://pinterest.com" class="social-icon-link" target="_blank" aria-label="Pinterest">
                    <div class="social-icon-wrapper">
                        <i class="fab fa-pinterest-p"></i>
                        <div class="social-tooltip">
                            <span>Pinterest</span>
                            <small>5.4K seguidores</small>
                        </div>
                    </div>
                </a>
            </div>
            
            <div class="social-stats">
                <div class="stat-item">
                    <span class="stat-number" id="totalFollowers">0</span>
                    <span class="stat-label">Total Seguidores</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">24/7</span>
                    <span class="stat-label">Soporte</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">Satisfacción</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Sección inferior con el resto del contenido -->
    <div class="footer-main">
        <div class="footer-container">
            <div class="footer-content">
                <!-- Logo y tagline -->
                <div class="footer-brand">
                    <a href="index.html" class="footer-logo">
                        <span class="logo-main">AVENTURA</span>
                        <span class="logo-sub">TRAVEL</span>
                    </a>
                    <p class="footer-tagline">Descubre el Perú como nunca antes</p>
                </div>
                
                <!-- Newsletter -->
                <div class="footer-newsletter">
                    <h4>Mantente informado</h4>
                    <form class="newsletter-form" id="minimalNewsletterForm">
                        <input type="email" 
                               placeholder="Tu correo electrónico" 
                               class="newsletter-input"
                               required>
                        <button type="submit" class="newsletter-submit">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                    <p class="newsletter-hint">Recibe ofertas exclusivas</p>
                </div>
                
                <!-- Enlaces rápidos -->
                <div class="footer-links">
                    <div class="links-column">
                        <h5>Destinos</h5>
                        <ul>
                            <li><a href="machupicchu.html">Machu Picchu</a></li>
                            <li><a href="lagotiticaca.html">Lago Titicaca</a></li>
                            <li><a href="lineasnazca.html">Líneas de Nazca</a></li>
                        </ul>
                    </div>
                    <div class="links-column">
                        <h5>Ayuda</h5>
                        <ul>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="../contacto.html">Contacto</a></li>
                            <li><a href="../contacto.html">Reservas</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Línea divisoria -->
            <div class="footer-divider"></div>
            
            <!-- Copyright y enlaces legales -->
            <div class="footer-bottom">
                <div class="copyright">
                    <p>&copy; 2024 Aventura Travel. Todos los derechos reservados.</p>
                </div>
                
                <div class="legal-links">
                    <a href="#">Privacidad</a>
                    <span class="separator">•</span>
                    <a href="#">Términos</a>
                    <span class="separator">•</span>
                    <a href="#">Cookies</a>
                </div>
                
                <!-- Botón de volver arriba -->
                <button class="back-to-top-btn" id="backToTopBtn" aria-label="Volver arriba">
                    <i class="fas fa-chevron-up"></i>
                </button>
            </div>
        </div>
    </div>
 </footer>

    <!-- JavaScript -->
    <script src="../../assets/js/destination/destination.js"></script>
    <script src="../../assets/js/destination/faq-machupicchu.js"></script>
    <script src="../../assets/js/floating-buttons.js"></script>
    <script src="../../assets/js/navbar.js"></script>
    <script src="../../assets/js/footer.js"></script>
</body>
</html> 