document.addEventListener('DOMContentLoaded', () => {
    const notification = document.getElementById('notification');

    // Show notification function
    function showNotification(message, isSuccess = true) {
        notification.textContent = message;
        notification.style.backgroundColor = isSuccess ? '#4caf50' : '#f44336';
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Form submission handler
    window.handleSubmit = (event) => {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        // Basic form validation
        for (let key in data) {
            if (!data[key].trim()) {
                showNotification(`Please fill in the ${key} field`, false);
                return false;
            }
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address', false);
            return false;
        }

        // Phone validation (basic)
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(data.phone)) {
            showNotification('Please enter a valid phone number', false);
            return false;
        }

        // Simulate form submission
        showNotification('Message sent successfully! We will contact you soon.');
        event.target.reset();
        return false;
    };

    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});