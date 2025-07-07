const products = {
    "cobalt-amber": {
        name: "Cobalt Amber",
        description: "A Chic, Sultry Amber",
        price: "€145",
    },
    "the-apartment": {
        name: "The Apartment",
        description: "A Dark And Sophisticated Gourmand",
        price: "€145",
    },
    "black-anise": {
        name: "Black Anise",
        description: "A Vibrant, Smoky Amber",
        price: "€145",
    },
};

let cart = [];

const quickAddButtons = document.querySelectorAll(".quick-add-btn");
const notification = document.getElementById("notification");
const navLinks = document.querySelectorAll(".nav-link");

function init() {
    setupQuickAddButtons();
    setupNavigation();
    setupScrollEffects();
}

function setupQuickAddButtons() {
    quickAddButtons.forEach((button) => {
        button.addEventListener("click", handleQuickAdd);
    });
}

function handleQuickAdd(e) {
    e.preventDefault();
    e.stopPropagation();

    const productId = e.target.dataset.product;
    const product = products[productId];

    if (product) {
        addToCart(product);
        showNotification(`${product.name} added to cart!`);
        const button = e.target;
        const originalText = button.textContent;
        button.textContent = "ADDED!";
        button.style.background = "#4CAF50";
        button.style.color = "white";
        button.style.borderColor = "#4CAF50";

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = "";
            button.style.color = "";
            button.style.borderColor = "";
        }, 1500);
    }
}

function addToCart(product) {
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    console.log(`Cart items: ${cart.length}`);
}

function showNotification(message) {
    notification.textContent = message;
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}

function setupNavigation() {
    navLinks.forEach((link) => {
        link.addEventListener("click", handleNavClick);
    });
}

function handleNavClick(e) {
    e.preventDefault();
    const category = e.target.textContent;

    navLinks.forEach((link) => link.classList.remove("active"));

    e.target.classList.add("active");

    showNotification(`Browsing ${category}`);
}

function setupScrollEffects() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.style.background = "rgba(255, 255, 255, 0.98)";
            header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.background = "rgba(255, 255, 255, 0.95)";
            header.style.boxShadow = "none";
        }
    });
}

function setupProductCardEffects() {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px) scale(1.02)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
}

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll(".product-card").forEach((card) => {
        observer.observe(card);
    });
}

function handleResize() {
    console.log("Window resized");
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", () => {
    setupProductCardEffects();
    setupSmoothScrolling();
    setupIntersectionObserver();
});

document.addEventListener("DOMContentLoaded", init);

export { addToCart, showNotification, products };
