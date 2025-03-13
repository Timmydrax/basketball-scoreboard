// DOM Elements
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const homeFouls = document.getElementById("home-fouls");
const guestFouls = document.getElementById("guest-fouls");
const periodEl = document.getElementById("period");
const timerEl = document.getElementById("timer");
const homeTeam = document.getElementById("homeTeam");
const guestTeam = document.getElementById("guest-team");

// Timer Buttons
let startTimer = document.getElementById("startTimer");
let stopTimer = document.getElementById("stopTimer");
let resetTimer = document.getElementById("resetTimer");

// Period Buttons
let increasePeriod = document.getElementById("increasePeriod");
let decreasePeriod = document.getElementById("decreasePeriod");

//Home Buttons
let homeScoreOne = document.getElementsByName("home-score-1");
let homeScoreTwo = document.getElementsByName("home-score-2");
let homeScoreThree = document.getElementsByName("home-score-3");
let homeScoreMinus = document.getElementsByName("home-score-minus");
let homeFoulsIncrement = document.getElementById("home-fouls-plus");
let homeFoulsDecrement = document.getElementById("home-fouls-minus");

//Guest Buttons
let guestScoreOne = document.getElementsByName("guest-score-1");
let guestScoreTwo = document.getElementsByName("guest-score-2");
let guestScoreThree = document.getElementsByName("guest-score-3");
let guestScoreMinus = document.getElementsByName("guest-score-minus");
let guestFoulsIncrement = document.getElementById("guest-fouls-plus");
let guestFoulsDecrement = document.getElementById("guest-fouls-minus");

// Reset buttons
let resetGame = document.getElementById("new-game");
