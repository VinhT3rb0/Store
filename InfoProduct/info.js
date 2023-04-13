var decreaseButton = document.querySelector(".decrease");
var increaseButton = document.querySelector(".increase");
var quantityInput = document.querySelector(".quantity");

decreaseButton.addEventListener("click", function() {
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

increaseButton.addEventListener("click", function() {
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
})