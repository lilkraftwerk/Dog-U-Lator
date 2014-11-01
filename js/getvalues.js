function getValues(){
  var values = getAllCheckboxes()
  return values
}

function getAllCheckboxes(){
  checkboxes = {}
  $("input[type='checkbox']").each(function(index){
    if($(this).is(':checked')){
      checkboxes[$(this).attr('id')] = true
    }
  })
  delete checkboxes.reverseSpot
  delete checkboxes.jackOfSpades
  return checkboxes
}

function checkForInputValues(){
  var inputValues = {}
  var inputs = ["numberOfDogs", "multispotDogs", "creativeBonus"]
  for(var i = 0; i < inputs.length; i++){
    if ($("#" + inputs[i]).val() != ""){
      inputValues[inputs[i]] = true
    }
  }
  return inputValues
}

function getNumberOfDogs(){
  return $("#numberOfDogs").val()
}

function getMultiSpot(){
  return $("#multispotDogs").val()
}

function getCreativeBonus(){
  if ($("#creativeBonus").val()){
    return $("#creativeBonus").val()
  }
}