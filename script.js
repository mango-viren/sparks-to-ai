document.addEventListener('DOMContentLoaded', () => {
    // Subtle parallax effect for circuit background
    document.addEventListener('mousemove', (e) => {
        const circuitBg = document.querySelector('.circuit-background');
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        circuitBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Add subtle hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--primary-color)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
});
