$(function() {
  $(".js-presentations__open").on("click", function(event) {
    event.preventDefault();
    $(".js-presentations").addClass("show");
    $(".js-main").addClass("blur");
    $(".js-icon-nav-link").addClass("hide");
  });

  $(".js-podcasts__open").on("click", function(event) {
    event.preventDefault();
    $(".js-podcasts").addClass("show");
    $(".js-main").addClass("blur");
    $(".js-icon-nav-link").addClass("hide");
  });

  $(".js-pop-up__close").on("click", function(event) {
    event.preventDefault();
    $(".js-presentations, .js-podcasts").removeClass("show");
    $(".js-main").removeClass("blur");
    $(".js-icon-nav-link").removeClass("hide");
  });
});
