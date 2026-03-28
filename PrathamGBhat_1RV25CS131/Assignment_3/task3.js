// Function checkAge declaration
function checkAge(age) {

  if (age <= 0) {
    throw new Error("How is nigga negative");
  }

  if (age < 18) {
    throw new Error("Minors not allowed");
  }

  console.log("Access granted!");

}

// Age 25
try {
  checkAge(25);
} catch (err) {
  console.log(`Error: ${err.message}`);
}

// Age 15
try {
  checkAge(15);
} catch (err) {
  console.log(`Error: ${err.message}`);
}

// Age -1
try {
  checkAge(-1);
} catch (err) {
  console.log(`Error: ${err.message}`);
}
