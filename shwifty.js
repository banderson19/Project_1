let url = fetch("https://rickandmortyapi.com/api/character/252");
fetch("https://rickandmortyapi.com/api/character/252")
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));
   showCharacters = characters => {
    const charactersDiv = document.querySelector("#characters");
    characters.showCharacters(character => {
      const characterElement = document.createElement("p");
      characterElement.innerText = `Character Name: ${character.name}`;
      charactersDiv.append(characterElement);
    });
}
// console.log("...")
// import { getCharacter } from 'rickmortyapi' // getCharacter()
// // or
// import NoobNoob from 'rickmortyapi' // noob-noob.getCharacter()
// // or
// const noopNoop = 
let charcters = fetch("https://rickandmortyapi.com/api/character/252")
// const characterElement = document.getElementById("characters").appendChild('p');
// const locationElement = document.getElementById("location");
// const episodeElement = document.getElementById("episode");
fetch("https://rickandmortyapi.com/api/character/252")
  .then((response) => response.json())
  .then((characters) => showCharacters(characters.results));

// showCharacters = (characters) => {
//   const charactersDiv = document.querySelector("#characters");
//   characters.forEach((character) => {
//     const characterElement = document.createElement("p");
//     characterElement.innerHTML = `Character Name: ${character.name}`;
//     charactersDiv.append(characterElement);
//   });
// }
// };
// fetch ("https://rickandmortyapi.com/api/location/3"),
// {
// requiredState: (currentState) => currentState.Enter;
// setState: { Enter: true },
// }
// fetch("https://rickandmortyapi.com/api/location/3,21")
//   .then((response) => response.json())
//   .then((location) => showLocation(location.results));
// showLocation = (location) => {
//   const locationDiv = document.querySelector("#location");
//   location.forEach((location) => {
//     const locationElement = document.createElement("p");
//     locationElement.innerText = `Location Name: ${location.name}`;
//     locationDiv.append(locationElement);
//   });
// };
// fetch ("https://rickandmortyapi.com/api/location/3"),
// requiredState: (currentState) => currentState.Enter,
// setState: { Enter: true },
// fetch("https://rickandmortyapi.com/api/episode/25")
//   .then((response) => response.json())
//   .then((episode) => showEpisode(episode.results));

// showEpisode = (Episode) => {
//   const EpisodeDiv = document.querySelector("#episode");
//   episode.forEach((episode) => {
//     const episodeElement = document.createElement("p");
//     episodeElement.innerText = `Episode Name: ${episode.name}`;
//     episodeDiv.append(episodeElement);
//   });
// };

// {
//   "id": 252,
//   "name": "Noob-Noob",
//   "status": "Alive",
//   "species": "Poopybutthole",
//   "type": "",
//   "gender": "Male",
//   "origin": {
//   "name": "unknown",
//   "url": ""
//   },
//   "location": {
//   "name": "Vindicator's Base",
//   "url": "https://rickandmortyapi.com/api/location/54"
//   },
//   "image": "https://rickandmortyapi.com/api/character/avatar/252.jpeg",
//   "episode": [
//   "https://rickandmortyapi.com/api/episode/25"
//   ],
//   "url": "https://rickandmortyapi.com/api/character/252",
//   "created": "2017-12-31T12:57:37.849Z"
//   }
// {
//   "id": 265,
//   "name": "Pickle Rick",
//   "status": "Alive",
//   "species": "unknown",
//   "type": "Pickle",
//   "gender": "Male",
//   "origin": {
//   "name": "Earth (C-137)",
//   "url": "https://rickandmortyapi.com/api/location/1"
//   },
//   "location": {
//   "name": "Earth (Replacement Dimension)",
//   "url": "https://rickandmortyapi.com/api/location/20"
//   },
//   "image": "https://rickandmortyapi.com/api/character/avatar/265.jpeg",
//   "episode": [
//   "https://rickandmortyapi.com/api/episode/24"
//   ],
//   "url": "https://rickandmortyapi.com/api/character/265",
//   "created": "2017-12-31T13:47:10.617Z"
//   }
// {
//   "id": 16,
//   "name": "Get Schwifty",
//   "air_date": "August 23, 2015",
//   "episode": "S02E05",
//   "characters": [
//   "https://rickandmortyapi.com/api/character/1",
//   "https://rickandmortyapi.com/api/character/2",
//   "https://rickandmortyapi.com/api/character/3",
//   "https://rickandmortyapi.com/api/character/4",
//   "https://rickandmortyapi.com/api/character/5",
//   "https://rickandmortyapi.com/api/character/24",
//   "https://rickandmortyapi.com/api/character/47",
//   "https://rickandmortyapi.com/api/character/115",
//   "https://rickandmortyapi.com/api/character/124",
//   "https://rickandmortyapi.com/api/character/138",
//   "https://rickandmortyapi.com/api/character/161",
//   "https://rickandmortyapi.com/api/character/162",
//   "https://rickandmortyapi.com/api/character/172",
//   "https://rickandmortyapi.com/api/character/182",
//   "https://rickandmortyapi.com/api/character/199",
//   "https://rickandmortyapi.com/api/character/212",
//   "https://rickandmortyapi.com/api/character/213",
//   "https://rickandmortyapi.com/api/character/240",
//   "https://rickandmortyapi.com/api/character/241",
//   "https://rickandmortyapi.com/api/character/253",
//   "https://rickandmortyapi.com/api/character/255",
//   "https://rickandmortyapi.com/api/character/272",
//   "https://rickandmortyapi.com/api/character/309",
//   "https://rickandmortyapi.com/api/character/329",
//   "https://rickandmortyapi.com/api/character/331",
//   "https://rickandmortyapi.com/api/character/344",
//   "https://rickandmortyapi.com/api/character/346",
//   "https://rickandmortyapi.com/api/character/347",
//   "https://rickandmortyapi.com/api/character/395",
//   "https://rickandmortyapi.com/api/character/452",
//   "https://rickandmortyapi.com/api/character/454"
//   ],
//   "url": "https://rickandmortyapi.com/api/episode/16",
//   "created": "2017-11-10T12:56:35.364Z"
//}