'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Waaa");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(updateProject); 


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

$(".project").mouseenter(function(){
	$(this).animate({
		opacity: 1
	}, 500);
});

$(".project").mouseleave(function(){
	$(this).animate({
		opacity: 0.75
	}, 500);
});

$("a.thumbnail").click(projectClick);

function projectClick(e){
	e.preventDefault();
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		$(description).remove();
	}


}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
 }
