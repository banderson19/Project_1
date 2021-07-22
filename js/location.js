fetch("https://rickandmortyapi.com/api/location/")
  .then((response) => response.json())
  .then((locations) => showLocations(locations.results));
showLocations = (locations) => {
  console.log(222, locations)
  const locationsDiv = document.querySelector("#locations");
  const locationData = document.createElement("select");
  locationData.setAttribute("id", "locationSelected");
  locations.forEach((location) => {
    const newLocationData = new Option(`${location.name}`, `${location.name}`);
    locationData.appendChild(newLocationData)
  });
  locationsDiv.append(locationData);

};


// const locationsDiv = document.querySelector("#locations");
//  locations.forEach((location) => {
//     const locationElement = document.createElement("option");
//     locationElement.innerText = `${location.name}`;
//     locationsDiv.append(locationElement);
//   });