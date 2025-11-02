# JavaScript Timers and Intervals

A comprehensive guide to understanding and working with timers and intervals in JavaScript.

## Table of Contents
- [setTimeout and clearTimeout](#settimeout-and-cleartimeout)
- [setInterval and clearInterval](#setinterval-and-clearinterval)
- [Real-World Use Cases](#real-world-use-cases)
- [setTimeout vs setInterval Recursion](#settimeout-vs-setinterval-recursion)
- [Best Practices](#best-practices)
- [Practice Projects](#practice-projects)

---

## setTimeout and clearTimeout

`setTimeout` executes a function once after a specified delay (in milliseconds).

### Basic Syntax

```javascript
// Syntax: setTimeout(function, delay, arg1, arg2, ...)
const timerId = setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);
```

### Simple Examples

```javascript
// Example 1: Basic timeout
setTimeout(() => {
    console.log('Hello after 1 second!');
}, 1000);

// Example 2: With parameters
function greet(name, message) {
    console.log(`${message}, ${name}!`);
}

setTimeout(greet, 2000, 'John', 'Hello');
// Output after 2 seconds: "Hello, John!"

// Example 3: Store timer ID for later
const timer = setTimeout(() => {
    console.log('This might not run if cleared');
}, 3000);

console.log('Timer ID:', timer); // Timer ID: 1 (or some number)
```

### clearTimeout - Canceling a Timer

```javascript
// Set a timeout
const timerId = setTimeout(() => {
    console.log('This will NOT run');
}, 3000);

// Cancel it before it runs
clearTimeout(timerId);
console.log('Timer canceled!');
```

### Real-World Example: Search Debouncing

```javascript
let searchTimeout;

const searchInput = document.querySelector('#search');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    
    // Clear previous timeout
    clearTimeout(searchTimeout);
    
    // Set new timeout
    searchTimeout = setTimeout(() => {
        console.log('Searching for:', searchTerm);
        // Make API call here
        performSearch(searchTerm);
    }, 500); // Wait 500ms after user stops typing
});

function performSearch(term) {
    console.log('API call with:', term);
    // fetch(`/api/search?q=${term}`)...
}
```

**Why this works:**
- User types "hello"
- Each keystroke clears the previous timer
- Only after user stops typing for 500ms does the search execute
- Saves API calls!

### Example: Delayed Button Enable

```javascript
const submitBtn = document.querySelector('#submit');
const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Disable button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';
    
    // Simulate processing
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
        console.log('Form submitted!');
    }, 2000);
});
```

### Example: Auto-save Feature

```javascript
let saveTimeout;
const textarea = document.querySelector('#content');

textarea.addEventListener('input', () => {
    // Clear previous save timer
    clearTimeout(saveTimeout);
    
    // Show "Saving..." indicator
    document.querySelector('#status').textContent = 'Typing...';
    
    // Auto-save after 2 seconds of no typing
    saveTimeout = setTimeout(() => {
        saveContent(textarea.value);
        document.querySelector('#status').textContent = 'Saved!';
    }, 2000);
});

function saveContent(content) {
    console.log('Saving:', content);
    // localStorage.setItem('draft', content);
}
```

---

## setInterval and clearInterval

`setInterval` executes a function repeatedly at specified intervals.

### Basic Syntax

```javascript
// Syntax: setInterval(function, delay, arg1, arg2, ...)
const intervalId = setInterval(() => {
    console.log('This runs every 2 seconds');
}, 2000);
```

### Simple Examples

```javascript
// Example 1: Basic interval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
}, 1000);

// Example 2: Stop after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped!');
}, 5000);
```

### clearInterval - Stopping a Repeating Timer

```javascript
let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(`Counter: ${counter}`);
    
    // Stop after 10 iterations
    if (counter >= 10) {
        clearInterval(intervalId);
        console.log('Done counting!');
    }
}, 1000);
```

### Real-World Example: Live Clock

```javascript
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.querySelector('#clock').textContent = timeString;
}

// Update immediately
updateClock();

// Then update every second
const clockInterval = setInterval(updateClock, 1000);

// Stop clock (if needed)
// clearInterval(clockInterval);
```

### Example: Progress Bar Animation

```javascript
let progress = 0;
const progressBar = document.querySelector('#progress');
const progressText = document.querySelector('#progressText');

const progressInterval = setInterval(() => {
    progress += 1;
    
    // Update UI
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
    
    // Stop when complete
    if (progress >= 100) {
        clearInterval(progressInterval);
        console.log('Complete!');
    }
}, 50); // Update every 50ms for smooth animation
```

### Example: Auto-refresh Data

```javascript
function fetchData() {
    console.log('Fetching latest data...');
    // fetch('/api/data')
    //     .then(response => response.json())
    //     .then(data => updateUI(data));
}

// Fetch immediately
fetchData();

// Then fetch every 30 seconds
const refreshInterval = setInterval(fetchData, 30000);

// Stop auto-refresh when user leaves page
window.addEventListener('beforeunload', () => {
    clearInterval(refreshInterval);
});
```

---

## Real-World Use Cases

### 1. Delaying UI Actions

```javascript
// Show loading spinner
function showLoading() {
    document.querySelector('#spinner').style.display = 'block';
}

// Hide loading spinner
function hideLoading() {
    document.querySelector('#spinner').style.display = 'none';
}

// Simulate API call
function fetchUserData() {
    showLoading();
    
    // Simulate network delay
    setTimeout(() => {
        hideLoading();
        console.log('Data loaded!');
    }, 2000);
}
```

### 2. Auto-refresh Content

```javascript
// Refresh notifications every 10 seconds
function refreshNotifications() {
    console.log('Checking for new notifications...');
    // API call to get notifications
}

// Start auto-refresh
const notificationInterval = setInterval(refreshNotifications, 10000);

// Stop when user logs out
function logout() {
    clearInterval(notificationInterval);
    console.log('Stopped notification refresh');
}
```

### 3. Slideshow/Carousel

```javascript
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance every 3 seconds
const slideshowInterval = setInterval(nextSlide, 3000);

// Pause on hover
const carousel = document.querySelector('#carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(slideshowInterval);
});

carousel.addEventListener('mouseleave', () => {
    slideshowInterval = setInterval(nextSlide, 3000);
});
```

### 4. Typing Effect Animation

```javascript
function typeWriter(text, element, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, speed);
}

// Usage
const heading = document.querySelector('#heading');
typeWriter('Welcome to my website!', heading, 100);
```

### 5. Session Timeout Warning

```javascript
let sessionTimeout;
let warningTimeout;

function resetSessionTimer() {
    // Clear existing timers
    clearTimeout(sessionTimeout);
    clearTimeout(warningTimeout);
    
    // Warn user 2 minutes before timeout
    warningTimeout = setTimeout(() => {
        alert('Your session will expire in 2 minutes!');
    }, 28 * 60 * 1000); // 28 minutes
    
    // Logout after 30 minutes
    sessionTimeout = setTimeout(() => {
        console.log('Session expired - logging out');
        logout();
    }, 30 * 60 * 1000); // 30 minutes
}

// Reset timer on user activity
document.addEventListener('click', resetSessionTimer);
document.addEventListener('keypress', resetSessionTimer);

// Start timer
resetSessionTimer();
```

### 6. Polling for Updates

```javascript
function checkForUpdates() {
    console.log('Checking for updates...');
    // fetch('/api/check-updates')
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.hasUpdate) {
    //             showUpdateNotification();
    //         }
    //     });
}

// Check every 5 minutes
const updateInterval = setInterval(checkForUpdates, 5 * 60 * 1000);
```

---

## setTimeout vs setInterval Recursion

Understanding when to use setTimeout recursively instead of setInterval.

### setInterval - Fixed Interval

```javascript
// Runs every 2 seconds, regardless of how long the function takes
const intervalId = setInterval(() => {
    console.log('Start task');
    // Task might take 1.5 seconds
    performTask();
    console.log('End task');
}, 2000);

// Problem: If performTask() takes longer than 2 seconds,
// tasks will queue up and overlap!
```

**Potential Issue:**
```
0s: Task 1 starts
2s: Task 2 starts (Task 1 still running!)
4s: Task 3 starts (Tasks 1 & 2 still running!)
```

### Recursive setTimeout - Wait Until Complete

```javascript
function scheduleTask() {
    console.log('Start task');
    
    performTask();
    
    console.log('End task');
    
    // Schedule next run AFTER this one completes
    setTimeout(scheduleTask, 2000);
}

// Start the first execution
scheduleTask();

// Much safer: Next task only starts after previous completes
```

**Timeline:**
```
0s: Task 1 starts
1.5s: Task 1 ends
3.5s: Task 2 starts (2s after Task 1 ended)
5s: Task 2 ends
7s: Task 3 starts
```

### Detailed Comparison

```javascript
// ❌ setInterval - Can cause overlap
let count1 = 0;
setInterval(() => {
    count1++;
    console.log(`Interval ${count1} start`);
    
    // Simulate slow operation
    for (let i = 0; i < 1000000000; i++) {
        // Heavy computation
    }
    
    console.log(`Interval ${count1} end`);
}, 100); // Trying to run every 100ms

// If the loop takes 500ms, calls will queue up!

// ✅ Recursive setTimeout - No overlap
let count2 = 0;
function recursiveTimeout() {
    count2++;
    console.log(`Timeout ${count2} start`);
    
    // Simulate slow operation
    for (let i = 0; i < 1000000000; i++) {
        // Heavy computation
    }
    
    console.log(`Timeout ${count2} end`);
    
    // Next call only after this completes
    setTimeout(recursiveTimeout, 100);
}

recursiveTimeout(); // Start the chain
```

### When to Use Each

**Use setInterval when:**
- Task is very fast and consistent
- Exact timing is critical (like a clock)
- Task duration is predictable

```javascript
// Good use of setInterval: Clock
setInterval(() => {
    document.querySelector('#time').textContent = new Date().toLocaleTimeString();
}, 1000);
```

**Use recursive setTimeout when:**
- Task duration varies
- Making API calls
- Heavy computations
- Want to guarantee no overlap

```javascript
// Good use of recursive setTimeout: API polling
function pollServer() {
    fetch('/api/status')
        .then(response => response.json())
        .then(data => {
            console.log('Status:', data);
            // Wait 5 seconds AFTER response received
            setTimeout(pollServer, 5000);
        })
        .catch(error => {
            console.error('Error:', error);
            // Retry after 10 seconds on error
            setTimeout(pollServer, 10000);
        });
}

pollServer();
```

### Stopping Recursive setTimeout

```javascript
let timeoutId;
let shouldContinue = true;

function recursiveTask() {
    if (!shouldContinue) {
        console.log('Stopped!');
        return; // Exit the recursion
    }
    
    console.log('Running task...');
    
    timeoutId = setTimeout(recursiveTask, 1000);
}

// Start
recursiveTask();

// Stop after 5 seconds
setTimeout(() => {
    shouldContinue = false;
    clearTimeout(timeoutId); // Also clear any pending timeout
}, 5000);
```

---

## Best Practices

### ✅ DO: Always Store Timer IDs

```javascript
// Good - can clear later
const timerId = setTimeout(() => {
    console.log('Hello');
}, 1000);

// Bad - can't clear
setTimeout(() => {
    console.log('Hello');
}, 1000);
```

### ✅ DO: Clear Timers When Component Unmounts

```javascript
class Timer {
    constructor() {
        this.intervalId = null;
    }
    
    start() {
        this.intervalId = setInterval(() => {
            console.log('Tick');
        }, 1000);
    }
    
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

const timer = new Timer();
timer.start();

// When done
timer.stop();
```

### ✅ DO: Use Debouncing for Input Events

```javascript
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage
const searchInput = document.querySelector('#search');
const debouncedSearch = debounce((searchTerm) => {
    console.log('Searching:', searchTerm);
}, 500);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});
```

### ✅ DO: Use Throttling for Scroll Events

```javascript
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Usage
const handleScroll = throttle(() => {
    console.log('Scrolled!');
}, 1000);

window.addEventListener('scroll', handleScroll);
```

### ❌ DON'T: Forget to Clear Intervals

```javascript
// Bad - memory leak
function startCounter() {
    let count = 0;
    setInterval(() => {
        count++;
        console.log(count);
    }, 1000);
}

// If called multiple times, creates multiple intervals!
startCounter();
startCounter(); // Now you have 2 intervals running

// Good - clear before starting new one
let countInterval;

function startCounter() {
    // Clear existing interval
    if (countInterval) {
        clearInterval(countInterval);
    }
    
    let count = 0;
    countInterval = setInterval(() => {
        count++;
        console.log(count);
    }, 1000);
}
```

### ❌ DON'T: Use setInterval for Variable-Duration Tasks

```javascript
// Bad
setInterval(() => {
    // This might take 2 seconds sometimes
    fetchDataFromServer();
}, 1000);

// Good
function fetchLoop() {
    fetchDataFromServer()
        .then(() => {
            setTimeout(fetchLoop, 1000);
        });
}
fetchLoop();
```

### ✅ DO: Handle Edge Cases

```javascript
// Prevent negative delays
function safeSetTimeout(callback, delay) {
    const safeDelay = Math.max(0, delay);
    return setTimeout(callback, safeDelay);
}

// Prevent too-frequent intervals
function safeSetInterval(callback, delay) {
    const minDelay = 10; // Minimum 10ms
    const safeDelay = Math.max(minDelay, delay);
    return setInterval(callback, safeDelay);
}
```

---

## Practice Projects

### 1. Countdown Timer

Create a countdown timer that counts down from a specified time.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown Timer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 500px;
            width: 100%;
        }
        
        h1 {
            color: #333;
            margin-bottom: 30px;
            font-size: 2rem;
        }
        
        .timer-display {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 30px 0;
        }
        
        .time-unit {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            min-width: 80px;
        }
        
        .time-value {
            font-size: 2.5rem;
            font-weight: bold;
            display: block;
        }
        
        .time-label {
            font-size: 0.875rem;
            text-transform: uppercase;
            opacity: 0.9;
        }
        
        .controls {
            margin-top: 30px;
        }
        
        .input-group {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        input {
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
            width: 80px;
            text-align: center;
        }
        
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        .buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        button {
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .btn-start {
            background: #27ae60;
            color: white;
        }
        
        .btn-start:hover {
            background: #229954;
        }
        
        .btn-pause {
            background: #f39c12;
            color: white;
        }
        
        .btn-pause:hover {
            background: #e67e22;
        }
        
        .btn-reset {
            background: #e74c3c;
            color: white;
        }
        
        .btn-reset:hover {
            background: #c0392b;
        }
        
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .message {
            margin-top: 20px;
            font-size: 1.2rem;
            font-weight: bold;
            color: #27ae60;
            min-height: 30px;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .timer-display.finished {
            animation: pulse 0.5s ease-in-out infinite;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>⏱️ Countdown Timer</h1>
        
        <div class="timer-display" id="timerDisplay">
            <div class="time-unit">
                <span class="time-value" id="hours">00</span>
                <span class="time-label">Hours</span>
            </div>
            <div class="time-unit">
                <span class="time-value" id="minutes">00</span>
                <span class="time-label">Minutes</span>
            </div>
            <div class="time-unit">
                <span class="time-value" id="seconds">00</span>
                <span class="time-label">Seconds</span>
            </div>
        </div>
        
        <div class="controls">
            <div class="input-group">
                <input type="number" id="inputHours" placeholder="HH" min="0" max="23" value="0">
                <input type="number" id="inputMinutes" placeholder="MM" min="0" max="59" value="1">
                <input type="number" id="inputSeconds" placeholder="SS" min="0" max="59" value="0">
            </div>
            
            <div class="buttons">
                <button class="btn-start" id="startBtn">Start</button>
                <button class="btn-pause" id="pauseBtn" disabled>Pause</button>
                <button class="btn-reset" id="resetBtn">Reset</button>
            </div>
        </div>
        
        <div class="message" id="message"></div>
    </div>
    
    <script>
        let countdownInterval = null;
        let totalSeconds = 0;
        let isRunning = false;
        
        const hoursDisplay = document.getElementById('hours');
        const minutesDisplay = document.getElementById('minutes');
        const secondsDisplay = document.getElementById('seconds');
        const timerDisplay = document.getElementById('timerDisplay');
        const message = document.getElementById('message');
        
        const inputHours = document.getElementById('inputHours');
        const inputMinutes = document.getElementById('inputMinutes');
        const inputSeconds = document.getElementById('inputSeconds');
        
        const startBtn = document.getElementById('startBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        const resetBtn = document.getElementById('resetBtn');
        
        function updateDisplay() {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            hoursDisplay.textContent = String(hours).padStart(2, '0');
            minutesDisplay.textContent = String(minutes).padStart(2, '0');
            secondsDisplay.textContent = String(seconds).padStart(2, '0');
        }
        
        function startTimer() {
            if (!isRunning) {
                // Get time from inputs if timer is at 0
                if (totalSeconds === 0) {
                    const hours = parseInt(inputHours.value) || 0;
                    const minutes = parseInt(inputMinutes.value) || 0;
                    const seconds = parseInt(inputSeconds.value) || 0;
                    
                    totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
                    
                    if (totalSeconds === 0) {
                        message.textContent = '⚠️ Please enter a time!';
                        setTimeout(() => message.textContent = '', 2000);
                        return;
                    }
                }
                
                isRunning = true;
                startBtn.textContent = 'Resume';
                startBtn.disabled = true;
                pauseBtn.disabled = false;
                message.textContent = '';
                timerDisplay.classList.remove('finished');
                
                // Disable inputs while running
                inputHours.disabled = true;
                inputMinutes.disabled = true;
                inputSeconds.disabled = true;
                
                countdownInterval = setInterval(() => {
                    totalSeconds--;
                    updateDisplay();
                    
                    if (totalSeconds <= 0) {
                        finishTimer();
                    }
                }, 1000);
            }
        }
        
        function pauseTimer() {
            if (isRunning) {
                isRunning = false;
                clearInterval(countdownInterval);
                startBtn.disabled = false;
                pauseBtn.disabled = true;
                message.textContent = '⏸️ Paused';
            }
        }
        
        function resetTimer() {
            isRunning = false;
            clearInterval(countdownInterval);
            totalSeconds = 0;
            updateDisplay();
            
            startBtn.textContent = 'Start';
            startBtn.disabled = false;
            pauseBtn.disabled = true;
            
            // Re-enable inputs
            inputHours.disabled = false;
            inputMinutes.disabled = false;
            inputSeconds.disabled = false;
            
            message.textContent = '';
            timerDisplay.classList.remove('finished');
        }
        
        function finishTimer() {
            isRunning = false;
            clearInterval(countdownInterval);
            totalSeconds = 0;
            updateDisplay();
            
            startBtn.disabled = false;
            pauseBtn.disabled = true;
            
            // Re-enable inputs
            inputHours.disabled = false;
            inputMinutes.disabled = false;
            inputSeconds.disabled = false;
            
            message.textContent = '🎉 Time\'s Up!';
            timerDisplay.classList.add('finished');
            
            // Play sound (if you want)
            // const audio = new Audio('alarm.mp3');
            // audio.play();
        }
        
        // Event listeners
        startBtn.addEventListener('click', startTimer);
        pauseBtn.addEventListener('click', pauseTimer);
        resetBtn.addEventListener('click', resetTimer);
        
        // Allow Enter key to start
        [inputHours, inputMinutes, inputSeconds].forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !isRunning) {
                    startTimer();
                }
            });
        });
        
        // Initial display
        updateDisplay();
    </script>
</body>
</html>
```

### 2. Auto-hide Alert Banner After 3s

Create a notification system that automatically hides alerts.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto-hide Notifications</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f5f5f5;
            padding: 20px;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
        }
        
        .controls {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        
        .button-group {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        button {
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .btn-success {
            background: #27ae60;
            color: white;
        }
        
        .btn-info {
            background: #3498db;
            color: white;
        }
        
        .btn-warning {
            background: #f39c12;
            color: white;
        }
        
        .btn-error {
            background: #e74c3c;
            color: white;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .notifications-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 400px;
        }
        
        .notification {
            background: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            gap: 12px;
            animation: slideIn 0.3s ease-out;
            position: relative;
            overflow: hidden;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        .notification.hiding {
            animation: slideOut 0.3s ease-in forwards;
        }
        
        .notification-icon {
            font-size: 1.5rem;
            flex-shrink: 0;
        }
        
        .notification-content {
            flex: 1;
        }
        
        .notification-title {
            font-weight: 600;
            margin-bottom: 4px;
            color: #333;
        }
        
        .notification-message {
            font-size: 0.875rem;
            color: #666;
        }
        
        .notification-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #999;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.2s;
        }
        
        .notification-close:hover {
            color: #333;
            transform: none;
            box-shadow: none;
        }
        
        .notification-progress {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            background: currentColor;
            opacity: 0.3;
            transition: width linear;
        }
        
        .notification.success {
            border-left: 4px solid #27ae60;
            color: #27ae60;
        }
        
        .notification.info {
            border-left: 4px solid #3498db;
            color: #3498db;
        }
        
        .notification.warning {
            border-left: 4px solid #f39c12;
            color: #f39c12;
        }
        
        .notification.error {
            border-left: 4px solid #e74c3c;
            color: #e74c3c;
        }
        
        .settings {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .setting-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .setting-item label {
            font-weight: 500;
            color: #555;
        }
        
        .setting-item input[type="number"] {
            width: 100px;
            padding: 8px;
            border: 2px solid #ddd;
            border-radius: 5px;
        }
        
        .setting-item input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔔 Auto-hide Notifications</h1>
        
        <div class="controls">
            <h2 style="margin-bottom: 15px; color: #555;">Trigger Notifications</h2>
            <div class="button-group">
                <button class="btn-success" onclick="showNotification('success')">
                    Success
                </button>
                <button class="btn-info" onclick="showNotification('info')">
                    Info
                </button>
                <button class="btn-warning" onclick="showNotification('warning')">
                    Warning
                </button>
                <button class="btn-error" onclick="showNotification('error')">
                    Error
                </button>
            </div>
        </div>
        
        <div class="settings">
            <h2 style="margin-bottom: 15px; color: #555;">Settings</h2>
            <div class="setting-item">
                <label>Auto-hide Duration (seconds):</label>
                <input type="number" id="duration" value="3" min="1" max="10">
            </div>
            <div class="setting-item">
                <label>Enable Auto-hide:</label>
                <input type="checkbox" id="autoHide" checked>
            </div>
            <div class="setting-item">
                <label>Show Progress Bar:</label>
                <input type="checkbox" id="showProgress" checked>
            </div>
        </div>
    </div>
    
    <div class="notifications-container" id="notificationsContainer"></div>
    
    <script>
        const notificationData = {
            success: {
                icon: '✓',
                title: 'Success!',
                message: 'Your action was completed successfully.'
            },
            info: {
                icon: 'ℹ',
                title: 'Information',
                message: 'Here is some useful information for you.'
            },
            warning: {
                icon: '⚠',
                title: 'Warning',
                message: 'Please be careful with this action.'
            },
            error: {
                icon: '✗',
                title: 'Error',
                message: 'Something went wrong. Please try again.'
            }
        };
        
        let notificationId = 0;
        const activeTimers = new Map();
        
        function showNotification(type) {
            const container = document.getElementById('notificationsContainer');
            const data = notificationData[type];
            const id = ++notificationId;
            
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.id = `notification-${id}`;
            
            // Get settings
            const duration = parseInt(document.getElementById('duration').value) * 1000;
            const autoHide = document.getElementById('autoHide').checked;
            const showProgress = document.getElementById('showProgress').checked;
            
            // Build notification HTML
            notification.innerHTML = `
                <div class="notification-icon">${data.icon}</div>
                <div class="notification-content">
                    <div class="notification-title">${data.title}</div>
                    <div class="notification-message">${data.message}</div>
                </div>
                <button class="notification-close" onclick="closeNotification(${id})">&times;</button>
                ${showProgress ? '<div class="notification-progress" style="width: 100%"></div>' : ''}
            `;
            
            container.appendChild(notification);
            
            // Animate progress bar if enabled
            if (showProgress && autoHide) {
                const progressBar = notification.querySelector('.notification-progress');
                progressBar.style.transition = `width ${duration}ms linear`;
                
                // Start progress animation after a brief delay
                setTimeout(() => {
                    progressBar.style.width = '0%';
                }, 50);
            }
            
            // Auto-hide if enabled
            if (autoHide) {
                const timerId = setTimeout(() => {
                    closeNotification(id);
                }, duration);
                
                activeTimers.set(id, timerId);
            }
            
            // Pause timer on hover
            notification.addEventListener('mouseenter', () => {
                if (activeTimers.has(id)) {
                    clearTimeout(activeTimers.get(id));
                    
                    // Pause progress bar
                    const progressBar = notification.querySelector('.notification-progress');
                    if (progressBar) {
                        const computedStyle = window.getComputedStyle(progressBar);
                        const currentWidth = computedStyle.width;
                        progressBar.style.transition = 'none';
                        progressBar.style.width = currentWidth;
                    }
                }
            });
            
            // Resume timer on mouse leave
            notification.addEventListener('mouseleave', () => {
                if (autoHide && !activeTimers.has(id)) {
                    const progressBar = notification.querySelector('.notification-progress');
                    
                    if (progressBar && showProgress) {
                        const currentWidth = parseInt(progressBar.style.width);
                        const remainingTime = (currentWidth / 100) * duration;
                        
                        progressBar.style.transition = `width ${remainingTime}ms linear`;
                        progressBar.style.width = '0%';
                        
                        const timerId = setTimeout(() => {
                            closeNotification(id);
                        }, remainingTime);
                        
                        activeTimers.set(id, timerId);
                    }
                }
            });
        }
        
        function closeNotification(id) {
            const notification = document.getElementById(`notification-${id}`);
            
            if (notification) {
                // Clear timer if exists
                if (activeTimers.has(id)) {
                    clearTimeout(activeTimers.get(id));
                    activeTimers.delete(id);
                }
                
                // Add hiding animation
                notification.classList.add('hiding');
                
                // Remove from DOM after animation
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }
        
        // Keyboard shortcuts
        document.addEventListener('keypress', (e) => {
            switch(e.key.toLowerCase()) {
                case 's':
                    showNotification('success');
                    break;
                case 'i':
                    showNotification('info');
                    break;
                case 'w':
                    showNotification('warning');
                    break;
                case 'e':
                    showNotification('error');
                    break;
            }
        });
    </script>
</body>
</html>
```

---

## Common Patterns and Recipes

### Debounce Function

```javascript
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        // Clear previous timeout
        clearTimeout(timeoutId);
        
        // Set new timeout
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage: Search as user types
const searchInput = document.querySelector('#search');

const performSearch = debounce((term) => {
    console.log('Searching for:', term);
    // API call here
}, 500);

searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value);
});
```

### Throttle Function

```javascript
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Usage: Handle scroll events
const handleScroll = throttle(() => {
    console.log('Scroll position:', window.scrollY);
}, 1000);

window.addEventListener('scroll', handleScroll);
```

### Delay Function (Promise-based)

```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Usage with async/await
async function sequentialActions() {
    console.log('Starting...');
    
    await delay(1000);
    console.log('After 1 second');
    
    await delay(2000);
    console.log('After 3 seconds total');
    
    await delay(1000);
    console.log('After 4 seconds total');
}

sequentialActions();
```

### Retry with Exponential Backoff

```javascript
async function retryWithBackoff(fn, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            
            const delayTime = Math.pow(2, i) * 1000; // 1s, 2s, 4s
            console.log(`Retry ${i + 1} after ${delayTime}ms`);
            
            await new Promise(resolve => setTimeout(resolve, delayTime));
        }
    }
}

// Usage
retryWithBackoff(() => {
    return fetch('/api/data');
})
.then(response => console.log('Success!'))
.catch(error => console.log('Failed after retries'));
```

### Animated Counter

```javascript
function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16); // 60 FPS
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        
        if ((increment > 0 && current >= end) || 
            (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        
        element.textContent = Math.round(current);
    }, 16);
}

// Usage
const counter = document.querySelector('#counter');
animateCounter(counter, 0, 1000, 2000); // Count from 0 to 1000 in 2 seconds
```

### Periodic Task with Cleanup

```javascript
class PeriodicTask {
    constructor(callback, interval) {
        this.callback = callback;
        this.interval = interval;
        this.intervalId = null;
        this.isRunning = false;
    }
    
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.callback(); // Run immediately
            this.intervalId = setInterval(this.callback, this.interval);
        }
    }
    
    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    
    restart() {
        this.stop();
        this.start();
    }
}

// Usage
const dataFetcher = new PeriodicTask(() => {
    console.log('Fetching data...');
}, 5000);

dataFetcher.start();

// Later...
dataFetcher.stop();
```

---

## Performance Tips

### 1. Clear Timers When Not Needed

```javascript
// Bad - timer continues even when not visible
let clockInterval;

function startClock() {
    clockInterval = setInterval(updateClock, 1000);
}

startClock();

// Good - stop timer when tab is hidden
let clockInterval;

function startClock() {
    clockInterval = setInterval(updateClock, 1000);
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(clockInterval);
    } else {
        startClock();
    }
});

startClock();
```

### 2. Use requestAnimationFrame for Animations

```javascript
// Bad - setInterval for animations
setInterval(() => {
    element.style.left = position + 'px';
    position += 1;
}, 16);

// Good - requestAnimationFrame
function animate() {
    element.style.left = position + 'px';
    position += 1;
    
    if (position < 500) {
        requestAnimationFrame(animate);
    }
}

animate();
```

### 3. Batch DOM Updates

```javascript
// Bad - multiple reflows
setInterval(() => {
    element1.style.left = x + 'px';
    element2.style.top = y + 'px';
    element3.style.width = w + 'px';
}, 16);

// Good - batch updates
setInterval(() => {
    requestAnimationFrame(() => {
        element1.style.left = x + 'px';
        element2.style.top = y + 'px';
        element3.style.width = w + 'px';
    });
}, 16);
```

---

## Debugging Tips

### 1. Track Active Timers

```javascript
const activeTimers = {
    timeouts: new Map(),
    intervals: new Map()
};

function setTimeoutTracked(callback, delay, label) {
    const id = setTimeout(callback, delay);
    activeTimers.timeouts.set(id, { label, created: Date.now(), delay });
    console.log('Active timeouts:', activeTimers.timeouts.size);
    return id;
}

function clearTimeoutTracked(id) {
    clearTimeout(id);
    activeTimers.timeouts.delete(id);
    console.log('Active timeouts:', activeTimers.timeouts.size);
}

// Usage
const timer = setTimeoutTracked(() => {
    console.log('Timer executed');
}, 1000, 'My Timer');
```

### 2. Log Timer Execution

```javascript
function debugTimeout(callback, delay, label) {
    console.log(`[${label}] Timer set for ${delay}ms`);
    
    return setTimeout(() => {
        console.log(`[${label}] Timer executed after ${delay}ms`);
        callback();
    }, delay);
}

// Usage
debugTimeout(() => {
    console.log('Hello!');
}, 1000, 'Greeting Timer');
```

---

## Additional Resources

- [MDN Web Docs - setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [MDN Web Docs - setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [JavaScript.info - Scheduling](https://javascript.info/settimeout-setinterval)

---

## Summary

### Key Takeaways

**setTimeout:**
- Runs code once after a delay
- Returns a timer ID that can be used to cancel it
- Use `clearTimeout()` to cancel before execution
- Perfect for debouncing and delayed actions

**setInterval:**
- Runs code repeatedly at fixed intervals
- Can cause overlapping if task takes longer than interval
- Always store the interval ID to clear it later
- Use `clearInterval()` to stop execution

**setTimeout vs setInterval Recursion:**
- setInterval: Fixed timing, can overlap if slow
- Recursive setTimeout: Waits for completion, no overlap
- Use recursive setTimeout for API calls and variable-duration tasks
- Use setInterval for consistent timing like clocks

**Real Use Cases:**
- Debouncing: Wait for user to stop typing before searching
- Throttling: Limit how often a function runs (scroll events)
- Auto-refresh: Periodically fetch new data
- Animations: Create smooth transitions and effects
- Timeouts: Session expiration, auto-logout

**Best Practices:**
- Always store timer IDs so you can clear them
- Clear timers when components unmount or page unloads
- Use debouncing for input events
- Use throttling for scroll/resize events
- Prefer recursive setTimeout over setInterval for varying tasks
- Consider using requestAnimationFrame for smooth animations

**Common Pitfalls to Avoid:**
- Forgetting to clear intervals (memory leaks)
- Using setInterval for tasks that might overlap
- Not handling timer IDs properly
- Creating multiple intervals without clearing previous ones
- Using timers for precise timing (they're not guaranteed accurate)

---

## Quick Reference Card

```javascript
// SET TIMERS
const timeoutId = setTimeout(callback, delay);
const intervalId = setInterval(callback, delay);

// CLEAR TIMERS
clearTimeout(timeoutId);
clearInterval(intervalId);

// DEBOUNCE PATTERN
let timeout;
function debounce() {
    clearTimeout(timeout);
    timeout = setTimeout(action, delay);
}

// RECURSIVE SETTIMEOUT PATTERN
function repeat() {
    doSomething();
    setTimeout(repeat, delay);
}

// STOP RECURSIVE SETTIMEOUT
let shouldContinue = true;
function repeat() {
    if (!shouldContinue) return;
    doSomething();
    setTimeout(repeat, delay);
}
```

