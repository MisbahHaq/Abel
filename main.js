const products = [
    {
        id: "cobalt-amber",
        name: "Cobalt Amber",
        description: "A Chic, Sultry Amber",
        price: "€145",
        category: "best-sellers",
        img1: "./Images/bg1.webp",
        img2: "./Images/bg-bottle.webp",
        badge: "BEST SELLER",
    },
    {
        id: "the-apartment",
        name: "The Apartment",
        description: "A Dark And Sophisticated Gourmand",
        price: "€145",
        category: "best-sellers",
        img1: "./Images/bg2.webp",
        img2: "./Images/bg-bottle2.webp",
        badge: "NEW",
    },
    {
        id: "black-anise",
        name: "Black Anise",
        description: "A Vibrant, Smoky Amber",
        price: "€145",
        category: "best-sellers",
        img1: "./Images/bg3.webp",
        img2: "./Images/bg-bottle3.webp",
        badge: "",
    },
    {
        id: "the-apartment",
        name: "The Apartment",
        description: "A Dark And Sophisticated Gourmand",
        price: "€145",
        category: "fragrances",
        img1: "./Images/bg2.webp",
        img2: "./Images/bg-bottle2.webp",
        badge: "NEW",
    },
    {
        id: "CYAN NORI",
        name: "CYAN NORI",
        description: "A Sweet, Salty Musk",
        price: "€55",
        category: "fragrances",
        img1: "./Images/bg4.webp",
        img2: "./Images/bg-bottle4.webp",
        badge: "NEW",
    },
    {
        id: "PINK IRIS",
        name: "PINK IRIS",
        description: "A Comtemporary, Classic Floral",
        price: "€195",
        category: "fragrances",
        img1: "./Images/bg5.webp",
        img2: "./Images/bg-bottle5.webp",
        badge: "",
    },
    {
        id: "CYAN NORI MINI",
        name: "CYAN NORI MINI",
        description: "A Sweet, Salty Musk",
        price: "€30",
        category: "minis",
        img1: "./Images/bg4.webp",
        img2: "./Images/bg-bottle6.webp",
        badge: "BEST SELLER",
    },
    {
        id: "GREEN CEDAR MINI",
        name: "GREEN CEDAR MINI",
        description: "A Velvety, Rich Wood",
        price: "€30",
        category: "minis",
        img1: "./Images/bg6.webp",
        img2: "./Images/bg-bottle7.webp",
        badge: "BEST SELLER",
    },
    {
        id: "LAUNDRY DAY MINI",
        name: "LAUNDRY DAY MINI",
        description: "A Verdant, Sun-Filled Citrus",
        price: "€30",
        category: "minis",
        img1: "./Images/bg7.webp",
        img2: "./Images/bg-bottle8.webp",
        badge: "BEST SELLER",
    },
    {
        id: "SCENE 01",
        name: "SCENE 01",
        description: "Green Tea, Tuzu, Verbena",
        price: "€55",
        category: "room-sprays",
        img1: "./Images/bg8.webp",
        img2: "./Images/bg-bottle9.webp",
        badge: "AWARD-WINNING",
    },
    {
        id: "SCENE 02",
        name: "SCENE 02",
        description: "Fig, Marigold, Cedarwood",
        price: "€55",
        category: "room-sprays",
        img1: "./Images/bg9.webp",
        img2: "./Images/bg-bottle10.webp",
        badge: "BEST SELLER",
    },
    {
        id: "SCENE 03",
        name: "SCENE 03",
        description: "Leather, Tonka, Vanilla",
        price: "€55",
        category: "room-sprays",
        img1: "./Images/bg10.webp",
        img2: "./Images/bg-bottle11.webp",
        badge: "BEST SELLER",
    },
    {
        id: "FRESH MINI PERFUME SET",
        name: "FRESH MINI PERFUME SET",
        description: "A Trio With Universal Appeal",
        price: "€70",
        category: "sets",
        img1: "./Images/bg11.webp",
        img2: "./Images/bg-bottle12.webp",
        badge: "",
    },
    {
        id: "BUILD YOUR OWN PERFUME SET",
        name: "BUILD YOUR OWN PERFUME SET",
        description: "Create Your Own Mini Set",
        price: "€70",
        category: "sets",
        img1: "./Images/bg14.jpg",
        img2: "./Images/bg-bottle13.webp",
        badge: "",
    },
    {
        id: "FLORAL MINI PERFUME SET",
        name: "FLORAL MINI PERFUME SET",
        description: "Designed For The Anthophile",
        price: "€70",
        category: "sets",
        img1: "./Images/bg12.webp",
        img2: "./Images/bg-bottle14.webp",
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

const productData = {
    citrus: {
        image:
            "./Images/bg4.webp",
        name: "CITRUS BURST",
        notes: {
            top: "Tangerine, white peach",
            heart: "Plant derived musk",
            base: "Nori",
        },
        description:
            "Lazing on the beach after an ocean swim — sand on your skin, juice on your chin, an ocean breeze in your hair. Award-winning, best-selling Cyan Nori is a truly original and genderless aquatic scent.",
    },
    green: {
        image:
            "./Images/bg6.webp",
        name: "GREEN CEDAR",
        notes: {
            top: "Magnolia, cardamom",
            heart: "Cypriol, guaiac wood",
            base: "Texas and atlas mountain cedar",
        },
        description:
            "Walking through dense forest — tree- tops swaying in the wind, soft moss underfoot, fragrant sap dripping from branches overhead.Green Cedar is a genderless, woody scent both intoxicating and invigorating.",
    },
    water: {
        image:
            "./Images/bg1.webp",
        name: "CYAN NORI",
        notes: {
            top: "Tangerine, white peach",
            heart: "Plant derived musk",
            base: "Nori",
        },
        description:
            "Lazing on the beach after an ocean swim — sand on your skin, juice on your chin, an ocean breeze in your hair. Award-winning, best-selling Cyan Nori is a truly original and genderless aquatic scent.",
    },
    musk: {
        image:
            "./Images/bg12.webp",
        name: "NURTURE",
        notes: {
            top: "Fleur l'orange, bulgarian rose, lentisque",
            heart: "Jasmin Sambac, Ginger",
            base: "East indian sandalwood",
        },
        description:
            "A morning to yourself—slept-in sheets, warm cup of tea in hand, a gentle breeze blowing through the window. Nurture is created in collaboration with Grey Label to honor mothers—and others.",
    },
    floral: {
        image:
            "./Images/bg3.webp",
        name: "PINK IRIS",
        notes: {
            top: "Sichuan pepper, raspberry leaf, grapefruit, basil",
            heart: "Orris root(iris), rose, jasmine",
            base: "Vanilla, musk",
        },
        description:
            "Picking flowers in full sun — colours vivid in electric light, fragrant petals wilting in the relentless heat. Award-winning Pink Iris is a boldly sweet but spicy scent, a modern take on the classic floral.",
    },
    spice: {
        image:
            "./Images/bg5.webp",
        name: "COBALT AMBER",
        notes: {
            top: "Star anise",
            heart: "Cacao, blackcurrant",
            base: "Tobacco",
        },
        description:
            "The end of a night out — dark, busy streets, dancing in cramped spaces, a smoky, sweet taste on your tongue. Black Anise is a sultry, late-night scent — long-lasting and immersive.",
    },
    wood: {
        image:
            "./Images/bg7.webp",
        name: "PAUSE",
        notes: {
            top: "Violet Leaf",
            heart: "Mimosa, Narcissus",
            base: "Hay Absolute",
        },
        description:
            "Stillness after warm summer rain—a collective quiet, the smell of wet earth filling the air. Award-winning Pause was created as a tribute to the seasons of hormonal change.",
    },
    amber: {
        image:
            "./Images/bg11.webp",
        name: "COBALT AMBER",
        notes: {
            top: "Pink pepper, cardamom, juniper berry",
            heart: "Cacao, tonka, peru balsam",
            base: "Amber",
        },
        description:
            "A cosy night in cold weather — curtains closed, fireplace crackling, a frosted glass of your favourite drink nearby. Cobalt Amber is a luxurious, sophisticated evening scent.",
    },
    fruit: {
        image:
            "./Images/bg9.webp",
        name: "GOLDEN NEROLI",
        notes: {
            top: "Neroli, matcha tea",
            heart: "Petitgrain, ylang ylang, jasmin sambac",
            base: "East indian sandalwood, vanilla",
        },
        description:
            "Eating freshly cut oranges in the garden — sticky skin, flowers bursting, late afternoon sun casting everything in a golden glow. Golden Neroli bottles the feeling of a long day basking in the warmth of the sun.",
    },
    gourmand: {
        image:
            "./Images/bg10.webp",
        name: "THE APARTMENT",
        notes: {
            top: "Tart cherry, rum",
            heart: "Tuberose, cacao, jasmine",
            base: "Myrrh, tolu balsam",
        },
        description:
            "Haussmannian architecture.Light filtering through half- drawn velvet curtains.A cherry stained napkin.",
    },
};

const categoryItems = document.querySelectorAll(".scent-category-item");
const heroImage = document.getElementById("fragrance-hero-img");
const productName = document.querySelector(".fragrance-product-name");
const noteGroups = document.querySelectorAll(".fragrance-note-group");
const moodDescription = document.querySelector(".fragrance-mood-description");
const shopButton = document.querySelector(".fragrance-shop-button");
const dots = document.querySelectorAll(".fragrance-dot");

let currentProduct = "wood";

function init() {
    updateProduct(currentProduct);
    addEventListeners();
}

function addEventListeners() {
    categoryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const category = item.dataset.category;
            if (productData[category]) {
                selectCategory(item, category);
                updateProduct(category);
            }
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            updateActiveDot(index);
        });
    });

    shopButton.addEventListener("click", () => {
        shopButton.style.transform = "scale(0.95)";
        setTimeout(() => {
            shopButton.style.transform = "scale(1)";
        }, 150);

        console.log(`Adding ${productData[currentProduct].name} to cart`);
    });

    heroImage.addEventListener("mouseenter", () => {
        heroImage.style.transform = "scale(1.05)";
    });

    heroImage.addEventListener("mouseleave", () => {
        heroImage.style.transform = "scale(1)";
    });
}

function selectCategory(selectedItem, category) {
    categoryItems.forEach((item) => item.classList.remove("active"));

    selectedItem.classList.add("active");

    currentProduct = category;
}

function updateProduct(category) {
    const product = productData[category];
    if (!product) return;

    heroImage.style.opacity = "0.7";
    setTimeout(() => {
        heroImage.src = product.image;
        heroImage.style.opacity = "1";
    }, 200);

    productName.style.transform = "translateY(20px)";
    productName.style.opacity = "0";
    setTimeout(() => {
        productName.textContent = product.name;
        productName.style.transform = "translateY(0)";
        productName.style.opacity = "1";
    }, 200);

    const noteValues = document.querySelectorAll(".fragrance-note-value");
    noteValues[0].textContent = product.notes.top;
    noteValues[1].textContent = product.notes.heart;
    noteValues[2].textContent = product.notes.base;

    moodDescription.style.opacity = "0";
    setTimeout(() => {
        moodDescription.textContent = product.description;
        moodDescription.style.opacity = "1";
    }, 200);

    shopButton.textContent = `SHOP ${product.name}`;
}

function updateActiveDot(activeIndex) {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
    });
}

function smoothScroll() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function addLoadAnimations() {
    categoryItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        setTimeout(() => {
            item.style.transition = "all 0.6s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 50);
    });

    setTimeout(() => {
        productName.style.transform = "translateY(0)";
        productName.style.opacity = "1";
    }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
    init();
    addLoadAnimations();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const categories = Object.keys(productData);
        const currentIndex = categories.indexOf(currentProduct);
        let newIndex;

        if (e.key === "ArrowLeft") {
            newIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1;
        } else {
            newIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0;
        }

        const newCategory = categories[newIndex];
        const categoryElement = document.querySelector(
            `[data-category="${newCategory}"]`
        );

        if (categoryElement) {
            selectCategory(categoryElement, newCategory);
            updateProduct(newCategory);
        }
    }
});
