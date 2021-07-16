fetch("https://rickandmortyapi.com/api/location/")
  .then((response) => response.json())
  .then((locations) => showLocations(locations.results));
showLocations = (locations) => {
  const locationsDiv = document.querySelector("#locations");
 locations.forEach((location) => {
    const locationElement = document.createElement("p");
    locationElement.innerText = `Location Name: ${location.name}`;
    locationsDiv.append(locationElement);
  });
};
