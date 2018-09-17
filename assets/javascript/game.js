$(document).ready(function () {
// VARIABLES
var gemButton = $(".gem");
var resetBtn = $("#resetButton");
var winCount = 0;
var lossCount = 0;
var target = 0;
var current = 0;
var gems = [$("#gemOne"), $("#gemTwo"), $("#gemThree"), $("#gemFour")]

var winHTML = $("#winCount");
var lossHTML = $("#lossCount");
var targetHTML = $("#target");
var scoreHTML = $("#currentScore")
var messageHTML = $("#systemMessage")



//=========================================================================================
// FUNCTIONS
function getRandInt(min, max) {
  // takes two integers, where min is smaller than max
  // returns a random integer between min and max
  // potential returns include min, but do not include max
  return Math.floor(Math.random() * (max - min)) + min;
};


function initiate() {
  console.log("Begin New Game")

  // reset current score to 0 and write to page
  current = 0;
  scoreHTML.text(current);

  // randomize new target value and write to page
  target = getRandInt(19, 121);
  targetHTML.text(target);

  // randomize gem values
  for (i=0; i < gems.length; i++) {
    var currentGem = gems[i]
    var gemVal = getRandInt(1, 13);
    currentGem.attr("value", gemVal)
    console.log("Gem " + (i+1) + ": " +currentGem.attr("value"))
  }
}

function checkEndGame() {
  // compare current score to target score
  if (current < target) {
    // if your score is below the target score, do nothing and keep playing
    messageHTML.html("&nbsp;")
    return false;
  } else if (current > target) {
    // if your score is higher than the target score, you lose
    lossCount = lossCount + 1;
    lossHTML.text(lossCount);
    messageHTML.html("You Lost!")
  } else {
    // only other condition is if current score and target score are equal
    // in which case you win
    winCount = winCount +1;
    winHTML.text(winCount);
    messageHTML.html("You Won!")
  }
  initiate()
}

//=========================================================================================
// BUTTONS

resetBtn.on("click", function() {
  initiate()
})

gemButton.on("click", function(){
  var gemVal = $(this).attr("value");
  console.log("Value: " + gemVal);
  current = current + parseInt(gemVal);
  scoreHTML.text(current);
  checkEndGame()
})


//=========================================================================================
// PAGE SCRIPT
initiate()
})