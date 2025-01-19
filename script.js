// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

// Update cart count
function updateCartCount(count) {
    cartCount = count;
    cartCountElement.textContent = cartCount;
}

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Search functionality
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

searchButton.addEventListener('click', () => {
    const address = searchInput.value.trim();
    if (address) {
        // Here you would typically make an API call to search for restaurants
        alert(`Searching for restaurants near: ${address}`);
    } else {
        alert('Please enter a delivery address');
    }
});

// Add hover effects for restaurant cards
const restaurantCards = document.querySelectorAll('.restaurant-card');

restaurantCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Sticky navigation
const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

// Add animation on scroll for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-in-out';
    observer.observe(section);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(0);
});
