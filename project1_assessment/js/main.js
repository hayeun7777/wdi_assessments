// Starting value
// Note: This is just an integer. No need for arrays.
var count = 0;

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("plus").addEventListener("click", clickPlus);
	document.getElementById("minus").addEventListener("click", clickMinus);
});

function clickPlus(){
  // Ideally, we have error checking here in case user puts in a non-number
  // We can assume they are nice for this purpose!
  var inputValue = Number(document.getElementById('input').value);
	count = count + inputValue;
	updateDisplay();
}

function clickMinus(outputValue, inputValue){
  var inputValue = Number(document.getElementById('input').value);
	count = count - inputValue;
	updateDisplay();
}

function updateDisplay(){
  document.getElementById('output').textContent = count;

  // TODO: Add logic to change color to red if count is less than 0
}




