// Promise 1 - 1s
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("User loaded"), 1000);
});

// Promise 2 - 2s
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Orders loaded"), 2000);
});

// Promise 3 - 3s
const p3 = new Promise((resolve, reject) => {
  
  // Resolved promise
  setTimeout(() => resolve("Products loaded"), 3000);

  // Rejection handling in Promise.all()
  // setTimeout(() => reject("Products loaded"), 3000);

});

// Promise.all() - Waits for all to RESOLVE => 3s
Promise.all([p1, p2, p3])

  .then(results => {
    results.forEach(result => console.log(result));
  })
  
  .catch(err => {
    console.log("Error : " + err);
  });
