document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.body;

    if (!mobileMenuBtn || !mobileMenu) {
        console.warn("Mobile menu elements not found");
        return;
    }

    mobileMenuBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isActive = mobileMenu.classList.contains("active");

        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    function openMobileMenu() {
        mobileMenu.classList.add("active");
        mobileMenuBtn.classList.add("active");
        body.classList.add("menu-open");

        mobileMenuBtn.setAttribute("aria-expanded", "true");
        mobileMenu.setAttribute("aria-hidden", "false");
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
        body.classList.remove("menu-open");

        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
    }

    document.addEventListener("click", function (event) {
        const isClickInsideNav = event.target.closest(".navbar");
        const isMenuOpen = mobileMenu.classList.contains("active");

        if (!isClickInsideNav && isMenuOpen) {
            closeMobileMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && mobileMenu.classList.contains("active")) {
            closeMobileMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768 && mobileMenu.classList.contains("active")) {
            closeMobileMenu();
        }
    });

    const mobileLinks = document.querySelectorAll(".mobile-link");
    mobileLinks.forEach((link) => {
        link.addEventListener("click", function () {
            if (mobileMenu.classList.contains("active")) {
                closeMobileMenu();
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                if (mobileMenu.classList.contains("active")) {
                    closeMobileMenu();
                }
            }
        });
    });

    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");

    const handleScroll = debounce(function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0) {
            navbar.style.boxShadow =
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
        } else {
            navbar.style.boxShadow =
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
        }

        lastScrollTop = scrollTop;
    }, 10);

    window.addEventListener("scroll", handleScroll);

    const iconButtons = document.querySelectorAll(".icon-btn");

    iconButtons.forEach((button) => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);

            const svg = this.querySelector("svg");
            if (svg) {
                const viewBox = svg.getAttribute("viewBox");
                if (viewBox === "0 0 24 24" && svg.querySelector('circle[cx="11"]')) {
                    console.log("Search clicked");
                } else if (
                    viewBox === "0 0 24 24" &&
                    svg.querySelector('circle[cx="12"]')
                ) {
                    console.log("User account clicked");
                } else if (
                    viewBox === "0 0 24 24" &&
                    svg.querySelector('path[d*="M6 2L3 6v14"]')
                ) {
                    console.log("Shopping bag clicked");
                }
            }
        });
    });

    const currencyBtns = document.querySelectorAll(".currency-btn");
    currencyBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            console.log("Currency selector clicked");
        });
    });

    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileMenuBtn.setAttribute("aria-controls", "mobile-menu");
    mobileMenu.setAttribute("id", "mobile-menu");
    mobileMenu.setAttribute("aria-hidden", "true");

    window.addEventListener("load", function () {
        document.body.classList.add("loaded");
    });
});

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

const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});
