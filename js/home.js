// get add money button and addEventListenr
document
  .getElementById("add-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("add money");
    //get pin
    const pinNumberInput = document.getElementById("pin").value;

    // get added amount
    const addMoneyInput = document.getElementById("add-amount").value;

    // check pin
    if (pinNumberInput !== "1234") {
      alert("Incorrect Pin ! please try again");
    }

    // get current balance
    const currentBalance = document.getElementById("balance").innerText;

    const addMoneyNumber = Number(addMoneyInput);
    const currentBalanceNumber = Number(currentBalance);

    const total = document.getElementById("balance");
    // sum total
    const newBalance = currentBalanceNumber + addMoneyNumber;
    // add new balance
    total.innerText = newBalance;
  });
