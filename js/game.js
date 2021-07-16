const textElement = document.getElementById("text");
const optionsBtnElement = document.getElementById("optionsBtn");
let state = {};
function takeOff() {
  state = {};
  showTextNode(1);
}
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionsBtnElement.firstChild) {
    optionsBtnElement.removeChild(optionsBtnElement.firstChild);
  }
  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.classList.add("btn-go");
      button.addEventListener("click", () => selectOption(option));
      optionsBtnElement.appendChild(button);
    }
  });
}
function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}
function selectOption(option) {
  const nextTextNodeId = option.nextText;
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}
const textNodes = [
  {
    id: 1,
    text: "Beaker of Genetic Monstrosities",
    options: [
      {
        text: "Let's go.",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text:
      "You are walking along and come across a stranger. You must make a trade, the beaker or the ship.",
    options: [
      {
        text: "SpaceShip",
        requiredState: (currentState) => currentState.SpaceShip,
        setState: { SpaceShip: true, beaker: true },
        nextText: 2,
      },
      {
        text: "Spaceship",
        setState: { Spaceship: true },
        nextText: 3,
      },
      {
        text: "Beaker",
        setState: { beaker: true },
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "Do You Choose to Enter?",
    options: [
      {
        text: "Citadel",
        requiredState: (currentState) => currentState.Citadel,
        setState: { Citadel: true },
      },
      {
        text: "Citadel",
        setState: { Citadel: true },
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    requiredState: (currentState) => currentState.Enter,
    setState: { Enter: true },
    options: [
      {
        text: "Enter",
        requiredState: (currentState) => window.location.assign("./htmlTemplates/citadel.html"),
        setState: { Enter: true },
      },
    ],
  },
];

takeOff();
