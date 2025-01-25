<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/styles/global.css">
    <link rel="stylesheet" href="./assets/styles/header.css">
    <link rel="stylesheet" href="./assets/styles/banner_process.css">
    <link rel="stylesheet" href="./assets/styles/banner_about.css">
    <link rel="stylesheet" href="./assets/styles/footer.css">
    <script src="./assets/scripts/index.js" type="module"></script>
    <title>Wolff Kévin</title>
</head>

<body>
    <header class="header">
        <nav>
            <ul class="header__nav">
                <li class="header__nav__item">
                    <a href="/">Kévin Wolff</a>
                </li>
                <li class="header__nav__item">
                    <a href="#about">À propos</a>
                </li>
            </ul>
        </nav>
        <div class="header__banner">
            <h1 class="animatable_top">Solutions numériques aux<br>services des entrepreneurs</h1>
            <div class="header__banner__content">
                <p class="animatable_top">Je conçois et développe des solutions numériques sur mesure qui vous libèrent du temps et augmentent vos performances.</p>
                <a href="#process" class="button animatable_bottom">
                    <span>Découvrir le processus</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512">
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </header>
    <main>
        <section class="banner__process" id="process">
            <h2 class="">Du diagnostic à la mise en oeuvre</h2>
            <p class="">Votre projet est unique, c'est pourquoi l'analyse de vos besoins et la cartographie de vos processus métiers sont primordiales. Grâce à la complémentarité de vos connaissances métier et de mon expertise technique, je conçois une solution sur mesure, parfaitement adaptée à vos attentes.</p>
            <ul class="banner__process__cards animatable">
                <li class="banner__process__cards__item">
                    <div class="banner__process__cards__item__bg"></div>
                    <svg class="banner__process__cards__item__icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd"></path>
                    </svg>
                    <div class="banner__process__cards__item__body">
                        <h3>Audit</h3>
                        <p>Grâce à votre expertise, je commence par une analyse approfondie de vos processus métiers, de vos objectifs et de vos contraintes.</p>
                        <p>Ensemble, nous examinons vos enjeux pour concevoir la solution digitale la plus adaptée à vos besoins.</p>
                    </div>
                </li>
                <li class="banner__process__cards__item">
                    <div class="banner__process__cards__item__bg"></div>
                    <svg class="banner__process__cards__item__icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24">
                        <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-1.5 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
                        <path d="M12 1c.266 0 .532.009.797.028.763.055 1.345.617 1.512 1.304l.352 1.45c.019.078.09.171.225.221.247.089.49.19.728.302.13.061.246.044.315.002l1.275-.776c.603-.368 1.411-.353 1.99.147.402.349.78.726 1.128 1.129.501.578.515 1.386.147 1.99l-.776 1.274c-.042.069-.058.185.002.315.112.238.213.481.303.728.048.135.142.205.22.225l1.45.352c.687.167 1.249.749 1.303 1.512.038.531.038 1.063 0 1.594-.054.763-.616 1.345-1.303 1.512l-1.45.352c-.078.019-.171.09-.221.225-.089.248-.19.491-.302.728-.061.13-.044.246-.002.315l.776 1.275c.368.603.353 1.411-.147 1.99-.349.402-.726.78-1.129 1.128-.578.501-1.386.515-1.99.147l-1.274-.776c-.069-.042-.185-.058-.314.002a8.606 8.606 0 0 1-.729.303c-.135.048-.205.142-.225.22l-.352 1.45c-.167.687-.749 1.249-1.512 1.303-.531.038-1.063.038-1.594 0-.763-.054-1.345-.616-1.512-1.303l-.352-1.45c-.019-.078-.09-.171-.225-.221a8.138 8.138 0 0 1-.728-.302c-.13-.061-.246-.044-.315-.002l-1.275.776c-.603.368-1.411.353-1.99-.147-.402-.349-.78-.726-1.128-1.129-.501-.578-.515-1.386-.147-1.99l.776-1.274c.042-.069.058-.185-.002-.314a8.606 8.606 0 0 1-.303-.729c-.048-.135-.142-.205-.22-.225l-1.45-.352c-.687-.167-1.249-.749-1.304-1.512a11.158 11.158 0 0 1 0-1.594c.055-.763.617-1.345 1.304-1.512l1.45-.352c.078-.019.171-.09.221-.225.089-.248.19-.491.302-.728.061-.13.044-.246.002-.315l-.776-1.275c-.368-.603-.353-1.411.147-1.99.349-.402.726-.78 1.129-1.128.578-.501 1.386-.515 1.99-.147l1.274.776c.069.042.185.058.315-.002.238-.112.481-.213.728-.303.135-.048.205-.142.225-.22l.352-1.45c.167-.687.749-1.249 1.512-1.304C11.466 1.01 11.732 1 12 1Zm-.69 1.525c-.055.004-.135.05-.161.161l-.353 1.45a1.832 1.832 0 0 1-1.172 1.277 7.147 7.147 0 0 0-.6.249 1.833 1.833 0 0 1-1.734-.074l-1.274-.776c-.098-.06-.186-.036-.228 0a9.774 9.774 0 0 0-.976.976c-.036.042-.06.131 0 .228l.776 1.274c.314.529.342 1.18.074 1.734a7.147 7.147 0 0 0-.249.6 1.831 1.831 0 0 1-1.278 1.173l-1.45.351c-.11.027-.156.107-.16.162a9.63 9.63 0 0 0 0 1.38c.004.055.05.135.161.161l1.45.353a1.832 1.832 0 0 1 1.277 1.172c.074.204.157.404.249.6.268.553.24 1.204-.074 1.733l-.776 1.275c-.06.098-.036.186 0 .228.301.348.628.675.976.976.042.036.131.06.228 0l1.274-.776a1.83 1.83 0 0 1 1.734-.075c.196.093.396.176.6.25a1.831 1.831 0 0 1 1.173 1.278l.351 1.45c.027.11.107.156.162.16a9.63 9.63 0 0 0 1.38 0c.055-.004.135-.05.161-.161l.353-1.45a1.834 1.834 0 0 1 1.172-1.278 6.82 6.82 0 0 0 .6-.248 1.831 1.831 0 0 1 1.733.074l1.275.776c.098.06.186.036.228 0 .348-.301.675-.628.976-.976.036-.042.06-.131 0-.228l-.776-1.275a1.834 1.834 0 0 1-.075-1.733c.093-.196.176-.396.25-.6a1.831 1.831 0 0 1 1.278-1.173l1.45-.351c.11-.027.156-.107.16-.162a9.63 9.63 0 0 0 0-1.38c-.004-.055-.05-.135-.161-.161l-1.45-.353c-.626-.152-1.08-.625-1.278-1.172a6.576 6.576 0 0 0-.248-.6 1.833 1.833 0 0 1 .074-1.734l.776-1.274c.06-.098.036-.186 0-.228a9.774 9.774 0 0 0-.976-.976c-.042-.036-.131-.06-.228 0l-1.275.776a1.831 1.831 0 0 1-1.733.074 6.88 6.88 0 0 0-.6-.249 1.835 1.835 0 0 1-1.173-1.278l-.351-1.45c-.027-.11-.107-.156-.162-.16a9.63 9.63 0 0 0-1.38 0Z"></path>
                    </svg>
                    <div class="banner__process__cards__item__body">
                        <h3>Conception</h3>
                        <p>Après avoir cartographié vos processus métiers, je conçois la partie métier de l'application en tenant compte des spécificités fonctionnelles établies lors de l'audit.</p>
                        <p>Mon objectif est de créer une interface intuitive, alignée sur vos besoins et les meilleures pratiques en matière d'expérience utilisateur. </p>
                    </div>
                </li>
                <li class="banner__process__cards__item">
                    <div class="banner__process__cards__item__bg"></div>
                    <svg class="banner__process__cards__item__icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256">
                        <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path>
                    </svg>
                    <div class="banner__process__cards__item__body">
                        <h3>Livraison</h3>
                        <p>Pour garantir une qualité élevée des fonctionnalités et de l'interface, le produit final est livré progressivement.</p>
                        <p>Votre intégration au processus de développement est essentielle, vous serez informé à chaque étape clé et aurez accès à une instance dédiée pour tester et valider le produit.</p>
                    </div>
                </li>
            </ul>
            <a href="https://www.linkedin.com/in/wolff-kevin/" target="_blank" class="button">
                <span>Parlons de votre projet</span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512">
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg></a>
        </section>
        <section class="banner__about" id="about">
            <h2>À propos</h2>
            <p>Je m'appelle Kévin, je suis développeur web fullstack indépendant, spécialisé dans la création d'applications web métiers. Mon objectif est de fournir des solutions numériques sur mesure qui aident les entreprises à optimiser leur processus.</p>
            <div class="banner__about__bento animatable_top">
                <div class="banner__about__bento__item">
                    <h3>Expériences professionnelles</h3>
                    <div class="banner__about__bento__item__content">
                        <p>J’ai participé au développement de plusieurs applications métiers destinées à des professionnels. Ces projets m'ont permis de renforcer mes compétences en conception technique tout en répondant aux besoins spécifiques de chaque secteur.</p>
                        <p>En janvier 2023, j'ai élargi mes horizons en devenant formateur en développement web. Cette expérience m’a permis de collaborer avec des apprenants aux parcours variés, de partager mes connaissances et d’accompagner leur progression, tout en développant mes compétences en gestion d’équipe et en pédagogie.</p>
                    </div>
                    <a href="https://www.linkedin.com/in/wolff-kevin/" target="_blank" class="button small">Mon parcours sur Linkedin</a>
                </div>
                <div class="banner__about__bento__item banner__slider">
                    <div class="banner__slider__image banner__slider__image--selected" style="background-image: url('./public/profil_picture.jpg');"></div>
                    <div class="banner__slider__image" style="background-image: url('./public/profil_training.jpg');"></div>
                    <div class="banner__slider__image" style="background-image: url('./public/profil_running.jpg');"></div>
                    <div class="banner__slider__image" style="background-image: url('./public/profil_travel.jpg');"></div>
                </div>
                <div class="banner__about__bento__item">
                    <button data-index="0">
                        <span>Travail</span>
                        <p></p>
                    </button>
                    <button data-index="1">
                        <span>Running</span>
                        <p></p>
                    </button>
                    <button data-index="2">
                        <span>Voyage</span>
                        <p></p>
                    </button>
                    <button data-index="3">
                        <span>Formateur</span>
                        <p></p>
                    </button>
                </div>
                <div class="banner__about__bento__item">
                    <p>Grenoble, France</p>
                </div>
                <div class="banner__about__bento__item">
                    <div>
                        <h3>Freelance</h3>
                        <p>disponible</p>
                    </div>
                    <div class="banner__about__bento__item__content">
                        <p>J'interviens sur des missions variées en développement fullstack, avec une affinité particulière pour les problématiques backend.</p>
                        <p>Ouvert à des collaborations de courte ou longue durée, je suis prêt à contribuer à la réussite de vos projets.</p>
                    </div>
                </div>
                <div class="banner__about__bento__item">
                    <h3>Valeurs</h3>
                    <div class="banner__about__bento__item__content">
                        <p>Je crois en la puissance du travail d'équipe et à l'importance de placer l'humain au cœur de chaque projet.</p>
                        <p>Relever de nouveaux défis est une source constante de motivation et d'apprentissage pour moi.</p>
                    </div>
                </div>
            </div>
            <ul class="banner__about__technos animatable_bottom">
                <li>
                    <img src="./public/logo_php.png" alt="Logo de PHP">
                    <p>PHP</p>
                </li>
                <li>
                    <img src="./public/logo_js.png" alt="Logo de JS">
                    <p>JavaScript</p>
                </li>
                <li>
                    <img src="./public/logo_symfony.png" alt="Logo de Symfony">
                    <p>Symfony</p>
                </li>
                <li>
                    <img src="./public/logo_react.png" alt="Logo de React.js">
                    <p>React.js</p>
                </li>
                <li>
                    <img src="./public/logo_docker.png" alt="Logo de Docker">
                    <p>Docker</p>
                </li>
                <li>
                    <img src="./public/logo_mysql.png" alt="Logo de MySQL">
                    <p>MySQL</p>
                </li>
                <li>
                    <img src="./public/logo_apache.png" alt="Logo de Apache">
                    <p>Apache</p>
                </li>
            </ul>
        </section>
    </main>
    <footer class="footer">
        <div class="footer__wrapper">
            <div>
                <h3>Kévin Wolff</h3>
                <div>
                    <p>SIRET : <span>84132048400022</span></p>
                    <p>TVA : <span>FR27841320484</span></p>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#process">Conception projet</a>
                    </li>
                    <li>
                        <a href="#about">À propos</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/wolff-kevin/" target="_blank">Profil Linkedin</a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</body>

</html>