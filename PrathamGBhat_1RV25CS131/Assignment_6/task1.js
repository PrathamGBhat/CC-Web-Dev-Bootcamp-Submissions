// Defining the promise
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

// Handling promise in async manner
async function runOperation() {

  try {

    const result = await myPromise;
    console.log(result);

  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

runOperation();
