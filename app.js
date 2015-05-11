//initial array
//instead should take user input
var input_array = [10, 5, 2, 20];
console.log(input_array);

var array_map = [];
for (var i = 0; i < input_array.length; i++) {
	var val = input_array[i];
	array_map.push({
		value: val,
		factors: []
	});
};

var is_factor = function(num1, num2) {
	if (num1 % num2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

var get_factors = function() {
	for (var i = 0; i < array_map.length; i++) {
		for (var x = 0; x < input_array.length; x++) {
			if (is_factor(array_map[i].value, input_array[x]) && i != x) {
				array_map[i].factors.push(input_array[x]);
			}
			else {
			}
		};
	};
}

$( document ).ready(function() {

	get_factors();
	console.log(array_map);

	var $container = $('#container');
	var $input = $('#input');
	
	var $input_array = $('<ul class="array">');

	for (var i=0; i < input_array.length; i++) {
		var $li = $('<li>'+input_array[i]+'</li>');
		$input_array.append($li);
		if (i !== input_array.length-1) {
			var $li = $('<li>'+" , "+'</li>')
			$input_array.append($li);
		}
	}

	$input.append($input_array);

	var output_display = function() {
		var $output = $('#output');
		var $ul = $('<ul>');
		var results = array_map;
		for (r in results) {
			var r_value = results[r].value;
			var r_factors = results[r].factors;
			var $li = $('<li>'+r_value+":");
			var $array_ul = $('<ul class="array">');
			var $array_li = $('<li>'+r_factors+'</li>')
			$array_li.append($array_ul);
			$array_ul.append($li);
			console.log(r_value+": "+r_factors);
		}
		$li.append($ul);
	}
	output_display();
});