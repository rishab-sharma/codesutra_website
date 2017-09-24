$(document).ready(function(){
  $("#train-stop").click(function() {
    $(".loader").fadeOut(700);
  });

  $(".loader img").click(function (e) {
    e.stopPropogation();
  })
  
  $(".loader").click(function () {
    $(".loader").fadeOut(700);
  })
});