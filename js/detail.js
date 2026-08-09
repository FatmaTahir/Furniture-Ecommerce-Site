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

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

console.log("Product ID:", productId);

const selectedProduct =
    products.find(product => product.id === productId);

console.log("Selected product:", selectedProduct);


if (!selectedProduct) {
    console.error("Product not found!");
} else {

    const breadcrumbTitle = document.getElementById("breadcrumb-title");
    const detailName = document.getElementById("detail-name");

    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = selectedProduct.name;
    }

    if (detailName) {
        detailName.textContent = selectedProduct.name;
    }


    // Price
    const detailPrice = document.getElementById("detail-price");

    if (detailPrice) {
        detailPrice.textContent = selectedProduct.price;
    }


    // Image
    const detailImg = document.getElementById("detail-img");

    if (detailImg) {
        detailImg.src = selectedProduct.img;
        detailImg.alt = selectedProduct.name;
    }


    // Sale badge
    const detailSale = document.getElementById("detail-sale");

    if (detailSale) {
        if (selectedProduct.onSale === "true") {
            detailSale.style.display = "inline-block";
        } else {
            detailSale.style.display = "none";
        }
    }


    // Quantity
    let quantity = 1;

    const qtyVal = document.getElementById("qty-count");
    const qtyMinus = document.getElementById("qty-minus");
    const qtyPlus = document.getElementById("qty-plus");


    if (qtyMinus) {
        qtyMinus.addEventListener("click", () => {

            if (quantity > 1) {
                quantity--;

                if (qtyVal) {
                    qtyVal.textContent = `Number: ${quantity}`;
                }
            }

        });
    }


    if (qtyPlus) {
        qtyPlus.addEventListener("click", () => {

            quantity++;

            if (qtyVal) {
                qtyVal.textContent = `Number: ${quantity}`;
            }

        });
    }
    // Add to Cart
    const addToCartBtn = document.getElementById("detail-add-to-cart");

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            for (let i = 0; i < quantity; i++) {
                addToCart(selectedProduct);
            }

            const originalText = addToCartBtn.textContent;
            addToCartBtn.textContent = "Added ✓";
            addToCartBtn.classList.add("added");

            setTimeout(() => {
                addToCartBtn.textContent = originalText;
                addToCartBtn.classList.remove("added");
            }, 1000);
        });
    }
}
    const addToCartBtn = document.getElementById("detail-add-to-cart");
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            for (let i = 0; i < quantity; i++) {
                addToCart(selectedProduct);
            }
            addToCartBtn.textContent = "Added ✓";
            setTimeout(() => {
                addToCartBtn.textContent = "Add to Cart";
            }, 1000);
        });
    }