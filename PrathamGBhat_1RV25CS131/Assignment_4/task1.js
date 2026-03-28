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

// Call the promise
myPromise
  .then(result => console.log(result))
  .catch(err => console.log(err));
