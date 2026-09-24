const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

addProductButton.addEventListener('click', addProduct);

function addProduct() {
  const name = productNameInput.value;
  const price = parseFloat(productPriceInput.value);

  if (!name || isNaN(price) || price < 0) {
    alert('Must have a product name and price!');
    return;
  }

  const li = document.createElement('li');
  li.dataset.price = price;
  li.textContent = `${name} - $${price.toFixed(2)}`;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove Product';
  removeBtn.addEventListener('click', removeItem);

  li.appendChild(removeBtn);
  cart.appendChild(li);

  updateTotalPrice(price);

  productNameInput.value = '';
  productPriceInput.value = '';
}

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
