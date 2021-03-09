const textElement = document.getElementById("text")
const optionsBtnElement = document.getElementById("optionsBtn")
// const chars = await getCharacter()
// const locations = await getLocation()
// const episodes = await getEpisode()
// You can pass a page number to access all the pages inside the info object
// To know more about the info object and pagination, check
// https://rickandmortyapi.com/documentation/#info-and-pagination
// const moreChars = await getCharacter({ page: 2 })
// const tinyRick = require('rickmortyapi')
let state = {}

function takeOff() {
    state = {}
    showTextNode(1)

}
function showTextNode(textNodeIndex)
{
    const textNode =textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionsBtnElement.firstChild) {
        optionsBtnElement.removeChild(optionsBtnElement.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener("click", () => selectOption(option))
            optionsBtnElement.appendChild(button)
        }
    })
}
function showOption(option)
{
    return option.requiredState == null || option.requiredState(state)

}
function selectOption(option)
{
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}
const textNodes = [
    {
        id: 1,
        text: "Beaker of Genetic Monstrosities",
        options: [
            {
                text: "Let's go.",
                nextText: 2
            },
        ]
    },
    {
        id: 2,
        text: "You are walking along and come across a stranger. You must make a trade, the beaker or the ship.",
        options: [
            {
                text: 'SpaceShip',
                requiredState: (currentState) => currentState.SpaceShip,
                setState: { SpaceShip: false, beaker: true },
                nextText: 2
            },
            {
                text: "Spaceship",
                        nextText: 2
                    },
                    {
                        text: "Beaker",
                        setState: {beaker: true },
                        nextText: 3
                    }
                ]
            },
          {
            id: 3,
            text: "Citadel of Ricks",
            options: [
                {
                    text: "Enter",
                    requiredState: (currentState) => currentState.Enter,
                    setState: { Enter: true },
                    nextText: 4
                },
                { 
                    text: "Enter",
                    nextText: 4
                }
            ]
  },
]
takeOff()