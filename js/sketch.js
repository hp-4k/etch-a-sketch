var numberOfSquares = 16;
var mainAreaWidth = 480;
var color = "#000";

$(document).ready(function() {
	generateGrid(numberOfSquares);

	$('#new').on('click', function() {
		var numberOfSquares = parseInt(prompt('How many squares in a row', 16));
		if (isNaN(numberOfSquares)) numberOfSquares = 16;
		generateGrid(numberOfSquares);
	});

	$('#black').on('click', function() {
		clearHighlight();
		color = "#000";
		$(this).addClass("selected");
	});

	$('#red').on('click', function() {
		clearHighlight();
		color = "#f00";
		$(this).addClass("selected");
	});

	$('#green').on('click', function() {
		clearHighlight();
		color = "#0f0";
		$(this).addClass("selected");
	});

	$('#blue').on('click', function() {
		clearHighlight();
		color = "#00f";
		$(this).addClass("selected");
	});

	$('#yellow').on('click', function() {
		clearHighlight();
		color = "#ff0";
		$(this).addClass("selected");
	});	

	$('#white').on('click', function() {
		clearHighlight();
		color = "#fff";
		$(this).addClass("selected");
	});
});

var generateGrid = function(n) {
	$(".square").remove();
	var mainArea = $("#main");
	var squareSize = mainAreaWidth / n;
	for(var i = 0; i < n; i++) {
		mainArea.append('<div class="square first"></div>');
		for(var j = 1; j < n; j++) {
			mainArea.append('<div class="square"></div>');
		}
	}
	var squares = $('.square');
	squares.css({width: squareSize, height: squareSize});
	squares.hover(function() {
		$(this).css("background-color", color);
	});
};

var clearHighlight = function() {
	$(".selected").removeClass("selected");
};