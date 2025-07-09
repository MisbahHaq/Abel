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
