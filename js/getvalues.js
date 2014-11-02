function Values(){
  this.bonuses = []
  this.numberOfDogs = 0
  this.multispotDogs = 0
  this.creativeBonus = ""
  this.ineligibleDogs = 0

  this.initialize = function(){
    this.getNumberOfDogs()
    this.getMultiSpot()
    this.getCreativeBonus()
    this.readCheckboxes()
    this.calculateIneligible()
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
}