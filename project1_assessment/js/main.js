window.onload = pageLoad();

function pageLoad(){
inputValue = "1";
}

document.addEventListener("DOMContentLoaded", function(){
 	var myForm = document.querySelector("#my-form");
		myForm.addEventListener("submit",function(e) {
		e.preventDefault();

	document.getElementById("plus").addEventListener("click", clickPlus);
	document.getElementById("minus").addEventListener("click", clickMinus);

var inputValue = document.getElementById('input').value;
var outputValue = document.getElementById('output');
var currentOutput = [];

if(outputValue.innerText === ''){
	//var currentOutput = 0;
	outputValue.innerText = inputValue;
	//currentOutput = inputValue;
}

else {
	clickPlus(inputValue);
	clickMinus(inputValue);
}

function clickPlus(outputValue, inputValue){
	var plusResult = Number(outputValue) + inputValue;
	currentOutput.push(plusResult);
	outputValue.innerText = currentOutput;
}

function clickMinus(outputValue, inputValue){
	var minusResult = Number(outputValue) - inputValue;
	currentOutput.push(plusResult);
	outputValue.innerText = currentOutput;	


}

})

}); 




