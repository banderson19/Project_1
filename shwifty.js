
// function showOption(option) {
//   return option.requiredState == null || option.requiredState(state);
// }
// function selectOption(option) {
//   const nextTextNodeId = option.nextText;
//   state = Object.assign(state, option.setState);
//   showTextNode(nextTextNodeId);
// }
// const textNodes = [
//   {
//     id: 1,
//     text: "Character",
//     nextText: 2,
//   },
// let url = fetch("https://rickandmortyapi.com/api/character/252");
// fetch("https://rickandmortyapi.com/api/character/252")
//    .then(response => response.json())
//    .then(characters => showCharacters(characters.results));
//    showCharacters = characters => {
//     const charactersDiv = document.querySelector("#characters");
//     characters.showCharacters(character => {
//       const characterElement = document.createElement("p");
//       characterElement.innerText = `Character Name: ${character.name}`;
//       charactersDiv.append(characterElement);
//     });
// }
// console.log("...")
// import { getCharacter } from 'rickmortyapi' // getCharacter()
// // or
// import NoobNoob from 'rickmortyapi' // noob-noob.getCharacter()
// // or
// const noopNoop = 
// let charcters = fetch("https://rickandmortyapi.com/api/character/252")
// const characterElement = document.getElementById("characters").appendChild('p');
// const locationElement = document.getElementById("location");
// const episodeElement = document.getElementById("episode");
// fetch("https://rickandmortyapi.com/api/character/252")
//   .then((response) => response.json())
//   .then((characters) => showCharacters(characters.results));
// ]
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


// $(document).ready(function () {
//   $("button").click(function () {
//     $(
//       '<img src="https://api.nasa.gov/planetary/apod?api_key=ult6atambzs8D68rYchqcYlhYL26w5ohzCPek2Zq&date=1995-06-16"/>'
//     ).appendChild("body");
//     // Appends the HTML Fragment i.e image to <body>
//     $("#apod_img_ofDay").prepend(
//       '<img id="apod_img_ofDay" src="https://apod.nasa.gov/apod/image/e_lens.gif" />'
//     );
//   });
// });
// $.ajax({
//   let: (url =
//     "https://api.nasa.gov/planetary/apod?api_key=ult6atambzs8D68rYchqcYlhYL26w5ohzCPek2Zq&date=1995-06-16"),

//   url: url,

//   success: function success(result) {
//     if (result.media_type == "image") {
//       $("#apod_img_ofDay").css("display");

//       $("#apod_img_ofDay").attr("src", result.url);
//     } else {
//       $("#apod_img_ofDay").attr("src", result.url);
//     }

//     $("#apod_explanation").text(result.explanation);

//     $("#apod_title").text(result.title);
//   },
// });
// const config = {
//   NASA_API_KEY: 'GL6eDBbPb6LJMU9IV7RDeuyhSIETi8f1RoewVf1K', // Save your NASA API key here
// }
// const url = 'https://api.nasa.gov/planetary/apod?api_key=GL6eDBbPb6LJMU9IV7RDeuyhSIETi8f1RoewVf1K'
// const api_key = config.NASA_API_KEY
// fetch(url) // replace url with your API endpoint
//   .then(response => response.json()) // use .json() to parse your JSON data
//   .then(data => console.log(data)) // do stuff with your parsed data
//   .catch(error => console.log(error)) // handle any errors

//   const fetchNASAData = async () => {
//     try {
//       const response = await fetch(`${url}${api_key}`)
//       const data = await response.json()
//       console.log('NASA APOD data', data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
//   fetchNASAData()
//   const displayData = data => {
//     document.getElementById('title').textContent = data.title
//     document.getElementById('date').textContent = data.date
//     document.getElementById('picture').src = data.hdurl
//     document.getElementById('explanation').textContent = data.explanation
//   }
// fetchNASAData = async () => {
//   try {
//     const response = await fetch(`${url}${api_key}`)
//     const data = await response.json()
//     console.log('NASA APOD data', data)
//     displayData(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// const displayData = data => {
//   document.getElementById('title').textContent = data.title
//   document.getElementById('date').textContent = data.date
//   document.getElementById('picture').src = data.hdurl
//   document.getElementById('explanation').textContent = data.explanation
// }

// fetchNASAData()
// var datePicker = document.getElementById("apod_img_ofDay");
// datePicker.min = "1995-06-16";
// var button = document.getElementById("button");

// button.addEventListener("click", function() {
//         var date = datePicker.value;
//     console.log(date)
//     var url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${datePicker}&api_key=GL6eDBbPb6LJMU9IV7RDeuyhSIETi8f1RoewVf1K`;
//     console.log(url)
//     axios.get(url)
//         .then(function(response) {
//             if (response)
//                 var image = response.data.photos[0].img_src;
//             var sol = response.data.photos[0].sol;
//             console.log(response.status);
//             document.getElementById("results").innerHTML = text;
//             document.getElementById("image").src = image;
//             document.getElementById("image").style.display = "block";

//         }).catch(error)
//     var error = "Sorry, there are no photos on this date! Pick another.";
//     document.getElementById("results").innerHTML = error;
// });

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
//     document.getElementById("apod_img_ofDay").src = response.hdurl;
//     document.getElementById("apod_explanation").textContent = response.explanation;
//   }
// })
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="nasa.css" rel="stylesheet">
//     <title>Is there a drive-thru on that planet?</title>
// </head>

// <body>
//     <main class="container">
//         <h1>NASA's Astronomy Picture of the Day</h1>
//         <h2 id="title"></h2>
//         <p id="date"></p>
//         <section class="picture-explanation-container">
//             <img src="" id="picture" alt="astronomy image by NASA" />
//             <p id="explanation"></p>
//         </section>
//     </main>
//     <div class="description">
//         <div id="apod_explanation">text</div>
//     </div>
//     <div class="title">
//         <div id="apod_title">pic title</div>
//     </div>
//     <div class="nasaPhotos">
//         <div id="apod_img_ofDay" alt="photo of Neutron"></div>
//     </div>
//     <div class="inputDate">
//         <input id="date" type="date">
//         <button id="button" href="">Submit</button>
//     </div>
//     <div id="results">
//     </div>
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
//     <script type="text/javascript"></script>
//     <script src="nasa.js"></script>
// </body>

// </html>