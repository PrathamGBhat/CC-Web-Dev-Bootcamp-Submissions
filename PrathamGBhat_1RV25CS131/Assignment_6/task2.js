// Promise 1 - 1s
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1"), 1000);
});

// Promise 2 - 2s
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2"), 2000);
});

// Promise 3 - 3s
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 3"), 3000);
});

// Await all promises sequentially - 6s
async function runAll() {

  try {

    const result1 = await p1;
    console.log(result1);
    
    const result2 = await p2;
    console.log(result2);
    
    const result3 = await p3;
    console.log(result3);
    
    console.log("All done!");

  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

runAll();
