$(document).ready(function() {

    //-----------NAVIGATION------------//
      var $toggleButton = $('.toggle-button'),
          $menuWrap = $('.mainnav'),
          $sidebarArrow = $('.sidebar-menu-arrow');

      var navLink = $sidebarArrow.parent();

      // Dropdown button
      $(navLink).click(function() {
          
          $(this).children().next().next().slideToggle(300);
      });

      // Hamburger button

      $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
      });

	$('#v').click(
    	function (e) {
   		 $('html, body').animate({scrollTop: $('#about').position().top}, 600);
   		 return false;
   	 }
   	 );

});

