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

function madLibs() {
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

var storyBtn = document.getElementById("story-btn");
storyBtn.addEventListener("click", madLibs);