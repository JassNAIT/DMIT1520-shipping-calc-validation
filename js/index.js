// variables for input fields
const calculateButton = document.querySelector("label");
const rateCalculator = document.querySelector('form')
const shippingWeight = document.querySelector("input");
const shippingRateDisplay = document.querySelector(".rate");
const warning = document.querySelector(".warning");
const rateDisplay = document.querySelector('.rate');
const shippingRate = 11.75;

rateCalculator.addEventListener("submit", function (e) {

e.preventDefault();
let userInput = Number(shippingWeight.value.trim());

if(isNaN(userInput)){
	warning.classList.remove('hide');
	warning.querySelector('span').textContent = "Weight must be in numbers.";
}else{
	warning.classList.add('hide');
	//rateButton = shippingRateDisplay.querySelector('button');
	//rateButton.classList.remove('hide');
	rateDisplay.textContent = `$${(userInput*shippingRate).toFixed(2)}`;
}


shippingWeight.addEventListener('input', function(e){
    warning.classList.add('hide');
});

shippingWeight.addEventListener('focus', function(e){
	warning.classList.add('hide');
	e.target.value="";
});

})