$(document).ready(function(){
  $("button").click(function(){
   $('<img src="https://api.nasa.gov/planetary/apod?api_key=PO9R6vYlNUrznxUgVPe9ACNHohw0ucQTUGtkO6wf&date=1995-06-16"/>').appendTo("body");
    
    $('#apod_img_ofDay').prepend('<img id="apod_img_ofDay" src="https://apod.nasa.gov/apod/image/e_lens.gif" />');
    });
  });

$.ajax({
  let: (url =
    "https://api.nasa.gov/planetary/apod?api_key=PO9R6vYlNUrznxUgVPe9ACNHohw0ucQTUGtkO6wf&date=1995-06-16"),

  url: url,

  success: function success(result) {
    if (result.media_type == "image") {
      $("#apod_img_ofDay").css("display");

      $("#apod_img_ofDay").attr("src", result.url);
    } else {

      $("#apod_img_ofDay").attr("src", result.url);
    }

    $("#apod_explanation").text(result.explanation);

    $("#apod_title").text(result.title);
  },
});