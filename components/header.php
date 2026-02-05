<?php
// components/header.php - VERSIÓN CORREGIDA
// Incluir config.php desde la raíz del proyecto
require_once __DIR__ . '/../config.php';
?>
<header id="main-header">
    <nav class="navbar">
        <div class="logo">
            <a href="#hero">
                <!-- RUTA CORREGIDA: usar IMAGES_URL del config.php -->
                <img src="<?php echo IMAGES_URL; ?>logo.png" alt="SALKANY Trek & Expedition" class="logo-img">
            </a>
        </div>
        
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#hero" class="nav-link">
                    <i class="fas fa-home"></i> Inicio
                </a>
            </li>
            <li class="nav-item">
                <a href="#about" class="nav-link">
                    <i class="fas fa-info-circle"></i> Nosotros
                </a>
            </li>
            <li class="nav-item">
                <a href="#destinations" class="nav-link">
                    <i class="fas fa-globe-americas"></i> Tours
                </a>
            </li>
            <li class="nav-item">
                <a href="#faq" class="nav-link">
                    <i class="fas fa-question-circle"></i> Preguntas
                </a>
            </li>
            <li class="nav-item">
                <!-- RUTA CORREGIDA: usar BASE_URL -->
                <a href="<?php echo BASE_URL; ?>pages/contacto.php" class="nav-link">
                    <i class="fas fa-envelope"></i> Contacto
                </a>
            </li>
            <li class="nav-item">
                <!-- RUTA CORREGIDA: usar BASE_URL -->
                <a href="<?php echo BASE_URL; ?>pages/gallery.php" class="nav-link">
                    <i class="fas fa-images"></i> Preview
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