document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout');
    const customerLink = document.getElementById('customer-link');
    const productLink = document.getElementById('product-link');
    const salesOrderLink = document.getElementById('sales-order-link');
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            alert('Logged out');
        });
    }

    if (customerLink) {
        customerLink.addEventListener('click', () => {
            window.location.href = './views/customers/customer-new.html';
        });
    }

    if (productLink) {
        productLink.addEventListener('click', () => {
            window.location.href = './views/products/product.html';
        });
    }

    if (salesOrderLink) {
        salesOrderLink.addEventListener('click', () => {
            window.location.href = './views/sales-order/sales-order.html';
        });
    }

    if (homeLink) {
        homeLink.addEventListener('click', () => {
            window.location.href = './views/home.html';
        });
    }

    if (aboutLink) {
        aboutLink.addEventListener('click', () => {
            window.location.href = './views/about.html';
        });
    }
});
