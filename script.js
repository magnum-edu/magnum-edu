document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add a subtle animation to the hero section on load
    const heroSlogan = document.querySelector('.hero-slogan');
    const heroTagline = document.querySelector('.hero-tagline');
    const heroButton = document.querySelector('.hero-button');

    if (heroSlogan && heroTagline && heroButton) {
        setTimeout(() => {
            heroSlogan.style.opacity = 1;
            heroSlogan.style.transform = 'translateY(0)';
        }, 300);
        setTimeout(() => {
            heroTagline.style.opacity = 1;
            heroTagline.style.transform = 'translateY(0)';
        }, 500);
        setTimeout(() => {
            heroButton.style.opacity = 1;
            heroButton.style.transform = 'translateY(0)';
        }, 700);
    }
});
