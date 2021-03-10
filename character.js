// function myAsyncFunction() {
//   return myAPICall('https://rickandmortyapi.com/api/character')
//     .then(function (data) {
//        let result = 2 + 2;
//        return data;
//     })
//     .catch(function (ex) {
//         return ex;
//     });
// // }
// const API = "https://rickandmortyapi.com/api/character";
// // const response = await fetch(resource [options]);
// // const characters = await getCharacter()
// // const locations = await getLocation()
// // const episodes = await getEpisode()
// function getChars(){
//   fetch(API)
//   .then((response) => response.json())
//   .then((data) => {
//     const Names = data.results;
//     const Image = Names.map((x) => x.image);
//     let template = "";
//     Image.forEach((image) => {
//       template += `<img src="${image}"></image>`;
//     });
//     var container = document.querySelector("#div");
//     container.innerHTML = template;
//   });
// }

fetch("https://rickandmortyapi.com/api/character/")
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));
   showCharacters = characters => {
    const charactersDiv = document.querySelector("#characters");
    characters.forEach(character => {
      const characterElement = document.createElement("p");
      characterElement.innerText = `Character Name: ${character.name}`;
      charactersDiv.append(characterElement);
    });
  }