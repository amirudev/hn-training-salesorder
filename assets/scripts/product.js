document.addEventListener('DOMContentLoaded', () => {
    const productTableBody = document.getElementById('product-table-body');
    const addProductBtn = document.getElementById('add-product-btn');

    async function fetchProducts() {
        try {
            const response = await fetch('http://localhost:8050/products');
            const products = await response.json();
            productTableBody.innerHTML = '';
            products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>
                        <button onclick="editProduct(${product.id})">Edit</button>
                        <button onclick="deleteProduct(${product.id})">Delete</button>
                    </td>
                `;
                productTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function deleteProduct(id) {
        try {
            const response = await fetch(`http://localhost:8050/products/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchProducts();
            } else {
                alert('Failed to delete product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    addProductBtn.addEventListener('click', () => {
        // Add product creation logic here
    });

    fetchProducts();
});
