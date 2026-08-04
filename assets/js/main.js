/* ============================================================
   Jana Santos — Consultora de Imagem & Coach de Estilo
   Main JavaScript — Scroll animations & Navbar behavior
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    /* ---- Scroll Reveal (IntersectionObserver) ------------- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Resume the CSS animation when the element enters the viewport
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Pause all animated elements initially, then let the observer trigger them
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    /* ---- Navbar Scroll Effect ----------------------------- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-brand-light/90', 'bg-white/95');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-white/95', 'bg-brand-light/90');
        }
    });

});
