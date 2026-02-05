/**
 * LOADER ARENA SIMPLE
 * Logo se construye con arena desde la derecha y luego desaparece
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🏜️ Iniciando Loader Arena Simple...');
    
    // Elementos
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('mainContent');
    const logoImg = document.getElementById('logoImg');
    const arenaBuilder = document.getElementById('arenaBuilder');
    const sandParticles = document.getElementById('sandParticles');
    
    // Verificar elementos esenciales
    if (!loader || !logoImg) {
        console.error('❌ Elementos esenciales no encontrados');
        if (mainContent) {
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible');
        }
        return;
    }
    
    // Configuración
    const CONFIG = {
        TOTAL_TIME: 4000, // 4 segundos total
        BUILD_TIME: 2000, // 2 segundos para construir
        SHOW_TIME: 1000,  // 1 segundo para mostrar
        FADE_TIME: 1000,  // 1 segundo para desaparecer
        
        // Cantidad de elementos
        SAND_GRAINS: 80,
        FLOATING_PARTICLES: 20
    };
    
    // Ajustar para móviles
    if (window.innerWidth <= 768) {
        CONFIG.SAND_GRAINS = 50;
        CONFIG.FLOATING_PARTICLES = 15;
    }
    
    // Iniciar la animación
    startAnimation();
    
    function startAnimation() {
        console.log('🚀 Iniciando animación...');
        
        // 1. Crear granos de arena
        createSandGrains();
        
        // 2. Crear partículas flotantes
        createFloatingParticles();
        
        // 3. Mostrar el logo después del tiempo de construcción
        setTimeout(() => {
            showLogo();
        }, CONFIG.BUILD_TIME);
        
        // 4. Empezar a desaparecer
        setTimeout(() => {
            startFadeOut();
        }, CONFIG.BUILD_TIME + CONFIG.SHOW_TIME);
        
        // 5. Mostrar contenido principal
        setTimeout(() => {
            showMainContent();
        }, CONFIG.TOTAL_TIME);
    }
    
    function createSandGrains() {
        console.log(`🌀 Creando ${CONFIG.SAND_GRAINS} granos de arena...`);
        
        for (let i = 0; i < CONFIG.SAND_GRAINS; i++) {
            const grain = document.createElement('div');
            grain.className = 'sand-grain';
            
            // Posición aleatoria dentro del logo
            const x = Math.random() * 100; // 0% a 100%
            const y = Math.random() * 100; // 0% a 100%
            
            // Variables de animación
            const startY = (Math.random() - 0.5) * 50; // -25px a 25px
            const drift = (Math.random() - 0.5) * 30; // -15px a 15px
            const size = 3 + Math.random() * 7; // 3px a 10px
            const delay = Math.random() * 1.5; // 0s a 1.5s
            
            // Colores de arena
            const sandColors = [
                'rgba(245, 222, 179, 0.9)',
                'rgba(210, 180, 140, 0.85)',
                'rgba(255, 228, 181, 0.9)',
                'rgba(238, 232, 170, 0.85)'
            ];
            const color = sandColors[Math.floor(Math.random() * sandColors.length)];
            
            // Aplicar estilos
            grain.style.cssText = `
                --start-y: ${startY}px;
                --drift: ${drift}px;
                left: ${x}%;
                top: ${y}%;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                animation-delay: ${delay}s;
                animation-duration: 1s;
            `;
            
            arenaBuilder.appendChild(grain);
        }
    }
    
    function createFloatingParticles() {
        for (let i = 0; i < CONFIG.FLOATING_PARTICLES; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            
            // Variables aleatorias
            const startY = (Math.random() - 0.5) * 80;
            const drift = (Math.random() - 0.5) * 40;
            const size = 1 + Math.random() * 4;
            const opacity = 0.3 + Math.random() * 0.5;
            const delay = Math.random() * 1;
            const duration = 1.5 + Math.random() * 1;
            
            particle.style.cssText = `
                --start-y: ${startY}px;
                --drift: ${drift}px;
                --opacity: ${opacity};
                left: ${100 + Math.random() * 50}%;
                top: ${Math.random() * 100}%;
                width: ${size}px;
                height: ${size}px;
                animation-delay: ${delay}s;
                animation-duration: ${duration}s;
            `;
            
            sandParticles.appendChild(particle);
        }
    }
    
    function showLogo() {
        console.log('✨ Mostrando logo completo');
        logoImg.classList.add('visible');
    }
    
    function startFadeOut() {
        console.log('🌫️ Comenzando desvanecimiento...');
        
        // Añadir animación de desaparición a los granos
        const grains = arenaBuilder.querySelectorAll('.sand-grain');
        grains.forEach(grain => {
            grain.style.animation = 'fadeOutToLeft 1s ease-out forwards';
            
            // Añadir retardo aleatorio para efecto más natural
            const delay = Math.random() * 0.5;
            grain.style.animationDelay = `${delay}s`;
        });
        
        // Desvanecer el logo
        logoImg.style.opacity = '0';
        logoImg.style.transition = 'opacity 0.8s ease';
    }
    
    function showMainContent() {
        console.log('🏠 Mostrando contenido principal');
        
        // Ocultar loader
        loader.classList.add('hidden');
        
        // Mostrar contenido principal
        if (mainContent) {
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 100);
        }
        
        // Quitar clase de loader del body
        document.body.classList.remove('loader-active');
        document.body.classList.add('loader-complete');
        
        // Limpiar elementos de arena
        setTimeout(() => {
            arenaBuilder.innerHTML = '';
            sandParticles.innerHTML = '';
        }, 1000);
    }
    
    // Función para reiniciar (opcional)
    window.restartLoader = function() {
        console.log('🔄 Reiniciando loader...');
        
        // Resetear estado
        loader.classList.remove('hidden');
        if (mainContent) {
            mainContent.classList.remove('visible');
            mainContent.classList.add('hidden');
        }
        document.body.classList.add('loader-active');
        document.body.classList.remove('loader-complete');
        
        // Resetear logo
        logoImg.classList.remove('visible');
        logoImg.style.opacity = '';
        logoImg.style.transition = '';
        
        // Limpiar arena anterior
        arenaBuilder.innerHTML = '';
        sandParticles.innerHTML = '';
        
        // Reiniciar animación
        setTimeout(startAnimation, 300);
    };
    
    // Atajo ESC para saltar
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.classList.contains('loader-active')) {
            console.log('⏭️ Saltando animación con ESC');
            showMainContent();
        }
    });
});