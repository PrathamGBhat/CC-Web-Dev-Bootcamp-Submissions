try {

  // Invalid attempt
  JSON.parse("not a number");  

  // Valid attempt
//   JSON.parse('{"key" : "not a number"}');

} catch (error) {

  console.log("Not JSON man");

} finally {

  console.log("Parsed");
  
}
