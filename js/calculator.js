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
    [-3, "Shameful Appearance (Caligula Spot)"],
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
    [-1, "Distance (Too Close)"],
  goodDistance:
    [1, "Distance (Good Distance)"],
  extremeDistance:
    [2, "Distance (Extreme Distance!)"],
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
  var lineItems = []
  for (var value in theseValues){
    lineItems.push(formatPointOutput(pointValues[value]))
  }
  lineItems = formatLineItemsToListItems(lineItems)
  console.log(lineItems)
  return lineItems.join("")
}

function formatLineItemsToListItems(items){
  for(i = 0; i < items.length; i++){
      var thisItem = items[i]
      items[i] = "<li>" + thisItem + "</li>"
  }
  console.log(items)
  return items
}

function formatPointOutput(valueArray){
  if (valueArray[0] < 0){
    return valueArray[1] + ": " + valueArray[0]
  } else if (valueArray[0] > 0){
    return valueArray[1] + ": +" + valueArray[0]
  }
}

function updateResult(items){
  var joined = items.join("")
  $("#result").text(joined)
}

function getBaseScore(){
  var numOfDogs = $("#numberOfDogs").val()
  var toReturn = "<h3>Base Score</h3><p class='positive scoreline'>" + numOfDogs + " dogs" + "<span class='score'>+" + numOfDogs + "</span></p>"
  console.log(toReturn)
  return toReturn
}

function getCaveats(){

}

function formatResult(){
  var result = "<h1>Your Score</h1>" + getBaseScore() + "</ul><h3>Bonuses</h3><ul>" + getBonuses() + "</ul>"
  $("#result").html(result)
}