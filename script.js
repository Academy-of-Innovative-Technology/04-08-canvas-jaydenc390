//THE ARC METHOD
//CODE FOR STEP 4 GOES HERE
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.arc(100, 100, 20, 0, 2 * Math.PI);
ctx.stroke();



//THE RECT METHOD
//CODE FOR STEP 8 GOES HERE
ctx.rect(160, 60, 250, 150);
ctx.stroke();


//THE FONT METHOD
//CODE FOR STEP 12 GOES HERE
ctx.font = "30px Arial";
ctx.strokeText("Bye World!", 20, 15);