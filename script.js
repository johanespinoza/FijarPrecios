document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Countdown Timer - Solo uno elegante para la oferta final
    function updateCountdown() {
        const now = new Date();
        const target = new Date();
        
        // Set target to midnight
        target.setHours(23, 59, 59, 999);
        
        const diff = target - now;
        
        if (diff <= 0) {
            // Reset for a new day
            target.setDate(target.getDate() + 1);
            return updateCountdown();
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Update solo el contador final
        const finalHours = document.getElementById('final-hours');
        const finalMinutes = document.getElementById('final-minutes');
        const finalSeconds = document.getElementById('final-seconds');
        
        if (finalHours) finalHours.textContent = hours.toString().padStart(2, '0');
        if (finalMinutes) finalMinutes.textContent = minutes.toString().padStart(2, '0');
        if (finalSeconds) finalSeconds.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
    
    // Sistema de notificaciones eliminado para reducir urgencia falsa
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form validation (if forms exist)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation logic here
            console.log('Form submitted');
        });
    });
    
    // Loading states for buttons
    const buttons = document.querySelectorAll('.cta-button, .btn-warning');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 2000);
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    console.log('Website initialized successfully!');
});
