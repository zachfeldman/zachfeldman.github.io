$ = jQuery
$(document).ready(function(){
  Cufon.replace('h1', {
    hover: true,
    hoverables: { h1: true }
  });
  $(".insta-slider .slide").first().show();
  setInterval(function(){
    if($(".insta-slider .slide:visible img").attr("src") == $(".insta-slider .slide img").last().attr("src")){
      $(".insta-slider .slide:visible").fadeOut(function(){
        $(".insta-slider .slide").first().fadeIn()
      })
    }else{
      var visible_slide = $(".insta-slider .slide:visible")
      visible_slide.fadeOut(function(){
        visible_slide.next().fadeIn()
      })
    }
  }, 5000)
  $("h1").click(function(){
    $(".bio").slideToggle(1200);
  });
});