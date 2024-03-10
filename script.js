// Wrap code in a jquery check to render page when eveyrthing is loaded
$(document).on("DOMContentLoaded", function () {
	//query selector for save button and event listener for when that button is clicked
	const button = document.querySelector(".saveBtn");
	button.addEventListener("click", save());

	//compares the classes against one another depending on the id of each timeblock
	$(".timeblock").each(function () {
		var current = dayjs().hour();
		var block = document.getElementsByTagName(".time-block").attr("id");
		if (block === current) {
			block.removeClass("past");
			block.removeClass("future");
			block.addClass("present");
		} else if (block < current) {
			block.removeClass("present");
			block.removeClass("future");
			block.addClass("past");
		} else {
			block.removeClass("present");
			block.removeClass("past");
			block.addClass("future");
		}
	});

	//Sets item to local storage
	function save() {
		console.log("saveBtn clicked.");
		localStorage.setItem();
	}
	// Displays the time on the top of the page
	const currentDate = dayjs().format("dddd, MMMM D, YYYY");
	document.querySelector("#currentDay").textContent = currentDateTime;
});
