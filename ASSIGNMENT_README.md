# 📝 Assignments — CC Web Dev Bootcamp

**Bootcamp:** CC Web Dev Bootcamp
**Instructors:** [@karthik5033](https://github.com/karthik5033) & [@A5CENSION-SRT](https://github.com/A5CENSION-SRT)

---

## 🚀 How to Run Any Task

Make sure Node.js is installed, then:

```bash
node taskX.js
```

---

---

# 📦 Assignment 1 — Arrow Functions

**Folder:** `YourName_USN/Assignment_1/`

## 🎯 Objective
Understand the difference between regular functions and arrow functions, and when to use each.

---

### Task 1 — Regular Function

Create `task1.js`.

Write a regular function `greet` that takes a `name` parameter and returns `"Hello, <name>!"`. Call it and log the result.

**Expected output:**
```
Hello, Karthik!
```

---

### Task 2 — Arrow Function

Create `task2.js`.

Rewrite the same `greet` function as an arrow function. Then write another arrow function `add` that takes two numbers and returns their sum.

**Expected output:**
```
Hello, Snehal!
Sum: 15
```

---

### Task 3 — Arrow Function with Array

Create `task3.js`.

Use an arrow function inside `.map()` to take an array of numbers `[1, 2, 3, 4, 5]` and return a new array where each number is doubled.

**Expected output:**
```
[ 2, 4, 6, 8, 10 ]
```

---

## ✅ Checklist
- [ ] `task1.js` — regular function
- [ ] `task2.js` — arrow function + add
- [ ] `task3.js` — arrow function with `.map()`

---
---

# ⏱️ Assignment 2 — Timer APIs

**Folder:** `YourName_USN/Assignment_2/`

## 🎯 Objective
Learn how JavaScript schedules code to run after a delay or repeatedly using timer functions.

---

### Task 1 — setTimeout

Create `task1.js`.

Use `setTimeout` to log `"Hello after 2 seconds!"` after a **2000ms** delay.

**Expected output (after 2s):**
```
Hello after 2 seconds!
```

---

### Task 2 — setInterval + clearInterval

Create `task2.js`.

Use `setInterval` to log `"Tick..."` every **1000ms**.
After **5 ticks**, use `clearInterval` to stop it and log `"Stopped!"`.

**Expected output:**
```
Tick...
Tick...
Tick...
Tick...
Tick...
Stopped!
```

---

### Task 3 — Countdown Timer

Create `task3.js`.

Use `setInterval` to build a countdown from **5 to 0**.
Log each number. When it hits 0, log `"Time's up!"` and stop the interval.

**Expected output:**
```
5
4
3
2
1
0
Time's up!
```

---

## ✅ Checklist
- [ ] `task1.js` — setTimeout
- [ ] `task2.js` — setInterval + clearInterval
- [ ] `task3.js` — countdown timer

---
---

# 🛡️ Assignment 3 — Try / Catch

**Folder:** `YourName_USN/Assignment_3/`

## 🎯 Objective
Handle errors gracefully so your program doesn't crash when something goes wrong.

---

### Task 1 — Basic Try / Catch

Create `task1.js`.

Write a function `divide(a, b)` that:
- Throws an error if `b` is `0` → `"Cannot divide by zero!"`
- Otherwise returns `a / b`

Wrap the call in a `try/catch` block and log either the result or the error message.

**Expected output (divide(10, 2)):**
```
Result: 5
```

**Expected output (divide(10, 0)):**
```
Error: Cannot divide by zero!
```

---

### Task 2 — Try / Catch / Finally

Create `task2.js`.

Wrap a block of code that:
- Tries to parse `"not a number"` as JSON using `JSON.parse()`
- Catches the error and logs `"Invalid JSON!"`
- Has a `finally` block that always logs `"Parsing attempt done."`

**Expected output:**
```
Invalid JSON!
Parsing attempt done.
```

---

### Task 3 — Custom Error

Create `task3.js`.

Write a function `checkAge(age)` that:
- Throws `"Age must be a positive number!"` if age is negative or zero
- Throws `"Too young! Must be 18 or above."` if age is less than 18
- Logs `"Access granted!"` if age is 18 or above

Test it with ages `25`, `15`, and `-1`.

**Expected output:**
```
Access granted!
Error: Too young! Must be 18 or above.
Error: Age must be a positive number!
```

---

## ✅ Checklist
- [ ] `task1.js` — basic try/catch with divide
- [ ] `task2.js` — try/catch/finally with JSON.parse
- [ ] `task3.js` — custom thrown errors

---
---

# 🤝 Assignment 4 — Promises: Basics & Chaining

**Folder:** `YourName_USN/Assignment_4/`

## 🎯 Objective
Understand how Promises represent future values and how to chain async steps cleanly.

---

### Task 1 — Basic Promise

Create `task1.js`.

Write a Promise `myPromise` that:
- Has `let success = true`
- Uses `setTimeout` with **2000ms**
- If `success` → `resolve("Operation Successful!")`
- Else → `reject("Operation Failed!")`

Handle with `.then()` and `.catch()`.

**Expected output (success = true):**
```
Operation Successful!
```

**Expected output (success = false):**
```
Operation Failed!
```

---

### Task 2 — Chaining

Create `task2.js`.

Using the same `myPromise`, chain **3 `.then()` blocks**:
1. Log result, return `result.toUpperCase()`
2. Log uppercased, return `"Done: " + upper`
3. Log the final message
4. `.catch()` for any error

**Expected output:**
```
Step 1 - Got result: Operation Successful!
Step 2 - Uppercased: OPERATION SUCCESSFUL!
Step 3 - Final: Done: OPERATION SUCCESSFUL!
```

---

## ✅ Checklist
- [ ] `task1.js` — basic promise resolve/reject
- [ ] `task2.js` — 3 chained `.then()` blocks

---
---

# ⚡ Assignment 5 — Common Promise Methods

**Folder:** `YourName_USN/Assignment_5/`

## 🎯 Objective
Handle multiple promises at once using the right method for each situation.

---

### Task 1 — Promise.all()

Create `task1.js`.

Create 3 promises:
- `p1` → resolves `"User loaded"` after 1000ms
- `p2` → resolves `"Orders loaded"` after 2000ms
- `p3` → resolves `"Products loaded"` after 3000ms

Use `Promise.all([p1, p2, p3])` and log each result.

**Expected output (after ~3s):**
```
User loaded
Orders loaded
Products loaded
```

---

### Task 2 — Promise.race()

Create `task2.js`.

Use the same 3 promises. Use `Promise.race()` and log which one wins.

**Expected output:**
```
Winner: User loaded
```

---

### Task 3 — Promise.allSettled()

Create `task3.js`.

Create 3 promises where `p2` **rejects** with `"Server error"`. Use `Promise.allSettled()` and log each result's status and value/reason.

**Expected output:**
```
fulfilled - User loaded
rejected  - Server error
fulfilled - Products loaded
```

---

## ✅ Checklist
- [ ] `task1.js` — Promise.all()
- [ ] `task2.js` — Promise.race()
- [ ] `task3.js` — Promise.allSettled()

---
---

# ⏳ Assignment 6 — Async / Await

**Folder:** `YourName_USN/Assignment_6/`

## 🎯 Objective
Write async code that reads like synchronous code using `async/await`.

---

### Task 1 — Basic Async/Await

Create `task1.js`.

Rewrite `myPromise` from Assignment 4 using `async/await`:
- Write `async function runOperation()`
- Use `await` to wait for `myPromise`
- Wrap in `try/catch`
- Call `runOperation()`

**Expected output:**
```
Result: Operation Successful!
```

---

### Task 2 — Multiple Awaits

Create `task2.js`.

Write an `async function runAll()` with 3 sequential awaits using the 3 promises from Assignment 5. Log each result after it resolves.

**Expected output (one by one):**
```
User loaded
Orders loaded
Products loaded
All done!
```

---

### Task 3 — Async/Await + Error Handling

Create `task3.js`.

Write an `async function safeDivide(a, b)` that:
- Awaits a promise that rejects if `b === 0`
- Uses `try/catch` to handle the error
- Logs the result or the error

**Expected output:**
```
Result: 5
Error: Cannot divide by zero!
```

---

## ✅ Checklist
- [ ] `task1.js` — basic async/await
- [ ] `task2.js` — multiple awaits
- [ ] `task3.js` — async/await with error handling

---

## 👤 Student Details

```
Name   :
USN    :
GitHub :
```

---

*Assignments by [@karthik5033](https://github.com/karthik5033) & [@A5CENSION-SRT](https://github.com/A5CENSION-SRT) · CC Web Dev Bootcamp*
