// Product data
const products = {
    'cobalt-amber': {
        name: 'Cobalt Amber',
        description: 'A Chic, Sultry Amber',
        price: '€145'
    },
    'the-apartment': {
        name: 'The Apartment',
        description: 'A Dark And Sophisticated Gourmand',
        price: '€145'
    },
    'black-anise': {
        name: 'Black Anise',
        description: 'A Vibrant, Smoky Amber',
        price: '€145'
    }
};

// Cart functionality
let cart = [];

// DOM elements
const quickAddButtons = document.querySelectorAll('.quick-add-btn');
const notification = document.getElementById('notification');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the app
function init() {
    setupQuickAddButtons();
    setupNavigation();
    setupScrollEffects();
}

// Setup quick add button functionality
function setupQuickAddButtons() {
    quickAddButtons.forEach(button => {
        button.addEventListener('click', handleQuickAdd);
    });
}

// Handle quick add button clicks
function handleQuickAdd(e) {
    e.preventDefault();
    e.stopPropagation();

    const productId = e.target.dataset.product;
    const product = products[productId];

    if (product) {
        addToCart(product);
        showNotification(`${product.name} added to cart!`);

        // Add visual feedback
        const button = e.target;
        const originalText = button.textContent;
        button.textContent = 'ADDED!';
        button.style.background = '#4CAF50';
        button.style.color = 'white';
        button.style.borderColor = '#4CAF50';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.style.color = '';
            button.style.borderColor = '';
        }, 1500);
    }
}

// Add item to cart
function addToCart(product) {
    cart.push(product);
    updateCartCount();
}

// Update cart count display
function updateCartCount() {
    console.log(`Cart items: ${cart.length}`);
    // In a real app, this would update a cart icon/counter
}

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Setup navigation
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
}

// Handle navigation clicks
function handleNavClick(e) {
    e.preventDefault();
    const category = e.target.textContent;

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    e.target.classList.add('active');

    // In a real app, this would filter products or navigate to different pages
    showNotification(`Browsing ${category}`);
}

// Setup scroll effects
function setupScrollEffects() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Product card hover effects
function setupProductCardEffects() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
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
}

// Initialize intersection observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all product cards
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
}

// Handle window resize
function handleResize() {
    // Recalculate layouts if needed
    console.log('Window resized');
}

// Event listeners
window.addEventListener('resize', handleResize);
window.addEventListener('load', () => {
    setupProductCardEffects();
    setupSmoothScrolling();
    setupIntersectionObserver();
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export for potential use in other modules
export { addToCart, showNotification, products };