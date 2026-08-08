const products = [
    { id: "1", name: "URBAN LUX HIGH CHAIR", price: "$2668.15", img: "assets/products/p-1.svg", rating: "assets/rating.svg", category: "Sofa", material: "Bronze", size: "S", onSale: "true" },
    { id: "2", name: "MORDERN BLACK HANGING LIGHT", price: "$1595.60", img: "assets/products/p-2.svg", rating: "assets/rating.svg", category: "Chair", material: "Oak wood", size: "M" },
    { id: "3", name: "METRO FUSION TABLE", price: "$2238.30", img: "assets/products/p-3.svg", rating: "assets/rating.svg", category: "Couch", material: "Stainless metal", size: "L", onSale: "true" },
    { id: "4", name: "LUMIN DESK LAMP", price: "$1477.80", img: "assets/products/p-4.svg", rating: "assets/rating.svg", category: "Desk", material: "Titanium", size: "S", onSale: "true" },
    { id: "5", name: "TIMELESS EDGE HANGING CLOCK", price: "$1071.60", img: "assets/products/p-5.svg", rating: "assets/rating.svg", category: "Lamp", material: "Alloy", size: "S", onSale: "true" },
    { id: "6", name: "ZENITH PENDANT LIGHT", price: "$2069.59", img: "assets/products/p-6.svg", rating: "assets/rating.svg", category: "Lamp", material: "Ceramic", size: "S" },
    { id: "7", name: "LUMIN DESK LAMP", price: "$1477.80", img: "assets/products/p-4.svg", rating: "assets/rating.svg", category: "Sofa", material: "Bronze", size: "L", onSale: "true" },
    { id: "8", name: "TIMELESS EDGE HANGING CLOCK", price: "$1071.60", img: "assets/products/p-5.svg", rating: "assets/rating.svg", category: "Chair", material: "Oak wood", size: "M" },
    { id: "9", name: "ZENITH PENDANT LIGHT", price: "$2069.59", img: "assets/products/p-6.svg", rating: "assets/rating.svg", category: "Couch", material: "Ceramic", size: "L" }
];

const searchGrid = document.querySelector(".search-grid");

function getPriceNumber(priceStr) {
    return parseFloat(priceStr.replace("$", ""));
}

function displaySearchProducts(items) {
    searchGrid.innerHTML = items.map(product => `
        <div class="card">
            <div class="card-img-wrapper">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <h3 class="product-name">
                ${product.name}
            </h3>
            <div class="rating">
                <img src="${product.rating}" alt="Rating">
            </div>
            <h4 class="product-price">
                ${product.price}
            </h4>
        </div>
    `).join("");
}

displaySearchProducts(products);
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordion = header.closest(".filter-accordion");
        const icon = header.querySelector(".icon");
        accordion.classList.toggle("open");
        if (icon) {
            icon.textContent = accordion.classList.contains("open") ? "-" : "+";
        }
    });
});

const activeFilters = {
    category: null,
    material: null,
    size: null,
    onSale: false,
    maxPrice: 2700
};

let sortMode = "default"; 

function applyFilters() {
    let filtered = products.filter(product => {
        if (activeFilters.category && product.category !== activeFilters.category) return false;
        if (activeFilters.material && product.material !== activeFilters.material) return false;
        if (activeFilters.size && product.size !== activeFilters.size) return false;
        if (activeFilters.onSale && product.onSale !== "true") return false;
        if (getPriceNumber(product.price) > activeFilters.maxPrice) return false;
        return true;
    });

    if (sortMode === "lowToHigh") {
        filtered = filtered.slice().sort((a, b) => getPriceNumber(a.price) - getPriceNumber(b.price));
    } else if (sortMode === "highToLow") {
        filtered = filtered.slice().sort((a, b) => getPriceNumber(b.price) - getPriceNumber(a.price));
    }

    displaySearchProducts(filtered);
}

const searchbtns = document.querySelectorAll(".searchCategory-btn");

searchbtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.innerText.trim();
        const isAlreadyActive = e.currentTarget.classList.contains("active");

        searchbtns.forEach(b => b.classList.remove("active"));

        if (isAlreadyActive) {
            activeFilters.category = null;
        } else {
            e.currentTarget.classList.add("active");
            activeFilters.category = category;
        }

        applyFilters();
    });
});

const materialList = document.querySelector(".material-list");
const materialLis = materialList.querySelectorAll("li");

materialLis.forEach(li => {
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
        const value = li.querySelector("span:first-child").textContent.trim();
        const isAlreadyActive = li.classList.contains("active");

        materialLis.forEach(l => l.classList.remove("active"));

        if (isAlreadyActive) {
            activeFilters.material = null;
        } else {
            li.classList.add("active");
            activeFilters.material = value;
        }

        applyFilters();
    });
});

const sizeList = document.querySelector(".size-list");
const sizeLis = sizeList.querySelectorAll("li");

sizeLis.forEach(li => {
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
        const value = li.querySelector("span:first-child").textContent.trim();
        const isAlreadyActive = li.classList.contains("active");

        sizeLis.forEach(l => l.classList.remove("active"));

        if (isAlreadyActive) {
            activeFilters.size = null;
        } else {
            li.classList.add("active");
            activeFilters.size = value;
        }

        applyFilters();
    });
});
const onSaleBadge = document.querySelector(".badge-on-sale");

onSaleBadge.style.cursor = "pointer";
onSaleBadge.addEventListener("click", () => {
    activeFilters.onSale = !activeFilters.onSale;
    onSaleBadge.classList.toggle("active");
    applyFilters();
});
const priceRange = document.getElementById("priceRange");
const priceLabel = document.getElementById("priceLabel");
const btnApply = document.querySelector(".btn-apply");

priceRange.addEventListener("input", () => {
    priceLabel.textContent = `$0 - $${priceRange.value}`;
});

btnApply.addEventListener("click", () => {
    activeFilters.maxPrice = Number(priceRange.value);
    applyFilters();
});
const sortDropdown = document.querySelector(".sort-dropdown");
const sortLabel = document.getElementById("sortLabel");
const sortMenuItems = document.querySelectorAll(".sort-menu li");
const sortLabels = { default: "Default", lowToHigh: "Price: Low to High", highToLow: "Price: High to Low" };

sortDropdown.addEventListener("click", (e) => {
    if (e.target.closest(".sort-menu")) return;
    sortDropdown.classList.toggle("menu-open");
});

sortMenuItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();

        sortMode = item.dataset.sort;
        sortLabel.textContent = sortLabels[sortMode];

        sortMenuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        sortDropdown.classList.remove("menu-open");
        applyFilters();
    });
});

document.addEventListener("click", (e) => {
    if (!sortDropdown.contains(e.target)) {
        sortDropdown.classList.remove("menu-open");
    }
});

const btnViewGrid = document.querySelector(".btn-view-grid");
const btnViewList = document.querySelector(".btn-view-list");

btnViewGrid.addEventListener("click", () => {
    btnViewGrid.classList.add("active");
    btnViewList.classList.remove("active");
    searchGrid.classList.remove("list-view");
});

btnViewList.addEventListener("click", () => {
    btnViewList.classList.add("active");
    btnViewGrid.classList.remove("active");
    searchGrid.classList.add("list-view");
});