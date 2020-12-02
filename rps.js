let rock = "rock";
let paper = "paper";
let scissors = "scissors"


let game = {
  choices :[rock, paper, scissors],
  headerMessage:"Let's Play Rock, Paper, Scissors!",
  } 


function computerChoice(choice) {
  return choice[Math.floor(Math.random() * choice.length)];
}

const renderLoop = () => {
  let htmlString = "";
  game.choices.forEach((choice, index) => {
    htmlString += `<div class='choices'>
                   <div onclick='decide(${index})'>${choice}</div>            
                  </div>`;  
});
htmlString += `</div>`;
return htmlString;
};





const decide = () => {

}


















function render() {
  
  appElement = document.getElementById("app");
  appElement.innerHTML = htmlString;
  let htmlString = `<h1>${game.headerMessage}</h1>`;
};

render();