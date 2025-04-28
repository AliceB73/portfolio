import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import '../styles/Banner.css';

function Banner() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = (event, targetId) => {
        event.preventDefault(); // Empêcher le comportement par défaut du lien

        const targetElement = document.getElementById(targetId); // Récupérer l'élément cible

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 80;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 500;
            let startTime = null;

            // Fonction d'animation
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            // Fonction pour une courbe d'animation douce (ease-in-out)
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation); // Lancer l'animation
        }
    };


    return (
        <header className="aj-banner">
            <img src={logo} alt="Logo" className="aj-logo" />
            <ul className="aj-nav-menu fjalla-one nav-menu-desktop">
                <li>
                    <a href="#accueil" onClick={(e) => handleScroll(e, "accueil")}>
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
                        Compétences
                    </a>
                </li>
                <li>
                    <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={(e) => handleScroll(e, "about")}>
                        À propos
                    </a>
                </li>
            </ul>
            <div className='menu-mobile-container'>
                <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                </button>
                <div className={`menu-mobile ${menuOpen ? 'show' : ''}`}>
                    <ul className="aj-nav-menu lora nav-menu-mobile">
                        <li><a href="#accueil">Accueil</a></li>
                        <li><a href="#skills">Compétences</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#a-propos">À propos</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Banner