var input_array = [10, 5, 2, 20];
console.log(input_array);

//function that iterates through each 

// var array_manip = function(id, input_array) {
// }
var array_map = [];
for (var i = 0; i < input_array.length; i++) {
	var val = input_array[i];
	array_map.push({
		value: val,
		factors: []
	});
};
console.log(array_map);

var is_factor = function(num1, num2) {
	if (num1 % num2 === 0) {
		console.log(num2 + " is a factor of "+ num1);
		//factors.push(num2);
		return true;
	}
	else {
		return false;
	}
}

var get_factors = function() {
	for (var i = 0; i < array_map.length; i++) {
		//console.log("array_map[i] is "+ array_map[i])
		console.log(array_map[i].value);
		for (var x = 0; x < input_array.length; x++) {
			if (is_factor(array_map[i].value, input_array[x]) && i != x) {
				array_map[i].factors.push(input_array[x]);
			}
			else {
				console.log("not a factor or it's the same value")
			}
			//console.log("input_array[x] is "+ input_array[x]);
		};
	};
}

get_factors();


$( document ).ready(function() {

	var $solution = $('#solution');
	var $input_array = $('<ul>');

	for (var i=0; i < input_array.length; i++) {
		var $li = $('<li>'+input_array[i]+'</li>');
		$input_array.append($li);
	}

	$solution.append($input_array);
	//array_manip(2, input_array);
});