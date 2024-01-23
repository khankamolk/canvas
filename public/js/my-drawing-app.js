/* The code for our drawing application! 
Feel free to delete any/all of it and replace with your own functionality. */

var path;
var currentColor = $('#colorpicker').val()
var currentWidth = 5
var canvas = document.getElementById("my-canvas");

tool.onMouseDown = function(event) { //This code in this function is called whenever the mouse is clicked.
    path = new Path();     // Create a new path each time.
    path.add(event.point);
    path.strokeColor = currentColor;
    path.strokeWidth = currentWidth;
    console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it! 
}
tool.onMouseDrag = function(event) {
    path.add(event.point); //Add points to the path as the user drags their mouse.
}

$('#default').on('click', function (e) { //jquery click event code for our "pencil" button.
    currentColor = $('#colorpicker').val()
    currentWidth = 5;       //change the width to 5
})
$('#thick-green').on('click', function (e) { //jquery button click code for our "green paint" button.
    currentColor = $('#colorpicker').val()
    currentWidth = 15;
})
$('#eraser').on('click', function (e) { //jquery button click code for our eraser button.
    currentColor = 'white';
    currentWidth = 20;
})
$('#colorsubmit').on('click', function (e) { //jquery button click code for our color submit.
    var newColor = $('#colorfield').val();
    currentColor = newColor;
    $('#colorpicker').val(newColor); 
})
$('#pen_size_increase').on('click', function (e) { //jquery button click code to increase pen size.
    currentWidth += 5;
})
$('#pen_size_decrease').on('click', function (e) { //jquery button click code to decrease pen size.
    if (currentWidth > 5){
        currentWidth -= 5;
    }
})
$('#colorpicker').on("change", function (e) {
    var newColor = $('#colorpicker').val();
    currentColor = newColor;
})
$("#export").click(function () {
    canvas.toBlob(function(blob){ saveAs(blob,"untitled.png"); });
});

