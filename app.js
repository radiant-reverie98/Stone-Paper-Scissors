let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
  //rock,paper,scissor
  const option = ["rock","paper","scissors"];
  const randIndx = Math.floor(Math.random()*3);
  return option[randIndx];

}



const drawGame = (userWin) => {
  console.log("Game was drawn");
  msg.innerHTML = "Game Drawn! Play Again";
  msg.style.backgroundColor = "yellow";
}

const userWinner = (userWin,userChoice,compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerHTML = userScore;
    console.log("You Win");
    msg.innerHTML = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  }
  else{
    compScore++;
    compScorePara.innerHTML = compScore;
    console.log("Computer Win");
    msg.innerHTML = `You lose! Computer's ${compChoice} beats your ${userChoice}`;;
    msg.style.backgroundColor = "red";
  }
}
const playgame = (userChoice) => {
  console.log("user choice is ",userChoice);
  //Generate computer choice
  const compChoice = genComputerChoice();
  console.log("comp choice is ",compChoice);
  if(userChoice === compChoice){
    //draw game
    drawGame();

  }
  else{
    let userWin = true;
    if(userChoice === "rock"){
      //scissors,paper
      userWin = compChoice === "paper"? false : true;
    }
    else if(userChoice === "paper"){
      //rock,scissor
      userWin = compChoice === "scissors" ? false : true;
    }
    else{
      //rock,scissors
      userWin = compChoice === "rock" ? false : true;
    }
    userWinner(userWin,userChoice,compChoice);
  }
  
  

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      
      playgame(userChoice);
      
    });
  });
