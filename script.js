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
let playerCoice =0;
let ch = [rock, paper, scissors];

console.log("test")
function singleGame (playerCoice){
  let computeChoice = Math.floor(Math.random()*3);
  ch[computeChoice].style.border="10px solid red";
    if (playerCoice==computeChoice){
        ch[computeChoice].style.border="10px solid purple";
        document.getElementById("announcer").innerHTML = "Tie, you both picked "+choices[playerCoice];
    }
    else if(playerCoice==0 && computeChoice==1||playerCoice==1 && computeChoice==2||playerCoice==2 && computeChoice==0 ){

      
      computerScore++;
      document.getElementById("computer-score").innerHTML = ""+computerScore;
      document.getElementById("announcer").innerHTML = "You loose becouse you picked "+choices[playerCoice]+" and the computer picked "+choices[computeChoice];

      if (computerScore==5){
        document.getElementById("announcer").innerHTML = "Computer wins with :"+computerScore+" to: "+playerScore+" click any item to play again!";
        playerScore=0;
        computerScore=0;
        document.getElementById("computer-score").innerHTML = ""+computerScore;
        document.getElementById("player-score").innerHTML = ""+playerScore;
      }
    }
    else{
      
      playerScore++;

      document.getElementById("player-score").innerHTML = ""+playerScore;
      document.getElementById("announcer").innerHTML = "You win becouse you picked "+choices[playerCoice]+" and the computer picked "+choices[computeChoice];
      if (playerScore==5){
        document.getElementById("announcer").innerHTML = "You win "+playerScore+" to "+computerScore+" click any item to play again!";
        playerScore=0;
        computerScore=0;
        document.getElementById("computer-score").innerHTML = ""+computerScore;
        document.getElementById("player-score").innerHTML = ""+playerScore;
      }

    }
    

}

function rockClicked() {
    reset();
    playerCoice=0;
    singleGame(playerCoice)
    rock.style.border="10px solid blue"
  }
function paperClicked() {
    reset();
    playerCoice=1;
    singleGame(playerCoice)
    paper.style.border="10px solid blue"
  }
function scissorsClicked() {
    reset();
    playerCoice=2;
    singleGame(playerCoice)
    scissors.style.border="10px solid blue"
  }
  
function reset(){
  paper.style.border="6px solid black";
  scissors.style.border="6px solid black";
  rock.style.border="6px solid black";
}

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

//     //let userChoice =parseInt(prompt("pick rock paper or scissors, by typing 1, 2 or 3"));



