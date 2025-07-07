// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function () {
        const isActive = mobileMenu.classList.contains('active');

        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Open mobile menu
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuBtn.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        body.style.overflow = ''; // Restore scrolling
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNav = event.target.closest('.navbar');
        const isMenuOpen = mobileMenu.classList.contains('active');

        if (!isClickInsideNav && isMenuOpen) {
            closeMobileMenu();
        }
    });

    // Close mobile menu when pressing Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            }
        });
    });

    // Add scroll effect to navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow when scrolled
        if (scrollTop > 0) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        } else {
            navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
        }

        lastScrollTop = scrollTop;
    });

    // Icon button interactions
    const iconButtons = document.querySelectorAll('.icon-btn');

    iconButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Add a subtle animation on click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // You can add specific functionality for each icon here
            const svg = this.querySelector('svg');
            if (svg) {
                const viewBox = svg.getAttribute('viewBox');
                // Search icon
                if (viewBox === '0 0 24 24' && svg.querySelector('circle[cx="11"]')) {
                    console.log('Search clicked');
                    // Add search functionality here
                }
                // User icon
                else if (viewBox === '0 0 24 24' && svg.querySelector('circle[cx="12"]')) {
                    console.log('User account clicked');
                    // Add user account functionality here
                }
                // Shopping bag icon
                else if (viewBox === '0 0 24 24' && svg.querySelector('path[d*="M6 2L3 6v14"]')) {
                    console.log('Shopping bag clicked');
                    // Add shopping cart functionality here
                }
            }
        });
    });

    // Currency button functionality
    const currencyBtn = document.querySelector('.currency-btn');
    if (currencyBtn) {
        currencyBtn.addEventListener('click', function () {
            console.log('Currency selector clicked');
            // Add currency selection functionality here
            // You could show a dropdown with different currency options
        });
    }

    // Add loading animation
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });
});

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}