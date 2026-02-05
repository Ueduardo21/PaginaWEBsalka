// ===== VIDEO CONTROLS - HERO SECTION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎥 Inicializando controles de video...');
    
    // Elementos del video
    const videoPlayer = document.getElementById('videoPlayer');
    const heroVideo = document.getElementById('heroVideo');
    const videoThumbnail = document.getElementById('videoThumbnail');
    const playButton = videoThumbnail ? videoThumbnail.querySelector('.play-button') : null;
    const videoLoading = document.querySelector('.video-loading');
    
    // Verificar elementos
    if (!heroVideo || !videoThumbnail) {
        console.error('❌ Elementos de video no encontrados');
        return;
    }
    
    console.log('✅ Elementos de video encontrados:', {
        video: heroVideo,
        thumbnail: videoThumbnail,
        playButton: playButton
    });
    
    // Configuración del video
    const CONFIG = {
        AUTO_PLAY: false,
        SHOW_CONTROLS: true,
        LOOP: false,
        MUTED: false,
        PRELOAD: 'auto'
    };
    
    // Configurar atributos del video
    heroVideo.controls = CONFIG.SHOW_CONTROLS;
    heroVideo.loop = CONFIG.LOOP;
    heroVideo.muted = CONFIG.MUTED;
    heroVideo.preload = CONFIG.PRELOAD;
    
    // Evento cuando el thumbnail es clickeado
    videoThumbnail.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('▶️ Thumbnail clickeado - Iniciando video');
        playVideo();
    });
    
    // Evento cuando el botón de play es clickeado
    if (playButton) {
        playButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('▶️ Botón play clickeado - Iniciando video');
            playVideo();
        });
    }
    
    // Función para reproducir el video
    function playVideo() {
        console.log('🚀 Ejecutando playVideo()...');
        
        // Mostrar indicador de carga
        if (videoLoading) {
            videoLoading.style.display = 'block';
        }
        
        // Añadir clase activa al contenedor del video
        videoPlayer.classList.add('video-active');
        
        // Mostrar el elemento de video
        heroVideo.style.display = 'block';
        
        // Intentar reproducir
        const playPromise = heroVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('✅ Video reproducido exitosamente');
                // Ocultar indicador de carga
                if (videoLoading) {
                    videoLoading.style.display = 'none';
                }
                // Ocultar thumbnail después de que el video comience
                setTimeout(() => {
                    videoThumbnail.style.opacity = '0';
                    videoThumbnail.style.pointerEvents = 'none';
                }, 300);
            }).catch(error => {
                console.error('❌ Error al reproducir el video:', error);
                // Manejar error - mostrar mensaje al usuario
                showVideoError();
            });
        }
    }
    
    // Función para mostrar error
    function showVideoError() {
        const errorMsg = document.createElement('div');
        errorMsg.className = 'video-error';
        errorMsg.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <p>No se pudo cargar el video</p>
            <button class="retry-btn">Reintentar</button>
        `;
        errorMsg.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            z-index: 10;
            border: 2px solid rgba(212, 175, 55, 0.5);
            backdrop-filter: blur(10px);
        `;
        
        const retryBtn = errorMsg.querySelector('.retry-btn');
        retryBtn.onclick = function() {
            errorMsg.remove();
            heroVideo.load();
            playVideo();
        };
        
        videoPlayer.appendChild(errorMsg);
        
        // Ocultar indicador de carga
        if (videoLoading) {
            videoLoading.style.display = 'none';
        }
    }
    
    // Evento cuando el video termina
    heroVideo.addEventListener('ended', function() {
        console.log('⏹️ Video terminado');
        // Mostrar thumbnail nuevamente
        videoThumbnail.style.opacity = '1';
        videoThumbnail.style.pointerEvents = 'auto';
        videoPlayer.classList.remove('video-active');
    });
    
    // Evento cuando el video está listo para reproducir
    heroVideo.addEventListener('canplaythrough', function() {
        console.log('✅ Video listo para reproducir');
        if (videoLoading) {
            videoLoading.style.display = 'none';
        }
    });
    
    // Evento de error en el video
    heroVideo.addEventListener('error', function(e) {
        console.error('❌ Error en el video:', e);
        showVideoError();
    });
    
    // Evento para pausar/reanudar con tecla espacio
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' && videoPlayer.classList.contains('video-active')) {
            e.preventDefault();
            if (heroVideo.paused) {
                heroVideo.play();
            } else {
                heroVideo.pause();
            }
        }
    });
    
    // También permitir play/pause haciendo click en el video
    heroVideo.addEventListener('click', function(e) {
        e.stopPropagation();
        if (heroVideo.paused) {
            heroVideo.play();
        } else {
            heroVideo.pause();
        }
    });
    
    // Pre-cargar el video cuando la página esté lista
    window.addEventListener('load', function() {
        console.log('📦 Pre-cargando video...');
        heroVideo.load();
    });
    
    // Lazy load para el video
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('👁️ Video en vista - cargando...');
                    heroVideo.load();
                    videoObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        videoObserver.observe(videoPlayer);
    }
    
    // Atajo: ESC para salir del video
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoPlayer.classList.contains('video-active')) {
            heroVideo.pause();
            videoPlayer.classList.remove('video-active');
            videoThumbnail.style.opacity = '1';
            videoThumbnail.style.pointerEvents = 'auto';
        }
    });
});