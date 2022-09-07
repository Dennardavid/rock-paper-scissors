/* functions to control the rule modal */
function rules() {
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
/* Original score  */
let SCORE = 0;
function userChoice(choice) {
  /* this help to switch between the pages when the buttons are clicked */
  document.getElementById("landing").style.display = "none";
  document.getElementById("results").style.display = "flex";

  /* script to display what i choose */
  const myChoice = document.getElementById("mychoice-outer");
  const myImage = document.getElementById("myImage");
  if (choice == "paper") {
    myChoice.style.backgroundImage =
      "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
    myChoice.style.boxShadow = "0px 7px hsl(235, 52%, 49%)";
    myImage.src = "images/icon-paper.svg";
  } else if (choice == "scissors") {
    myChoice.style.backgroundImage =
      "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
    myChoice.style.boxShadow = "0px 7px hsl(40, 93%, 36%)";
    myImage.src = "images/icon-scissors.svg";
  } else {
    myChoice.style.backgroundImage =
      "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
    myChoice.style.boxShadow = "0px 7px hsl(349, 56%, 38%)";
    myImage.src = "images/icon-rock.svg";
  }

  /* script to display what computer choose */
  const compRandom = Math.floor(Math.random() * 3);
  const compChoice = document.getElementById("compchoice-outer");
  const compImage = document.getElementById("compImage");
  if (compRandom == "0") {
    compChoice.style.backgroundImage =
      "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
    compChoice.style.boxShadow = "0px 7px hsl(235, 52%, 49%)";
    compImage.src = "images/icon-paper.svg";
  } else if (compRandom == "1") {
    compChoice.style.backgroundImage =
      "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
    compChoice.style.boxShadow = "0px 7px hsl(40, 93%, 36%)";
    compImage.src = "images/icon-scissors.svg";
  } else {
    compChoice.style.backgroundImage =
      "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
    compChoice.style.boxShadow = "0px 7px hsl(349, 56%, 38%)";
    compImage.src = "images/icon-rock.svg";
  }

  /* script to display the winner */
  /* script to show winner when user selects paper and change the color of the text on the plyagain button*/
  if (choice == "paper" && compRandom == "0") {
    document.getElementById("winner").textContent = "YOU DRAW";
    document.getElementById("playagain").style.color = "hsl(229, 25%, 31%)";
  } else if (choice == "paper" && compRandom == "1") {
    document.getElementById("winner").textContent = "YOU LOSE";
    score(SCORE - 1);
    document.getElementById("playagain").style.color = "hsl(349, 71%, 52%)";
  } else if (choice == "paper" && compRandom == "2") {
    document.getElementById("winner").textContent = "YOU WIN";
    score(SCORE + 1);
    document.getElementById("playagain").style.color = "hsl(229, 25%, 31%)";
  } else if (choice == "scissors" && compRandom == "0") {
    /* script to show winner when user selects scissors and change the color of the text on the plyagain button */
    document.getElementById("winner").textContent = "YOU WIN";
    score(SCORE + 1);
    document.getElementById("playagain").style.color = "hsl(229, 25%, 31%)";
  } else if (choice == "scissors" && compRandom == "1") {
    document.getElementById("winner").textContent = "YOU DRAW";
    document.getElementById("playagain").style.color = "hsl(229, 25%, 31%)";
  } else if (choice == "scissors" && compRandom == "2") {
    document.getElementById("winner").textContent = "YOU LOSE";
    score(SCORE - 1);
    document.getElementById("playagain").style.color = "hsl(349, 71%, 52%)";
  } else if (choice == "rock" && compRandom == "0") {
    /* script to show winner when user selects rock and change the color of the text on the plyagain button */
    document.getElementById("winner").textContent = "YOU LOSE";
    score(SCORE - 1);
    document.getElementById("playagain").style.color = "hsl(349, 71%, 52%)";
  } else if (choice == "rock" && compRandom == "1") {
    document.getElementById("winner").textContent = "YOU WIN";
    score(SCORE + 1);
    document.getElementById("playagain").style.color = "hsl(229, 25%, 31%)";
  } else {
    document.getElementById("winner").textContent = "YOU DRAW";
    document.getElementById("playagain").style.color = "hsl(229, 25%, 31%)";
  }
}

/* function to make the play again button reload the page  */
function playAgain() {
  document.getElementById("landing").style.display = "flex";
  document.getElementById("results").style.display = "none";
}

/* function to display score and increase it */
function score(score) {
  SCORE = score;
  document.getElementById("myScore").textContent = score;
}
