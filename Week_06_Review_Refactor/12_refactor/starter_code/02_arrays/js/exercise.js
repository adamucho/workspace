/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */
var q1 = ["image1.png", "image2.png" , "image3.png"];
q1.push("image4");
console.log("Question 1: " + q1);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */
var q2 = q1[0];
console.log("Question 2: " + q2);

/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */
var q3 = q1.length;
console.log("Question 3: " + q3);

// console.log("Question 3: " + q3);


/*
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */
var q4 = q1[q1.length - 1];
console.log("Question 4: " + q4);

/**
 * Question 5 - HINT: look into the jQuery .eq() method
 *  Using the variables from questions 2 and 4, write code that would change the src of the first image on a web page to the src stored in q2 and the last image on a web page to the src stored in q4. For extra credit, troubleshoot why the images still don't show up.
 */
// $("img").
// $("img").
/**
* Question 6
* Create an array of three cities,  loop through them and populate the select menu with them
*/
var cities  = ["Tokyo", "Shanghai", "Honolulu"];
// cities.forEach(function(element,index){
	for(index = 0; index<cities.length-1;index++){
	$("select").append("<option>" + cities[index]+ "</option");

$("select").change(function(){
	console.log($(this).val());
	var selection = $(this).val();
	switch (selection){
		case "Tokyo":
		console.log("Tokyo was selected");
		break;

		case "Shanghai":
		console.log("Shanghai was selected")

		default:
		console.log ("default code block running....")


	}

});
/**
* Question 7
* When the select menu changes, alert the user with the name of the selected file
*/

// $("").on("?", function(){
  
// });
