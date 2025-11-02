# JavaScript LocalStorage, SessionStorage, and Cookies

A comprehensive guide to client-side storage in JavaScript.

## Table of Contents
- [LocalStorage API](#localstorage-api)
- [SessionStorage API](#sessionstorage-api)
- [Storing Strings vs JSON](#storing-strings-vs-json)
- [Cookies - Basic Structure](#cookies---basic-structure)
- [Storage Comparison](#storage-comparison)
- [Common Confusions](#common-confusions)
- [Best Practices](#best-practices)
- [Practice Projects](#practice-projects)

---

## LocalStorage API

LocalStorage stores data with no expiration time. Data persists even after closing the browser.

### Key Characteristics
- **Capacity**: ~5-10MB per origin
- **Lifespan**: Permanent (until manually deleted)
- **Scope**: Same origin (protocol + domain + port)
- **Accessibility**: Only client-side JavaScript

### Basic Methods

```javascript
// Store data
localStorage.setItem('key', 'value');

// Retrieve data
const value = localStorage.getItem('key');

// Remove specific item
localStorage.removeItem('key');

// Clear all localStorage
localStorage.clear();

// Get number of items
console.log(localStorage.length);

// Get key by index
const key = localStorage.key(0);
```

### Simple Examples

```javascript
// Example 1: Store and retrieve
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('email', 'john@example.com');

console.log(localStorage.getItem('username')); // "JohnDoe"
console.log(localStorage.getItem('email')); // "john@example.com"

// Example 2: Check if key exists
if (localStorage.getItem('username')) {
    console.log('Username exists!');
} else {
    console.log('Username not found');
}

// Example 3: Remove item
localStorage.removeItem('email');
console.log(localStorage.getItem('email')); // null

// Example 4: Clear all
localStorage.clear();
console.log(localStorage.length); // 0
```

### Alternative Syntax (Bracket/Dot Notation)

```javascript
// Set items
localStorage.username = 'JohnDoe';
localStorage['email'] = 'john@example.com';

// Get items
console.log(localStorage.username); // "JohnDoe"
console.log(localStorage['email']); // "john@example.com"

// Delete items
delete localStorage.username;

// ⚠️ Note: setItem/getItem is preferred for reliability
```

### Iterating Through LocalStorage

```javascript
// Method 1: Using for loop
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

// Method 2: Using for...in loop
for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        console.log(`${key}: ${localStorage[key]}`);
    }
}

// Method 3: Using Object.keys
Object.keys(localStorage).forEach(key => {
    console.log(`${key}: ${localStorage.getItem(key)}`);
});
```

### Real-World Example: Remember User Preferences

```javascript
// Save user preferences
function savePreferences(preferences) {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

// Load user preferences
function loadPreferences() {
    const saved = localStorage.getItem('userPreferences');
    return saved ? JSON.parse(saved) : getDefaultPreferences();
}

function getDefaultPreferences() {
    return {
        theme: 'light',
        fontSize: 'medium',
        notifications: true
    };
}

// Usage
const prefs = {
    theme: 'dark',
    fontSize: 'large',
    notifications: false
};

savePreferences(prefs);

// Later...
const loadedPrefs = loadPreferences();
console.log(loadedPrefs.theme); // "dark"
```

---

## SessionStorage API

SessionStorage is identical to localStorage, but data is cleared when the page session ends (tab/window closes).

### Key Characteristics
- **Capacity**: ~5-10MB per origin
- **Lifespan**: Session only (until tab/window closes)
- **Scope**: Per tab/window + same origin
- **Accessibility**: Only client-side JavaScript

### Basic Methods (Same as LocalStorage)

```javascript
// Store data
sessionStorage.setItem('key', 'value');

// Retrieve data
const value = sessionStorage.getItem('key');

// Remove specific item
sessionStorage.removeItem('key');

// Clear all sessionStorage
sessionStorage.clear();

// Get number of items
console.log(sessionStorage.length);

// Get key by index
const key = sessionStorage.key(0);
```

### Examples

```javascript
// Example 1: Store temporary session data
sessionStorage.setItem('sessionId', 'abc123');
sessionStorage.setItem('loginTime', Date.now().toString());

// Example 2: Form wizard progress
sessionStorage.setItem('wizardStep', '3');
sessionStorage.setItem('formData', JSON.stringify({
    name: 'John',
    email: 'john@example.com'
}));

// Example 3: Retrieve and use
const step = sessionStorage.getItem('wizardStep');
console.log(`Current step: ${step}`); // "Current step: 3"

// Data will be cleared when tab closes
```

### LocalStorage vs SessionStorage

```javascript
// LocalStorage - persists across sessions
localStorage.setItem('permanent', 'This stays forever');

// SessionStorage - cleared when tab closes
sessionStorage.setItem('temporary', 'This disappears on tab close');

// Close and reopen browser:
console.log(localStorage.getItem('permanent')); // Still exists!
console.log(sessionStorage.getItem('temporary')); // null (cleared)
```

### Real-World Example: Multi-Step Form

```javascript
// Save form progress
function saveFormProgress(step, data) {
    sessionStorage.setItem('currentStep', step);
    sessionStorage.setItem(`step${step}Data`, JSON.stringify(data));
}

// Load form progress
function loadFormProgress() {
    const currentStep = sessionStorage.getItem('currentStep') || '1';
    const stepData = sessionStorage.getItem(`step${currentStep}Data`);
    
    return {
        step: currentStep,
        data: stepData ? JSON.parse(stepData) : null
    };
}

// Clear form when submitted
function clearFormProgress() {
    sessionStorage.removeItem('currentStep');
    for (let i = 1; i <= 5; i++) {
        sessionStorage.removeItem(`step${i}Data`);
    }
}

// Usage
saveFormProgress('2', { name: 'John', email: 'john@example.com' });

// User refreshes page
const progress = loadFormProgress();
console.log(`Resume at step: ${progress.step}`);
console.log('Previous data:', progress.data);
```

---

## Storing Strings vs JSON

**CRITICAL**: LocalStorage and SessionStorage can only store strings!

### The String-Only Limitation

```javascript
// ❌ WRONG - Storing objects directly
const user = { name: 'John', age: 30 };
localStorage.setItem('user', user);

console.log(localStorage.getItem('user')); 
// "[object Object]" - Not what you wanted!

// ❌ WRONG - Storing arrays directly
const colors = ['red', 'green', 'blue'];
localStorage.setItem('colors', colors);

console.log(localStorage.getItem('colors')); 
// "red,green,blue" - Array converted to string!

// ❌ WRONG - Storing numbers directly
localStorage.setItem('count', 42);
console.log(typeof localStorage.getItem('count')); // "string"
console.log(localStorage.getItem('count') + 10); // "4210" - String concatenation!
```

### Correct Way: Using JSON

```javascript
// ✅ CORRECT - Store objects with JSON.stringify
const user = { name: 'John', age: 30, isActive: true };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve with JSON.parse
const retrievedUser = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUser.name); // "John"
console.log(retrievedUser.age); // 30 (number)

// ✅ CORRECT - Store arrays
const colors = ['red', 'green', 'blue'];
localStorage.setItem('colors', JSON.stringify(colors));

const retrievedColors = JSON.parse(localStorage.getItem('colors'));
console.log(retrievedColors[0]); // "red"
console.log(Array.isArray(retrievedColors)); // true

// ✅ CORRECT - Store numbers (but retrieve as string or parse)
localStorage.setItem('count', '42');
const count = parseInt(localStorage.getItem('count'));
console.log(count + 10); // 52 (number addition)
```

### Helper Functions for JSON Storage

```javascript
// Utility functions to make storage easier
const storage = {
    // Set with automatic JSON stringification
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    },
    
    // Get with automatic JSON parsing
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return defaultValue;
        }
    },
    
    // Remove item
    remove(key) {
        localStorage.removeItem(key);
    },
    
    // Clear all
    clear() {
        localStorage.clear();
    }
};

// Usage - Much cleaner!
storage.set('user', { name: 'John', age: 30 });
storage.set('settings', { theme: 'dark', language: 'en' });
storage.set('count', 42);

const user = storage.get('user');
console.log(user.name); // "John"

const count = storage.get('count');
console.log(count + 10); // 52

// With default value
const prefs = storage.get('preferences', { theme: 'light' });
```

### Storing Complex Data

```javascript
// Complex nested object
const appState = {
    user: {
        id: 123,
        name: 'John Doe',
        preferences: {
            theme: 'dark',
            notifications: true
        }
    },
    cart: [
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 49.99 }
    ],
    lastLogin: new Date().toISOString()
};

// Save complex state
localStorage.setItem('appState', JSON.stringify(appState));

// Retrieve complex state
const savedState = JSON.parse(localStorage.getItem('appState'));
console.log(savedState.user.name); // "John Doe"
console.log(savedState.cart[0].price); // 29.99
```

### Handling Storage Errors

```javascript
function safeSetItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        if (error.name === 'QuotaExceededError') {
            console.error('Storage quota exceeded!');
            // Handle by clearing old data or notifying user
        } else {
            console.error('Error saving to storage:', error);
        }
        return false;
    }
}

function safeGetItem(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error('Error parsing stored data:', error);
        return defaultValue;
    }
}

// Usage
if (safeSetItem('data', largeObject)) {
    console.log('Data saved successfully');
} else {
    console.log('Failed to save data');
}
```

---

## Cookies - Basic Structure

Cookies are small pieces of data sent from a server and stored in the user's browser.

### Key Characteristics
- **Capacity**: ~4KB per cookie
- **Lifespan**: Set via `expires` or `max-age`
- **Scope**: Domain and path based
- **Accessibility**: Both client and server-side
- **Sent with requests**: Automatically included in HTTP headers

### Basic Cookie Syntax

```javascript
// Set a cookie (simple)
document.cookie = "username=JohnDoe";

// Set a cookie with expiration
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT";

// Set a cookie with path
document.cookie = "username=JohnDoe; path=/";

// Set a cookie with all options
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/; domain=example.com; secure; SameSite=Strict";
```

### Cookie Attributes

```javascript
// expires: When cookie expires
document.cookie = "name=value; expires=Wed, 01 Jan 2025 00:00:00 GMT";

// max-age: Lifetime in seconds (alternative to expires)
document.cookie = "name=value; max-age=3600"; // 1 hour

// path: URL path where cookie is valid
document.cookie = "name=value; path=/admin"; // Only on /admin pages

// domain: Domain where cookie is valid
document.cookie = "name=value; domain=example.com"; // All subdomains

// secure: Only sent over HTTPS
document.cookie = "name=value; secure";

// SameSite: Control cross-site request behavior
document.cookie = "name=value; SameSite=Strict"; // Strict/Lax/None
```

### Reading Cookies

```javascript
// Get all cookies (returns a string)
console.log(document.cookie);
// "username=JohnDoe; email=john@example.com; theme=dark"

// Parse all cookies into an object
function getAllCookies() {
    const cookies = {};
    document.cookie.split(';').forEach(cookie => {
        const [key, value] = cookie.trim().split('=');
        cookies[key] = decodeURIComponent(value);
    });
    return cookies;
}

const cookies = getAllCookies();
console.log(cookies.username); // "JohnDoe"
```

### Cookie Helper Functions

```javascript
// Set a cookie with options
function setCookie(name, value, days = 7, path = '/') {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=${path}`;
}

// Get a specific cookie
function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

// Delete a cookie
function deleteCookie(name, path = '/') {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
}

// Check if cookie exists
function hasCookie(name) {
    return getCookie(name) !== null;
}

// Usage
setCookie('username', 'JohnDoe', 30); // Expires in 30 days
setCookie('theme', 'dark', 365); // Expires in 1 year

console.log(getCookie('username')); // "JohnDoe"

if (hasCookie('theme')) {
    console.log('Theme preference saved!');
}

deleteCookie('username');
console.log(getCookie('username')); // null
```

### Complete Cookie Management Class

```javascript
class CookieManager {
    static set(name, value, options = {}) {
        const {
            days = 7,
            path = '/',
            domain = '',
            secure = false,
            sameSite = 'Lax'
        } = options;
        
        let cookieString = `${name}=${encodeURIComponent(value)}`;
        
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            cookieString += `; expires=${date.toUTCString()}`;
        }
        
        cookieString += `; path=${path}`;
        
        if (domain) cookieString += `; domain=${domain}`;
        if (secure) cookieString += `; secure`;
        cookieString += `; SameSite=${sameSite}`;
        
        document.cookie = cookieString;
    }
    
    static get(name) {
        const nameEQ = `${name}=`;
        const cookies = document.cookie.split(';');
        
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.indexOf(nameEQ) === 0) {
                return decodeURIComponent(cookie.substring(nameEQ.length));
            }
        }
        return null;
    }
    
    static delete(name, path = '/') {
        this.set(name, '', { days: -1, path });
    }
    
    static getAll() {
        const cookies = {};
        document.cookie.split(';').forEach(cookie => {
            const [key, value] = cookie.trim().split('=');
            if (key) cookies[key] = decodeURIComponent(value || '');
        });
        return cookies;
    }
}

// Usage
CookieManager.set('user', 'JohnDoe', { days: 30, secure: true });
CookieManager.set('session', 'abc123', { days: 1 });

console.log(CookieManager.get('user')); // "JohnDoe"
console.log(CookieManager.getAll()); // { user: 'JohnDoe', session: 'abc123' }

CookieManager.delete('session');
```

### Storing Objects in Cookies

```javascript
// Store object as JSON
const user = { name: 'John', role: 'admin' };
setCookie('user', JSON.stringify(user), 7);

// Retrieve and parse
const savedUser = JSON.parse(getCookie('user'));
console.log(savedUser.name); // "John"
```

---

## Storage Comparison

### Quick Comparison Table

| Feature | LocalStorage | SessionStorage | Cookies |
|---------|-------------|----------------|---------|
| **Capacity** | ~5-10MB | ~5-10MB | ~4KB |
| **Lifespan** | Permanent | Session only | Configurable |
| **Scope** | Origin | Tab + Origin | Domain + Path |
| **Server Access** | No | No | Yes (auto-sent) |
| **Expiration** | Manual only | Auto (tab close) | Configurable |
| **Best For** | User preferences | Temp session data | Auth tokens |

### When to Use Each

**Use LocalStorage when:**
- Storing user preferences (theme, language)
- Caching data that doesn't change often
- Saving application state across sessions
- Don't need server access to the data
- Data size is reasonable (<5MB)

```javascript
// Good use cases for localStorage
localStorage.setItem('theme', 'dark');
localStorage.setItem('language', 'en');
localStorage.setItem('userSettings', JSON.stringify(settings));
```

**Use SessionStorage when:**
- Storing temporary form data
- Multi-step wizard progress
- Shopping cart before checkout
- Data should clear when tab closes
- Isolating data per tab/window

```javascript
// Good use cases for sessionStorage
sessionStorage.setItem('formStep', '3');
sessionStorage.setItem('tempCart', JSON.stringify(items));
sessionStorage.setItem('searchFilters', JSON.stringify(filters));
```

**Use Cookies when:**
- Authentication tokens
- Cross-tab/cross-domain communication needed
- Server needs to read the data
- Small amounts of data
- Need precise expiration control

```javascript
// Good use cases for cookies
setCookie('authToken', token, 1); // 1 day
setCookie('sessionId', sessionId, 0.5); // 12 hours
setCookie('remember', 'true', 30); // 30 days
```

---

## Common Confusions

### Why Only Strings Work in LocalStorage

```javascript
// localStorage only accepts strings!

// ❌ This doesn't work as expected
localStorage.setItem('number', 42);
console.log(typeof localStorage.getItem('number')); // "string"

// ❌ Objects get stringified as "[object Object]"
localStorage.setItem('user', { name: 'John' });
console.log(localStorage.getItem('user')); // "[object Object]"

// ✅ Use JSON for proper storage
localStorage.setItem('user', JSON.stringify({ name: 'John' }));
const user = JSON.parse(localStorage.getItem('user'));
console.log(user.name); // "John"
```

**Why?** LocalStorage was designed as a simple key-value string store. It's up to you to serialize complex data types.

### Cookies Need Manual Encoding/Expiration

```javascript
// ❌ Special characters break cookies
document.cookie = "message=Hello, World!"; // Comma breaks it
console.log(document.cookie); // May not work correctly

// ✅ Always encode values
document.cookie = `message=${encodeURIComponent('Hello, World!')}`;
const value = decodeURIComponent(getCookie('message'));

// ❌ Cookies without expiration are session cookies
document.cookie = "temp=value"; // Deleted when browser closes

// ✅ Set explicit expiration for persistent cookies
const date = new Date();
date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
document.cookie = `persistent=value; expires=${date.toUTCString()}`;
```

### LocalStorage is Synchronous and Blocking

```javascript
// ⚠️ LocalStorage operations are synchronous
// This can block the main thread for large data

// Bad - storing huge data
const hugeData = new Array(1000000).fill('data');
localStorage.setItem('huge', JSON.stringify(hugeData)); // Blocks UI!

// Better - break into smaller chunks or use IndexedDB for large data
```

---

## Best Practices

### ✅ DO: Always Handle JSON Errors

```javascript
function safeJSONParse(str, defaultValue = null) {
    try {
        return JSON.parse(str);
    } catch (error) {
        console.error('JSON parse error:', error);
        return defaultValue;
    }
}

// Usage
const saved = localStorage.getItem('user');
const user = safeJSONParse(saved, { name: 'Guest' });
```

### ✅ DO: Use LocalStorage for State, Cookies for Auth

```javascript
// Good separation of concerns

// LocalStorage: App state
localStorage.setItem('theme', 'dark');
localStorage.setItem('sidebar', 'collapsed');

// Cookies: Authentication (sent to server)
setCookie('authToken', token, 7);
setCookie('refreshToken', refreshToken, 30);
```

### ✅ DO: Namespace Your Keys

```javascript
// Bad - key collisions possible
localStorage.setItem('user', userData);
localStorage.setItem('settings', settings);

// Good - namespaced keys
localStorage.setItem('myApp:user', JSON.stringify(userData));
localStorage.setItem('myApp:settings', JSON.stringify(settings));
localStorage.setItem('myApp:cache:products', JSON.stringify(products));
```

### ✅ DO: Set Proper Cookie Attributes

```javascript
// Bad - insecure cookie
document.cookie = "authToken=abc123";

// Good - secure cookie with proper attributes
function setAuthCookie(token) {
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // 1 day
    
    document.cookie = `authToken=${encodeURIComponent(token)}; ` +
        `expires=${date.toUTCString()}; ` +
        `path=/; ` +
        `secure; ` + // Only HTTPS
        `SameSite=Strict`; // CSRF protection
}
```

### ✅ DO: Clear Storage on Logout

```javascript
function logout() {
    // Clear localStorage
    localStorage.removeItem('myApp:user');
    localStorage.removeItem('myApp:token');
    
    // Clear sessionStorage
    sessionStorage.clear();
    
    // Delete auth cookies
    deleteCookie('authToken');
    deleteCookie('refreshToken');
    
    // Redirect to login
    window.location.href = '/login';
}
```

### ❌ DON'T: Store Sensitive Data in LocalStorage

```javascript
// ❌ BAD - Never store these in localStorage
localStorage.setItem('password', userPassword); // NEVER!
localStorage.setItem('creditCard', cardNumber); // NEVER!
localStorage.setItem('ssn', socialSecurity); // NEVER!

// ✅ GOOD - Use secure httpOnly cookies for sensitive data
// (set by server, not accessible to JavaScript)
```

### ❌ DON'T: Assume Storage is Always Available

```javascript
// Check if storage is available
function isStorageAvailable(type) {
    try {
        const storage = window[type];
        const test = '__storage_test__';
        storage.setItem(test, test);
        storage.removeItem(test);
        return true;
    } catch (error) {
        return false;
    }
}

// Usage
if (isStorageAvailable('localStorage')) {
    localStorage.setItem('data', 'value');
} else {
    console.warn('localStorage not available, using fallback');
    // Use cookie or in-memory storage as fallback
}
```

### ✅ DO: Version Your Stored Data

```javascript
const STORAGE_VERSION = '1.0';

function saveSettings(settings) {
    const data = {
        version: STORAGE_VERSION,
        timestamp: Date.now(),
        settings: settings
    };
    
    localStorage.setItem('myApp:settings', JSON.stringify(data));
}

function loadSettings() {
    const saved = localStorage.getItem('myApp:settings');
    if (!saved) return getDefaultSettings();
    
    const data = JSON.parse(saved);
    
    // Check version compatibility
    if (data.version !== STORAGE_VERSION) {
        console.warn('Settings version mismatch, using defaults');
        return getDefaultSettings();
    }
    
    return data.settings;
}
```

---

## Practice Projects

### 1. Theme Preference Saver

Save and load user's theme preference using localStorage.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theme Preference</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            padding: 20px;
        }
        
        body.light {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
        }
        
        body.dark {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #e0e0e0;
        }
        
        .container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 500px;
            width: 100%;
            transition: all 0.3s ease;
        }
        
        body.dark .container {
            background: #2c2c54;
            color: #e0e0e0;
        }
        
        h1 {
            margin-bottom: 10px;
            font-size: 2rem;
        }
        
        .subtitle {
            color: #666;
            margin-bottom: 30px;
        }
        
        body.dark .subtitle {
            color: #aaa;
        }
        
        .theme-options {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin: 30px 0;
        }
        
        .theme-btn {
            padding: 60px 40px;
            border: 3px solid transparent;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            font-size: 1rem;
            font-weight: 600;
            background: #f5f5f5;
        }
        
        body.dark .theme-btn {
            background: #1a1a2e;
            color: #e0e0e0;
        }
        
        .theme-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .theme-btn.active {
            border-color: #667eea;
            background: #f0f0ff;
        }
        
        body.dark .theme-btn.active {
            border-color: #667eea;
            background: #2d2d5f;
        }
        
        .theme-icon {
            font-size: 3rem;
        }
        
        .info {
            background: #f0f0f0;
            padding: 20px;
            border-radius: 10px;
            margin-top: 30px;
            text-align: left;
        }
        
        body.dark .info {
            background: #1a1a2e;
        }
        
        .info-item {
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
        }
        
        .info-label {
            font-weight: 600;
        }
        
        .info-value {
            color: #667eea;
            font-family: monospace;
        }
        
        .actions {
            margin-top: 20px;
            display: flex;
            gap: 10px;
            justify-content: center;
        }
        
        button {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-reset {
            background: #e74c3c;
            color: white;
        }
        
        .btn-reset:hover {
            background: #c0392b;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Theme Preference</h1>
        <p class="subtitle">Choose your preferred theme</p>
        
        <div class="theme-options">
            <div class="theme-btn" data-theme="light">
                <span class="theme-icon">☀️</span>
                <span>Light Mode</span>
            </div>
            <div class="theme-btn" data-theme="dark">
                <span class="theme-icon">🌙</span>
                <span>Dark Mode</span>
            </div>
        </div>
        
        <div class="info">
            <div class="info-item">
                <span class="info-label">Current Theme:</span>
                <span class="info-value" id="currentTheme">light</span>
            </div>
            <div class="info-item">
                <span class="info-label">Stored in:</span>
                <span class="info-value">localStorage</span>
            </div>
            <div class="info-item">
                <span class="info-label">Persists:</span>
                <span class="info-value">Forever (until cleared)</span>
            </div>
        </div>
        
        <div class="actions">
            <button class="btn-reset" onclick="resetTheme()">Reset to Default</button>
        </div>
    </div>
    
    <script>
        const THEME_KEY = 'themePreference';
        const DEFAULT_THEME = 'light';
        
        // Load saved theme on page load
        function loadTheme() {
            const savedTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
            applyTheme(savedTheme);
        }
        
        // Apply theme to page
        function applyTheme(theme) {
            // Update body class
            document.body.className = theme;
            
            // Update UI
            document.getElementById('currentTheme').textContent = theme;
            
            // Update active button
            document.querySelectorAll('.theme-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.theme === theme) {
                    btn.classList.add('active');
                }
            });
        }
        
        // Save theme preference
        function saveTheme(theme) {
            localStorage.setItem(THEME_KEY, theme);
            console.log(`Theme saved: ${theme}`);
        }
        
        // Handle theme button clicks
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                saveTheme(theme);
                applyTheme(theme);
            });
        });
        
        // Reset to default theme
        function resetTheme() {
            localStorage.removeItem(THEME_KEY);
            applyTheme(DEFAULT_THEME);
            console.log('Theme reset to default');
        }
        
        // Initialize
        loadTheme();
    </script>
</body>
</html>
```

### 2. Login Form with Remember Me

A login form that remembers the user's username using localStorage.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form - Remember Me</title>
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
            max-width: 400px;
            width: 100%;
        }
        
        h1 {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: 600;
        }
        
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }
        
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        .remember-me {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 20px;
        }
        
        .remember-me input[type="checkbox"] {
            width: 18px;
            height: 18px;
            cursor: pointer;
        }
        
        .remember-me label {
            margin: 0;
            cursor: pointer;
            font-weight: normal;
        }
        
        button {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s;
        }
        
        button:hover {
            transform: translateY(-2px);
        }
        
        button:active {
            transform: translateY(0);
        }
        
        .message {
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            font-weight: 600;
            display: none;
        }
        
        .message.success {
            background: #d4edda;
            color: #155724;
            display: block;
        }
        
        .message.error {
            background: #f8d7da;
            color: #721c24;
            display: block;
        }
        
        .info-box {
            margin-top: 20px;
            padding: 15px;
            background: #e7f3ff;
            border-left: 4px solid #2196F3;
            border-radius: 4px;
        }
        
        .info-box h3 {
            margin-bottom: 10px;
            color: #1976D2;
            font-size: 1rem;
        }
        
        .info-box ul {
            margin-left: 20px;
            color: #555;
        }
        
        .info-box li {
            margin: 5px 0;
            font-size: 0.9rem;
        }
        
        .stored-data {
            margin-top: 20px;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 8px;
        }
        
        .stored-data h3 {
            margin-bottom: 10px;
            color: #333;
            font-size: 1rem;
        }
        
        .stored-data pre {
            background: #fff;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
            font-size: 0.85rem;
        }
        
        .btn-clear {
            width: 100%;
            margin-top: 10px;
            padding: 10px;
            background: #e74c3c;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.9rem;
        }
        
        .btn-clear:hover {
            background: #c0392b;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔐 Login</h1>
        
        <form id="loginForm">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            
            <div class="remember-me">
                <input type="checkbox" id="rememberMe" name="rememberMe">
                <label for="rememberMe">Remember me</label>
            </div>
            
            <button type="submit">Login</button>
        </form>
        
        <div class="message" id="message"></div>
        
        <div class="info-box">
            <h3>ℹ️ How it works:</h3>
            <ul>
                <li>Check "Remember me" to save username</li>
                <li>Username stored in localStorage</li>
                <li>Data persists across browser sessions</li>
                <li>Password is NEVER stored</li>
            </ul>
        </div>
        
        <div class="stored-data">
            <h3>📦 Stored Data:</h3>
            <pre id="storedData">No data stored</pre>
            <button class="btn-clear" onclick="clearStoredData()">Clear Stored Data</button>
        </div>
    </div>
    
    <script>
        const form = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const rememberMeCheckbox = document.getElementById('rememberMe');
        const messageDiv = document.getElementById('message');
        const storedDataPre = document.getElementById('storedData');
        
        const STORAGE_KEYS = {
            username: 'rememberedUsername',
            rememberMe: 'rememberMeChecked'
        };
        
        // Load saved data on page load
        function loadSavedData() {
            const savedUsername = localStorage.getItem(STORAGE_KEYS.username);
            const rememberMeChecked = localStorage.getItem(STORAGE_KEYS.rememberMe) === 'true';
            
            if (savedUsername && rememberMeChecked) {
                usernameInput.value = savedUsername;
                rememberMeCheckbox.checked = true;
                showMessage('Welcome back! Your username has been filled in.', 'success');
            }
            
            updateStoredDataDisplay();
        }
        
        // Show message
        function showMessage(text, type) {
            messageDiv.textContent = text;
            messageDiv.className = `message ${type}`;
            
            setTimeout(() => {
                messageDiv.className = 'message';
            }, 3000);
        }
        
        // Update stored data display
        function updateStoredDataDisplay() {
            const stored = {
                username: localStorage.getItem(STORAGE_KEYS.username),
                rememberMe: localStorage.getItem(STORAGE_KEYS.rememberMe)
            };
            
            if (stored.username || stored.rememberMe) {
                storedDataPre.textContent = JSON.stringify(stored, null, 2);
            } else {
                storedDataPre.textContent = 'No data stored';
            }
        }
        
        // Handle form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = usernameInput.value.trim();
            const password = passwordInput.value;
            const rememberMe = rememberMeCheckbox.checked;
            
            // Simulate login validation
            if (username && password) {
                // Save or remove username based on "Remember Me"
                if (rememberMe) {
                    localStorage.setItem(STORAGE_KEYS.username, username);
                    localStorage.setItem(STORAGE_KEYS.rememberMe, 'true');
                    showMessage('✓ Login successful! Username saved.', 'success');
                } else {
                    localStorage.removeItem(STORAGE_KEYS.username);
                    localStorage.removeItem(STORAGE_KEYS.rememberMe);
                    showMessage('✓ Login successful!', 'success');
                }
                
                updateStoredDataDisplay();
                
                // Clear password (never store passwords!)
                passwordInput.value = '';
                
                // In real app, redirect to dashboard
                console.log('Login successful:', { username, rememberMe });
            } else {
                showMessage('✗ Please fill in all fields', 'error');
            }
        });
        
        // Clear stored data
        function clearStoredData() {
            localStorage.removeItem(STORAGE_KEYS.username);
            localStorage.removeItem(STORAGE_KEYS.rememberMe);
            
            usernameInput.value = '';
            rememberMeCheckbox.checked = false;
            
            updateStoredDataDisplay();
            showMessage('Stored data cleared', 'success');
        }
        
        // Update display when checkbox changes
        rememberMeCheckbox.addEventListener('change', () => {
            if (!rememberMeCheckbox.checked) {
                localStorage.removeItem(STORAGE_KEYS.username);
                localStorage.removeItem(STORAGE_KEYS.rememberMe);
                updateStoredDataDisplay();
            }
        });
        
        // Initialize
        loadSavedData();
    </script>
</body>
</html>
```

---

## Advanced Techniques

### Storage Event Listener

Listen for storage changes across tabs/windows.

```javascript
// Listen for localStorage changes from other tabs
window.addEventListener('storage', (e) => {
    console.log('Storage changed in another tab!');
    console.log('Key:', e.key);
    console.log('Old Value:', e.oldValue);
    console.log('New Value:', e.newValue);
    console.log('URL:', e.url);
    
    // Example: Sync theme across tabs
    if (e.key === 'theme') {
        applyTheme(e.newValue);
    }
    
    // Example: Logout from all tabs
    if (e.key === 'logout' && e.newValue === 'true') {
        window.location.href = '/login';
    }
});

// Trigger logout in all tabs
function logoutAllTabs() {
    localStorage.setItem('logout', 'true');
    localStorage.removeItem('logout'); // Clean up
}
```

### Storage Quota Management

```javascript
// Check available storage space
async function checkStorageQuota() {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
        const estimate = await navigator.storage.estimate();
        const usage = estimate.usage;
        const quota = estimate.quota;
        const percentUsed = (usage / quota * 100).toFixed(2);
        
        console.log(`Storage used: ${(usage / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Storage quota: ${(quota / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Percent used: ${percentUsed}%`);
        
        return { usage, quota, percentUsed };
    }
}

// Usage
checkStorageQuota().then(info => {
    if (info.percentUsed > 80) {
        console.warn('Storage is running low!');
    }
});
```

### Encryption Helper (Basic)

```javascript
// Simple XOR encryption (NOT for production - use proper encryption!)
function simpleEncrypt(text, key) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        encrypted += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(encrypted);
}

function simpleDecrypt(encrypted, key) {
    const text = atob(encrypted);
    let decrypted = '';
    for (let i = 0; i < text.length; i++) {
        decrypted += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return decrypted;
}

// Usage (for non-sensitive data only)
const data = { username: 'john', email: 'john@example.com' };
const key = 'mySecretKey';

const encrypted = simpleEncrypt(JSON.stringify(data), key);
localStorage.setItem('userData', encrypted);

const decrypted = simpleDecrypt(localStorage.getItem('userData'), key);
const userData = JSON.parse(decrypted);
```

### Storage with Expiration

```javascript
class StorageWithExpiry {
    static set(key, value, expiryInMinutes) {
        const now = new Date();
        const item = {
            value: value,
            expiry: now.getTime() + (expiryInMinutes * 60 * 1000)
        };
        localStorage.setItem(key, JSON.stringify(item));
    }
    
    static get(key) {
        const itemStr = localStorage.getItem(key);
        
        if (!itemStr) {
            return null;
        }
        
        const item = JSON.parse(itemStr);
        const now = new Date();
        
        // Check if expired
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        
        return item.value;
    }
    
    static remove(key) {
        localStorage.removeItem(key);
    }
}

// Usage
StorageWithExpiry.set('tempData', { foo: 'bar' }, 30); // Expires in 30 minutes

// Later...
const data = StorageWithExpiry.get('tempData');
if (data) {
    console.log('Data still valid:', data);
} else {
    console.log('Data expired or not found');
}
```

---

## Debugging Storage

### View Storage in DevTools

```javascript
// Log all localStorage items
console.table(
    Object.keys(localStorage).map(key => ({
        key: key,
        value: localStorage.getItem(key)
    }))
);

// Log all cookies
console.log(document.cookie.split(';').map(c => c.trim()));
```

### Clear All Storage

```javascript
function clearAllStorage() {
    // Clear localStorage
    localStorage.clear();
    console.log('localStorage cleared');
    
    // Clear sessionStorage
    sessionStorage.clear();
    console.log('sessionStorage cleared');
    
    // Clear all cookies
    document.cookie.split(';').forEach(cookie => {
        const name = cookie.split('=')[0].trim();
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
    console.log('Cookies cleared');
}

// Usage
clearAllStorage();
```

---

## Security Considerations

### 1. Never Store Sensitive Data

```javascript
// ❌ NEVER DO THIS
localStorage.setItem('password', userPassword);
localStorage.setItem('creditCard', cardNumber);
localStorage.setItem('ssn', socialSecurity);
localStorage.setItem('apiKey', secretKey);

// ✅ Safe to store
localStorage.setItem('theme', 'dark');
localStorage.setItem('language', 'en');
localStorage.setItem('lastVisit', timestamp);
```

### 2. XSS Protection

```javascript
// Vulnerable to XSS if displaying stored data
const userInput = localStorage.getItem('userNote');
document.getElementById('display').innerHTML = userInput; // ❌ DANGEROUS!

// Safe approach
document.getElementById('display').textContent = userInput; // ✅ SAFE

// Or sanitize HTML
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
```

### 3. Validate Stored Data

```javascript
function getValidatedData(key, validator) {
    try {
        const data = JSON.parse(localStorage.getItem(key));
        
        if (validator(data)) {
            return data;
        } else {
            console.warn('Stored data failed validation');
            localStorage.removeItem(key);
            return null;
        }
    } catch (error) {
        console.error('Error loading data:', error);
        return null;
    }
}

// Usage
const settings = getValidatedData('settings', (data) => {
    return data && 
           typeof data.theme === 'string' && 
           typeof data.fontSize === 'number';
});
```

---

## Summary

### Key Takeaways

**LocalStorage:**
- Permanent storage (until manually cleared)
- ~5-10MB capacity
- Only stores strings (use JSON for objects)
- Perfect for user preferences and settings
- Synchronous API (blocks main thread)

**SessionStorage:**
- Temporary storage (cleared on tab close)
- Same API as localStorage
- Isolated per tab/window
- Great for temporary form data and wizard progress

**Cookies:**
- Small capacity (~4KB)
- Sent with every HTTP request
- Can be set by server or client
- Support expiration and domain/path scoping
- Best for authentication tokens

**Best Practices:**
- Use localStorage for app state, cookies for authentication
- Always serialize objects with JSON.stringify/parse
- Handle storage errors gracefully
- Never store sensitive data in localStorage
- Clear storage on logout
- Use namespaced keys to avoid collisions
- Check storage availability before use

**Common Patterns:**
- Theme preference: localStorage
- Form wizard: sessionStorage
- Auth tokens: httpOnly cookies (server-set)
- Auto-save drafts: localStorage with timestamps
- Shopping cart: sessionStorage (temp) or localStorage (persistent)

---

## Quick Reference

```javascript
// LOCALSTORAGE
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();

// SESSIONSTORAGE
sessionStorage.setItem('key', 'value');
const value = sessionStorage.getItem('key');
sessionStorage.removeItem('key');
sessionStorage.clear();

// COOKIES
document.cookie = "key=value; expires=DATE; path=/";
const cookies = document.cookie;

// JSON STORAGE
localStorage.setItem('data', JSON.stringify(object));
const object = JSON.parse(localStorage.getItem('data'));
```

---

Happy coding! 🚀