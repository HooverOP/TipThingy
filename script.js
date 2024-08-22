document.addEventListener("DOMContentLoaded", function () {
  var moneyInput = document.querySelector(".amount");
  var display = document.querySelector(".display");
  var t1 = document.getElementById("t1");
  var t2 = document.getElementById("t2");
  var t3 = document.getElementById("t3");
  var customTipButton = document.querySelector(".cta");
  var noTipButton = document.querySelector(".nt");

  function addTip(tipPercentage) {
    var startAmount = parseFloat(moneyInput.value) || 0;
    var totalAmount = startAmount * (1 + tipPercentage);
    display.textContent = `$${totalAmount.toFixed(2)}`;
  }

  t1.addEventListener("click", function () {
    addTip(0.15);
  });

  t2.addEventListener("click", function () {
    addTip(0.2);
  });

  t3.addEventListener("click", function () {
    addTip(0.25);
  });

  customTipButton.addEventListener("click", function () {
    var customTipPercentage =
      parseFloat(prompt("Enter custom tip percentage:")) / 100;
    if (!isNaN(customTipPercentage)) {
      addTip(customTipPercentage);
    }
  });

  noTipButton.addEventListener("click", function () {
    var startAmount = parseFloat(moneyInput.value) || 0;
    display.textContent = `$${startAmount.toFixed(2)}`;
  });

  document.querySelector(".btn").addEventListener("click", function () {
    var startAmount = parseFloat(moneyInput.value) || 0;
    display.textContent = `$${startAmount.toFixed(2)}`;
  });
});
