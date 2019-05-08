$(function() {
  let doAKickFlip = function() {
    if ($(window).width() < 900) {
      $(".skateboard")
        .removeClass("animated slideInRight")
        .addClass("animated rotateIn");
    } else if ($(window).width() > 1000) {
      $(".skateboard")
        .removeClass("animated rotateIn")
        .addClass("animated lightSpeedIn");
    }
  };
  doAKickFlip();
  $(function() {
    $(window).resize(doAKickFlip);
  });
});
