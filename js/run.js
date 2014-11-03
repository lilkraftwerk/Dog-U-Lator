function run(){
 var values = new Values();
  values.initialize();
  var calc = new Calculator(values);
  calc.everything();
  var format = new HTMLFormatter(values, calc);
  format.formatAllDivs();
  $("#resultsrow").show()
    scrollToResults()
    loadingScreen()
    setTimeout(function (){
             $("#result").html(format.formattedDivs.join(""))
         }, 2500)
}