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
