// const body = document.body
// body.append("Hello World") 
// const div = document.createElement("div")
// div.innerText= "Hey"
// body.append(div)

let gameOn= true;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];
let playerCoice ;

function rockClicked() {
    playerCoice=0;
  }
function paperClicked() {
 
    playerCoice=1;
  }
function scissorsClicked() {
  
    playerCoice=2;
  }
  

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

//     //let userChoice =parseInt(prompt("pick rock paper or scissors, by typing 1, 2 or 3"));
let computeChoice = Math.floor(Math.random()*3);

function playerSelection (playerCoice){

}

function singleGame (playerCoice, computeChoice){
    if (playerCoice==computeChoice){
        alert("same pick!")
    }

}
singleGame(playerCoice,computeChoice)