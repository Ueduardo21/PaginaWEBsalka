/**
 * LOADER SIMPLE: Logo aparece como polvo/arena
 * NO INTERFIERE CON EL CONTENIDO PRINCIPAL
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌀 Iniciando loader efecto polvo...');
    
    // Elementos
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('mainContent');
    const logo = document.getElementById('realLogo');
    
    // Verificar elementos
    if (!loader || !logo) {
        console.error('❌ Elementos del loader no encontrados');
        // Mostrar contenido principal de inmediato
        if (mainContent) {
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '1';
            document.body.classList.remove('loader-active');
        }
        return;
    }
    
    console.log('✅ Loader encontrado, iniciando animación...');
    
    // Configuración de tiempos
    const APPEAR_TIME = 2500;  // 2.5 segundos para aparecer
    const DISPLAY_TIME = 1500; // 1.5 segundos visible
    const DISAPPEAR_TIME = 2000; // 2 segundos para desaparecer
    
    // Asegurar que el logo esté cargado antes de animar
    if (logo.complete && logo.naturalWidth > 0) {
        startAnimation();
    } else {
        logo.addEventListener('load', startAnimation);
        logo.addEventListener('error', function() {
            console.warn('⚠️ Logo no se pudo cargar, mostrando contenido...');
            showMainContent();
        });
        
        // Timeout de seguridad
        setTimeout(function() {
            if (document.body.classList.contains('loader-active')) {
                console.warn('⚠️ Timeout del loader, mostrando contenido...');
                showMainContent();
            }
        }, 8000); // 8 segundos máximo
    }
    
    function startAnimation() {
        console.log('🎬 Iniciando animación del logo...');
        
        // Paso 1: Logo aparece como polvo que se junta
        console.log('🌫️ Logo apareciendo como polvo...');
        logo.classList.add('logo-appearing');
        logo.classList.add('logo-dust-effect');
        
        // Paso 2: Esperar a que termine de aparecer y mostrar un momento
        setTimeout(() => {
            console.log('✨ Logo completamente visible');
            
            // Paso 3: Logo desaparece como polvo que se va
            setTimeout(() => {
                console.log('💨 Logo desapareciendo como polvo...');
                logo.classList.remove('logo-appearing');
                logo.classList.add('logo-disappearing');
                
                // Paso 4: Mostrar contenido principal
                setTimeout(() => {
                    showMainContent();
                }, DISAPPEAR_TIME);
                
            }, DISPLAY_TIME);
            
        }, APPEAR_TIME);
    }
    
    function showMainContent() {
        console.log('🏠 Mostrando contenido principal...');
        
        // 1. Ocultar loader (solo visualmente, sigue en el DOM)
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        
        // 2. Mostrar contenido principal
        if (mainContent) {
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transition = 'opacity 0.5s ease';
            }, 100);
        }
        
        // 3. Permitir scroll y quitar clase de loader
        document.body.classList.remove('loader-active');
        document.body.classList.add('loader-complete');
        
        // 4. Forzar redibujado para asegurar que no haya fondo azul
        setTimeout(() => {
            document.body.style.backgroundColor = '';
            if (mainContent) {
                mainContent.style.backgroundColor = '';
            }
        }, 100);
        
        console.log('✅ Loader completado, página lista');
    }
    
    // Función para reiniciar el loader
    window.restartLoader = function() {
        console.log('🔄 Reiniciando loader...');
        
        // 1. Ocultar contenido principal
        if (mainContent) {
            mainContent.style.opacity = '0';
            setTimeout(() => {
                mainContent.classList.add('hidden');
            }, 300);
        }
        
        // 2. Resetear loader
        loader.style.opacity = '1';
        loader.style.visibility = 'visible';
        logo.classList.remove('logo-appearing', 'logo-disappearing', 'logo-dust-effect');
        
        // 3. Resetear clases del body
        document.body.classList.add('loader-active');
        document.body.classList.remove('loader-complete');
        
        // 4. Resetear estilos del logo
        logo.style.animation = 'none';
        
        // 5. Reiniciar después de un breve momento
        setTimeout(() => {
            logo.style.animation = '';
            startAnimation();
        }, 400);
    };
    
    // Atajo ESC para saltar
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.classList.contains('loader-active')) {
            console.log('⏭️ Saltando animación');
            showMainContent();
        }
    });
});