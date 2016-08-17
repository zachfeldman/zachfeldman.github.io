$ = jQuery
$(document).ready(function(){
  // Cufon.replace('h1', {
  //   hover: true,
  //   hoverables: { h1: true }
  // });
  $(".home h1").click(function(){
    $(".bio").slideToggle(1200);
  });
});