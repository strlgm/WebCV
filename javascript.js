window.onload = function(){
   
        var elem = document.getElementById("arduino");   
        $(".arduino").progressbar( {max:100, value:0} );
        var value = 10;
        var id = setInterval(frame, 10);
        function frame() {
          if (value >= 52) {
            clearInterval(id);
          } else {
            value++; 
            $(".arduino").progressbar("value", value);
}
        
      }

      var elem = document.getElementById("html");   
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 60) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
           ;
          }
        
      }
    }