// Promise 1 - 1s
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1"), 1000);
});

// Promise 2 - 2s
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2"), 2000);
});

// Promise 3 - 3s
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 3"), 3000);
});
  
// Promise.allSettled() takes resolved or rejected and appends .status, .value and .reason
Promise.allSettled([p1, p2, p3])
  .then(results => {
    results.forEach(result => {
      if (result.status === "fulfilled") {
        console.log(`Fulfilled - ${result.value}`);
      } else {
        console.log(`Rejected - ${result.reason}`);
      }
    });
  });
