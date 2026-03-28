// Define the promise
const myPromise = new Promise((resolve, reject) => {

  let success = true; // Toggle this
  
  setTimeout(() => {
    if (success) {
      resolve("Resolved!");
    } else {
      reject("Rejected!");
    }
  }, 2000);

});

myPromise

  .then((result) => {
    console.log(`Step 1 - Raw response - ${result}`);
    return result.toUpperCase();
  })

  .then((upper) => {
    console.log(`Step 2 - Processed response - ${upper}`);
    return `FINALLY ${upper} RAHHHHH`;
  })

  .then((final) => {
    console.log(`Step 3 - Final response - ${final}`);
  })

  .catch((error) => console.log(error));
