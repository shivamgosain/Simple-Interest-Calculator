function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

function compute() {
  var principal, years, rate, interest, year;
  principal = document.getElementById("principal").value;
  rate = document.getElementById("rate").value;
  years = document.getElementById("years").value;
  year = new Date().getFullYear() + parseInt(years);
  if (principal >0) {
    interest = parseInt((principal * years * rate) / 100);
    document.getElementById("result").innerHTML =
      "If you deposit " +
      principal +
      ",<br>at an interest rate of " +
      rate +
      "%<br>You will receive an amount of " +
      interest +
      ",<br>in the year " +
      year +
      " <br>";
  } else {
    
    alert("Enter a positive number");
    principal.focus();
    
  }
}
