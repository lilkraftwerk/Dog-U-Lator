function run(){
 var doge = new Values();
  doge.initialize();
  var calc = new Calculator(doge);
  calc.everything();
  var format = new HTMLFormatter(doge, calc);
  console.log(calc.subtotal)
  console.log(doge)
  console.log(format)
  format.formatAllDivs();
  console.log()
  $("#resultsrow").show()
    scrollToResults()
    loadingScreen()
    setTimeout(function (){
             $("#result").html(format.formattedDivs)
         }, 2500)
}