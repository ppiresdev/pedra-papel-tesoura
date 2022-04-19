const handsEl = document.querySelectorAll(".hand img");

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";
};
