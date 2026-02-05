<?php
// Al inicio del index.php
require_once 'config.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aventura Travel - Agencia de Turismo en Perú</title>
    
    <!-- Meta SEO -->
    <meta name="description" content="Tours a Machu Picchu, Lago Titicaca, Líneas de Nazca y más destinos en Perú. Agencia especializada en turismo de aventura y cultural">
    <meta name="keywords" content="Perú, turismo, Machu Picchu, tours, viajes, aventura, Cusco, Nazca, Titicaca">
    <meta name="author" content="Aventura Travel">
    
    <!-- Fuentes PRIMERO -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700;800&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- CSS con rutas CORRECTAS -->
    <!-- NOTA: Ahora usamos <?php echo CSS_URL; ?> para todas las rutas -->
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>style.css">
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>index/loader.css">
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>navbar.css">
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>footer.css">
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>floating-buttons.css">
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>index/hero.css">
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>index/hero-video.css">
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>index/about.css">
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>index/destinations.css">
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>index/faq.css">
    
    <!-- Verificar si existe contact-cta.css -->
    <?php 
    $contact_cta_css = 'assets/css/index/contact-cta.css';
    if(file_exists($contact_cta_css)): 
    ?>
    <link rel="stylesheet" href="<?php echo CSS_URL; ?>index/contact-cta.css">
    <?php else: ?>
    <!-- contact-cta.css no encontrado -->
    <?php endif; ?>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="<?php echo ASSETS_URL; ?>favicon.ico">
    <link rel="apple-touch-icon" href="<?php echo ASSETS_URL; ?>favicon.ico">

    <style>
        /* Loader crítico - inline para evitar FOUC */
        #globalLoader {
            position: fixed;
            top: 0; 
            left: 0;
            width: 100%; 
            height: 100%;
            background: linear-gradient(135deg, #0a192f 0%, #1a365d 100%);
            z-index: 999999; /* CORREGIDO: Aumentado a 999999 */
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
            opacity: 1;
            visibility: visible;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        /* Loader oculto - CORREGIDO */
        #globalLoader.hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none; /* IMPORTANTE: Evitar interacciones */
        }
        
        /* Contenido oculto al inicio */
        #mainContent {
            opacity: 0;
            transition: opacity 0.5s ease 0.3s;
            pointer-events: none; /* IMPORTANTE: Evitar clics durante carga */
        }
        
        #mainContent.visible {
            opacity: 1;
            pointer-events: auto; /* IMPORTANTE: Habilitar interacciones */
        }
        
        /* Prevenir scroll durante carga - CORREGIDO */
        body.loading {
            overflow: hidden !important;
            height: 100vh !important;
            position: relative !important;
        }
        
        body.loaded {
            overflow: auto !important;
            height: auto !important;
            position: static !important;
        }
        
        /* Logo del loader - ESTILOS TEMPORALES PARA VERIFICAR */
        #globalLoader .logo-real {
            width: 300px;
            height: auto;
            max-width: 80%;
            animation: logoAppear 1.5s ease-out forwards;
            filter: drop-shadow(0 0 20px rgba(78, 205, 196, 0.5));
        }
        
        @keyframes logoAppear {
            0% {
                opacity: 0;
                transform: scale(0.8);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        @keyframes logoPulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
        
        #globalLoader .logo-real.pulse {
            animation: logoPulse 2s ease-in-out infinite;
        }
        
        /* Debug temporal - solo desarrollo */
        .loader-debug {
            position: fixed;
            bottom: 10px;
            left: 10px;
            background: rgba(0,0,0,0.8);
            color: #4ecdc4;
            padding: 8px 12px;
            border-radius: 5px;
            font-size: 11px;
            font-family: monospace;
            z-index: 1000000;
            border-left: 3px solid #4ecdc4;
            display: none; /* Cambiar a 'block' para debug */
        }
    </style>
</head>

<body class="loading">
    <!-- Debug temporal -->
    <div class="loader-debug" id="loaderDebug">Loader Debug</div>
    
    <!-- components/loader.php -->
    <?php include 'components/index/loader.php'; ?>

    <!-- Contenido Principal -->
    <div id="mainContent">
        <!-- Componentes en orden -->
        <?php include 'components/header.php'; ?>
        <?php include 'components/index/hero.php'; ?>
        <?php include 'components/index/about.php'; ?>
        <?php include 'components/index/destinations.php'; ?>
        <?php include 'components/index/faq.php'; ?>
        <?php include 'components/contact-cta.php'; ?>
        <?php include 'components/floating-button.php'; ?>
        <?php include 'components/footer.php'; ?>
    </div>

    <!-- Scripts con rutas CORRECTAS - CORREGIDO ORDEN -->
    <?php 
    // Loader debe ir PRIMERO
    $loader_js = 'assets/js/index/loader.js';
    if (file_exists($loader_js)):
    ?>
        <script src="<?php echo JS_URL; ?>index/loader.js"></script>
    <?php 
    else:
        echo "<!-- ⚠️ Script no encontrado: $loader_js -->\n";
    endif;
    
    // Otros scripts
    $scripts = [
        'navbar.js',
        'index/hero.js',
        'index/hero-video.js',
        'index/about.js',
        'index/destinations.js',
        'index/faq.js',
        'footer.js',
        'floating-buttons.js'
    ];
    
    foreach ($scripts as $script):
        $scriptPath = 'assets/js/' . $script;
        if (file_exists($scriptPath)):
    ?>
        <script src="<?php echo JS_URL . $script; ?>"></script>
    <?php 
        else:
            echo "<!-- Script no encontrado: $scriptPath -->\n";
        endif;
    endforeach; 
    ?>
    
    <!-- Script de inicialización SIMPLIFICADO -->
    <script>
        console.log('🌐 Página iniciando desde: <?php echo BASE_URL; ?>');
        console.log('🔄 Loader configurado en loader.js');
        
        // Solo timeout de seguridad extremo
        const extremeSafetyTimeout = setTimeout(() => {
            console.error('🚨 TIMEOUT EXTREMO: Loader no completado en 8 segundos');
            
            const loader = document.getElementById('globalLoader');
            const main = document.getElementById('mainContent');
            const body = document.body;
            
            // Forzar mostrar todo
            if (loader) {
                loader.classList.add('hidden');
                loader.style.display = 'none';
            }
            if (main) {
                main.classList.add('visible');
                main.style.opacity = '1';
            }
            if (body) {
                body.classList.remove('loading');
                body.classList.add('loaded');
                body.style.overflow = 'auto';
            }
            
            // Ocultar debug
            const debug = document.getElementById('loaderDebug');
            if (debug) debug.style.display = 'none';
            
        }, 4000); // 4 segundos máximo
        
        // Quitar timeout cuando loader se complete
        document.addEventListener('loaderComplete', function() {
            clearTimeout(extremeSafetyTimeout);
            console.log('✅ Timeout de seguridad cancelado');
        });
        
        // Debug: Mostrar estado cada segundo
        setInterval(function() {
            const debug = document.getElementById('loaderDebug');
            const loader = document.getElementById('globalLoader');
            const logo = document.querySelector('#globalLoader .logo-real');
            const main = document.getElementById('mainContent');
            
            if (debug && loader) {
                debug.innerHTML = `
                    Loader: ${loader ? '✅' : '❌'}<br>
                    Visible: ${loader.classList.contains('hidden') ? '❌' : '✅'}<br>
                    Logo: ${logo ? '✅' : '❌'}<br>
                    Main: ${main ? '✅' : '❌'}<br>
                    Time: ${new Date().toLocaleTimeString()}
                `;
            }
        }, 1000);
    </script>
</body>
</html>