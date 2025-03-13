// DOM Elements
const homeScoreElement = document.getElementById("home-score");
const guestScoreElement = document.getElementById("guest-score");
const homeFoulsElement = document.getElementById("home-fouls");
const guestFoulsElement = document.getElementById("guest-fouls");
const periodElement = document.getElementById("period");
const timerElement = document.getElementById("timer");
const homeTeamElement = document.getElementById("homeTeam");
const guestTeamElement = document.getElementById("guest-team");

// Timer Buttons
let startTimer = document.getElementById("startTimer");
let stopTimer = document.getElementById("stopTimer");
let resetTimer = document.getElementById("resetTimer");

// Period Buttons
let increasePeriod = document.getElementById("increasePeriod");
let decreasePeriod = document.getElementById("decreasePeriod");

//Home Buttons
let homeScoreOne = document.getElementById("home-score-1");
let homeScoreTwo = document.getElementById("home-score-2");
let homeScoreThree = document.getElementById("home-score-3");
let homeScoreMinus = document.getElementById("home-score-minus");
let homeFoulsIncrement = document.getElementById("home-fouls-plus");
let homeFoulsDecrement = document.getElementById("home-fouls-minus");

//Guest Buttons
let guestScoreOne = document.getElementById("guest-score-1");
let guestScoreTwo = document.getElementById("guest-score-2");
let guestScoreThree = document.getElementById("guest-score-3");
let guestScoreMinus = document.getElementById("guest-score-minus");
let guestFoulsIncrement = document.getElementById("guest-fouls-plus");
let guestFoulsDecrement = document.getElementById("guest-fouls-minus");

// Reset buttons
let resetGame = document.getElementById("new-game");

//Decalaring Game State Variables
const gameState = {
  homeScore: 0,
  guestScore: 0,
  homeFouls: 0,
  guestFouls: 0,
  period: 1,
  timerMinutes: 12,
  timerSeconds: 0,
  timerRunning: false,
  timerInterval: null,
};

// Displaying Initial Game State
function updateScores() {
  homeScoreElement.textContent = gameState.homeScore;
  guestScoreElement.textContent = gameState.guestScore;
}

function updatePeriodElement() {
  periodElement.textContent = gameState.period;
}

function updateHomeFouls() {
  homeFoulsElement.textContent = gameState.homeFouls;
}

function updateGuestFouls() {
  guestFoulsElement.textContent = gameState.guestFouls;
}

function updateTimerElement() {
  const minutes = String(gameState.timerMinutes).padStart(2, "0");
  const seconds = String(gameState.timerSeconds).padStart(2, "0");
  timerElement.textContent = `${minutes}:${seconds}`;
}

function initializeGameStateDisplay() {
  updateScores();
  updatePeriodElement();
  updateHomeFouls();
  updateGuestFouls();
  updateTimerElement();
}

initializeGameStateDisplay();

//Highlight Leading Team
function highlightLeadingTeam() {
  if (gameState.homeScore > gameState.guestScore) {
    homeTeamElement.classList.add("leading");
    guestTeamElement.classList.remove("leading");
  } else if (gameState.guestScore > gameState.homeScore) {
    guestTeamElement.classList.add("leading");
    homeTeamElement.classList.remove("leading");
  } else {
    homeTeamElement.classList.remove("leading");
    guestTeamElement.classList.remove("leading");
  }
}

// Home Increment & Decrement
function incrementHomeScore(points) {
  gameState.homeScore += points; // Add points to the home score
  updateScores(); // Update the scoreboard display
  highlightLeadingTeam(); // Check which team is leading
}

function decrementHomeScore(points) {
  gameState.homeScore = Math.max(0, gameState.homeScore - points); // Subtracts points, When value < 0 , max value = 0
  updateScores(); // Update the scoreboard display
  highlightLeadingTeam(); // Check which team is leading
}

// +3
homeScoreThree.addEventListener("click", () => {
  incrementHomeScore(3);
});
// +2
homeScoreTwo.addEventListener("click", () => {
  incrementHomeScore(2);
});
// +1
homeScoreOne.addEventListener("click", () => {
  incrementHomeScore(1);
});
// -1
homeScoreMinus.addEventListener("click", () => {
  decrementHomeScore(1);
});

// Guest Increment & Decrement
function incrementGuestScore(points) {
  gameState.guestScore += points; // Add points to the home score
  updateScores(); // Update the scoreboard display
  highlightLeadingTeam(); // Check which team is leading
}

function decrementGuestScore(points) {
  gameState.guestScore = Math.max(0, gameState.guestScore - points); // Subtracts points, When value < 0 , max value = 0
  updateScores(); // Update the scoreboard display
  highlightLeadingTeam(); // Check which team is leading
}

// +1
guestScoreOne.addEventListener("click", () => {
  incrementGuestScore(1);
});
// +2
guestScoreTwo.addEventListener("click", () => {
  incrementGuestScore(2);
});
//+3
guestScoreThree.addEventListener("click", () => {
  incrementGuestScore(3);
});
//-1
guestScoreMinus.addEventListener("click", () => {
  decrementGuestScore(1);
});

//Period Increment
function periodIncrement(points) {
  gameState.period = Math.min(4, gameState.period + points);
  updatePeriodElement();
}

increasePeriod.addEventListener("click", () => {
  periodIncrement(1);
});

//Period Decrement
function periodDecrement(points) {
  gameState.period = Math.max(1, gameState.period - points);
  updatePeriodElement();
}

decreasePeriod.addEventListener("click", () => {
  periodDecrement(1);
});

// Home Foul Increment & Decreament

function homeFoulsIncrease(points) {
  gameState.homeFouls += points;
  updateHomeFouls();
}

homeFoulsIncrement.addEventListener("click", () => {
  homeFoulsIncrease(1);
});

function homeFoulsDecrease(points) {
  gameState.homeFouls = Math.max(0, gameState.homeFouls - points);
  updateHomeFouls();
}

homeFoulsDecrement.addEventListener("click", () => {
  homeFoulsDecrease(1);
});

// Guest Foul Increment & Decrement

function guestFoulsIncrease(points) {
  gameState.guestFouls = gameState.guestFouls + points;
  updateGuestFouls();
}

guestFoulsIncrement.addEventListener("click", () => {
  guestFoulsIncrease(1);
});

function guestFoulsDecrease(points) {
  gameState.guestFouls = Math.max(0, gameState.guestFouls - points);
  updateGuestFouls();
}

guestFoulsDecrement.addEventListener("click", () => {
  guestFoulsDecrease(1);
});
