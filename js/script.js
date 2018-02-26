/*  *************************************
			PIZZA OPTION SELECTIONS
************************************* */

// ******** SIZE ********
function sizeSelected() {
	var size = [];
	var sizeChecked = document.querySelectorAll('input[name=size_options]:checked')

	for (var i = 0; i < sizeChecked.length; i++) {
		size.push(sizeChecked[i].value)
	}
	document.getElementById("size").innerHTML = size;
}



// ******** CRUST ********
function crustSelected() {
	var crust = [];
	var crustChecked = document.querySelectorAll('input[name=crust_options]:checked')

	for (var i = 0; i < crustChecked.length; i++) {
		crust.push(crustChecked[i].value)
	}
	document.getElementById("crust").innerHTML = crust;
}

// ******** CHEESE ********
function cheeseSelected() {
	var cheese = [];
	var cheeseChecked = document.querySelectorAll('input[name=cheese_options]:checked')

	for (var i = 0; i < cheeseChecked.length; i++) {
		cheese.push(cheeseChecked[i].value)
	}
	document.getElementById("cheese").innerHTML = cheese;
}

// ******** SAUCE ********
function sauceSelected() {
	var sauce = [];
	var sauceChecked = document.querySelectorAll('input[name=sauce_options]:checked')

	for (var i = 0; i < sauceChecked.length; i++) {
		sauce.push(sauceChecked[i].value)
	}
	document.getElementById("sauce").innerHTML = sauce;
}

// ******** MEAT ********
function meatSelected() {
	var meat = [];
	var meatChecked = document.querySelectorAll('input[name=meat_options]:checked')

	for (var i = 0; i < meatChecked.length; i++) {
		meat.push(meatChecked[i].value)
	}
	document.getElementById("meat").innerHTML = meat.join(", ");
}

// ******** VEGGIES ********
function veggieSelected() {
	var veggie = [];
	var veggieChecked = document.querySelectorAll('input[name=veggie_options]:checked')

	for (var i = 0; i < veggieChecked.length; i++) {
		veggie.push(veggieChecked[i].value)
	}
	document.getElementById("veggie").innerHTML = veggie.join(", ");
}




/*  *************************************
					ORDER TOTAL
************************************* */

function total() {
	var add = 0;
	// ******** SIZE ********
	if (document.getElementById("personal").checked) {
		add += 6;
		document.getElementById("sizePrice").innerHTML = '&#36;' + 6;
	}
	if (document.getElementById("medium").checked) {
		add += 10;
		document.getElementById("sizePrice").innerHTML = '&#36;' + 10;
	}
	if (document.getElementById("large").checked) {
		add += 14;
		document.getElementById("sizePrice").innerHTML = '&#36;' + 14;
	}
	if (document.getElementById("extra_large").checked) {
		add += 16;
		document.getElementById("sizePrice").innerHTML = '&#36;' + 16;
	}
	

	// ******** CRUST ********
	if (document.getElementById("plain_crust").checked) {
		add += 0;
		document.getElementById("crustPrice").innerHTML = '&#36;' + 0;
	}
	if (document.getElementById("garlic_crust").checked) {
		add += 0;
		document.getElementById("crustPrice").innerHTML = '&#36;' + 0;
	}
	if (document.getElementById("cheese_stuffed_crust").checked) {
		add += 3;
		document.getElementById("crustPrice").innerHTML = '&#36;' + 3;
	}
	if (document.getElementById("spicy_crust").checked) {
		add += 0;
		document.getElementById("crustPrice").innerHTML = '&#36;' + 0;
	}
	if (document.getElementById("house_crust").checked) {
		add += 0;
		document.getElementById("crustPrice").innerHTML = '&#36;' + 0;
	}

	// ******** CHEESE ********
	if (document.getElementById("regular").checked) {
		add += 0;
		document.getElementById("cheesePrice").innerHTML = '&#36;' + 0;
	}
	if (document.getElementById("no_cheese").checked) {
		add += 0;
		document.getElementById("cheesePrice").innerHTML = '&#36;' + 0;
	}
	if (document.getElementById("extra_cheese").checked) {
		add += 3;
		document.getElementById("cheesePrice").innerHTML = '&#36;' + 3;
	}

	// ******** SAUCE ********
	if (document.getElementById("marinara").checked) {
		add += 0;
		document.getElementById("saucePrice").innerHTML = '&#36;' + 0;
	}
	if (document.getElementById("white").checked) {
		add += 0;
		document.getElementById("saucePrice").innerHTML = '&#36;' + 0;
	}
	if (document.getElementById("barbeque").checked) {
		add += 0;
		document.getElementById("saucePrice").innerHTML = '&#36;' + 0;
	}
	if (document.getElementById("no_sauce").checked) {
		add += 0;
		document.getElementById("saucePrice").innerHTML = '&#36;' + 0;
	}

	// ******** MEAT ********
	var alreadyAddedMeats = 0;
	var meatOnly = 0;
	if (document.getElementById("pepperoni").checked) {
		add += 1;
		alreadyAddedMeats += 1;
		meatOnly += 1;
	}
	if (document.getElementById("sausage").checked) {
		add += 1;
		alreadyAddedMeats += 1;
		meatOnly += 1;
	}
	if (document.getElementById("canadian_bacon").checked) {
		add += 1;
		alreadyAddedMeats += 1;
		meatOnly += 1;
	}
	if (document.getElementById("ground_beef").checked) {
		add += 1;
		alreadyAddedMeats += 1;
		meatOnly += 1;
	}
	if (document.getElementById("anchovy").checked) {
		add += 1;
		alreadyAddedMeats += 1;
		meatOnly += 1;
	}
	if (document.getElementById("chicken").checked) {
		add += 1;
		alreadyAddedMeats += 1;
		meatOnly += 1;
	}

	if (alreadyAddedMeats > 0) {
		add -= 1;
		meatOnly -= 1;
		document.getElementById("meatPrice").innerHTML = '&#36;' + meatOnly;
	}
	

	// ******** VEGGIES ********
	var alreadyAddedVeggies = 0;
	var veggiesOnly = 0;
	if (document.getElementById("tomatoes").checked) {
		add += 1;
		alreadyAddedVeggies += 1;
		veggiesOnly += 1;
	}
	if (document.getElementById("onions").checked) {
		add += 1;
		alreadyAddedVeggies += 1;
		veggiesOnly += 1;
	}
	if (document.getElementById("olives").checked) {
		add += 1;
		alreadyAddedVeggies += 1;
		veggiesOnly += 1;
	}
	if (document.getElementById("green_peppers").checked) {
		add += 1;
		alreadyAddedVeggies += 1;
		veggiesOnly += 1;
	}
	if (document.getElementById("mushrooms").checked) {
		add += 1;
		alreadyAddedVeggies += 1;
		veggiesOnly += 1;
	}
	if (document.getElementById("pineapple").checked) {
		add += 1;
		alreadyAddedVeggies += 1;
		veggiesOnly += 1;
	}
	if (document.getElementById("spinach").checked) {
		add += 1;
		alreadyAddedVeggies += 1;
		veggiesOnly += 1;
	}
	if (document.getElementById("jalapeno").checked) {
		add += 1;
		alreadyAddedVeggies += 1;
		veggiesOnly += 1;
	}

	if (alreadyAddedVeggies > 0) {
		add -= 1
		veggiesOnly -= 1;
		document.getElementById("veggiePrice").innerHTML = '&#36;' + veggiesOnly;
	}
	


	var p = add;
	var price = '&#36;' + p;
	document.getElementById("totalPrice").innerHTML = price;
}

total();






