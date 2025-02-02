<?php
require_once "config.php";
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="./public/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./public/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./public/favicon/favicon-16x16.png">
    <link rel="manifest" href="./public/favicon/site.webmanifest">
    <link rel="shortcut icon" href="./public/favicon/favicon.ico">
    <link rel="preload" href="./public/fonts/poppins/Poppins-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="./public/fonts/poppins/Poppins-Medium.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="./public/fonts/poppins/Poppins-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="./public/fonts/poppins/Poppins-SemiBold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="./public/fonts/roboto/Roboto-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/styles/global.css">
    <link rel="stylesheet" href="./assets/styles/header.css">
    <link rel="stylesheet" href="./assets/styles/banner_process.css">
    <link rel="stylesheet" href="./assets/styles/banner_about.css">
    <link rel="stylesheet" href="./assets/styles/banner_links.css">
    <link rel="stylesheet" href="./assets/styles/footer.css">
    <title>Portfolio Wolff Kévin développeur web fullstack indépendant</title>
    <meta name="description" content="Développeur web fullstack indépendant à Grenoble, je conçoit des applications web sur mesure pour optimiser les processus métiers des entreprises. Découvrez mon processus d'audit, de conception et de livraison pour des solutions numériques performantes.">
</head>

<body>
    <?php include_once PROJECT_ROOT_PATH . "/templates/header.php" ?>
    <main>
        <?php include_once PROJECT_ROOT_PATH . "/templates/banner_process.php" ?>
        <?php include_once PROJECT_ROOT_PATH . "/templates/banner_about.php" ?>
        <?php include_once PROJECT_ROOT_PATH . "/templates/banner_links.php" ?>
    </main>
    <?php include_once PROJECT_ROOT_PATH . "/templates/footer.php" ?>
    <script src="./assets/scripts/animatable.js" type="module" defer></script>
    <script src="./assets/scripts/slider.js" type="module" defer></script>
</body>

</html>