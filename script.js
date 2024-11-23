function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
  
    products.forEach(product => {
      const productName = product.getAttribute('data-name').toLowerCase();
      if (productName.includes(input)) {
        product.style.display = 'block'; // Show product
      } else {
        product.style.display = 'none'; // Hide product
      }
    });
  }

  