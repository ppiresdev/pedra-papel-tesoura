let SCORE = 0;
const handOptions = {
  rock: "./img/Rock.png",
  paper: "./img/Paper.png",
  scissor: "./img/Scissors.png",
};

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("userPickImage").src = handOptions[hand];
  let cpHand = pickComputerHand();
  referee(hand, cpHand);
};

const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissor"];
  let cpHand = hands[Math.floor(Math.random() * 3)];

  document.getElementById("computerPickImage").src = handOptions[cpHand];

  return cpHand;
};

const referee = (userHand, cpHand) => {
  if (userHand === "paper" && cpHand === "scissor") {
    setDecision("YOU LOSE!");
  }
  if (userHand === "paper" && cpHand === "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand === "paper" && cpHand === "paper") {
    setDecision("It's a tie!");
  }
  if (userHand === "rock" && cpHand === "scissor") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand === "rock" && cpHand === "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand === "rock" && cpHand === "rock") {
    setDecision("It's a tie!");
  }
  if (userHand === "scissor" && cpHand === "scissor") {
    setDecision("It's a tie!");
  }
  if (userHand === "scissor" && cpHand === "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand === "scissor" && cpHand === "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
};
