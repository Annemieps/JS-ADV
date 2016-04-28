window.onload = function () { 
      var canvas = document.getElementById('canvas'); 
      rechthoeken(canvas); 
}; 
 
function rechthoeken(c) { 
  
    //2 dim context uit het element en zet die in de var ctx
      var ctx = c.getContext('2d'); 
      if (ctx) { 
        // het is dit object (ctx) dat de properties fillStyle en strokeStyle invult met 
        // een geldige CSS kleur (woord, hex, of rgb())
        ctx.fillStyle = "yellow";  
        ctx.strokeStyle = "#000" ; 

        // method fillRect() uitvoert om een rechthoek te tekenen
        // fillRect(x,y,breedte,hoogte)
        ctx.fillRect (50, 50, 200, 70);   //x,y,breedte,hoogte  
        ctx.strokeRect (80, 80, 200, 70);
        ctx.clearRect (100, 20, 50, 160);
       } 
  }