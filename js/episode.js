fetch("https://rickandmortyapi.com/api/episode/")
  .then((response) => response.json())
  .then((episodes) => showEpisodes(episodes.results));
showEpisodes = (episodes) => {
  const episodesDiv = document.querySelector("#episodes");
  episodes.forEach((episode) => {
    const episodeElement = document.createElement("p");
    episodeElement.innerText = `Episode Name: ${episode.name}`;
    episodesDiv.append(episodeElement);
  });
};
