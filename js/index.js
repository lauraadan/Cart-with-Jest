function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  let innerPrice = price.innerHTML;
  let innerQuantity = quantity.value;

  const subTotal = innerPrice * innerQuantity;
  product.querySelector('.subtotal span').innerHTML = `
  <span>${subTotal}</span>
  `;
  return subTotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');

  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    total += updateSubtotal(allProducts[i]);
    console.log(total);
  }

  document.querySelector('#total-value span').innerHTML = `
    <span>${total}</span>
    `;
}

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove();
  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const remove = document.querySelectorAll('.btn-remove');
  remove.forEach((e) => e.addEventListener('click', removeProduct));
});
