fetch("https://rickandmortyapi.com/api/location/")
  .then((response) => response.json())
  .then((locations) => showLocations(locations.results));
showLocations = (locations) => {
  console.log(222, locations)
  const locationsDiv = document.querySelector("#locations");
  const listData = document.createElement("select");
  listData.setAttribute("id", "locationSelected")
  locations.forEach((location) => {
    const newListData = new Option(`${location.name}`, `${location.name}`);
    listData.appendChild(newListData)
  });
  locationsDiv.append(listData);

};


// const locationsDiv = document.querySelector("#locations");
//  locations.forEach((location) => {
//     const locationElement = document.createElement("option");
//     locationElement.innerText = `${location.name}`;
//     locationsDiv.append(locationElement);
//   });