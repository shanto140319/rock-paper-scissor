let pScore= 0;
let cScore= 0;
function startGame(){
    const playBtn = document.querySelector(".intro button")
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener('click',function(){
        introScreen.classList.add("fadeout");
        match.classList.remove("fadeout");
    })
}

function playMatch(){
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    const computerOptions = ["rock","paper","scissors"];
    options.forEach(function(option){
        option.addEventListener('click', function(){
            let computerNumber = Math.floor(Math.random() *3);
            const computerChoice = computerOptions[computerNumber];
            
            setTimeout(() => {
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
              }, 2000);
              //Animation
              playerHand.style.animation = "shakePlayer 2s ease";
              computerHand.style.animation = "shakeComputer 2s ease";
        })
    })
    

}

function updateScore(){
    const playerScore = document.querySelector(".player-score p");
    const computerscore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerscore.textContent = cScore;
}

function compareHands(playerChoice,computerChoice){
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
}

playMatch();
startGame();