document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links on the index page
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Only smooth scroll if on the same page (index.html or root)
            const targetId = this.getAttribute('href');
            const currentPath = window.location.pathname.split('/').pop();
            const targetPath = this.href.split('/').pop().split('#')[0]; // Gets file name without hash

            if (currentPath === 'index.html' || currentPath === '' || targetPath === 'index.html' || targetPath === '') {
                document.querySelector(targetId).scrollIntoView({
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
    const heroImageWrapper = document.querySelector('.hero-image-wrapper'); // New element

    if (heroSlogan && heroTagline && heroButton) {
        // These elements now have initial opacity:0 and transform in CSS,
        // so JS just needs to apply the final state which triggers the transition.
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
        if (heroImageWrapper) {
            setTimeout(() => {
                heroImageWrapper.style.opacity = 1;
                heroImageWrapper.style.transform = 'translateY(0)';
            }, 900); // Animate image after button
        }
    }

    // Testimonial Carousel functionality
    const carouselTrack = document.querySelector('.testimonial-carousel-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentSlide = 0;
    const totalSlides = slides.length;

    if (carouselTrack && slides.length > 0) { // Ensure carousel elements exist
        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i; // Store index for click handling
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot'); // Select dots after creation

        const updateCarousel = () => {
            // Get the current width of a slide (important for responsiveness)
            const slideWidth = slides[0].clientWidth; 
            carouselTrack.style.transform = `translateX(${-slideWidth * currentSlide}px)`;

            // Update active dot
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        };

        const goToNextSlide = () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        };

        const goToPrevSlide = () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // + totalSlides to handle negative result of %
            updateCarousel();
        };

        // Event Listeners for buttons
        nextButton.addEventListener('click', goToNextSlide);
        prevButton.addEventListener('click', goToPrevSlide);

        // Event Listeners for dots
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                currentSlide = parseInt(e.target.dataset.index); // Get index from data attribute
                updateCarousel();
            });
        });

        // Initialize carousel on load
        updateCarousel(); 

        // Recalculate slide position on window resize
        window.addEventListener('resize', updateCarousel);

        // Optional: Auto-play (uncomment if desired)
        // setInterval(goToNextSlide, 7000); // Change slide every 7 seconds
    }


    // FAQ Accordion functionality for service pages (existing code, unchanged)
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
