const textElement = document.getElementById("text")
const optionsBtnElement = document.getElementById("optionsBtn")

let state = {}

function takeOff() {
    state = {}
    showTextNode(1)

}
function showTextNode(textNodeIndex)
{
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
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
        text: "This is not the Citadel.",
        options: [
            {
                text: "okie",
                setState: { okie: true },
                nextText: 2
            },
            {
                text: "beaker of genetic monstrosity",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "You Must make a trade.",
        requiredState: (currentState) => currentState.okie,
        setState: {
        okie: false, spaceship: true },
        nextText: 3
    },
    {
        text: "keep walking",
        nextText: 3
    }
]

takeOff()