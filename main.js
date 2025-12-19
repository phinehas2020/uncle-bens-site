/**
 * Quality Logistics & Relocation
 * Editorial Motion Engine
 */

// Header Animation
const initHeader = () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
};

// Intersection Observer for Reveal Effects
const initScrollReveals = () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target elements
    const revealTargets = document.querySelectorAll('h1, h2, .service-card, .hero-image-wrapper, .booking-form-area');

    revealTargets.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, 
                               transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
        observer.observe(el);
    });

    // Add CSS for visible state
    const revealStyle = document.createElement('style');
    revealStyle.textContent = `
        .is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(revealStyle);
};

// Form Interaction
const initForm = () => {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;

        btn.disabled = true;
        btn.textContent = 'ARCHITECTING ESTIMATE...';

        setTimeout(() => {
            btn.textContent = 'CONSULTATION REQUESTED';
            form.reset();
            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = originalText;
            }, 3000);
        }, 1500);
    });
};

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initScrollReveals();
    initForm();
});
