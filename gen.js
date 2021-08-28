


 // $(document).ready(function()
 // {
 //   function randPosX(){
 //         return Math.floor(Math.random()*500);
 //       };//end x
 //       function randPosY(){
 //         return Math.floor(Math.random()*800);
 //       };//end y
 //
 //    var folder = "STELLA_IMGS/";
 //
 //    $.ajax({
 //        url : folder,
 //        success: function (data) {
 //            $(data).find("a").attr("href", function (i, val) {
 //                if( val.match(/\.(jpe?g|png|gif)$/) ) {
 //                  var xPos = randPosX();
 //                  var yPos = randPosY();
 //                  console.log(xPos);
 //
 //                                     var div = document.createElement("div");
 //                                     $(div).attr("class", "drag");
 //                                     $.('body').append(div);
 //
 //                    $("body").append( " <div> <img style='position: absolute; top:"+xPos+"px; left:"+yPos+"px;' src='"+ folder + val +"'> </div>" ).find('div:last').addClass('drag');
 //                    // document.getElementById("exhibition").append( "<div> <div> <img src='"+ folder + val +"'> </div> </div>" ).find('div:last').addClass('drag');
 //
 //                    // document.getElementById("drag").apapendChild( "<div> <img src='"+ folder + val +"'> </div>" );
 //                }
 //            });
 //        }
 //    });
 //
 //  })




 // window.onload = function(){
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

         var folder = "/1snail/";
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
                      console.log(count);

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


      // });

    // }



  // $(document).ready(function()
  // {
  //
  //    var folder = "STELLA_IMGS/";
  //
  //    $.ajax({
  //        url : folder,
  //        success: function (data) {
  //            $(data).find("a").attr("href", function (i, val) {
  //                if( val.match(/\.(jpe?g|png|gif)$/) ) {
  //                   var div = document.createElement("div");
  //                   $(div).attr("class", "drag");
  //                   $.('body').append(div);
  //
  //                   $.(div).append( "<div> <img src='"+ folder + val +"'> </div> " ).find('div:last').addClass('dragContainer');
  //                }
  //            });
  //        }
  //    });
  //  })
