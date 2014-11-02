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
    [25, "Honored Dog"],
}

function Bonus(bonusName){
  this.name = bonusName;
  this.score = pointValues[bonusName][0]
  this.description = pointValues[bonusName][1]

  this.positive = function(){
    if(this.score >= 1) {
      return true
    } else {
      return false
    }
  }
}

function Calculator(values){
  this.values = values;
  this.subtotal = 0;
  this.multispotSubtotal = 0;
  this.total = 0;


  this.everything = function(){
    this.addBaseDogScore();
    this.addCreativeBonus();
    this.addAllBonuses();
    this.calculateMultispot();
  }

  this.addAllBonuses = function(){
    for(i = 0; i < this.values.bonuses.length; i++){
      this.subtotal += this.values.bonuses[i].score
    }
  }

  this.addCreativeBonus = function(){
    if (this.values.creativeBonus != ""){
      this.subtotal += 1
    }
  }

  this.addBaseDogScore = function(){
    this.subtotal += this.values.numberOfDogs
  }

  // ex: 5 dogs, 4 eligible for multispot
  // subtotal of eligible dogs is 4 (1 point per dog)
  // 4points x 4 dogs = 16, +1 uneligible dog = 17

  this.calculateMultispot = function(){
    if (this.values.multispotDogs > 1) {
      var multi = this.values.multispotDogs
      var numdogs = this.values.numberOfDogs
      var ineligible = numdogs - multi
      var subtotalMinusIneligible = this.subtotal - ineligible
      this.multispotSubtotal = subtotalMinusIneligible
      this.total = (subtotalMinusIneligible * multi) + ineligible
    } else {
      this.total = this.subtotal;
    }
  }
}
