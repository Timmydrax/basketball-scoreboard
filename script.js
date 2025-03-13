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

// Trial
function incrementHomeScore(points) {
  gameState.homeScore += points; // Add points to the home score
  updateScores(); // Update the scoreboard display
  highlightLeadingTeam(); // Check which team is leading
}

homeScoreThree.addEventListener("click", () => {
  incrementHomeScore(3);
});
