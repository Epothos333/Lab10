var convertTemp = function() {

	var Temp = document.getElementById("Temp").value//document.getElementById("Temp");
	var str = document.forms["tempConv"]["ForC"].value//getElementById("ForC");
	var add = ' '
	if (str === "C" || str ==="c") {
		var ans = (Temp-32) *5/9;
	}
	else if(str === "F" || str === "f") {
		var ans = (Temp*9/5)+32;
	}
	else {
		var ans = "Sorry, '"
		add = " ' is not recognized. Try again."
	}
	var display = document.getElementById("display")
	display.innerHTML=(ans + ' ' + str.toUpperCase() + add);
	return false;
}

