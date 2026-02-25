// Copied from root script.js for Vite static build output
// Helper function to render product image
function renderProductImage(product) {
    if (product.imageUrl) {
        return `<img src="${product.imageUrl}" alt="${product.name}" class="product-img" />`;
    }
    return `<div class="product-img-placeholder"></div>`;
}

// Helper function to render cart image
function renderCartImage(item) {
    if (item.imageUrl) {
        return `<img src="${item.imageUrl}" alt="${item.name}" class="cart-img" />`;
    }
    return `<div class="cart-img-placeholder"></div>`;
}

// Product Data - Updated to support images from nybotech.store
// Replace imageUrl with actual product image URLs from nybotech.store
const products = [{
    id: 1,
    name: "Digital Stethoscope",
    category: "diagnostic",
    description: "Advanced digital stethoscope with noise reduction technology",
    price: 299.99,
    imageUrl: "https://www.ekohealth.com/cdn/shop/files/C500-Sapphire-Black-5_2.png?v=1753193714&width=1946"
}, {
    id: 2,
    name: "Patient Monitor",
    category: "monitoring",
    description: "Multi-parameter patient monitoring system with touchscreen",
    price: 2499.99,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9DV1nmxjBBx-EsZ0yqi_a-aD-xVhgKoTpQ&s"
}, {
    id: 3,
    name: "Surgical Laser System",
    category: "surgical",
    description: "Precision surgical laser for minimally invasive procedures",
    price: 8800,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTo5cOpYcsWcpB1zI0b8vVta7XFYO0HzFalg&s"
}, {
    id: 4,
    name: "Ultrasound Scanner",
    category: "diagnostic",
    description: "Portable ultrasound scanner with high-resolution imaging",
    price: 28000,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgW8Go6Npw1OQwguyyl_coIDiL0xZWmOGhA&s"
}, {
    id: 5,
    name: "Ventilator System",
    category: "therapeutic",
    description: "Advanced ICU ventilator with multiple ventilation modes",
    price: 12400,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrI0Fv0l6-N5k_zpAfmuCU4BPLucg5yRZqgw&s"
}, {
    id: 6,
    name: "Blood Pressure Monitor",
    category: "monitoring",
    description: "Automated blood pressure monitor with digital display",
    price: 149.99,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjU2cgHxl4CEmmM_PKELw8bYueUGDJe173A&s"
}, {
    id: 7,
    name: "Electrosurgical Unit",
    category: "surgical",
    description: "High-frequency electrosurgical generator for surgical procedures",
    price: 2599,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLEqw5jQB7_J9EO-49wphINE0llgCpnce9vw&s"
}, {
    id: 8,
    name: "X-Ray Machine",
    category: "diagnostic",
    description: "Digital X-ray imaging system with advanced image processing",
    price: 8000,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLTO7bTaAoZkgOxwZcyXFG_JTb5Hb2EzSvA&s"
}, {
    id: 9,
    name: "Infusion Pump",
    category: "therapeutic",
    description: "Precision infusion pump with safety features",
    price: 2000,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_YbvrWRCCHOnM_rN1U0xXJyW5be830gFQA&s"
}, {
    id: 10,
    name: "Pulse Oximeter",
    category: "monitoring",
    description: "Portable pulse oximeter for SpO2 monitoring",
    price: 89.99,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEojkgq7DzaTATe6ZpdWg6gfWzbxuxTb1uw&s"
}, {
    id: 11,
    name: "Surgical Table",
    category: "surgical",
    description: "Electric surgical table with adjustable positioning",
    price: 7500,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5BUObqydf9_eFIkYuQK_A6x2j-8XeUqz6w&s"
}, {
    id: 12,
    name: "MRI Scanner",
    category: "diagnostic",
    description: "Advanced MRI system with high-field imaging capability",
    price: 300000,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC77nBUv1Hms8FPIay-57N9t0L8Fz5EPxRUg&s"
}];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    updateCartCount();
    if (document.getElementById('products-grid')) {
        loadProducts('all');
        initializeFilters();
    }
    if (document.getElementById('featured-products')) {
        loadFeaturedProducts();
    }
    if (document.getElementById('cart-items')) {
        loadCart();
    }
    if (document.getElementById('contact-form')) {
        initializeContactForm();
    }
    if (document.getElementById('checkout-btn')) {
        initializeCheckout();
    }
});

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        }
        );
    }
}
function updateCartCount() {
    const cartCount = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce( (sum, item) => sum + item.quantity, 0);
    cartCount.forEach(count => {
        count.textContent = totalItems;
    }
    );
}
function loadProducts(category='all') {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid)
        return;
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">${renderProductImage(product)}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                </div>
            </div>
        </div>`).join('');
}
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featured-products');
    if (!featuredGrid)
        return;
    const featured = products.slice(0, 6);
    featuredGrid.innerHTML = featured.map(product => `
        <div class="product-card">
            <div class="product-image">${renderProductImage(product)}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                </div>
            </div>
        </div>`).join('');
}
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadProducts(btn.dataset.category);
        }
        );
    }
    );
}
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product)
        return;
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}
function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartWithItems = document.getElementById('cart-with-items');
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartWithItems.style.display = 'none';
        return;
    }
    cartEmpty.style.display = 'none';
    cartWithItems.style.display = 'grid';
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${renderCartImage(item)}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-category">${item.category}</div>
                <div class="cart-item-footer">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i> Remove</button>
                </div>
            </div>
        </div>`).join('');
    updateCartSummary();
}
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item)
        return;
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}
function updateCartSummary() {
    const subtotal = cart.reduce( (sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 50.00 : 0;
    const total = subtotal + shipping;
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}
function initializeCheckout() {
    const checkoutBtn = document.getElementById('checkout-btn');
    const modal = document.getElementById('checkout-modal');
    const closeModal = document.querySelector('.close-modal');
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            modal.style.display = 'block';
        }
        );
    }
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        }
        );
    }
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    }
    );
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleCheckout();
        }
        );
    }
}
function handleCheckout() {
    const formData = {
        name: document.getElementById('checkout-name').value,
        email: document.getElementById('checkout-email').value,
        phone: document.getElementById('checkout-phone').value,
        address: document.getElementById('checkout-address').value,
        city: document.getElementById('checkout-city').value,
        zip: document.getElementById('checkout-zip').value,
        country: document.getElementById('checkout-country').value,
        payment: document.getElementById('checkout-payment').value
    };
    alert('Thank you for your order! Your order confirmation will be sent to ' + formData.email);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('checkout-modal').style.display = 'none';
    updateCartCount();
    loadCart();
}
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        }
        );
    }
}
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `position: fixed; top: 100px; right: 20px; background: var(--accent-color); color: white; padding: 1rem 2rem; border-radius: 6px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); z-index: 3000; animation: slideIn 0.3s ease;`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout( () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout( () => {
            document.body.removeChild(notification);
        }
        , 300);
    }
    , 3000);
}
const style = document.createElement('style');
style.textContent = `@keyframes slideIn{from{transform:translateX(400px);opacity:0;}to{transform:translateX(0);opacity:1;}}@keyframes slideOut{from{transform:translateX(0);opacity:1;}to{transform:translateX(400px);opacity:0;}}`;
document.head.appendChild(style);

