# 🛋️ FURNITUR – Furniture E-Commerce Site

![HTML5](https://img.shields.io/badge/HTML5-Structure-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Figma](https://img.shields.io/badge/Design-Figma-purple?logo=figma)
![License](https://img.shields.io/badge/Status-Portfolio-success)

FURNITUR is a fully responsive furniture e-commerce website built from a high-fidelity Figma design and implemented entirely in **vanilla HTML, CSS, and JavaScript** — no frameworks, no build tools. It takes a shopper through the complete purchase journey: browsing, filtering, product details, cart management, and a guided multi-step checkout, all powered by client-side state management.

The project focuses on pixel-accurate design implementation, dynamic DOM rendering from data, and building a persistent shopping cart and checkout flow using only `localStorage` — no backend required.

---

# 📸 Preview

```
Home Page
```
<img width="945" height="447" alt="image" src="https://github.com/user-attachments/assets/df0f50d6-589f-44f9-9ca3-8d8943bb618a" />
<img width="940" height="444" alt="image" src="https://github.com/user-attachments/assets/d2fc793e-ff00-4b0f-80dd-ae87f8336a5b" />
<img width="948" height="445" alt="image" src="https://github.com/user-attachments/assets/f5ae3578-1b3f-481f-a8b5-edda0f29b2c3" />
<img width="951" height="442" alt="image" src="https://github.com/user-attachments/assets/0ae3ff0a-04a9-4521-8700-a1c82ac5a647" />
<img width="946" height="419" alt="image" src="https://github.com/user-attachments/assets/2db84794-6662-4efc-813f-d0677b60c8ae" />

```
Search Results & Filters
```
<img width="940" height="447" alt="image" src="https://github.com/user-attachments/assets/abb71175-eee0-4091-adc2-f48de9a336d5" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c4b1d247-9a1e-4746-a553-1a1ff8d21637" />
<img width="941" height="444" alt="image" src="https://github.com/user-attachments/assets/1b8accc5-8dc0-4ad3-8e9a-f6103be9fd61" />

```
Product Details
```
<img width="939" height="431" alt="image" src="https://github.com/user-attachments/assets/ef5a2948-4798-4d91-9160-43d78410c265" />
<img width="940" height="443" alt="image" src="https://github.com/user-attachments/assets/a31e06b8-ba23-4a09-84ac-7f1ff99f873a" />
<img width="936" height="435" alt="image" src="https://github.com/user-attachments/assets/fc6f5b6c-a57f-4b4e-9e07-d2d54a2cb7b9" />

```
Shopping Cart
```
<img width="940" height="444" alt="image" src="https://github.com/user-attachments/assets/1e7f67cc-5c41-48b4-af8e-efeac3001aa6" />
<img width="937" height="438" alt="image" src="https://github.com/user-attachments/assets/18c25f51-335b-4a68-b9d6-98bdaefe285a" />

```
Multi-Step Checkout
```
<img width="939" height="444" alt="image" src="https://github.com/user-attachments/assets/85d0a783-ebc8-4a78-a616-1d32ef2564fb" />
<img width="941" height="442" alt="image" src="https://github.com/user-attachments/assets/e06bdab9-c62f-416d-b349-7d541bdcd244" />
<img width="937" height="444" alt="image" src="https://github.com/user-attachments/assets/2053ce3c-9aa2-43f5-941d-8e11f37c83ea" />
<img width="939" height="440" alt="image" src="https://github.com/user-attachments/assets/46b3b5e4-070d-4af0-83e3-e3e9c1fd692f" />
<img width="939" height="443" alt="image" src="https://github.com/user-attachments/assets/9f99947e-1aac-4a91-bd20-f38551cf279a" />


---

# ✨ Features

## Shopping Features

- Browse furniture products on the homepage
- Category-based product filtering (Chair, Sofa, Couch, Desk, Lamp)
- Search results page with combined filters
- Filter by material, size, and price range (custom slider)
- "On Sale" toggle filter
- Sort by price (low to high / high to low)
- Grid view and list view toggle
- Pagination across product pages
- Dynamic product detail page (routed via URL query parameters)
- Product image display with type/color option selectors
- Quantity picker
- Product tabs (Description, Fits & Features)
- Customer review display and review submission form
- FAQ accordion section

---

## Cart & Checkout Features

- Add to Cart from homepage, search results, and product detail page
- Persistent cart using `localStorage` — survives reloads and navigation
- Live cart item-count badge synced across every page
- Quantity adjustment and item removal directly in the cart
- Real-time subtotal, shipping, and total calculation
- **4-step guided checkout flow**, matching the Figma step-tracker design:
  1. Cart Review
  2. Customer Information (with form validation)
  3. Shipping & Payment (selectable carriers with dynamic pricing, Credit Card / PayPal toggle with contextual fields)
  4. Review & Confirmation (auto-populated summary with edit links back to each step)
- Order confirmation flow that clears cart and checkout data on completion

---

# 🚀 Tech Stack

## Frontend

- HTML5 (semantic structure)
- CSS3 (Flexbox, Grid, custom properties — no framework)
- Vanilla JavaScript (ES6+)
- `localStorage` for cart and checkout state persistence

## Design

- Figma (component-accurate implementation, including hover/active/selected states)

No frameworks, bundlers, or backend dependencies are used — the entire site runs directly in the browser.

---

# 🎨 UI Theme

FURNITUR follows a clean, minimalist, editorial furniture-catalog aesthetic featuring:

- Monochrome black-and-white base palette with a single red accent for pricing/sale highlights
- Generous white space and large product imagery
- Uppercase, letter-spaced typography for headings and labels
- Circular soft-gray backdrops behind product imagery
- Consistent centered section headings across every page
- Fully responsive layouts across desktop, tablet, and mobile

---

# 🛒 E-Commerce Functionalities

- Product catalog with dynamic rendering from JS data
- Multi-filter product search (category, material, size, price, sale status)
- Sorting and pagination
- Shopping cart with quantity management
- Multi-step checkout (customer info → shipping/payment → review)
- Shipping carrier selection with dynamic price calculation
- Payment method selection (Credit Card / PayPal) with conditional form fields
- Order review and confirmation before submission

---

# 📁 Project Structure

```
FURNITUR
│
├── index.html                 # Homepage — hero, featured products, promo banner
├── search-results.html        # Product listing with filters, sort & pagination
├── product-detail.html        # Single product view with reviews and FAQ
├── cart.html                  # Shopping cart (checkout step 1)
├── checkout.html              # Customer information (checkout step 2)
├── shipping.html              # Shipping & payment method (checkout step 3)
├── review.html                # Order review & confirmation (checkout step 4)
│
├── style.css                  # Single global stylesheet (with full responsive breakpoints)
│
├── js/
│   ├── cart.js                 # Shared cart state module (get/add/update/remove/total)
│   ├── script.js               # Homepage logic — featured products, category filter, search
│   ├── script-2.js             # Search results logic — filters, sort, pagination, view toggle
│   └── detail.js                # Product detail page logic
│
└── assets/                    # Icons, product images, illustrations (SVG)
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/FatmaTahir/Furniture-Ecommerce-Site.git
```

## Run Locally

No build step required — this is a static site.

```bash
cd FURNITUR
```

Open `index.html` directly in your browser, or serve it locally for the most accurate experience (recommended, since some browsers restrict `localStorage` under the `file://` protocol):

```bash
npx serve .
```

Then visit `http://localhost:3000` (or the port shown in your terminal).

---

# 🧠 Key Implementation Highlights

- **Centralized cart module** (`cart.js`) exposes a small, reusable API — `getCart()`, `addToCart()`, `updateQty()`, `removeFromCart()`, `getCartTotal()` — consumed identically across five different pages, avoiding duplicated cart logic anywhere in the codebase.
- **Checkout state handoff without a backend** — customer details, selected shipping method, and payment info are serialized to `localStorage` at each checkout step and rehydrated on the final review page.
- **Event delegation** used throughout (product grids, cart rows, filter lists) so dynamically rendered elements stay interactive without re-binding listeners after every re-render.
- **Query-parameter based routing** (`product-detail.html?id=3`) simulates dynamic product pages within a fully static-file project.
- **Single shared stylesheet** with a structured responsive system (tablet, small tablet, mobile, small mobile breakpoints) covering every page from one file.

---

# 📱 Responsive Design

Optimized for:

- Desktop
- Tablet
- Mobile

Includes dedicated responsive handling for the multi-column product grids, sidebar filters, the checkout step-tracker, and all cart/checkout form layouts.

---

# 💡 Future Improvements

- Backend integration for real order persistence
- Payment gateway integration (Stripe/PayPal API)
- User authentication and order history
- Wishlist ("Love") functionality
- Voucher/discount code validation
- Product image zoom on detail page
- Automated tests for cart and checkout logic

---

# Author

**Fatima Tahir**

BS Software Engineering

Punjab University College of Information Technology (PUCIT)

---

# ⭐ If you like this project

Please consider giving the repository a **Star ⭐**
