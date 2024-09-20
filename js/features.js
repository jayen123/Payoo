// add money form show
document
  .getElementById("add-money-form-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
  });

// cash out form show
document
  .getElementById("cash-out-form-btn")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
  });
