<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto | AVENTURA TRAVEL</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/contacto/contacto.css">
    <link rel="stylesheet" href="../assets/css/index/faq.css">
    <link rel="stylesheet" href="../assets/css/navbar.css">
    <link rel="stylesheet" href="../assets/css/footer.css">
    <link rel="icon" type="image/x-icon" href="imagenes/favicon.ico">
</head>
<body>

        <!-- Header/Navbar actualizado -->
 

    <!-- Hero Section Contacto -->
    <section class="contact-hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Contacta con Nosotros</h1>
                <p class="hero-subtitle">Estamos aquí para hacer realidad tu próxima aventura</p>
                <div class="hero-divider">
                    <div class="divider-line"></div>
                    <div class="divider-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div class="divider-line"></div>
                </div>
                <p class="hero-description">
                    Nuestro equipo de expertos está listo para asesorarte y crear la experiencia de viaje perfecta para ti.
                </p>
            </div>
        </div>
    </section>

    <!-- Sección Principal de Contacto -->
    <main class="contact-main">
        <div class="container">
            <div class="contact-grid">
                <!-- Formulario de Contacto -->
                <div class="contact-form-container">
                    <div class="form-header">
                        <h2><i class="fas fa-paper-plane"></i> Envíanos un Mensaje</h2>
                        <p>Completa el formulario y te contactaremos en menos de 24 horas.</p>
                    </div>

                    <form id="contactForm" class="contact-form">
                        <div class="form-group">
                            <label for="name">
                                <i class="fas fa-user"></i> Nombre Completo
                            </label>
                            <input type="text" id="name" name="name" placeholder="Ingresa tu nombre completo" required>
                            <div class="error-message" id="nameError"></div>
                        </div>

                        <div class="form-group">
                            <label for="email">
                                <i class="fas fa-envelope"></i> Correo Electrónico
                            </label>
                            <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required>
                            <div class="error-message" id="emailError"></div>
                        </div>

                        <div class="form-group">
                            <label for="phone">
                                <i class="fas fa-phone"></i> Teléfono
                            </label>
                            <input type="tel" id="phone" name="phone" placeholder="+51 987 654 321">
                            <div class="error-message" id="phoneError"></div>
                        </div>

                        <div class="form-group">
                            <label for="destination">
                                <i class="fas fa-map-marker-alt"></i> Destino de Interés
                            </label>
                            <select id="destination" name="destination">
                                <option value="">Selecciona un destino</option>
                                <option value="cusco">Cusco y Machu Picchu</option>
                                <option value="arequipa">Arequipa y Cañón del Colca</option>
                                <option value="puno">Puno y Lago Titicaca</option>
                                <option value="lima">Lima y Costa Peruana</option>
                                <option value="selva">Selva Amazónica</option>
                                <option value="norte">Norte del Perú</option>
                                <option value="sur">Sur Andino</option>
                                <option value="personalizado">Itinerario Personalizado</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="travelers">
                                <i class="fas fa-users"></i> Número de Viajeros
                            </label>
                            <div class="travelers-selector">
                                <button type="button" class="traveler-btn minus" data-action="decrease">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <input type="number" id="travelers" name="travelers" value="1" min="1" max="20" readonly>
                                <button type="button" class="traveler-btn plus" data-action="increase">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>

                        <div class="form-group date-group">
                            <label for="travelDate">
                                <i class="fas fa-calendar-alt"></i> Fecha Tentativa de Viaje
                            </label>
                            <input type="date" id="travelDate" name="travelDate">
                        </div>

                        <div class="form-group">
                            <label for="message">
                                <i class="fas fa-comment-dots"></i> Tu Mensaje
                            </label>
                            <textarea id="message" name="message" rows="5" placeholder="Cuéntanos sobre tu viaje ideal, preferencias, presupuesto, etc..." required></textarea>
                            <div class="error-message" id="messageError"></div>
                        </div>

                        <div class="form-group checkbox-group">
                            <input type="checkbox" id="newsletter" name="newsletter" checked>
                            <label for="newsletter">Deseo recibir ofertas exclusivas y novedades sobre destinos.</label>
                        </div>

                        <button type="submit" class="btn btn-submit">
                            <i class="fas fa-paper-plane"></i>
                            <span>Enviar Mensaje</span>
                            <div class="btn-hover-effect"></div>
                        </button>

                        <div class="form-footer">
                            <p><i class="fas fa-shield-alt"></i> Tu información está protegida y no será compartida.</p>
                        </div>
                    </form>
                </div>

                <!-- Información de Contacto -->
                <div class="contact-info-container">
                    <!-- Tarjetas de Información -->
                    <div class="info-cards">
                        <div class="info-card">
                            <div class="card-icon">
                                <i class="fas fa-phone-volume"></i>
                            </div>
                            <div class="card-content">
                                <h3>Llamadas y WhatsApp</h3>
                                <p>+51 987 654 321</p>
                                <p>+51 987 654 322</p>
                                <a href="https://wa.me/51987654321" class="whatsapp-link" target="_blank">
                                    <i class="fab fa-whatsapp"></i> Chatear por WhatsApp
                                </a>
                            </div>
                        </div>

                        <div class="info-card">
                            <div class="card-icon">
                                <i class="fas fa-envelope-open-text"></i>
                            </div>
                            <div class="card-content">
                                <h3>Correo Electrónico</h3>
                                <p>info@aventuratravel.com</p>
                                <p>reservas@aventuratravel.com</p>
                                <p>soporte@aventuratravel.com</p>
                            </div>
                        </div>

                        <div class="info-card">
                            <div class="card-icon">
                                <i class="fas fa-map-marked-alt"></i>
                            </div>
                            <div class="card-content">
                                <h3>Oficina Central</h3>
                                <p>Av. El Sol 123, Cusco, Perú</p>
                                <p>Lun - Vie: 9:00 AM - 6:00 PM</p>
                                <p>Sáb: 9:00 AM - 1:00 PM</p>
                            </div>
                        </div>

                        <div class="info-card">
                            <div class="card-icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div class="card-content">
                                <h3>Horario de Atención</h3>
                                <p>Lunes a Viernes: 9am - 6pm</p>
                                <p>Sábados: 9am - 1pm</p>
                                <p>Emergencias: 24/7</p>
                            </div>
                        </div>
                    </div>

                  <!-- Mapa -->
<div class="map-container">
    <h3><i class="fas fa-map"></i> Nuestra Ubicación</h3>
    <div class="map-placeholder">
        <!-- Reemplaza esto con tu iframe de Google Maps -->
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.032252194531!2d-71.97713012464977!3d-13.517070487314175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd60c7976ffed%3A0x5d5e6b1b0e8e5b0f!2sAv.%20El%20Sol%2C%20Cusco%2C%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe"
            width="100%" 
            height="300" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        
        <div class="map-overlay">
            <i class="fas fa-map-pin"></i>
            <p>Av. El Sol 123, Cusco, Perú</p>
        </div>
        
        <div class="map-fallback">
            <p>Mapa de nuestra ubicación en Cusco</p>
            <a href="https://goo.gl/maps/ejemplo" target="_blank" class="btn-map">
                <i class="fas fa-external-link-alt"></i>
                Ver en Google Maps
            </a>
        </div>
    </div>
</div>

                    <!-- Redes Sociales -->
                    <div class="social-section">
                        <h3><i class="fas fa-hashtag"></i> Síguenos en Redes</h3>
                        <div class="social-links">
                            <a href="#" class="social-link facebook">
                                <i class="fab fa-facebook-f"></i>
                                <span>Facebook</span>
                            </a>
                            <a href="#" class="social-link instagram">
                                <i class="fab fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                            <a href="#" class="social-link twitter">
                                <i class="fab fa-twitter"></i>
                                <span>Twitter</span>
                            </a>
                            <a href="#" class="social-link youtube">
                                <i class="fab fa-youtube"></i>
                                <span>YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

<!-- ========== CONTACTO FAQ SECTION ========== -->
<section class="faq-section" id="contact-faq">
    <div class="faq-container">
        <!-- Encabezado de la sección -->
        <div class="faq-header">
            <span class="section-subtitle">¿Cómo podemos ayudarte?</span>
            <h2 class="section-title">
                <span class="title-line">Contacto y</span>
                <span class="title-line accent">Soporte</span>
            </h2>
            <p class="section-description">
                Resolvemos todas tus dudas sobre cómo contactarnos, tiempos de respuesta 
                y canales de comunicación disponibles.
            </p>
        </div>
        
        <!-- Contenido principal -->
        <div class="faq-content">
            <!-- Columna izquierda - Categorías -->
            <div class="faq-categories">
                <div class="categories-header">
                    <h3><i class="fas fa-headset"></i> Canales de Contacto</h3>
                    <p>Elige cómo prefieres comunicarte</p>
                </div>
                
                <div class="categories-list">
                    <button class="category-btn active" data-category="all">
                        <i class="fas fa-comments"></i>
                        <span>Todas las preguntas</span>
                        <span class="category-count">10</span>
                    </button>
                    
                    <button class="category-btn" data-category="response">
                        <i class="fas fa-clock"></i>
                        <span>Tiempos de Respuesta</span>
                        <span class="category-count">3</span>
                    </button>
                    
                    <button class="category-btn" data-category="emergency">
                        <i class="fas fa-exclamation-circle"></i>
                        <span>Emergencias</span>
                        <span class="category-count">2</span>
                    </button>
                    
                    <button class="category-btn" data-category="agency">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Oficinas</span>
                        <span class="category-count">3</span>
                    </button>
                    
                    <button class="category-btn" data-category="hours">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Horarios</span>
                        <span class="category-count">2</span>
                    </button>
                </div>
                
                <!-- Contacto rápido -->
                <div class="quick-contact">
                    <h4><i class="fas fa-bolt"></i> Contacto Rápido</h4>
                    <p>Respuesta en menos de 1 hora</p>
                    <div class="contact-options">
                        <a href="https://wa.me/51987654321" class="contact-option whatsapp" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                            <span>WhatsApp Urgente</span>
                        </a>
                        <a href="tel:+51987654321" class="contact-option phone">
                            <i class="fas fa-phone-alt"></i>
                            <span>Llamada Directa</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Columna derecha - Preguntas y respuestas -->
            <div class="faq-questions">
                <!-- Grupo 1: Tiempos de Respuesta -->
                <div class="faq-group active" data-category="response">
                    <h3 class="group-title">
                        <i class="fas fa-clock"></i>
                        <span>Tiempos de Respuesta</span>
                    </h3>
                    
                    <div class="faq-items">
                        <!-- Pregunta 1 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿En cuánto tiempo responden los correos?</h4>
                                    <p>Respuesta vía email</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Nuestros tiempos de respuesta por email son:</p>
                                <ul>
                                    <li><strong>Consultas generales:</strong> 24 horas hábiles</li>
                                    <li><strong>Reservas y pagos:</strong> 12 horas hábiles</li>
                                    <li><strong>Clientes con reserva confirmada:</strong> 6 horas hábiles</li>
                                    <li><strong>Fines de semana:</strong> Respuesta el siguiente día hábil</li>
                                </ul>
                                <p><em>Horario hábil: Lunes a Viernes 9:00 AM - 6:00 PM (GMT-5)</em></p>
                            </div>
                        </div>
                        
                        <!-- Pregunta 2 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Responden WhatsApp los fines de semana?</h4>
                                    <p>Disponibilidad en WhatsApp</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Sí, tenemos cobertura limitada los fines de semana:</p>
                                <ul>
                                    <li><strong>Sábados:</strong> 9:00 AM - 2:00 PM</li>
                                    <li><strong>Domingos:</strong> Solo emergencias de clientes en tour</li>
                                    <li><strong>Festivos:</strong> Horario reducido 10:00 AM - 1:00 PM</li>
                                </ul>
                                <p>Para consultas no urgentes de fin de semana, recomendamos email para respuesta garantizada el lunes.</p>
                            </div>
                        </div>
                        
                        <!-- Pregunta 3 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Puedo agendar una llamada?</h4>
                                    <p>Llamadas programadas</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>¡Absolutamente! Ofrecemos llamadas programadas para:</p>
                                <ul>
                                    <li><strong>Consultas detalladas:</strong> 30 minutos personalizados</li>
                                    <li><strong>Planning de viaje:</strong> Asesoría completa de itinerario</li>
                                    <li><strong>Grupos y familias:</strong> Reuniones virtuales</li>
                                </ul>
                                <p>Para agendar:</p>
                                <ol>
                                    <li>Envía un email a <strong>asesor@aventuratravel.com</strong></li>
                                    <li>Indica 3 horarios de preferencia (GMT-5)</li>
                                    <li>Especifica el tema a tratar</li>
                                    <li>Recibirás confirmación en 24 horas</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Grupo 2: Emergencias -->
                <div class="faq-group" data-category="emergency">
                    <h3 class="group-title">
                        <i class="fas fa-exclamation-circle"></i>
                        <span>Emergencias 24/7</span>
                    </h3>
                    
                    <div class="faq-items">
                        <!-- Pregunta 4 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Qué hago si tengo una emergencia durante mi tour?</h4>
                                    <p>Protocolo de emergencia</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>En caso de emergencia durante tu tour:</p>
                                <div class="emergency-steps">
                                    <div class="step">
                                        <span class="step-number">1</span>
                                        <div class="step-content">
                                            <h5>Contacta a tu guía inmediatamente</h5>
                                            <p>Todos nuestros guías tienen entrenamiento en primeros auxilios y protocolos de emergencia.</p>
                                        </div>
                                    </div>
                                    <div class="step">
                                        <span class="step-number">2</span>
                                        <div class="step-content">
                                            <h5>Llama al número de emergencia 24/7</h5>
                                            <p><strong>+51 987 654 321</strong> - Este número está activo siempre</p>
                                        </div>
                                    </div>
                                    <div class="step">
                                        <span class="step-number">3</span>
                                        <div class="step-content">
                                            <h5>Si es médico, contacta tu seguro</h5>
                                            <p>Ten a mano la póliza de tu seguro de viaje. Te asistiremos en la coordinación.</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="emergency-note">
                                    <i class="fas fa-shield-alt"></i>
                                    <strong>Importante:</strong> Todos los clientes reciben una tarjeta de emergencia al inicio del tour con contactos locales y protocolos específicos.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Pregunta 5 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Tienen contacto local en cada destino?</h4>
                                    <p>Red de soporte en destino</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Sí, contamos con red de contactos locales en todos nuestros destinos:</p>
                                <div class="destination-contacts">
                                    <div class="destination">
                                        <h5><i class="fas fa-map-pin"></i> Cusco y Machu Picchu</h5>
                                        <p><strong>Contacto:</strong> María Torres<br>
                                        <strong>Teléfono:</strong> +51 984 123 456<br>
                                        <strong>Disponibilidad:</strong> 24/7 durante tu tour</p>
                                    </div>
                                    <div class="destination">
                                        <h5><i class="fas fa-map-pin"></i> Lima</h5>
                                        <p><strong>Contacto:</strong> Carlos Rodríguez<br>
                                        <strong>Teléfono:</strong> +51 991 234 567<br>
                                        <strong>Oficina:</strong> Miraflores, Av. Larco 123</p>
                                    </div>
                                    <div class="destination">
                                        <h5><i class="fas fa-map-pin"></i> Amazonía (Iquitos)</h5>
                                        <p><strong>Contacto:</strong> Juan Silva<br>
                                        <strong>Teléfono:</strong> +51 965 345 678<br>
                                        <strong>Especialidad:</strong> Logística y evacuación</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Grupo 3: Oficinas -->
                <div class="faq-group" data-category="agency">
                    <h3 class="group-title">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Oficinas y Presencial</span>
                    </h3>
                    
                    <div class="faq-items">
                        <!-- Pregunta 6 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Dónde están ubicadas sus oficinas?</h4>
                                    <p>Ubicaciones físicas</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Contamos con oficinas en tres ciudades principales:</p>
                                <div class="office-locations">
                                    <div class="office">
                                        <h5><i class="fas fa-city"></i> Lima - Oficina Central</h5>
                                        <p><strong>Dirección:</strong> Av. Larco 123, Miraflores<br>
                                        <strong>Referencia:</strong> A media cuadra del Parque Kennedy<br>
                                        <strong>Teléfono:</strong> +51 1 234 5678</p>
                                        <a href="https://goo.gl/maps/ejemplo" class="map-link" target="_blank">
                                            <i class="fas fa-map-marked-alt"></i> Ver en Google Maps
                                        </a>
                                    </div>
                                    <div class="office">
                                        <h5><i class="fas fa-mountain"></i> Cusco - Oficina Operaciones</h5>
                                        <p><strong>Dirección:</strong> Calle Plateros 312, Centro Histórico<br>
                                        <strong>Referencia:</strong> Frente a la Plaza de Armas<br>
                                        <strong>Teléfono:</strong> +51 84 123 456</p>
                                        <a href="https://goo.gl/maps/ejemplo" class="map-link" target="_blank">
                                            <i class="fas fa-map-marked-alt"></i> Ver en Google Maps
                                        </a>
                                    </div>
                                    <div class="office">
                                        <h5><i class="fas fa-leaf"></i> Iquitos - Oficina Amazonía</h5>
                                        <p><strong>Dirección:</strong> Malecón Tarapacá 456<br>
                                        <strong>Referencia:</strong> Frente al río Amazonas<br>
                                        <strong>Teléfono:</strong> +51 65 234 567</p>
                                        <a href="https://goo.gl/maps/ejemplo" class="map-link" target="_blank">
                                            <i class="fas fa-map-marked-alt"></i> Ver en Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Pregunta 7 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Puedo visitar sin cita previa?</h4>
                                    <p>Atención walk-in</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Sí, pero con algunas consideraciones:</p>
                                <div class="walkin-info">
                                    <div class="recommendation">
                                        <h5><i class="fas fa-check-circle"></i> Recomendado sin cita:</h5>
                                        <ul>
                                            <li>Recoger documentación de viaje</li>
                                            <li>Pagos en efectivo</li>
                                            <li>Consultas simples (menos de 10 minutos)</li>
                                            <li>Entrega de equipos (tiendas, bastones)</li>
                                        </ul>
                                    </div>
                                    <div class="appointment-needed">
                                        <h5><i class="fas fa-calendar-check"></i> Requiere cita previa:</h5>
                                        <ul>
                                            <li>Planning de itinerario personalizado</li>
                                            <li>Reuniones con más de 2 personas</li>
                                            <li>Consultas técnicas (escalada, trekking difícil)</li>
                                            <li>Reclamos o situaciones especiales</li>
                                        </ul>
                                    </div>
                                </div>
                                <p><em>Nota: En temporada alta (Junio-Agosto) recomendamos siempre agendar cita.</em></p>
                            </div>
                        </div>
                        
                        <!-- Pregunta 8 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Ofrecen servicio de recojo en aeropuerto para reuniones?</h4>
                                    <p>Servicio de transfer para clientes</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Sí, ofrecemos este servicio en ciertas condiciones:</p>
                                <table class="service-table">
                                    <thead>
                                        <tr>
                                            <th>Ciudad</th>
                                            <th>Servicio Disponible</th>
                                            <th>Costo</th>
                                            <th>Reserva Requerida</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Lima</td>
                                            <td>Aeropuerto → Oficina Miraflores</td>
                                            <td>Gratis*</td>
                                            <td>48 horas antes</td>
                                        </tr>
                                        <tr>
                                            <td>Cusco</td>
                                            <td>Aeropuerto → Hotel/Centro</td>
                                            <td>Gratis*</td>
                                            <td>24 horas antes</td>
                                        </tr>
                                        <tr>
                                            <td>Iquitos</td>
                                            <td>Aeropuerto → Oficina</td>
                                            <td>Gratis*</td>
                                            <td>24 horas antes</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="disclaimer">* Gratis para clientes con reserva confirmada. Para prospectos, consultar tarifa.</p>
                                <p>Para solicitar este servicio, envía los detalles de tu vuelo a <strong>logistica@aventuratravel.com</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Grupo 4: Horarios -->
                <div class="faq-group" data-category="hours">
                    <h3 class="group-title">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Horarios de Atención</span>
                    </h3>
                    
                    <div class="faq-items">
                        <!-- Pregunta 9 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Cuáles son sus horarios de atención?</h4>
                                    <p>Horarios por canal</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Nuestros horarios varían según el canal de comunicación:</p>
                                <div class="schedule-grid">
                                    <div class="schedule-item">
                                        <div class="schedule-icon">
                                            <i class="fas fa-building"></i>
                                        </div>
                                        <div class="schedule-content">
                                            <h5>Oficinas Presenciales</h5>
                                            <p><strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM<br>
                                            <strong>Sábados:</strong> 9:00 AM - 1:00 PM<br>
                                            <strong>Domingos:</strong> Cerrado</p>
                                        </div>
                                    </div>
                                    <div class="schedule-item">
                                        <div class="schedule-icon">
                                            <i class="fas fa-phone-alt"></i>
                                        </div>
                                        <div class="schedule-content">
                                            <h5>Líneas Telefónicas</h5>
                                            <p><strong>Lunes a Viernes:</strong> 8:00 AM - 7:00 PM<br>
                                            <strong>Sábados:</strong> 9:00 AM - 2:00 PM<br>
                                            <strong>Emergencias:</strong> 24/7*</p>
                                        </div>
                                    </div>
                                    <div class="schedule-item">
                                        <div class="schedule-icon">
                                            <i class="fab fa-whatsapp"></i>
                                        </div>
                                        <div class="schedule-content">
                                            <h5>WhatsApp</h5>
                                            <p><strong>Lunes a Viernes:</strong> 7:00 AM - 9:00 PM<br>
                                            <strong>Sábados:</strong> 9:00 AM - 2:00 PM<br>
                                            <strong>Respuesta automática:</strong> Siempre activa</p>
                                        </div>
                                    </div>
                                    <div class="schedule-item">
                                        <div class="schedule-icon">
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                        <div class="schedule-content">
                                            <h5>Email</h5>
                                            <p><strong>Envío:</strong> 24/7<br>
                                            <strong>Respuesta:</strong> En horario hábil<br>
                                            <strong>Prioridad:</strong> Clientes en tour → 24/7</p>
                                        </div>
                                    </div>
                                </div>
                                <p><em>* Número de emergencia: +51 987 654 321 - Solo para clientes en tour activo.</em></p>
                            </div>
                        </div>
                        
                        <!-- Pregunta 10 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <div class="question-content">
                                    <h4>¿Atienden en feriados y festivos?</h4>
                                    <p>Atención en días especiales</p>
                                </div>
                                <span class="faq-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <p>Nuestra atención en festivos es limitada:</p>
                                <div class="holiday-schedule">
                                    <div class="holiday-type">
                                        <h5><i class="fas fa-star"></i> Festivos Nacionales (Perú)</h5>
                                        <ul>
                                            <li><strong>1 Enero (Año Nuevo):</strong> Cerrado</li>
                                            <li><strong>Semana Santa (Jueves-Viernes):</strong> Solo emergencias</li>
                                            <li><strong>1 Mayo (Día del Trabajo):</strong> Cerrado</li>
                                            <li><strong>28-29 Julio (Fiestas Patrias):</strong> Solo WhatsApp</li>
                                            <li><strong>25 Diciembre (Navidad):</strong> Cerrado</li>
                                        </ul>
                                    </div>
                                    <div class="holiday-type">
                                        <h5><i class="fas fa-globe-americas"></i> Festivos Internacionales</h5>
                                        <ul>
                                            <li><strong>31 Diciembre (Nochevieja):</strong> Solo emergencias</li>
                                            <li><strong>Acción de Gracias (USA):</strong> Horario normal</li>
                                            <li><strong>Festivos locales (Cusco, etc.):</strong> Aviso previo</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="holiday-note">
                                    <p><i class="fas fa-info-circle"></i> <strong>Importante:</strong> Publicamos calendario de festivos con anticipación en nuestras redes sociales y newsletter. Suscríbete para estar informado.</p>
                                    <a href="#" class="newsletter-link">
                                        <i class="fas fa-newspaper"></i> Suscribirme al newsletter
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- CTA adicional -->
        <div class="faq-cta">
            <div class="cta-content">
                <h3><i class="fas fa-paper-plane"></i> ¿Listo para contactarnos?</h3>
                <p>Elije el método que más te convenga. Estamos aquí para hacer tu aventura inolvidable.</p>
                <div class="cta-actions">
                    <a href="https://wa.me/51987654321" class="cta-btn primary" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                        <span>Chat en WhatsApp</span>
                    </a>
                    <a href="tel:+51987654321" class="cta-btn secondary">
                        <i class="fas fa-phone-alt"></i>
                        <span>Llamar Ahora</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

           <!-- Footer Elegante Minimalista -->
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
                            <li><a href="../index.html#faq">FAQ</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Reservas</a></li>
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

    <!-- Botón de WhatsApp Flotante -->
    <a href="https://wa.me/51987654321" class="whatsapp-float" target="_blank">
        <i class="fab fa-whatsapp"></i>
        <span class="whatsapp-text">¿Necesitas ayuda?</span>
    </a>

    <!-- Botón Volver Arriba -->
    <button class="back-to-top" id="backToTop">
        <i class="fas fa-chevron-up"></i>
    </button>

    <!-- Scripts -->
    <script src="../assets/js/contacto/contacto.js"></script>
    <script src="../assets/js/contacto/faq-contact.js"></script>
    <script src="../assets/js/navbar.js"></script>
    <script src="../assets/js/footer.js"></script>
</body>
</html>