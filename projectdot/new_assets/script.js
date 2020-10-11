$(document).ready(function() {

    //-----------BACK TO TOP------------//

    // browser window scroll (in pixels) after which the "back to top" link is shown
      var offset = 500,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

      //hide or show the "back to top" link
      $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
      });

      //smooth scroll to top
      $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
          scrollTop: 0 ,
          }, scroll_top_duration
        );
      });

      //-----------END OF BACK TO TOP------------//

      //-----------SMOOTH SCROLL-----------//
      $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: target.offset().top
          }, 700);
        }
      });


      //$('#v').click(
        //function (e) {
          //$('html, body').animate({scrollTop: $('#next').position().top}, 600);
          //return false;
        //}
     //);


  });