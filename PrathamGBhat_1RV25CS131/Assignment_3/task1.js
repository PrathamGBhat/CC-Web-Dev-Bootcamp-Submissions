// Division function definition
function divide(a, b) {

  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }

  return a / b;

}

// 10/2
try {
  console.log(`Result: ${divide(10,2)}`);
} catch (err) {
  console.log(`Error: ${err.message}`);
}

// 10/0
try {
  console.log(`Result: ${divide(10, 0)}`);
} catch (err) {
  console.log(`Error: ${err.message}`);
}
