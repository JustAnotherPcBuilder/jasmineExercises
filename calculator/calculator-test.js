
it('should calculate the monthly rate correctly', function () {
  // ...
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
it('should print out array of form inputs and be size of 3', function(){
  const inputs = document.querySelectorAll("#calc-form input[type='text']");
  console.log(`inputs: ${inputs}`);
  expect(inputs.length).toEqual(3);
})