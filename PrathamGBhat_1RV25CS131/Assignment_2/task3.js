let countdown = 5;
const timer = setInterval(() => {

  // Keep ticking and decreasing countdown till -1 is reached
  console.log(countdown);
  countdown--;
  
  // As soon as countdown == -1, clearInterval
  if (countdown < 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
  
}, 1000);
