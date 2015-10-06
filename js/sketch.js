var numberOfSquares = 16;
var mainAreaWidth = 480;

$(document).ready(function() {
	generateGrid();
});

var generateGrid = function() {
	var mainArea = $("#main");
	var squareSize = mainAreaWidth / numberOfSquares;
	for(var i = 0; i < numberOfSquares; i++) {
		for(var j = 0; j < numberOfSquares; j++) {
			mainArea.append('<div class="square"></div>');
		}
	}
	var squares = $('.square');
	squares.css({width: squareSize, height: squareSize});
	squares.hover(function() {
		$(this).css("background-color", "#000");
	});
};