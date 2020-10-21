// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  
  const element = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  element.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let sum = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product) => {
    updateSubtotal(product);
    let productPrice = product.querySelector('.price span').innerHTML;
    let productQuantity = product.querySelectorAll('.quantity input')[0].value;
    let productSubtotal = productPrice * productQuantity;
    sum += productSubtotal;
  });

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = sum; 
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
