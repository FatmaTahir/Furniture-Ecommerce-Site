const featuredProducts = [
    { id: "1", name: "URBAN LUX HIGH CHAIR", price: "$2668.15", img: "assets/products/p-1.svg", rating: "assets/rating.svg", category: "SOFA" },
    { id: "2", name: "MORDERN BLACK HANGING LIGHT", price: "$1595.60", img: "assets/products/p-2.svg", rating: "assets/rating.svg", category: "HANGING LIGHT" },
    { id: "3", name: "METRO FUSION TABLE", price: "$2238.30", img: "assets/products/p-3.svg", rating: "assets/rating.svg", category: "ON SALE" },
    { id: "4", name: "LUMIN DESK LAMP", price: "$1477.80", img: "assets/products/p-4.svg", rating: "assets/rating.svg", category: "ON SALE" },
    { id: "5", name: "TIMELESS EDGE HANGING CLOCK", price: "$1071.60", img: "assets/products/p-5.svg", rating: "assets/rating.svg", category: "ON SALE" },
    { id: "6", name: "ZENITH PENDANT LIGHT", price: "$2069.59", img: "assets/products/p-6.svg", rating: "assets/rating.svg", category: "HANGING LIGHT" }
];

const productContainer = document.querySelector(".product-container");

function displayProducts(items) {
    productContainer.innerHTML = items.map(product => `
        <div class="card">
            <div class="card-img-wrapper">
                <img src="${product.img}" alt="${product.name}"/>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <div class="rating">
                <img src="${product.rating}" alt="Rating"/>
            </div>
            <h4 class="product-price">${product.price}</h4>
        </div>
    `).join('');
}

displayProducts(featuredProducts);

const btns = document.querySelectorAll(".category-btn");
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        btns.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");

        const category = e.target.innerText.trim();
        if (category === "ALL") {
            displayProducts(featuredProducts);
        } else {
            const filteredProducts = featuredProducts.filter(product => product.category === category);
            displayProducts(filteredProducts);
        }
    });
});




