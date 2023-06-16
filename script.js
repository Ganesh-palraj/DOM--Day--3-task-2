document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".btn");
  var result = document.getElementById("result");

  // Attach event listeners to all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var val = this.dataset.value;
      addToResult(val);
    });
  }

  // Handle keyboard events
  document.addEventListener("keydown", function (event) {
    if (/^[0-9]$/.test(event.key)) {
      addToResult(event.key);
    } else if (event.key === "Backspace") {
      deleteLast();
    } else if (event.key === "Escape") {
      clearResult();
    } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "%") {
      addToResult(event.key);
    } else if (event.key === "Enter") {
      calculate();
    } else {
      event.preventDefault();
      alert("Only numbers are allowed!");
    }
  });

  // Functions to handle calculator operations
  function addToResult(val) {
    if (/^[0-9]$/.test(val)) {
      result.value += val;
    } else {
      result.value = "";
      alert("Only numbers are allowed!");
    }
  }

  function clearResult() {
    result.value = "";
  }

  function deleteLast() {
    result.value = result.value.slice(0, -1);
  }

  function calculate() {
    try {
      result.value = eval(result.value);
    } catch (e) {
      alert("Invalid expression!");
    }
  }
});
