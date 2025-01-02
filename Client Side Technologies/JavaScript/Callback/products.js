// // Select the products container
// const productsContainer = document.querySelector('#products');
// const btn = document.querySelector('#products_page')

// // Function to render a single product
// const renderProduct = function (product) {
//   const html = `
//     <div class="product" data-id="${product.id}">
//       <img src="${product.image}" alt="${product.title}" />
//       <p>${product.title}</p>
//       <p>$${product.price}</p>
//     </div>`;
  
//   // Insert each product's HTML into the container
//   productsContainer.insertAdjacentHTML('beforeend', html);
// };

// const productsDislpay = function(){
//   // Fetch and display all products
//   const request = new XMLHttpRequest();
//   request.open('GET', 'https://fakestoreapi.com/products');
//   request.send();

//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText); // Parse the response into an array
    
//     // Render each product
//     data.forEach(product => {
//       renderProduct(product);
//     });

//     // Add click event listener to display product details
//     productsContainer.addEventListener('click', function (event) {
//       const productElement = event.target.closest('.product');
//       if (!productElement) return;

//       const productID = productElement.dataset.id; // Get the product ID from the element
//       console.log(`Product ID clicked: ${productID}`); // Debugging

//       // Fetch product details
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://fakestoreapi.com/products/${productID}`);
//       request2.send();

//       request2.addEventListener('load', function () {
//         const productDetails = JSON.parse(this.responseText);

//         // const detailsHtml = `
//         //   <div class="product-details">
//         //     <h2>${productDetails.title}</h2>
//         //     <img src="${productDetails.image}" alt="${productDetails.title}" />
//         //     <p>${productDetails.description}</p>
//         //     <p>$${productDetails.price}</p>
//         //   </div>`;
        
//         // // Display product details
//         // document.body.insertAdjacentHTML('beforeend', detailsHtml);
              
//         // Open a new tab and write the product details
//         const newTab = window.open();
//         newTab.document.write(`
//           <!DOCTYPE html>
//           <html>
//           <head>
//             <title>${productDetails.title}</title>
//             <style>
//               body { font-family: Arial, sans-serif; padding: 20px; }
//               .product-details img { max-width: 100%; height: auto; }
//               .product-details { text-align: center; }
//             </style>
//           </head>
//           <body>
//             <div class="product-details">
//               <h1>${productDetails.title}</h1>
//               <img src="${productDetails.image}" alt="${productDetails.title}" />
//               <p>${productDetails.description}</p>
//               <p><strong>Price:</strong> $${productDetails.price}</p>
//             </div>
//           </body>
//           </html>
//         `);
//         newTab.document.close(); // Ensure the content is loaded and displayed
//       });
//     });
//   });
// }

// btn.addEventListener('click', function(){
//   productsDislpay()
// })

// Select the products container
const productsContainer = document.querySelector('#products');
const btn = document.querySelector('#products_page');

// Function to render a single product
const renderProduct = function (product) {
  const html = `
    <div class="product" data-id="${product.id}">
      <img src="${product.image}" alt="${product.title}" />
      <p>${product.title}</p>
      <p>$${product.price}</p>
    </div>`;
  productsContainer.insertAdjacentHTML('beforeend', html);
};

// Function to fetch and display product details
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
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .product-details img { max-width: 100%; height: auto; }
            .product-details { text-align: center; }
          </style>
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
      data.forEach(product => renderProduct(product));
    });
};

// Add click event listener to display product details
productsContainer.addEventListener('click', function (event) {
  const productElement = event.target.closest('.product');
  if (!productElement) return;

  const productID = productElement.dataset.id; // Get the product ID from the element
  displayProductDetails(productID);
});

// Add event listener to button to fetch and display products
btn.addEventListener('click', productsDisplay);
