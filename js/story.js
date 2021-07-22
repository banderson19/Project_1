fetch("https://rickandmortyapi.com/api/character/")
  .then((response) => response.json())
  .then((characters) => showCharacters(characters.results));
showCharacters = (characters) => {
  const charactersDiv = document.querySelector("#characters");
  const characterData = document.createElement("select");
  characterData.setAttribute("id", "characterSelected");
  characters.forEach((character) => {
    const newCharacterData = new Option(`${character.name}`, `${character.name}`);
    characterData.appendChild(newCharacterData);
  });
  charactersDiv.append(characterData);
};

fetch("https://rickandmortyapi.com/api/episode/")
  .then((response) => response.json())
  .then((episodes) => showEpisodes(episodes.results));
showEpisodes = (episodes) => {
  const episodesDiv = document.querySelector("#episodes");
  const episodeData = document.createElement("select")
  episodeData.setAttribute("id", "episodeSelected");
  episodes.forEach((episode) => {
    const newEpisodeData = new Option(`${episode.name}`, `${episode.name}`);
    episodeData.appendChild(newEpisodeData);
  });
  episodesDiv.append(episodeData);
};

fetch("https://rickandmortyapi.com/api/location/")
  .then((response) => response.json())
  .then((locations) => showLocations(locations.results));
showLocations = (locations) => {
  const locationsDiv = document.querySelector("#locations");
  const locationData = document.createElement("select");
  locationData.setAttribute("id", "locationSelected");
  locations.forEach((location) => {
    const newLocationData = new Option(`${location.name}`, `${location.name}`);
    locationData.appendChild(newLocationData)
  });
  locationsDiv.append(locationData);
};

function madLibs1() {
  var storyDiv = document.getElementById("story");
  var character = document.getElementById("characterSelected").value;
  var episode = document.getElementById("episodeSelected").value;
  var location = document.getElementById("locationSelected").value;
  storyDiv.innerHTML =
    character +
    " married a terryfold at the " +
    location +
    " in the " +
    " " +
    episode +
    " And they are Gettin Shwifty!";
}

var storyBtn1 = document.getElementById("story-btn1");
storyBtn1.addEventListener("click", madLibs1);

function madLibs2() {
  var storyDiv = document.getElementById("story");
  var character = document.getElementById("characterSelected").value;
  var episode = document.getElementById("episodeSelected").value;
  var location = document.getElementById("locationSelected").value;
  storyDiv.innerHTML =
    character +
    " was traveling back in time to " +
    location +
    " during epiode " +
    " " +
    episode +
    " and that it was a great quest where " + character + "learned alot about themselves";
}

var storyBtn2 = document.getElementById("story-btn2");
storyBtn2.addEventListener("click", madLibs2);

function madLibs3() {
  var storyDiv = document.getElementById("story");
  var character = document.getElementById("characterSelected").value;
  var episode = document.getElementById("episodeSelected").value;
  var location = document.getElementById("locationSelected").value;
  storyDiv.innerHTML =
    "Once upon a time in a place called " +
    location +
    ". A fellow named " + 
    character +
    " was mildly confused on what direction in life they should take. And during episode " +
    episode +
    " it became eyeopening to that Pickle Rick is an all time classic! " 
}

var storyBtn3 = document.getElementById("story-btn3");
storyBtn3.addEventListener("click", madLibs3);