const products = [
    { id: "1", name: "URBAN LUX HIGH CHAIR", price: "$2668.15", img: "assets/products/p-1.svg", rating: "assets/rating.svg", category: "Sofa" },
    { id: "2", name: "MORDERN BLACK HANGING LIGHT", price: "$1595.60", img: "assets/products/p-2.svg", rating: "assets/rating.svg", category: "Chair" },
    { id: "3", name: "METRO FUSION TABLE", price: "$2238.30", img: "assets/products/p-3.svg", rating: "assets/rating.svg", category: "Couch" },
    { id: "4", name: "LUMIN DESK LAMP", price: "$1477.80", img: "assets/products/p-4.svg", rating: "assets/rating.svg", category: "Desk" },
    { id: "5", name: "TIMELESS EDGE HANGING CLOCK", price: "$1071.60", img: "assets/products/p-5.svg", rating: "assets/rating.svg", category: "Lamp" },
    { id: "6", name: "ZENITH PENDANT LIGHT", price: "$2069.59", img: "assets/products/p-6.svg", rating: "assets/rating.svg", category: "Lamp" }, 
    { id: "7", name: "LUMIN DESK LAMP", price: "$1477.80", img: "assets/products/p-4.svg", rating: "assets/rating.svg", category: "Sofa" },
    { id: "8", name: "TIMELESS EDGE HANGING CLOCK", price: "$1071.60", img: "assets/products/p-5.svg", rating: "assets/rating.svg", category: "Chair" },
    { id: "9", name: "ZENITH PENDANT LIGHT", price: "$2069.59", img: "assets/products/p-6.svg", rating: "assets/rating.svg", category: "Couch" }
];
const searchGrid = document.querySelector(".search-grid");

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


// Show ALL products by default
displaySearchProducts(products);


// Category buttons
const searchbtns = document.querySelectorAll(".searchCategory-btn");

searchbtns.forEach(btn => {

    btn.addEventListener("click", function(e) {

        // Remove active from all buttons
        searchbtns.forEach(b => {
            b.classList.remove("active");
        });

        // Add active to clicked button
        e.currentTarget.classList.add("active");

        const category = e.currentTarget.innerText.trim();

        

            const filteredProducts = products.filter(function(product) {

                return product.category == category;

            });

            displaySearchProducts(products);
        

    });

});