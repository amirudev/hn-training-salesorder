document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        try {
            const response = await fetch('http://localhost:8050/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert('Customer created successfully');
                form.reset();
            } else {
                alert('Failed to create customer');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    });
});
