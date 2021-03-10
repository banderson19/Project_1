$.ajax({
  let: (url =
    "https://api.nasa.gov/planetary/apod?api_key=ult6atambzs8D68rYchqcYlhYL26w5ohzCPek2Zq&date=1995-06-16"),

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
// var req = new XMLHttpRequest();
// var url = "https://api.nasa.gov/planetary/apod?api_key=GL6eDBbPb6LJMU9IV7RDeuyhSIETi8f1RoewVf1K&date=1995-06-16";
// var api_key_mobile = "ult6atambzs8D68rYchqcYlhYL26w5ohzCPek2Zq";
// var api_key = "GL6eDBbPb6LJMU9IV7RDeuyhSIETi8f1RoewVf1K";

// req.open("GET", url + api_key + api_key_mobile);
// req.send();

// req.addEventListener("load", function(){
// 	if(req.status == 200 && req.readyState == 4){
//   	var response = JSON.parse(req.responseText);
//     document.getElementById("title").textContent = response.title;
//     document.getElementById("date").textContent = response.date;
//     document.getElementById("pic").src = response.hdurl;
//     document.getElementById("explanation").textContent = response.explanation;
//   }
// })
