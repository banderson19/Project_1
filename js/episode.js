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
