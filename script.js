$ = jQuery
$(document).ready(function(){
  Cufon.replace('h1');
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
  $(".top").hover(function() {
    $(".bio").slideDown(1200);
  }, function() {
    $(".bio").slideUp(1200);
  });
  $("h1").click(function(){
    $(".bio").slideToggle(1200);
  });
});