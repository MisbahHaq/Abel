const products = [
    {
        id: "cobalt-amber",
        name: "Cobalt Amber",
        description: "A Chic, Sultry Amber",
        price: "€145",
        category: "best-sellers",
        img1: "./Images/bg1.webp",
        img2: "./Images/bg-bottle.webp",
        badge: "BEST SELLER"
    },
    {
        id: "the-apartment",
        name: "The Apartment",
        description: "A Dark And Sophisticated Gourmand",
        price: "€145",
        category: "best-sellers",
        img1: "./Images/bg2.webp",
        img2: "./Images/bg-bottle2.webp",
        badge: "NEW"
    },
    {
        id: "black-anise",
        name: "Black Anise",
        description: "A Vibrant, Smoky Amber",
        price: "€145",
        category: "best-sellers",
        img1: "./Images/bg3.webp",
        img2: "./Images/bg-bottle3.webp",
        badge: ""
    },
    {
        id: "the-apartment",
        name: "The Apartment",
        description: "A Dark And Sophisticated Gourmand",
        price: "€145",
        category: "fragrances",
        img1: "./Images/bg2.webp",
        img2: "./Images/bg-bottle2.webp",
        badge: "NEW"
    },
    {
        id: "CYAN NORI",
        name: "CYAN NORI",
        description: "A Sweet, Salty Musk",
        price: "€55",
        category: "fragrances",
        img1: "./Images/bg4.webp",
        img2: "./Images/bg-bottle4.webp",
        badge: "NEW"
    },
    {
        id: "PINK IRIS",
        name: "PINK IRIS",
        description: "A Comtemporary, Classic Floral",
        price: "€195",
        category: "fragrances",
        img1: "./Images/bg5.webp",
        img2: "./Images/bg-bottle5.webp",
        badge: ""
    },
    {
        id: "CYAN NORI MINI",
        name: "CYAN NORI MINI",
        description: "A Sweet, Salty Musk",
        price: "€30",
        category: "minis",
        img1: "./Images/bg4.webp",
        img2: "./Images/bg-bottle6.webp",
        badge: "BEST SELLER"
    },
    {
        id: "GREEN CEDAR MINI",
        name: "GREEN CEDAR MINI",
        description: "A Velvety, Rich Wood",
        price: "€30",
        category: "minis",
        img1: "./Images/bg6.webp",
        img2: "./Images/bg-bottle7.webp",
        badge: "BEST SELLER"
    },
    {
        id: "LAUNDRY DAY MINI",
        name: "LAUNDRY DAY MINI",
        description: "A Verdant, Sun-Filled Citrus",
        price: "€30",
        category: "minis",
        img1: "./Images/bg7.webp",
        img2: "./Images/bg-bottle8.webp",
        badge: "BEST SELLER"
    },
    {
        id: "SCENE 01",
        name: "SCENE 01",
        description: "Green Tea, Tuzu, Verbena",
        price: "€55",
        category: "room-sprays",
        img1: "./Images/bg8.webp",
        img2: "./Images/bg-bottle9.webp",
        badge: "AWARD-WINNING"
    },
    {
        id: "SCENE 02",
        name: "SCENE 02",
        description: "Fig, Marigold, Cedarwood",
        price: "€55",
        category: "room-sprays",
        img1: "./Images/bg9.webp",
        img2: "./Images/bg-bottle10.webp",
        badge: "BEST SELLER"
    },
    {
        id: "SCENE 03",
        name: "SCENE 03",
        description: "Leather, Tonka, Vanilla",
        price: "€55",
        category: "room-sprays",
        img1: "./Images/bg10.webp",
        img2: "./Images/bg-bottle11.webp",
        badge: "BEST SELLER"
    },
    {
        id: "FRESH MINI PERFUME SET",
        name: "FRESH MINI PERFUME SET",
        description: "A Trio With Universal Appeal",
        price: "€70",
        category: "sets",
        img1: "./Images/bg11.webp",
        img2: "./Images/bg-bottle12.webp",
        badge: ""
    },
    {
        id: "BUILD YOUR OWN PERFUME SET",
        name: "BUILD YOUR OWN PERFUME SET",
        description: "Create Your Own Mini Set",
        price: "€70",
        category: "sets",
        img1: "./Images/bg14.jpg",
        img2: "./Images/bg-bottle13.webp",
        badge: ""
    },
    {
        id: "FLORAL MINI PERFUME SET",
        name: "FLORAL MINI PERFUME SET",
        description: "Designed For The Anthophile",
        price: "€70",
        category: "sets",
        img1: "./Images/bg12.webp",
        img2: "./Images/bg-bottle14.webp",
        badge: ""
    },
];


let cart = [];
const productsGrid = document.querySelector(".products-grid");

function renderProducts(category) {
    const filtered = products.filter(p => p.category === category);
    productsGrid.innerHTML = filtered.map(product => `
    <div class="product-card" data-product="${product.id}">
      <div class="product-image">
        <img src="${product.img1}" alt="${product.name}" class="bottom-image" />
        <img src="${product.img2}" alt="${product.name}" class="top-image" />
        ${product.badge ? `<div class="product-badge new">${product.badge}</div>` : ""}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <div class="quick-add-wrapper">
          <button class="quick-add-btn" data-product="${product.id}">QUICK ADD</button>
          <div class="quick-add-options">
            <button class="option-btn">6ml</button>
            <button class="option-btn">50ml</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

    setupQuickAddButtons();
}

function setupQuickAddButtons() {
    document.querySelectorAll(".quick-add-btn").forEach(button => {
        button.addEventListener("click", handleQuickAdd);
    });
}

function handleQuickAdd(e) {
    e.preventDefault();
    const productId = e.target.dataset.product;
    const product = products.find(p => p.id === productId);

    if (product) {
        cart.push(product);
        e.target.textContent = "ADDED!";
        e.target.style.background = "#4CAF50";
        e.target.style.color = "white";
        setTimeout(() => {
            e.target.textContent = "QUICK ADD";
            e.target.style.background = "";
            e.target.style.color = "";
        }, 1500);
    }
}

function setupCategorySwitching() {
    document.querySelectorAll(".mid-text .right h5").forEach(item => {
        item.addEventListener("click", () => {
            const category = item.dataset.category;

            document.querySelectorAll(".mid-text .right h5").forEach(el =>
                el.classList.remove("active")
            );
            item.classList.add("active");

            renderProducts(category);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts("best-sellers");
    setupCategorySwitching();
});

// Sample product data for different categories
const productData = {
    citrus: {
        image: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        name: "CITRUS BURST",
        notes: {
            top: "Bergamot, Lemon",
            heart: "Orange Blossom, Neroli",
            base: "White Musk, Cedar"
        },
        description: "Fresh morning energy captured in a bottle. Zesty citrus notes dance with delicate florals, creating an invigorating scent that awakens the senses."
    },
    green: {
        image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        name: "VERDANT",
        notes: {
            top: "Green Leaves, Mint",
            heart: "Lily of the Valley, Cucumber",
            base: "Moss, Vetiver"
        },
        description: "The essence of a secret garden after morning dew. Crisp green notes blend with soft florals for a refreshing, natural escape."
    },
    water: {
        image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        name: "AQUA",
        notes: {
            top: "Sea Salt, Ozone",
            heart: "Water Lily, Marine Accord",
            base: "Driftwood, Ambergris"
        },
        description: "Ocean breeze meets coastal serenity. Clean aquatic notes evoke the endless horizon where sky meets sea."
    },
    wood: {
        image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        name: "PAUSE",
        notes: {
            top: "Violet Leaf",
            heart: "Mimosa, Narcissus",
            base: "Hay Absolute"
        },
        description: "Stillness after warm summer rain—a collective quiet, the smell of wet earth filling the air. Award-winning Pause was created as a tribute to the seasons of hormonal change."
    },
    floral: {
        image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        name: "BLOOM",
        notes: {
            top: "Rose Petals, Peony",
            heart: "Jasmine, Tuberose",
            base: "Sandalwood, Vanilla"
        },
        description: "A garden in full bloom, captured at golden hour. Romantic florals intertwine with warm woods for timeless elegance."
    },
    spice: {
        image: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        name: "EMBER",
        notes: {
            top: "Cardamom, Pink Pepper",
            heart: "Cinnamon, Clove",
            base: "Amber, Patchouli"
        },
        description: "Warmth by the fireside, stories shared in whispered tones. Exotic spices blend with rich resins for cozy sophistication."
    }
};

// DOM Elements
const categoryItems = document.querySelectorAll('.scent-category-item');
const heroImage = document.getElementById('fragrance-hero-img');
const productName = document.querySelector('.fragrance-product-name');
const noteGroups = document.querySelectorAll('.fragrance-note-group');
const moodDescription = document.querySelector('.fragrance-mood-description');
const shopButton = document.querySelector('.fragrance-shop-button');
const dots = document.querySelectorAll('.fragrance-dot');

// Current product state
let currentProduct = 'wood'; // Default to PAUSE

// Initialize the page
function init() {
    updateProduct(currentProduct);
    addEventListeners();
}

// Add event listeners
function addEventListeners() {
    // Category selection
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            if (productData[category]) {
                selectCategory(item, category);
                updateProduct(category);
            }
        });
    });

    // Navigation dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateActiveDot(index);
            // Here you could implement image carousel functionality
        });
    });

    // Shop button
    shopButton.addEventListener('click', () => {
        // Add smooth animation
        shopButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            shopButton.style.transform = 'scale(1)';
        }, 150);

        // Here you could implement shopping cart functionality
        console.log(`Adding ${productData[currentProduct].name} to cart`);
    });

    // Hero image hover effect
    heroImage.addEventListener('mouseenter', () => {
        heroImage.style.transform = 'scale(1.05)';
    });

    heroImage.addEventListener('mouseleave', () => {
        heroImage.style.transform = 'scale(1)';
    });
}

// Select category and update UI
function selectCategory(selectedItem, category) {
    // Remove active class from all items
    categoryItems.forEach(item => item.classList.remove('active'));

    // Add active class to selected item
    selectedItem.classList.add('active');

    // Update current product
    currentProduct = category;
}

// Update product display
function updateProduct(category) {
    const product = productData[category];
    if (!product) return;

    // Update hero image with fade effect
    heroImage.style.opacity = '0.7';
    setTimeout(() => {
        heroImage.src = product.image;
        heroImage.style.opacity = '1';
    }, 200);

    // Update product name with slide effect
    productName.style.transform = 'translateY(20px)';
    productName.style.opacity = '0';
    setTimeout(() => {
        productName.textContent = product.name;
        productName.style.transform = 'translateY(0)';
        productName.style.opacity = '1';
    }, 200);

    // Update fragrance notes
    const noteValues = document.querySelectorAll('.fragrance-note-value');
    noteValues[0].textContent = product.notes.top;
    noteValues[1].textContent = product.notes.heart;
    noteValues[2].textContent = product.notes.base;

    // Update description with fade effect
    moodDescription.style.opacity = '0';
    setTimeout(() => {
        moodDescription.textContent = product.description;
        moodDescription.style.opacity = '1';
    }, 200);

    // Update shop button
    shopButton.textContent = `SHOP ${product.name}`;
}

// Update active navigation dot
function updateActiveDot(activeIndex) {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

// Smooth scrolling for mobile
function smoothScroll() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add some subtle animations on load
function addLoadAnimations() {
    // Stagger category item animations
    categoryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50);
    });

    // Hero content animation
    setTimeout(() => {
        productName.style.transform = 'translateY(0)';
        productName.style.opacity = '1';
    }, 500);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    addLoadAnimations();
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const categories = Object.keys(productData);
        const currentIndex = categories.indexOf(currentProduct);
        let newIndex;

        if (e.key === 'ArrowLeft') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1;
        } else {
            newIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0;
        }

        const newCategory = categories[newIndex];
        const categoryElement = document.querySelector(`[data-category="${newCategory}"]`);

        if (categoryElement) {
            selectCategory(categoryElement, newCategory);
            updateProduct(newCategory);
        }
    }
});