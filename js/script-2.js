const products = [
    { id: "1", name: "URBAN LUX HIGH CHAIR", price: "$2668.15", img: "assets/products/p-1.svg", rating: "assets/rating.svg", category: "Sofa", material: "Bronze", size: "S", onSale: "true" },
    { id: "2", name: "MORDERN BLACK HANGING LIGHT", price: "$1595.60", img: "assets/products/p-2.svg", rating: "assets/rating.svg", category: "Chair", material: "Oak wood", size: "M" },
    { id: "3", name: "METRO FUSION TABLE", price: "$2238.30", img: "assets/products/p-3.svg", rating: "assets/rating.svg", category: "Couch", material: "Stainless metal", size: "L", onSale: "true" },
    { id: "4", name: "LUMIN DESK LAMP", price: "$1477.80", img: "assets/products/p-4.svg", rating: "assets/rating.svg", category: "Desk", material: "Titanium", size: "S", onSale: "true" },
    { id: "5", name: "TIMELESS EDGE HANGING CLOCK", price: "$1071.60", img: "assets/products/p-5.svg", rating: "assets/rating.svg", category: "Lamp", material: "Alloy", size: "S", onSale: "true" },
    { id: "6", name: "ZENITH PENDANT LIGHT", price: "$2069.59", img: "assets/products/p-6.svg", rating: "assets/rating.svg", category: "Lamp", material: "Ceramic", size: "S" },
    { id: "7", name: "LUMIN DESK LAMP", price: "$1477.80", img: "assets/products/p-4.svg", rating: "assets/rating.svg", category: "Sofa", material: "Bronze", size: "L", onSale: "true" },
    { id: "8", name: "TIMELESS EDGE HANGING CLOCK", price: "$1071.60", img: "assets/products/p-5.svg", rating: "assets/rating.svg", category: "Chair", material: "Oak wood", size: "M" },
    { id: "9", name: "ZENITH PENDANT LIGHT", price: "$2069.59", img: "assets/products/p-6.svg", rating: "assets/rating.svg", category: "Couch", material: "Ceramic", size: "L" },
    { id: "10", name: "ZENITH PENDANT LIGHT", price: "$2069.59", img: "assets/products/p-7.svg", rating: "assets/rating.svg", category: "Couch", material: "Ceramic", size: "L" },
    { id: "11", name: "ZENITH PENDANT LIGHT", price: "$2069.59", img: "assets/products/p-8.svg", rating: "assets/rating.svg", category: "Couch", material: "Ceramic", size: "L" },
    { id: "12", name: "ZENITH PENDANT LIGHT", price: "$2069.59", img: "assets/products/p-9.svg", rating: "assets/rating.svg", category: "Couch", material: "Ceramic", size: "L" }
];

const searchGrid = document.querySelector(".search-grid");

function getPriceNumber(priceStr) {
    return parseFloat(priceStr.replace("$", ""));
}

function displaySearchProducts(items) {
    searchGrid.innerHTML = items.map(product => `
        <div class="card">
            <a href="detail.html?id=${product.id}" class="card-link">
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
            </a>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
    `).join("");
}

// ===== Accordion toggles =====
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

// ===== Shared filter + sort state =====
const activeFilters = {
    category: null,
    material: null,
    size: null,
    onSale: false,
    maxPrice: 2700
};

let sortMode = "default";

// ===== Pagination state =====
let currentPage = 1;
const itemsPerPage = 9;
let currentFilteredList = products;

const pageNumbersContainer = document.getElementById("pageNumbers");
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");

function renderPagination() {
    const totalPages = Math.max(1, Math.ceil(currentFilteredList.length / itemsPerPage));
    pageNumbersContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.className = "page-btn" + (i === currentPage ? " active" : "");
        btn.textContent = String(i).padStart(2, "0");
        btn.addEventListener("click", () => {
            currentPage = i;
            renderPage();
        });
        pageNumbersContainer.appendChild(btn);
    }

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

function renderPage() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = currentFilteredList.slice(start, end);

    displaySearchProducts(pageItems);
    renderPagination();
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage();
    }
});

nextBtn.addEventListener("click", () => {
    const totalPages = Math.max(1, Math.ceil(currentFilteredList.length / itemsPerPage));
    if (currentPage < totalPages) {
        currentPage++;
        renderPage();
    }
});

// ===== Main filter/sort pipeline =====
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

    currentFilteredList = filtered;
    currentPage = 1;
    renderPage();
}

// ===== Category buttons =====
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

// ===== Materials filter =====
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

// ===== Size filter =====
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

// ===== On Sale badge =====
const onSaleBadge = document.querySelector(".badge-on-sale");

onSaleBadge.style.cursor = "pointer";
onSaleBadge.addEventListener("click", () => {
    activeFilters.onSale = !activeFilters.onSale;
    onSaleBadge.classList.toggle("active");
    applyFilters();
});

// ===== Price range slider =====
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

// ===== Sort dropdown =====
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

// ===== Grid / List view toggle =====
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
// ===== Add to Cart (event delegation) =====
searchGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart-btn");
    if (!btn) return;

    const id = btn.dataset.id;
    const product = products.find(p => p.id === id);
    if (!product) return;

    addToCart(product);

    const originalText = btn.textContent;
    btn.textContent = "Added ✓";
    btn.classList.add("added");
    setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove("added");
    }, 1000);
});

applyFilters();