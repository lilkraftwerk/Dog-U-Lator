function Values(){
  this.bonuses = []
  this.numberOfDogs = 0
  this.multispotDogs = 0
  this.creativeBonus = ""
  this.ineligibleDogs = 0
  this.caveat = ""

  this.initialize = function(){
    this.getNumberOfDogs()
    this.getMultiSpot()
    this.getCreativeBonus()
    this.readCheckboxes()
    this.readRadioButtons()
    this.getCaveats()
    this.calculateIneligible()
  }

  this.readRadioButtons = function(){
    var checked = []
    $("input[type='radio']").each(function(index){
      if($(this).is(':checked')){
        var attr = $(this).attr('id')
        if(pointValues[attr] != undefined){
          checked.push(new Bonus(attr))
        }
      }
    })
    this.bonuses = this.bonuses.concat(checked)
  }

  this.readCheckboxes = function(){
    var checked = []
    $("input[type='checkbox']").each(function(index){
      if($(this).is(':checked')){
        var attr = $(this).attr('id')
        checked.push(new Bonus(attr))
      }
    })
    this.bonuses = checked
  }

  this.getNumberOfDogs = function(){
    this.numberOfDogs = parseInt($("#dogval").val())
  }

  this.getMultiSpot = function(){
    console.log($("#multival").val())
    this.multispotDogs = parseInt($("#multival").val())
  }

  this.getCreativeBonus = function(){
    this.creativeBonus = $("#creativeBonus").val()
  }

  this.calculateIneligible = function(){
    this.ineligibleDogs = this.numberOfDogs - this.multispotDogs
  }

  this.getCaveats = function(){
    if($("#spottedByDog").prop('checked') == true){
      this.caveat = "spotted"
    } else if ($("#jackOfSpades").prop('checked') == true){
      this.caveat = "jack"
    }
  }
}