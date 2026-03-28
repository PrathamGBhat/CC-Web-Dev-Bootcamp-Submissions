// Define promise to divide and handle resolution/rejection
function dividePromise(a, b) {

  return new Promise((resolve, reject) => {

    if (b === 0) {
      setTimeout(()=>{reject("Cannot divide by zero!")}, 1000);
    } else {
      setTimeout(()=>{resolve(a/b)}, 1000);
    }

  });

}

// Handle division promise in async manner
async function safeDivide(a, b) {

  try {

    const result = await dividePromise(a, b);
    console.log(`Result: ${result}`);

  } catch (err) {
    console.log(`Error: ${err}`);
  }

}

// Both tests happen simultaneously due to async behaviour

// 10/2
safeDivide(10, 2);

// 10/0
safeDivide(10, 0);
