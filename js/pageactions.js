$(document).ready(function() {
  $("#submit").on('click', function(e){
    e.preventDefault()
    submitHit()
  })

  $("#dogquantitypicker").children('button').on('click', function(e){
    e.preventDefault()
    addOrSubtract($(this), $(this).attr('data-type'))
  })

  $("#multispotpicker").children('button').on('click', function(e){
    e.preventDefault()
    addOrSubtract($(this), $(this).attr('data-type'))
  })

  $("#morethan10").on('click', function(e){
    showMoreField()
  })
});

function randomLoadingMessage(){
  var messages = ["Calculating Points...", "Crunching Numbers...", "Adding Doggie Bonuses..."]
  var messageNumber = Math.floor((Math.random() * (messages.length - 1)) + 1);
  return messages[messageNumber]
  }

function addOrSubtract(button, operation){
  value = parseInt(button.siblings('input').val())
  console.log(value)
  if (operation == "add"){
    button.siblings('input').val(value + 1)}
     else if (operation == "subtract"){
      if (value <= 1){
        button.siblings('input').val(1)
      } else {
        button.siblings('input').val(value - 1)
      }

  }
}


function loadingScreen(){
  var message = randomLoadingMessage()
  console.log(message)
  var htmlForLoading = "<h1>" + message + "</h1>" + "<img class='img-responsive' id='loadingimg' src='img/dogspin.gif'>"
  $("#result").html(htmlForLoading)
}

function scrollToResults (){
    $('html, body').animate({
        scrollTop: $("#result").offset().top -100
    }, 1000);
}

function submitHit(){
  $("#resultsrow").show()
    scrollToResults()
    loadingScreen()
    setTimeout(function (){
             displayAllPoints()
         }, 2500)
}

function showMoreField(){
  $( "#moredogform" ).fadeIn("slow", function() {
  });
}

