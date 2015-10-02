// Window Resize Function on ready 

$(document).ready(function(){

  $(window).resize(imgResize);
  imgResize();

});

// IMG RESIZE FUNCTION

    function imgResize() {

         var width = $(window).width();
             height = $(window).height();

        if(width <= 767){
                $("#thumbs > img").each(function() {
                   var swap = $(this).attr('data-src-mobile');
                     $(this).attr('src', swap);
                     console.log(swap);
                  });
            } else if (width >= 768){
                $('#thumbs > img').each(function(){
                  var swap = $(this).attr('data-src-desktop');
                    $(this).attr('src', swap);
                      console.log('return to sender');
              });
            }
        }
