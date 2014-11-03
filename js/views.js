function HTMLFormatter(values, calculator){
  this.formattedDivs = [];
  this.values = values;
  this.calculator = calculator;

  this.formatAllDivs = function(){
    this.createBase()
    this.createAllBonuses()
    this.createSubtotalDiv()
    this.createTotal()
    this.createCaveatDiv()
  }

  this.dogOrDogs = function(){
    if(this.values.numberOfDogs == 1){
      return "Dog"
    } else {
      return "Dogs"
    }
  }

  this.formatBaseDiv = function(){
    return "<h1>Base Score</h1><div class='scoreline positive'>" + String(this.values.numberOfDogs) +
    " " + this.dogOrDogs() + "<span class='score'>+" + String(this.values.numberOfDogs) + "</span></div>"
  }

  this.createBase = function(){
    this.formattedDivs.push(this.formatBaseDiv())
  }

  this.formatCreativeBonus = function(){
    if (this.values.creativeBonus != ""){
      return "<div class='scoreline positive'>Creative Bonus: " + this.values.creativeBonus +
      "<span class='score'>+1</span></div>"
    } else {
      return ""
    }
  }

  this.createAllBonuses = function(){
    this.formattedDivs.push("<h1>Bonuses</h1>")
    this.formattedDivs.push(this.formatCreativeBonus())
    if(this.values.bonuses.length == 0 && this.values.creativeBonus == ""){
      this.formattedDivs.push(this.zeroBonus())
    } else {
      for(i = 0; i < this.values.bonuses.length; i++){
        var thisBonus = this.values.bonuses[i]
        this.formattedDivs.push(this.formatBonusDiv(thisBonus))
      }
    }
  }

  this.zeroBonus = function(){
    return "<div class='subtotal scoreline'>No Bonuses<span class='score'>0</span></div>"
  }

  this.formatBonusDiv = function(bonusObject){
    return "<div class='scoreline " + this.positiveOrNegative(bonusObject) + "'>" + bonusObject.description +
    "<span class='score'>" + this.returnPlusOrMinus(bonusObject) + bonusObject.score + "</span></div>"
  }

  this.createSubtotalDiv = function(){
    if(this.values.multispotDogs > 1){
      this.formattedDivs.push(this.formatMultispot())
    } else {
      var div = this.formatSubtotal()
      this.formattedDivs.push(div)
    }
  }

  this.formatSubtotal = function(){
    return "<hr><p class='subtotal scoreline'>Subtotal:" + "<span class='score'>" + this.numToPlusOrMinus(this.calculator.subtotal) + String(this.calculator.subtotal) + "</span></p>"
  }

  this.createMultispotDiv = function(){
    if(this.values.multispotDogs > 1){
      this.formattedDivs.push(this.formatMultispot())
    }
  }

  this.formatMultispot = function(){
    return "<h1>Subtotal + Multispot</h1><p class='" + this.numberToPosOrNeg(this.calculator.multispotSubtotal) + " scoreline '>Subtotal of multispot eligible dogs:<span class='score'>" + String(this.calculator.multispotSubtotal) + "</span></p>" +

    "<p class='subtotal scoreline'>" + String(this.values.multispotDogs) + " eligible dogs<span class='score'>x " + String(this.values.multispotDogs) + "</span></p><hr>" +

    "<p class='" + this.numberToPosOrNeg(this.calculator.multispotSubtotal * this.values.multispotDogs) + " scoreline'>Multispot Subtotal: <span class='score'>" + String(this.calculator.multispotSubtotal * this.values.multispotDogs) + "</span></p>" + this.formatIneligibleDogsDiv()


  }

  this.formatIneligibleDogsDiv = function(){
    if (this.values.ineligibleDogs > 0){
     return "<p class='positive scoreline'>Plus points for ineligible dogs<span class='score'>+" + String(this.values.ineligibleDogs) + "</span></p>"
    } else {
      return ""
    }
  }

  this.createCaveatDiv = function(){
    if(this.values.caveat == "spotted"){
      this.formattedDivs.push(this.formatSpottedDiv())
    } else if (this.values.caveat == "jack"){
      this.formattedDivs.push(this.formatJackDiv())
    }
  }

  this.formatSpottedDiv = function(){
   return "<h1>Caveat</h1><p class='caveat scoreline'>SPOTTED: ALL POINTS TO DOG</p>"
 }

 this.formatJackDiv = function(){
   return "<h1>Caveat</h1><p class='caveat scoreline'>&spades; THE ILLUSTRIOUS JACK OF SPADES &spades;<br> Lifetime Points To Dog </p>"

 }


 this.createTotal = function(){
  this.formattedDivs.push(this.formatTotal())
}


this.formatTotal = function(){
 return "<h1>Total Score</h1><p class='scorebadge'>" + String(this.calculator.total) + "</p>"
}

this.positiveOrNegative = function(bonus){
  if (bonus.positive()) {
    return "positive"
  } else {
    return "negative"
  }
}

this.numberToPosOrNeg = function(number){
  if(number >= 1) {
   return 'positive'
 } else {
  return 'negative'
}
}

this.numToPlusOrMinus = function(number){
  if(number >= 1) {
   return '+'
 } else {
  return ""
}
}

this.returnPlusOrMinus = function(bonus){
  if (bonus.positive()) {
    return "+"
  } else {
    return ""
  }
}

this.createTotalScoreDiv = function(calculator){
  return "<hr><h3>Total Score</h3><p class='subtotal scoreline'>Total Score:" + "<span class='score'>+" + this.values.total + "</span></p>"
}
}
