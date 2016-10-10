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
