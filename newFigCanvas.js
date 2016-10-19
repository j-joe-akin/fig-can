/* the purpose of this function is to create instances of a "sandbox" called a 
canvas in the browser window/tab that will accept images from diverse websites 
by drag and dropping from the source website to the "sandbox" window/tab, at a 
minimum every canvas will include a short title, a parameter that tracks the 
number of figures accepted and a user-defined hypothesis that links the images */

function figCanvas(canName,canCount,canHypothesis)
{
   this.canvasname=canName;
   this.canvascount=canCount;
   this.canvashypothesis=canHypothesis;
}

/*
below defines a maximum height/width of figure for drag and drop import. it also creates 
an object for each figure imported, sets dimensions to the maximum defined, clears current 
content in canvas and then draws the resized figure to the canvas
*/

var = maxHeight = 80;
function placeFigure(figSource){
   var figure = new Figure();
   figure.onload = function(){
      var canvas = document.getElementById("figCanvas");
      if (figure.height > maxHeight) {
         figure.width *= maxHeight / figure.height;
         figure.height = maxHeight;
         }
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,canvas.width,canvas.height);
      canvas.width = figure.width;
      canvas.height = figure.height;
      ctx.drawImage(figure,0,0,figure.width,figure.height);    
   };
   image.src = figSource;
} 
