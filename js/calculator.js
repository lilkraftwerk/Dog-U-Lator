var pointValues = {
  greatStory:
    [1, "Great Story"],
  skillShot:
    [1, "Skill Shot"],
  stealthSpot:
    [1, "Stealth Spot"],
  shamefulAppearance:
    [-2, "Shameful Appearance"],
  caligula:
    [-3, "Caligula Spot"],
  reverseSpot:
    [0, "Reverse Spot"],
  jackOfSpades:
    [0, "The Illustrious Jack Of Spades"],
  criminalBehavior:
    [1, "Criminal Behavior"],
  destroyingProperty:
    [2, "Criminal Behavior (Destroying Human Property)"],
  hegemonicOppression:
    [-25, "Hegemonic Oppression"],
  extremeLounging:
    [1, "Extreme Lounging"],
  tooClose:
    [-1, "Too Close"],
  goodDistance:
    [1, "Good Distance"],
  extremeDistance:
    [2, "Extreme Distance!"],
  actionDog:
    [1, "Action Dog"],
  curiousEater:
    [2, "Curious Eater"],
  missingComponent:
    [3, "Missing Component"],
  ronin:
    [1, "浪人 / Dog Without A Master"],
  heroDog:
    [25, "Hero Dog"],
  honorDog:
    [25, "Honored Dog"]
}

function getBonuses(){
  var theseValues = getValues()
  var bonusObjects = []
  for (value in theseValues){
    var thisPointObject = formatPointObject(value)
    bonusObjects.push(thisPointObject)
  }
  return bonusObjects
}

function formatPointObject(value){
  var thisObject = {
  name: value,
  score: pointValues[value][0],
  description: pointValues[value][1],
  positive: scoreIsPositive(pointValues[value][0])
  }
  return thisObject
}

function scoreIsPositive(score){
  if (score > 0){
    return "positive"
  } else if (score < 0){
    return "negative"
  }
}

function createScoreDiv(scoreObj){
  return "<div class='scoreline " + scoreObj.positive + "'>" + scoreObj.description +
  "<span class='score'>" + returnPlusOrMinus(scoreObj) + scoreObj.score + "</span></div>"
}

function returnPlusOrMinus(scoreObj){
  if (scoreObj.positive == "positive") {
    return "+"
  } else if (scoreObj.positive == "negative") {
    return ""
  }
}

function pluralDogs(numOfDogs){
  if (parseInt(numOfDogs) == 1){
    return "dog"
  } else {
    return "dogs"
  }
}

function getBaseScore(){
  var numOfDogs = $("#dogval").val()
  var toReturn = "<h3>Base Score</h3><p class='positive scoreline'>" + numOfDogs + " " + pluralDogs(numOfDogs) + "<span class='score'>+" + numOfDogs + "</span></p>"
  console.log(toReturn)
  return toReturn
}

function getSubtotal(){
  var bonusObjects = getBonuses()
  var allScores = [parseInt($("#numberOfDogs").val())]
  for(i = 0; i < bonusObjects.length; i++){
    allScores.push(bonusObjects[i].score)
  }
  var subtotal = 0
  for(i = 0; i < allScores.length; i++){
    subtotal += allScores[i]
  }
  return subtotal
}

function formatSubtotal(){
  return "<hr><h3>Subtotal</h3><div class='subtotal'>" + String(getSubtotal()) + "</div>"
}

function formatAllBonuses(){
  var results = ["<h3>Bonuses</h3>"]
  var bonuses = getBonuses()
  for (i = 0; i < bonuses.length; i++){
    results.push(createScoreDiv(bonuses[i]))
  }
  return results
}

// base score + bonuses = subtotal * multispot = total (then list caveats)

function displayAllPoints(){
  var allPointsDisplay = [getBaseScore(), formatAllBonuses(), formatSubtotal()]
  $("#result").html(allPointsDisplay.join(""))
}