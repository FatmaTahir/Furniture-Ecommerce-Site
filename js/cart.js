// ===== Cart Storage =====
const CART_KEY = "furnitureCart";

function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            qty: 1
        });
    }

    saveCart(cart);
}

function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
}

function updateQty(id, newQty) {
    const cart = getCart();
    const item = cart.find(item => item.id === id);
    if (!item) return;

    if (newQty < 1) {
        removeFromCart(id);
        return;
    }

    item.qty = newQty;
    saveCart(cart);
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return sum + price * item.qty;
    }, 0);
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
    const countEls = document.querySelectorAll(".cart-count");
    const count = getCartCount();
    countEls.forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? "inline-flex" : "none";
    });
}

document.addEventListener("DOMContentLoaded", updateCartCount);