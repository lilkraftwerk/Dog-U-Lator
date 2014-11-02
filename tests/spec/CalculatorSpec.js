describe("Calculator", function() {
  var calc;

  beforeEach(function() {
    calc = new Calculator();
    song = new Song();
  });

  it("should be able to add", function() {
    expect(calc.add(2, 3)).toEqual(5);
  });

  it("should start with a subtotal of 0", function(){
    expect(calc.subtotal).toEqual(0)
  })
});
