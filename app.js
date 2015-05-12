var input_array = [10, 5, 2, 20];
var array_map = [];

var make_array_map = function() {
	for (var i = 0; i < input_array.length; i++) {
		var val = input_array[i];
		array_map.push({
			value: val,
			factors: []
		});
	};
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
	for (var i = 0; i < array_map.length; i++) {
		for (var x = 0; x < input_array.length; x++) {
			if (is_factor(array_map[i].value, input_array[x]) && i != x) {
				array_map[i].factors.push(input_array[x]);
			}
		}
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
	var results = array_map;
	for (var r=0; r < results.length; r++) {
		var r_value = results[r].value;
		var r_factors = results[r].factors;
		var $li = $('<li>'+r_value+": "+r_factors+'</li>');
		$ul.append($li);
	}
	$output.append($ul);
}

$( document ).ready(function() {

	make_array_map();
	get_factors();

	var $container = $('#container');

	input_display();
	output_display();

});