$(document).ready(function() {
  $(".suboption").click( function() {
    if($(this).attr("href") == undefined) {
      $(".sub.current").removeClass("current");
      $(".sub." + $(this).attr("next")).addClass("current");
      console.log("NEXT");
    } else {
      location.href = $(this).attr("href");
    }
  });
});
