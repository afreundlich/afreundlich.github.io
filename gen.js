
 addEventListener('load', function() {

     console.log("YOU MADE IT!");
     function randPosX(){
           return Math.floor(Math.random()*1200);
           console.log(screen.width);

         };//end x
         function randPosY(){
           if(screen.width > 700)
           {
             return Math.floor(Math.random()* (screen.width * .75));
             console.log(screen.width);

           }
           else {
             return Math.floor(Math.random()* (screen.width * 1.65) );
             console.log(screen.width);

           }
         };//end y

         var folder = "/";
         var count = 0;

         $.ajax({
             url : folder,
             success: function (data) {
                 $(data).find("a").attr("href", function (i, val) {
                     if( val.match(/\.(jpe?g|png|gif)$/) ) {
                       var xPos = randPosX();
                       var yPos = randPosY();
                       // console.log("x: " + xPos);
                       // console.log("y: " + yPos);
                      count = count + 1;
                      console.log("this is the folder " + folder);

                       var $divC = document.createElement("div");
                       $($divC).attr("class", "snail");
                       // $("body").append($divC);
                       $("#scrollBox").append($divC);


                       console.log($divC);
                       $($divC).append( "<div> <img style='position: relative; height: 98%;' src='"+ folder + val +"'> </div>" ).find('div:last');
                         // document.getElementById("exhibition").append( "<div> <div> <img src='"+ folder + val +"'> </div> </div>" ).find('div:last').addClass('drag');

                         // document.getElementById("drag").apapendChild( "<div> <img src='"+ folder + val +"'> </div>" );
                  }
              });
          }
      });   });

