$(function() {
  $(".js-presentation-button").on( "click", function(event) {
    event.preventDefault();
    $(".js-pop-up").addClass("show");
    $(".js-main").addClass("blur");
  });

  $(".js-pop-up__close").on( "click", function(event) {
    event.preventDefault();
    $(".js-pop-up").removeClass("show");
    $(".js-main").removeClass("blur");
  });
});
