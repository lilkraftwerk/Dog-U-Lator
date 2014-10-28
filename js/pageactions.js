$(document).ready(function() {
  $("#submit").on('click', function(e){
    e.preventDefault()
    $("#resultsrow").show()
    scrollToResults()
    loadingScreen()
    setTimeout(function (){

             formatResult()

         }, 2500)
  })
});

function randomLoadingMessage(){
  var messages = ["Calculating Points...", "Crunching Numbers...", "Adding Doggie Bonuses..."]
  var messageNumber = Math.floor((Math.random() * (messages.length - 1)) + 1);
  return messages[messageNumber]
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