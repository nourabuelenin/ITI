// Select the products container
const sampleProductsContainer = document.querySelector('#sample_products');

const productsContainer = document.querySelector('#products');
const btn = document.querySelector('#products_page');

// Function to render a single product
const renderProduct = function (product, container) {
  const html = `
    <div class="product" data-id="${product.id}">
      <img src="${product.image}" alt="${product.title}" />
      <div class="bottom-section">
        <h3>${product.title}</h3>
        <p class="price">$${product.price}</p>
      </div>
    </div>`;
  container.insertAdjacentHTML('beforeend', html);
};

/// Function to fetch and display product details
const displayProductDetails = function (productID) {
  fetch(`https://fakestoreapi.com/products/${productID}`)
    .then(res => res.json())
    .then(productDetails => {
      const newTab = window.open();
      newTab.document.write(`
       <!DOCTYPE html>
        <html>
        <head>
          <title>${productDetails.title}</title>
          <link rel="stylesheet" href="style.css">
        </head>
        <body>
          <div class="product-details">
            <h1>${productDetails.title}</h1>
            <img src="${productDetails.image}" alt="${productDetails.title}" />
            <p>${productDetails.description}</p>
            <p><strong>Price:</strong> $${productDetails.price}</p>
          </div>
        </body>
        </html>
      `);
      newTab.document.close();
    });
};


// Function to fetch and display all products
const productsDisplay = function () {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      data.forEach(product => renderProduct(product, productsContainer));
    });
};

// Function to fetch and display 4 products using existing renderProduct function
const displaySampleProducts = function () {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      // Use the existing renderProduct function, limiting to 4 products
      data.slice(0, 4).forEach(product => renderProduct(product, sampleProductsContainer));
    });
};

// Event listener to load products when on products.html
if (productsContainer) {
  productsDisplay();
}

// Add click event listener to display product details ////ليه "؟
productsContainer?.addEventListener('click', function (event) {
  const productElement = event.target.closest('.product');
  if (!productElement) return;

  const productID = productElement.dataset.id; // Get the product ID from the element
  displayProductDetails(productID);
});

// Event listener for navigation to products.html
btn?.addEventListener('click', function () {
  const href = btn.href;
  if (href) {
    window.location.href = href; // Navigate to products.html
  }
})


// Add event listener for loading 4 products on page load
if (sampleProductsContainer) {
  displaySampleProducts();

  // Add click event listener to display product details using existing function
  sampleProductsContainer.addEventListener('click', function (event) {
    const productElement = event.target.closest('.product');
    if (!productElement) return;

    const productID = productElement.dataset.id; // Get the product ID
    displayProductDetails(productID); // Use existing function
  });
}