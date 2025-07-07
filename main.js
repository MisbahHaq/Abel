const products = [
    {
        id: "cobalt-amber",
        name: "Cobalt Amber",
        description: "A Chic, Sultry Amber",
        price: "€145",
        category: "fragrances",
        img1: "./Images/bg1.webp",
        img2: "./Images/bg-bottle.webp",
        badge: "BEST SELLER"
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
        id: "black-anise",
        name: "Black Anise",
        description: "A Vibrant, Smoky Amber",
        price: "€145",
        category: "fragrances",
        img1: "./Images/bg3.webp",
        img2: "./Images/bg-bottle3.webp",
        badge: ""
    },
    {
        id: "mini-cedar",
        name: "Mini Cedar",
        description: "Compact woody scent",
        price: "€35",
        category: "minis",
        img1: "./Images/mini1.webp",
        img2: "./Images/mini-bottle.webp",
        badge: "MINI"
    },
    {
        id: "room-lavender",
        name: "Lavender Room Spray",
        description: "Calm your space instantly",
        price: "€55",
        category: "room-sprays",
        img1: "./Images/room1.webp",
        img2: "./Images/room1-bottle.webp",
        badge: ""
    },
    {
        id: "discovery-set",
        name: "Discovery Set",
        description: "Explore our full collection",
        price: "€95",
        category: "sets",
        img1: "./Images/set1.webp",
        img2: "./Images/set1-bottle.webp",
        badge: ""
    }
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