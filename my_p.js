// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scrolling for the CTA button
document.querySelector('.cta').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});

// Alert function for "Hire Me" button
document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('Thank you for your interest! Please contact me at divya.kumari2022@vitstudent.ac.in');
});
// Your existing JavaScript code...

// Animation script
document.addEventListener('DOMContentLoaded', () => {
    const animatedSections = document.querySelectorAll('.section-animated');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});
