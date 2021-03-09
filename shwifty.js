$.ajax({

  let: url ="https://api.nasa.gov/planetary/apod?api_key=ult6atambzs8D68rYchqcYlhYL26w5ohzCPek2Zq&date=1995-06-16",
  
  url: url,
  
  success: function success(result)
  
  {
  
  //Sometimes they post video too//
  
  if(result.media_type == "video") {
  
  $("#apod_img_ofDay").css("display", "none");
  
  $("#apod_vid_id").attr("src", result.url);
  
  }
  
  else {
  
  $("#apod_vid_id").css("display", "none");
  
  $("#apod_img_ofDay").attr("src", result.url);
  
  }
  
  $("#apod_explanation").text(result.explanation);
  
  $("#apod_title").text(result.title);
  
  }
  
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
  // fetch ("https://rickandmortyapi.com/api/character/")
  // .then(response => response.json())
  //     .then(characters => showCharacters(characters.results));

  //     showCharacters = characters => {
  //       const charactersDiv = document.querySelector("#characters");
  //         characters.forEach(character => {
  //             const characterElement = document.createElement("p");
  //             characterElement.innerText = `Character Name: ${character.name}`;
  //             charactersDiv.append(characterElement);
  //           });
  //         }
  // fetch ("https://rickandmortyapi.com/api/location/3"),
  // requiredState: (currentState) => currentState.Enter,
  // setState: { Enter: true },

  // fetch ("https://rickandmortyapi.com/api/location/3,21")
  // .then(response => response.json())
  //     .then(location => showLocation(location.results));
  //     showLocation = location => {
  //             const locationDiv = document.querySelector("#location");
  //               location.forEach(location=> {
  //                   const locationElement = document.createElement("p");
  //                   locationElement.innerText = `Location Name: ${location.name}`;
  //                   locationDiv.append(locationElement);
  //                 });
  //               }
  //       fetch ("https://rickandmortyapi.com/api/location/3"),
  //       requiredState: (currentState) => currentState.Enter,
  //       setState: { Enter: true },
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
  //   }