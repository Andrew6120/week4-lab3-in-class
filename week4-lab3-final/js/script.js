let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let storyText = document.getElementById("storyText");
let storyTitle = document.getElementById("storyTitle");


function showStudent1() {
	image1.src = "images/image1.jpg";
	image2.src = "images/image2.jpg";
	image3.src = "images/image3.jpg";

	storyTitle.innerHTML = "Student 1";

	storyText.innerHTML = "The responsible student wakes up at 10AM, does their work in the afternoon around 3PM, completes their assignment then eats dinner around 8PM.";
}


function showStudent2() {
	image1.src = "images/image3.jpg";
	image2.src = "images/image2.jpg";
	image3.src = "images/image1.jpg";

	storyTitle.innerHTML = "Student 2";

	storyText.innerHTML = "The irresponsible student eats dinner at 8PM instead of finishing their assignment, works on it at 3AM, and finally finishes before going to sleep at 10AM.";
}


let btn1 = document.getElementById("scenario1");
btn1.addEventListener("click", showStudent1);

let btn2 = document.getElementById("scenario2");
btn2.addEventListener("click", showStudent2);