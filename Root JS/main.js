const products = [
    {
        id: "cobalt-amber",
        name: "Cobalt Amber",
        description: "A Chic, Sultry Amber",
        price: "€145",
        category: "best-sellers",
        img1: "./Images/amber-bg.jpg",
        img2: "./Images/amber.png",
        badge: "BEST SELLER",
    },
    {
        id: "the-apartment",
        name: "The Apartment",
        description: "A Dark And Sophisticated Gourmand",
        price: "€145",
        category: "best-sellers",
        img1: "./Images/apartment-bg.jpg",
        img2: "./Images/apartment.png",
        badge: "NEW",
    },
    {
        id: "black-anise",
        name: "Black Anise",
        description: "A Vibrant, Smoky Amber",
        price: "€145",
        category: "best-sellers",
        img1: "./Images/anise-bg.jpg",
        img2: "./Images/anise.png",
        badge: "",
    },
    {
        id: "the-apartment",
        name: "The Apartment",
        description: "A Dark And Sophisticated Gourmand",
        price: "€145",
        category: "fragrances",
        img1: "./Images/apartment-bg.jpg",
        img2: "./Images/apartment.png",
        badge: "NEW",
    },
    {
        id: "CYAN NORI",
        name: "CYAN NORI",
        description: "A Sweet, Salty Musk",
        price: "€55",
        category: "fragrances",
        img1: "./Images/nori-bg.jpg",
        img2: "./Images/nori.png",
        badge: "NEW",
    },
    {
        id: "PINK IRIS",
        name: "PINK IRIS",
        description: "A Comtemporary, Classic Floral",
        price: "€195",
        category: "fragrances",
        img1: "./Images/iris-bg.jpg",
        img2: "./Images/iris.png",
        badge: "",
    },
    {
        id: "CYAN NORI MINI",
        name: "CYAN NORI MINI",
        description: "A Sweet, Salty Musk",
        price: "€30",
        category: "minis",
        img1: "./Images/nori-bg.jpg",
        img2: "./Images/nori-set.png",
        badge: "BEST SELLER",
    },
    {
        id: "GREEN CEDAR MINI",
        name: "GREEN CEDAR MINI",
        description: "A Velvety, Rich Wood",
        price: "€30",
        category: "minis",
        img1: "./Images/cedar-bg.jpg",
        img2: "./Images/cedar-set.png",
        badge: "BEST SELLER",
    },
    {
        id: "LAUNDRY DAY MINI",
        name: "LAUNDRY DAY MINI",
        description: "A Verdant, Sun-Filled Citrus",
        price: "€30",
        category: "minis",
        img1: "./Images/laundry-bg.webp",
        img2: "./Images/laundry-set-2.png",
        badge: "BEST SELLER",
    },
    {
        id: "SCENE 01",
        name: "SCENE 01",
        description: "Green Tea, Tuzu, Verbena",
        price: "€55",
        category: "room-sprays",
        img1: "./Images/scene1-bg.jpg",
        img2: "./Images/scene1.png",
        badge: "AWARD-WINNING",
    },
    {
        id: "SCENE 02",
        name: "SCENE 02",
        description: "Fig, Marigold, Cedarwood",
        price: "€55",
        category: "room-sprays",
        img1: "./Images/scene2-bg.jpg",
        img2: "./Images/scene2.png",
        badge: "BEST SELLER",
    },
    {
        id: "SCENE 03",
        name: "SCENE 03",
        description: "Leather, Tonka, Vanilla",
        price: "€55",
        category: "room-sprays",
        img1: "./Images/scene3-bg.jpg",
        img2: "./Images/scene3.png",
        badge: "BEST SELLER",
    },
    {
        id: "FRESH MINI PERFUME SET",
        name: "FRESH MINI PERFUME SET",
        description: "A Trio With Universal Appeal",
        price: "€70",
        category: "sets",
        img1: "./Images/nurtureset-bg.jpg",
        img2: "./Images/nurture-set.png",
        badge: "",
    },
    {
        id: "BUILD YOUR OWN PERFUME SET",
        name: "BUILD YOUR OWN PERFUME SET",
        description: "Create Your Own Mini Set",
        price: "€70",
        category: "sets",
        img1: "./Images/amberset-bg.jpg",
        img2: "./Images/amber-set.png",
        badge: "",
    },
    {
        id: "FLORAL MINI PERFUME SET",
        name: "FLORAL MINI PERFUME SET",
        description: "Designed For The Anthophile",
        price: "€70",
        category: "sets",
        img1: "./Images/laundryset-bg.jpg",
        img2: "./Images/laundry-set.png",
        badge: "",
    },
];

let cart = [];
const productsGrid = document.querySelector(".products-grid");

function renderProducts(category) {
    const filtered = products.filter((p) => p.category === category);
    productsGrid.innerHTML = filtered
        .map(
            (product) => `
    <div class="product-card" data-product="${product.id}">
      <div class="product-image">
        <img src="${product.img1}" alt="${product.name}" class="bottom-image" />
        <img src="${product.img2}" alt="${product.name}" class="top-image" />
        ${product.badge
                    ? `<div class="product-badge new">${product.badge}</div>`
                    : ""
                }
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <div class="quick-add-wrapper">
          <button class="quick-add-btn" data-product="${product.id
                }">QUICK ADD</button>
          <div class="quick-add-options">
            <button class="option-btn">6ml</button>
            <button class="option-btn">50ml</button>
          </div>
        </div>
      </div>
    </div>
  `
        )
        .join("");

    setupQuickAddButtons();
}

function setupQuickAddButtons() {
    document.querySelectorAll(".quick-add-btn").forEach((button) => {
        button.addEventListener("click", handleQuickAdd);
    });
}

function handleQuickAdd(e) {
    e.preventDefault();
    const productId = e.target.dataset.product;
    const product = products.find((p) => p.id === productId);

    if (product) {
        cart.push(product);
        saveToFirestoreCart(product);
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
    document.querySelectorAll(".mid-text .right h5").forEach((item) => {
        item.addEventListener("click", () => {
            const category = item.dataset.category;

            document
                .querySelectorAll(".mid-text .right h5")
                .forEach((el) => el.classList.remove("active"));
            item.classList.add("active");

            renderProducts(category);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts("best-sellers");
    setupCategorySwitching();
});

