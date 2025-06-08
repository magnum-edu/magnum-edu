document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links on the index page
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Only smooth scroll if on the same page (index.html)
            if (this.baseURI.endsWith('index.html') || this.baseURI.endsWith('/')) {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // For other pages, just navigate
                window.location.href = this.href;
            }
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

    // FAQ Accordion functionality for service pages
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');

            // Close other open FAQ items (optional, but good UX)
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('active');
                    otherQuestion.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });

            question.classList.toggle('active');
            answer.classList.toggle('active');
            icon.style.transform = question.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
});
