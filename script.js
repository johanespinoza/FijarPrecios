document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
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
        
        // Update both countdown timers
        document.querySelectorAll('#hours, #hours2').forEach(el => {
            el.textContent = hours.toString().padStart(2, '0');
        });
        
        document.querySelectorAll('#minutes, #minutes2').forEach(el => {
            el.textContent = minutes.toString().padStart(2, '0');
        });
        
        document.querySelectorAll('#seconds, #seconds2').forEach(el => {
            el.textContent = seconds.toString().padStart(2, '0');
        });
    }
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
    
    // Notification System
    const notification = document.getElementById('notification');
    const closeNotification = document.getElementById('close-notification');
    let notificationTimer;
    
    // Sample names for notifications
    const names = [
        'María', 'Carlos', 'Ana', 'Luis', 'Sofía', 'Diego', 'Valentina', 'Andrés',
        'Camila', 'Juan', 'Laura', 'Miguel', 'Isabella', 'José', 'Gabriela'
    ];
    
    // Sample cities for notifications
    const cities = ['Lima', 'Bogotá', 'Buenos Aires', 'Santiago', 'Ciudad de México'];
    
    // Sample times for notifications
    const times = ['1 minuto', '2 minutos', '5 minutos', '10 minutos', '15 minutos'];
    
    // Show notification function
    function showNotification() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        const randomTime = times[Math.floor(Math.random() * times.length)];
        
        // Update notification content
        const notificationText = notification.querySelector('.notification-text');
        notificationText.innerHTML = `
            <strong>${randomName} de ${randomCity}</strong> acaba de ACCEDER al ebook
            <span class="notification-time">Hace ${randomTime}</span>
        `;
        
        // Show notification
        notification.classList.add('show');
        
        // Hide after 5 seconds
        clearTimeout(notificationTimer);
        notificationTimer = setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }
    
    // Close notification button
    closeNotification.addEventListener('click', () => {
        notification.classList.remove('show');
    });
    
    // Show first notification after 5 seconds
    setTimeout(showNotification, 5000);
    
    // Show subsequent notifications every 25 seconds
    setInterval(showNotification, 25000);
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('h3');
        
        header.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.benefit-item, .testimonial, .module');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.benefit-item, .testimonial, .module');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Initial check
        animateOnScroll();
    });
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Form submission handling (if any forms are added later)
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    });
});
