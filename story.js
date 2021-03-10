function madLibs() {
    var storyDiv = document.getElementById("story");
    var someonesname = document.getElementById("someonesname").value;
    var episode = document.getElementById("episode").value;
    var location = document.getElementById("location").value;
    storyDiv.innerHTML = someonesname + " married a terryfold at the " + location + " in the " + " " + episode + " And they are Gettin Shwifty!";
  }
  
  var storyBtn = document.getElementById('story-btn');
  storyBtn.addEventListener('click', madLibs);
  