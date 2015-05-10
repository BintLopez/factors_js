var input_array = [10, 5, 2, 20];
console.log(input_array);

//function that iterates through each 
var array_manip = function(id, input_array) {
}



$( document ).ready(function() {
	console.log('now doing DOM manipulation')

	var $solution = $('#solution');
	var $input_array = $('<ul>');

	for (var i=0; i < input_array.length; i++) {
		var $li = $('<li>'+input_array[i]+'</li>');
		$input_array.append($li);
	}

	$solution.append($input_array);
	array_manip(2, input_array);
});