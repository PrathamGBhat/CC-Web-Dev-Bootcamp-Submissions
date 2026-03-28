let count = 0;
// Assign timer setInterval() to a variable to allow clearInterval() to be used
const timer = setInterval(() => {

  // Keep ticking and increase count value every second
  console.log("Tick...");
  count++;

  // As soon as count == 5, clearInterval
  if (count >= 5) {
    clearInterval(timer);
    console.log("Stopped!");
  }

}, 1000);
