$(function() {
  $(".js-presentations__open").on("click", function(event) {
    event.preventDefault();
    $(".js-presentations").addClass("show");
    $(".js-main").addClass("blur");
  });

  $(".js-podcasts__open").on("click", function(event) {
    event.preventDefault();
    $(".js-podcasts").addClass("show");
    $(".js-main").addClass("blur");
  });

  $(".js-pop-up__close").on("click", function(event) {
    event.preventDefault();
    $(".js-presentations, .js-podcasts").removeClass("show");
    $(".js-main").removeClass("blur");
  });
});
