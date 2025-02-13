document.addEventListener('DOMContentLoaded', () => {
    const salesOrderTableBody = document.getElementById('sales-order-table-body');
    const addSalesOrderBtn = document.getElementById('add-sales-order-btn');

    async function fetchSalesOrders() {
        try {
            const response = await fetch('http://localhost:8050/sales-orders');
            const salesOrders = await response.json();
            salesOrderTableBody.innerHTML = '';
            salesOrders.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.orderNumber}</td>
                    <td>${order.orderDate}</td>
                    <td>${order.customer}</td>
                    <td>${order.total}</td>
                    <td>
                        <button onclick="editSalesOrder(${order.id})">Edit</button>
                        <button onclick="deleteSalesOrder(${order.id})">Delete</button>
                    </td>
                `;
                salesOrderTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function deleteSalesOrder(id) {
        try {
            const response = await fetch(`http://localhost:8050/sales-orders/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchSalesOrders();
            } else {
                alert('Failed to delete sales order');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    addSalesOrderBtn.addEventListener('click', () => {
        // Add sales order creation logic here
    });

    fetchSalesOrders();
});
