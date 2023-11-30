const productControls = document.querySelectorAll('.product__quantity-control');
const addButtons = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');

function addToCart(e) {
  const product = e.target.closest('.product');
  const productId = product.getAttribute('data-id');
  const imgSrc = product.querySelector('.product__image').getAttribute('src');
  const quantity = product.querySelector('.product__quantity-value').textContent;

  // Если товар уже имеется в корзине, количество необходимо увеличить, не добавляя в корзину новый элемент.
  const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
  if (!existingProduct) {
    cartProducts.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${productId}"><img class="cart__product-image" src="${imgSrc}"><div class="cart__product-count">${quantity}</div></div>`);
  } else {
    const existingQuantity = existingProduct.querySelector('.cart__product-count');
    existingQuantity.textContent = Number(existingQuantity.textContent) + Number(quantity);
  }
}

function changeQuantity(e) {
  const productValue = e.target.parentElement.querySelector('.product__quantity-value');
  if (e.target.classList.contains('product__quantity-control_dec') && Number(productValue.textContent) > 1) {
    productValue.textContent = Number(productValue.textContent) - 1;
  } else if (e.target.classList.contains('product__quantity-control_inc')) {
    productValue.textContent = Number(productValue.textContent) + 1;
  }
}

// обработчик +-
productControls.forEach(btn => btn.addEventListener('click', changeQuantity));
// обработчик добавления в корзину
addButtons.forEach(btn => btn.addEventListener('click', addToCart));
