"use strict";
//admob id: App ID: ca-app-pub-7787190243229429~8888993051
//ca-app-pub-7787190243229429/5747044149
//input f 
const f = function(input)
{
	let c = ((input - 32) * (5/9));
	let k = (c + 273.15);
	return[c,k];
}; 

//input c
const c = function(input)
{
	let f = ((input * (9/5)) + 32);
	let k = (f + 459.67) *(5/9);
	return [f,k];
};

//input k 
const k = function(input)
{
	let f = ((input - 273.15)*(9/5) + 32)
	let c = (input - 273.15)
	return[f,c];
};

//convertion selection 
function main(){
	//temp vars
	let converted_temp = [];//hold the converted tempatures
	let selection = document.getElementById("unit").value;
	let input = document.getElementById("val").value
	
	
	//selection = 1;
	switch(selection)
	{
		case "1"://input f
			converted_temp = f(input);
			document.getElementById("c").innerHTML = converted_temp[0].toFixed(2);
			document.getElementById("k").innerHTML = converted_temp[1].toFixed(2);
			document.getElementById("f").innerHTML = input;
		break;
		
		case "2"://input c
			converted_temp = c(input)
			document.getElementById("f").innerHTML = converted_temp[0].toFixed(2);
			document.getElementById("k").innerHTML = converted_temp[1].toFixed(2);
			document.getElementById("c").innerHTML = input;
		break;
		
		case "3"://input k
			converted_temp = k(input);
			document.getElementById("f").innerHTML = converted_temp[0].toFixed(2);
			document.getElementById("c").innerHTML = converted_temp[1].toFixed(2);
			document.getElementById("k").innerHTML = input;
		break;
		
		default:
			alert("Please Select a Temperature Unit");
		break;
		
	}
	
}






