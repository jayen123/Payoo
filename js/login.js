document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("number-input").value;
    const pin = document.getElementById("pin-input").value;

    // validate form bad ways
    if (phoneNumber === "5" && pin === "1234") {
      window.location.href = "/home.html";
    } else {
      alert("wrong phone number or pin");
    }
  });
