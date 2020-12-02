


let state = {
  choices :["rock", "paper", "scissors"],
  headerMessage:"Let's Play Rock, Paper, Scissors!",
  
  
const getHeader = () => {
  const { headerMessage } = state;
  let htmlString = "div";
  htmlString += <h1>${headerMessage}</h1>
  htmlString = "</div>";

  return htmlString;
};

const getChoices = () => {
  const { choices } = state;
  
  let choiceHTMLStringArray = choices.map( (choice) =>{
    return `<div class='choice' onclick='handleClick(${index})'>'${choice}</div>`
  });
  
  let choicesHTMLString = choiceHTMLStringArray.join("");
  
  let htmlString = "div";
  htmlString += choicesHTMLString;
  htmlString = "</div>";

  return htmlString;
}

const handleClick = (playerChoiceIndex) => {
const playerChoice = state.choices[playerChoiceIndex];
const computerChoiceIndex = rand(2);
console.log(choice);
const computerChoice = state.choice[computerChoiceIndex];
render();

}

const rand = (num) => {
  return choice[Math.floor(Math.random() * num)];
}

const getResult = (computerChoiceIndex,playerChoiceIndex) => {
if (playerChoiceIndex === computerChoiceIndex) {
  return 0;
}
if 
}



//takes no arguments and returns undefined because we arent returning anything
const render = () => {
  let htmlString = '<div>'
  htmlString =+ <h1>${state.headerMessage}</h1>
  htmlString += getHeader();
  htmlString += getChoices();
  appElement = document.getElementById("app");
  appElement.innerHTML = htmlString;
  
};

render();