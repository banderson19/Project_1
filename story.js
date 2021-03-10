function madLibs() {
    var storyDiv = document.getElementById("story");
    var name = document.getElementById("name").value;
    var adjective = document.getElementById("adjective").value;
    var noun = document.getElementById("noun").value;
    storyDiv.innerHTML = name + " married a " + adjective + " " + noun + "... So weird!";
  }
  
  var storyBtn = document.getElementById('story-btn');
  storyBtn.addEventListener('click', madLibs);
  