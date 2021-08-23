window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
  const inputs = document.querySelectorAll('#calc-form input[type="text"]');
  
  //set initial values onto form if they are empty; default is 0
  for(let input of inputs){
    if(!input.value){
      input.value = '0';
    }
  }

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly( calculateMonthlyPayment( getCurrentUIValues()) );
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values['amount'];
  let i = values['rate'] / 12;
  let n = values['years'] * 12;
  
  if (p == 0 || i == 0 || n == 0){
    return '0.00';
  }
  let payment = ( (p * i) / ( 1 - Math.pow(1 + i, -n) ) ).toFixed(2);
  return payment.toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById('monthly-payment').innerText = monthly;
}
