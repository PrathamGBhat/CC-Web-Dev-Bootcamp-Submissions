// Promise 1 - 1s
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1"), 1000);
});

// Promise 2 - 2s
const p2 = new Promise((resolve,reject) => {
  
  // Resolved response
  setTimeout(() => resolve("Promise 2"), 2000);

  // Reject response
  // setTimeout(() => reject("Promise 2"), 2000);
  
});

// Promise 3 - 3s
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 3"), 3000);
});
  
// Promise.race() - Resolution OR rejection
Promise.race([p1, p2, p3])
  .then(winner => {
    console.log(`Winner by resolving: ${winner}`);
  })
  .catch(err => {
    console.log(`Winner by rejecting : ${err}`)
  });

// Promise.any() - Needs the first resolution
// Promise.any([p1, p2, p3])
//   .then(first_res => {
//     console.log(`First resolution: ${first_res}`);
//   })
//   .catch(err => {
//     console.log(`Error : ${err}`)
//   });