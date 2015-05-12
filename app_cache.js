//initial array
//instead should take user input
var input_array = [10, 5, 2, 20];

var store_array = function() {
	for (var i = 0; i < input_array.length; i++) {
		localStorage.setItem(input_array[i], []);
	}
}

var is_factor = function(num1, num2) {
	if (num1 % num2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

var get_factors = function() {
	for (var i = 0; i < localStorage.length; i++) {
		var cache_key_val = parseInt(localStorage.key(i));
		//console.log(cache_key_val);
		var factors_to_cache = [];
		for (var x = 0; x < input_array.length; x++) {
			if (is_factor(cache_key_val, input_array[x]) && cache_key_val !== input_array[x]) {
				//console.log(cache_key_val + " has "+ input_array[x] +" as a factor.")
				factors_to_cache.push(input_array[x]);
			}
		}
		//console.log("The factors of "+cache_key_val+" are "+ factors_to_cache);
		factors_to_cache = factors_to_cache.toString();
		localStorage.setItem(cache_key_val, factors_to_cache);
	}
}

var input_display = function() {
	var $input = $('#input');
	var $input_array = $('<ul class="array">');
	for (var i=0; i < input_array.length; i++) {
		var $li = $('<li>'+input_array[i]+'</li>');
		$input_array.append($li);
	}
	$input.append($input_array);
}

var output_display = function() {
	var $output = $('#output');
	var $ul = $('<ul>');
	for (var i = 0; i < localStorage.length; i++) {
		var o_value = localStorage.key(i);
		var o_factors = localStorage.getItem(o_value);
		var $li = $('<li>'+o_value+": "+o_factors+'</li>');
		$ul.append($li);
	}
	$output.append($ul);
}

$( document ).ready(function() {

	store_array();
	get_factors();

	var $container = $('#container');

	input_display();
	output_display();

});