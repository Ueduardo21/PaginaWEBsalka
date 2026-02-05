<?php
// config.php CORREGIDO
session_start();

// Detectar si estamos en localhost o producción
$is_localhost = ($_SERVER['SERVER_NAME'] === 'localhost' || $_SERVER['SERVER_NAME'] === '127.0.0.1');

if ($is_localhost) {
    // Para localhost: http://localhost/paginasalka/
    $base_url = '/paginasalka/';
} else {
    // Para producción: dominio.com/
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
    $base_url = $protocol . '://' . $_SERVER['HTTP_HOST'] . '/';
    
    // Si está en subdirectorio, agregarlo
    $script_dir = dirname($_SERVER['SCRIPT_NAME']);
    if ($script_dir !== '/') {
        $base_url .= trim($script_dir, '/') . '/';
    }
}

// Definir constantes de URL
define('BASE_URL', $base_url);
define('ASSETS_URL', BASE_URL . 'assets/');
define('IMAGES_URL', ASSETS_URL . 'imagenes/');
define('CSS_URL', ASSETS_URL . 'css/');
define('JS_URL', ASSETS_URL . 'js/');

// Para debug
define('DEBUG', true);
if (DEBUG) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    // Debug info en comentarios HTML
    echo "<!-- DEBUG: BASE_URL = " . BASE_URL . " -->\n";
    echo "<!-- DEBUG: CSS_URL = " . CSS_URL . " -->\n";
    echo "<!-- DEBUG: IMAGES_URL = " . IMAGES_URL . " -->\n";
}
?>