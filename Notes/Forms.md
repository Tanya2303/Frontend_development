# JavaScript Forms and Form Validation

A comprehensive guide to working with forms and implementing robust form validation in JavaScript.

## Table of Contents
- [Reading Form Values](#reading-form-values)
- [Preventing Default Submission](#preventing-default-submission)
- [Form Validation](#form-validation)
- [Showing Error Messages](#showing-error-messages)
- [Pattern Attribute vs Custom Regex](#pattern-attribute-vs-custom-regex)
- [Common Confusions](#common-confusions)
- [Best Practices](#best-practices)
- [Practice Projects](#practice-projects)

---

## Reading Form Values

Learn how to access and read values from different form elements.

### Reading Input Values

```javascript
const input = document.querySelector('#username');

// Get the value
console.log(input.value);

// Set the value
input.value = 'John Doe';

// Clear the value
input.value = '';
```

### Reading from Different Input Types

```javascript
// Text input
const textInput = document.querySelector('#name');
console.log(textInput.value); // "John"

// Number input
const ageInput = document.querySelector('#age');
console.log(ageInput.value); // "25" (string)
console.log(Number(ageInput.value)); // 25 (number)

// Checkbox
const checkbox = document.querySelector('#agree');
console.log(checkbox.checked); // true or false
console.log(checkbox.value); // Value attribute if checked

// Radio buttons
const selectedGender = document.querySelector('input[name="gender"]:checked');
console.log(selectedGender ? selectedGender.value : 'None selected');

// Email input
const email = document.querySelector('#email');
console.log(email.value); // "user@example.com"

// Password input
const password = document.querySelector('#password');
console.log(password.value); // "secret123"
```

### Reading Textarea Values

```javascript
const textarea = document.querySelector('#message');

// Get value
console.log(textarea.value);

// Set value
textarea.value = 'This is a long message...';

// Get length
console.log(textarea.value.length);
```

### Reading Select (Dropdown) Values

```javascript
const select = document.querySelector('#country');

// Get selected value
console.log(select.value);

// Get selected option text
const selectedOption = select.options[select.selectedIndex];
console.log(selectedOption.text);

// Get all selected values (for multiple select)
const multiSelect = document.querySelector('#languages');
const selectedValues = Array.from(multiSelect.selectedOptions).map(option => option.value);
console.log(selectedValues); // ["en", "es", "fr"]
```

### Reading All Form Data at Once

```javascript
const form = document.querySelector('#myForm');

// Method 1: Using FormData API (Modern)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    // Get all values as an object
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // { username: "john", email: "john@example.com", age: "25" }
});

// Method 2: Manual collection
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = {
        username: form.username.value,
        email: form.email.value,
        age: form.age.value,
        agree: form.agree.checked
    };
    
    console.log(data);
});

// Method 3: Using elements collection
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const elements = form.elements;
    console.log(elements.username.value);
    console.log(elements.email.value);
});
```

### Real-World Example: Contact Form

```html
<form id="contactForm">
    <input type="text" name="name" id="name" placeholder="Your Name">
    <input type="email" name="email" id="email" placeholder="Your Email">
    <textarea name="message" id="message" placeholder="Your Message"></textarea>
    <select name="subject" id="subject">
        <option value="">Choose Subject</option>
        <option value="general">General Inquiry</option>
        <option value="support">Support</option>
        <option value="feedback">Feedback</option>
    </select>
    <label>
        <input type="checkbox" name="subscribe" id="subscribe">
        Subscribe to newsletter
    </label>
    <button type="submit">Send Message</button>
</form>
```

```javascript
const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Collect all form data
    const formData = {
        name: contactForm.name.value.trim(),
        email: contactForm.email.value.trim(),
        message: contactForm.message.value.trim(),
        subject: contactForm.subject.value,
        subscribe: contactForm.subscribe.checked
    };
    
    console.log('Form submitted with data:', formData);
    
    // Send to server (example)
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });
});
```

---

## Preventing Default Submission

By default, forms reload the page when submitted. Learn how to prevent this behavior.

### Why Prevent Default?

```javascript
// Without preventDefault - page reloads ❌
form.addEventListener('submit', (e) => {
    console.log('Form submitted');
    // Page reloads immediately, console.log disappears
});

// With preventDefault - page doesn't reload ✅
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Page stays, you can handle the data
});
```

### Basic Example

```javascript
const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the page from reloading
    
    // Now you can handle the form data
    const username = form.username.value;
    const email = form.email.value;
    
    console.log('Username:', username);
    console.log('Email:', email);
    
    // Send data via AJAX, validate, etc.
});
```

### Preventing Default on Links

```javascript
const link = document.querySelector('#specialLink');

link.addEventListener('click', (e) => {
    e.preventDefault(); // Stop navigation
    
    // Custom behavior instead
    console.log('Link clicked, but not navigating');
    // Show modal, make API call, etc.
});
```

### Conditional Prevention

```javascript
form.addEventListener('submit', (e) => {
    const isValid = validateForm();
    
    if (!isValid) {
        e.preventDefault(); // Only prevent if invalid
        showErrors();
    }
    // If valid, allow normal submission
});
```

---

## Form Validation

Implement both HTML5 inline validation and custom JavaScript validation.

### HTML5 Inline Validation

HTML5 provides built-in validation attributes.

```html
<!-- Required field -->
<input type="text" name="username" required>

<!-- Email validation -->
<input type="email" name="email" required>

<!-- Minimum length -->
<input type="password" name="password" minlength="8" required>

<!-- Maximum length -->
<input type="text" name="username" maxlength="20">

<!-- Pattern matching (regex) -->
<input type="text" name="zip" pattern="[0-9]{5}" title="5-digit ZIP code">

<!-- Number range -->
<input type="number" name="age" min="18" max="100">

<!-- URL validation -->
<input type="url" name="website">

<!-- Phone number -->
<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
```

### JavaScript-Based Validation

Custom validation with JavaScript gives you full control.

```javascript
const form = document.querySelector('#registrationForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    // Get values
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    
    let isValid = true;
    
    // Validate username
    if (username === '') {
        showError('username', 'Username is required');
        isValid = false;
    } else if (username.length < 3) {
        showError('username', 'Username must be at least 3 characters');
        isValid = false;
    }
    
    // Validate email
    if (email === '') {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email');
        isValid = false;
    }
    
    // Validate password
    if (password === '') {
        showError('password', 'Password is required');
        isValid = false;
    } else if (password.length < 8) {
        showError('password', 'Password must be at least 8 characters');
        isValid = false;
    } else if (!isStrongPassword(password)) {
        showError('password', 'Password must contain uppercase, lowercase, number, and special character');
        isValid = false;
    }
    
    // Validate confirm password
    if (confirmPassword === '') {
        showError('confirmPassword', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }
    
    // If all validations pass
    if (isValid) {
        console.log('Form is valid! Submitting...');
        // Submit the form or send data
    }
});

// Helper function: Check if email is valid
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function: Check if password is strong
function isStrongPassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

function showError(fieldName, message) {
    const field = form[fieldName];
    const errorDiv = field.nextElementSibling; // Assuming error div is next to input
    
    field.classList.add('error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

function clearErrors() {
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
    
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
}
```

### Real-Time Validation (As User Types)

```javascript
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');

emailInput.addEventListener('input', (e) => {
    const email = e.target.value.trim();
    
    if (email === '') {
        emailError.textContent = '';
        emailInput.classList.remove('valid', 'invalid');
    } else if (isValidEmail(email)) {
        emailError.textContent = '✓ Valid email';
        emailError.style.color = 'green';
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
    } else {
        emailError.textContent = '✗ Invalid email format';
        emailError.style.color = 'red';
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
    }
});
```

### Validation on Blur (When Field Loses Focus)

```javascript
const fields = form.querySelectorAll('input[required]');

fields.forEach(field => {
    field.addEventListener('blur', (e) => {
        validateField(e.target);
    });
});

function validateField(field) {
    const value = field.value.trim();
    const errorDiv = field.nextElementSibling;
    
    if (value === '') {
        field.classList.add('invalid');
        errorDiv.textContent = `${field.name} is required`;
        errorDiv.style.display = 'block';
    } else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        errorDiv.style.display = 'none';
    }
}
```

---

## Showing Error Messages

Display validation errors to users in a clear and helpful way.

### Inline Error Messages

```html
<form id="myForm">
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <span class="error-message" id="emailError"></span>
    </div>
    
    <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <span class="error-message" id="passwordError"></span>
    </div>
    
    <button type="submit">Submit</button>
</form>
```

```css
.error-message {
    color: red;
    font-size: 0.875rem;
    display: none;
    margin-top: 0.25rem;
}

.form-group input.invalid {
    border: 2px solid red;
}

.form-group input.valid {
    border: 2px solid green;
}
```

```javascript
function showError(fieldId, message) {
    const field = document.querySelector(`#${fieldId}`);
    const errorSpan = document.querySelector(`#${fieldId}Error`);
    
    field.classList.add('invalid');
    field.classList.remove('valid');
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
}

function showSuccess(fieldId) {
    const field = document.querySelector(`#${fieldId}`);
    const errorSpan = document.querySelector(`#${fieldId}Error`);
    
    field.classList.add('valid');
    field.classList.remove('invalid');
    errorSpan.style.display = 'none';
}
```

### Error Summary at Top of Form

```html
<form id="myForm">
    <div id="errorSummary" class="error-summary" style="display: none;">
        <h3>Please fix the following errors:</h3>
        <ul id="errorList"></ul>
    </div>
    
    <!-- Form fields here -->
</form>
```

```javascript
function showErrorSummary(errors) {
    const errorSummary = document.querySelector('#errorSummary');
    const errorList = document.querySelector('#errorList');
    
    // Clear previous errors
    errorList.innerHTML = '';
    
    if (errors.length > 0) {
        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            errorList.appendChild(li);
        });
        
        errorSummary.style.display = 'block';
        errorSummary.scrollIntoView({ behavior: 'smooth' });
    } else {
        errorSummary.style.display = 'none';
    }
}

// Usage
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const errors = [];
    
    if (!form.email.value) {
        errors.push('Email is required');
    }
    if (!form.password.value) {
        errors.push('Password is required');
    }
    
    if (errors.length > 0) {
        showErrorSummary(errors);
    } else {
        console.log('Form is valid!');
    }
});
```

### Conditional Error Display

```javascript
const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');
const passwordRequirements = document.querySelector('#passwordRequirements');

passwordInput.addEventListener('input', (e) => {
    const password = e.target.value;
    
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*]/.test(password)
    };
    
    // Update requirement indicators
    document.querySelector('#req-length').classList.toggle('met', requirements.length);
    document.querySelector('#req-uppercase').classList.toggle('met', requirements.uppercase);
    document.querySelector('#req-lowercase').classList.toggle('met', requirements.lowercase);
    document.querySelector('#req-number').classList.toggle('met', requirements.number);
    document.querySelector('#req-special').classList.toggle('met', requirements.special);
    
    // Show/hide requirements based on focus
    if (password.length > 0) {
        passwordRequirements.style.display = 'block';
    } else {
        passwordRequirements.style.display = 'none';
    }
});
```

### Toast/Alert Messages

```javascript
function showToast(message, type = 'error') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Hide and remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Usage
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        showToast('Please fix the errors in the form', 'error');
    } else {
        showToast('Form submitted successfully!', 'success');
    }
});
```

---

## Pattern Attribute vs Custom Regex

Understand when to use HTML5 pattern attribute and when to use custom JavaScript regex.

### HTML5 Pattern Attribute

The `pattern` attribute uses regex to validate input.

```html
<!-- US ZIP Code (5 digits) -->
<input type="text" name="zip" pattern="[0-9]{5}" 
       title="5-digit ZIP code (e.g., 12345)">

<!-- US Phone Number -->
<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       title="Format: 123-456-7890">

<!-- Username (letters, numbers, underscore, 3-16 chars) -->
<input type="text" name="username" pattern="[a-zA-Z0-9_]{3,16}"
       title="3-16 characters, letters, numbers, underscore only">

<!-- Hexadecimal color -->
<input type="text" name="color" pattern="#[0-9a-fA-F]{6}"
       title="Hex color code (e.g., #FF5733)">

<!-- Credit card (basic) -->
<input type="text" name="card" pattern="[0-9]{13,16}"
       title="13-16 digit credit card number">

<!-- Strong password -->
<input type="password" name="password" 
       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
       title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 characters">
```

**Pros of Pattern Attribute:**
- Simple to implement
- Works without JavaScript
- Native browser validation UI
- Good for simple patterns

**Cons of Pattern Attribute:**
- Limited customization
- Can't provide detailed feedback
- Browser-dependent UI
- Can't validate across multiple fields

### Custom Regex Validation

Use JavaScript regex for complex validation and better control.

```javascript
// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone number (various formats)
function isValidPhone(phone) {
    // Matches: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
}

// Strong password
function isStrongPassword(password) {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// URL validation
function isValidURL(url) {
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlRegex.test(url);
}

// Username (alphanumeric, underscore, 3-16 chars)
function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    return usernameRegex.test(username);
}

// Credit card (Luhn algorithm)
function isValidCreditCard(cardNumber) {
    // Remove spaces and dashes
    const cleaned = cardNumber.replace(/[\s-]/g, '');
    
    // Check if it's all digits
    if (!/^\d+$/.test(cleaned)) return false;
    
    // Luhn algorithm
    let sum = 0;
    let isEven = false;
    
    for (let i = cleaned.length - 1; i >= 0; i--) {
        let digit = parseInt(cleaned[i]);
        
        if (isEven) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        
        sum += digit;
        isEven = !isEven;
    }
    
    return sum % 10 === 0;
}
```

### Detailed Validation with Custom Messages

```javascript
function validatePassword(password) {
    const errors = [];
    
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    }
    if (!/[0-9]/.test(password)) {
        errors.push('Password must contain at least one number');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push('Password must contain at least one special character');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// Usage
passwordInput.addEventListener('blur', (e) => {
    const result = validatePassword(e.target.value);
    
    if (!result.isValid) {
        showError('password', result.errors.join(', '));
    } else {
        showSuccess('password');
    }
});
```

### Combining Both Approaches

```html
<form id="registrationForm">
    <!-- HTML5 pattern for basic validation -->
    <input type="email" name="email" required 
           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    <span class="error-message" id="emailError"></span>
    
    <button type="submit">Submit</button>
</form>
```

```javascript
// JavaScript for detailed feedback
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = form.email.value.trim();
    
    // Custom validation with better messages
    if (!email) {
        showError('email', 'Email is required');
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address (e.g., user@example.com)');
    } else if (email.length > 254) {
        showError('email', 'Email is too long (maximum 254 characters)');
    } else {
        // Valid!
        submitForm();
    }
});
```

---

## Common Confusions

### value vs textContent

```javascript
// INPUT elements - use .value ✅
const input = document.querySelector('input');
console.log(input.value); // Gets the input value
input.value = 'New value'; // Sets the input value

// DIV, SPAN, P elements - use .textContent ✅
const div = document.querySelector('div');
console.log(div.textContent); // Gets the text content
div.textContent = 'New text'; // Sets the text content

// Common mistake ❌
console.log(input.textContent); // Returns empty string
console.log(div.value); // Returns undefined
```

**Rule of Thumb:**
- Form elements (input, textarea, select) → use `.value`
- Regular elements (div, span, p) → use `.textContent`

### Form Submission vs Button Click

```javascript
// ❌ WRONG: Listening to button click
const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Problem: Won't trigger on Enter key press
});

// ✅ RIGHT: Listening to form submit
const form = document.querySelector('#myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Works for both button click AND Enter key press
});
```

**Why listen to form submit?**
- Captures Enter key submissions
- Works with multiple submit buttons
- Follows web standards
- Better accessibility

### When Do Validation Methods Fire?

```javascript
const input = document.querySelector('#email');

// 1. 'input' - Fires on every keystroke
input.addEventListener('input', (e) => {
    console.log('Typing:', e.target.value);
    // Use for: Real-time feedback, character counters
});

// 2. 'change' - Fires when value changes AND field loses focus
input.addEventListener('change', (e) => {
    console.log('Changed:', e.target.value);
    // Use for: Select dropdowns, final value validation
});

// 3. 'blur' - Fires when field loses focus
input.addEventListener('blur', (e) => {
    console.log('Lost focus:', e.target.value);
    // Use for: Field-level validation after user finishes
});

// 4. 'focus' - Fires when field gets focus
input.addEventListener('focus', (e) => {
    console.log('Got focus');
    // Use for: Showing tooltips, clearing errors
});

// 5. 'submit' - Fires when form is submitted
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Use for: Final validation before sending
});
```

**Best Practice:**
- Use `input` for real-time feedback (character counter, password strength)
- Use `blur` for validation after user finishes with a field
- Use `submit` for final validation before sending data

---

## Best Practices

### ✅ DO: Validate on Both Client and Server

```javascript
// Client-side validation (for UX)
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        showErrors();
        return;
    }
    
    // Send to server
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        
        // Server-side validation errors
        if (!response.ok) {
            const errors = await response.json();
            displayServerErrors(errors);
        }
    } catch (error) {
        showError('Network error');
    }
});
```

**Why?**
- Client-side: Fast feedback, better UX
- Server-side: Security, can't be bypassed

### ✅ DO: Sanitize User Input

```javascript
function sanitizeInput(input) {
    // Remove leading/trailing whitespace
    let sanitized = input.trim();
    
    // Remove any HTML tags
    sanitized = sanitized.replace(/<[^>]*>/g, '');
    
    // Escape special characters for display
    sanitized = sanitized
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
    
    return sanitized;
}

// Usage
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = sanitizeInput(form.username.value);
    const comment = sanitizeInput(form.comment.value);
    
    // Now safe to use
});
```

### ✅ DO: Provide Clear, Helpful Error Messages

```javascript
// ❌ BAD: Generic, unhelpful
showError('Invalid input');

// ✅ GOOD: Specific and helpful
showError('Email must be in the format: user@example.com');

// ❌ BAD: Technical jargon
showError('Password regex validation failed');

// ✅ GOOD: Plain language
showError('Password must be at least 8 characters and include a number');
```

### ✅ DO: Validate Deeply

```javascript
// Don't just check if field is empty
function validateEmail(email) {
    // Check if empty
    if (!email) {
        return { valid: false, error: 'Email is required' };
    }
    
    // Check format
    if (!isValidEmail(email)) {
        return { valid: false, error: 'Invalid email format' };
    }
    
    // Check length
    if (email.length > 254) {
        return { valid: false, error: 'Email is too long' };
    }
    
    // Check for common typos
    const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
    const domain = email.split('@')[1];
    if (domain && !commonDomains.includes(domain)) {
        // Suggest correction
        const similar = findSimilarDomain(domain, commonDomains);
        if (similar) {
            return { 
                valid: true, 
                warning: `Did you mean ${similar}?` 
            };
        }
    }
    
    return { valid: true };
}
```

### ✅ DO: Use Accessibility Features

```html
<!-- Proper labels -->
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" 
       aria-describedby="emailHelp" 
       aria-required="true">
<small id="emailHelp">We'll never share your email</small>
<span id="emailError" role="alert" aria-live="polite"></span>

<!-- Required indicators -->
<label for="username">
    Username <span aria-label="required">*</span>
</label>
<input type="text" id="username" required aria-required="true">
```

### ❌ DON'T: Rely Only on HTML5 Validation

```javascript
// ❌ BAD: Only HTML5 validation
<input type="email" required>

// ✅ GOOD: HTML5 + JavaScript validation
<input type="email" required>
<script>
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (customValidation()) {
        submitForm();
    }
});
</script>
```

### ❌ DON'T: Validate on Every Keystroke (for complex validation)

```javascript
// ❌ BAD: Expensive validation on every keystroke
input.addEventListener('input', (e) => {
    checkPasswordStrength(); // Complex operation
    checkAgainstDatabase(); // API call
});

// ✅ GOOD: Debounced or on blur
let timeout;
input.addEventListener('input', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        checkPasswordStrength();
    }, 500); // Wait 500ms after user stops typing
});
```

---

## Practice Projects

### 1. Email/Password Validator

Create a registration form with comprehensive validation.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
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
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            max-width: 450px;
            width: 100%;
        }
        
        h2 {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: 500;
        }
        
        input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            transition: border-color 0.3s;
        }
        
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        input.valid {
            border-color: #28a745;
        }
        
        input.invalid {
            border-color: #dc3545;
        }
        
        .error-message {
            color: #dc3545;
            font-size: 13px;
            margin-top: 5px;
            display: none;
        }
        
        .error-message.show {
            display: block;
        }
        
        .password-strength {
            margin-top: 10px;
        }
        
        .strength-bar {
            height: 5px;
            background: #ddd;
            border-radius: 3px;
            overflow: hidden;
            margin-bottom: 5px;
        }
        
        .strength-bar-fill {
            height: 100%;
            width: 0;
            transition: width 0.3s, background-color 0.3s;
        }
        
        .strength-bar-fill.weak {
            width: 33%;
            background-color: #dc3545;
        }
        
        .strength-bar-fill.medium {
            width: 66%;
            background-color: #ffc107;
        }
        
        .strength-bar-fill.strong {
            width: 100%;
            background-color: #28a745;
        }
        
        .strength-text {
            font-size: 13px;
            color: #666;
        }
        
        .requirements {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
            display: none;
        }
        
        .requirements.show {
            display: block;
        }
        
        .requirement {
            font-size: 13px;
            color: #666;
            margin: 5px 0;
        }
        
        .requirement::before {
            content: '✗ ';
            color: #dc3545;
            font-weight: bold;
        }
        
        .requirement.met::before {
            content: '✓ ';
            color: #28a745;
        }
        
        .requirement.met {
            color: #28a745;
        }
        
        button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s;
        }
        
        button:hover {
            transform: translateY(-2px);
        }
        
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        
        .success-message {
            background: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            display: none;
        }
        
        .success-message.show {
            display: block;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Create Account</h2>
        
        <div class="success-message" id="successMessage">
            ✓ Account created successfully!
        </div>
        
        <form id="registrationForm">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" autocomplete="off">
                <div class="error-message" id="usernameError"></div>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" autocomplete="off">
                <div class="error-message" id="emailError"></div>
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
                <div class="error-message" id="passwordError"></div>
                
                <div class="password-strength">
                    <div class="strength-bar">
                        <div class="strength-bar-fill" id="strengthBar"></div>
                    </div>
                    <div class="strength-text" id="strengthText"></div>
                </div>
                
                <div class="requirements" id="requirements">
                    <div class="requirement" id="req-length">At least 8 characters</div>
                    <div class="requirement" id="req-uppercase">One uppercase letter</div>
                    <div class="requirement" id="req-lowercase">One lowercase letter</div>
                    <div class="requirement" id="req-number">One number</div>
                    <div class="requirement" id="req-special">One special character (!@#$%^&*)</div>
                </div>
            </div>
            
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword">
                <div class="error-message" id="confirmPasswordError"></div>
            </div>
            
            <button type="submit">Create Account</button>
        </form>
    </div>
    
    <script>
        const form = document.getElementById('registrationForm');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const requirements = document.getElementById('requirements');
        const strengthBar = document.getElementById('strengthBar');
        const strengthText = document.getElementById('strengthText');
        
        // Show password requirements when focused
        password.addEventListener('focus', () => {
            requirements.classList.add('show');
        });
        
        // Real-time password validation
        password.addEventListener('input', (e) => {
            const pwd = e.target.value;
            
            // Check each requirement
            const checks = {
                length: pwd.length >= 8,
                uppercase: /[A-Z]/.test(pwd),
                lowercase: /[a-z]/.test(pwd),
                number: /[0-9]/.test(pwd),
                special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd)
            };
            
            // Update requirement indicators
            document.getElementById('req-length').classList.toggle('met', checks.length);
            document.getElementById('req-uppercase').classList.toggle('met', checks.uppercase);
            document.getElementById('req-lowercase').classList.toggle('met', checks.lowercase);
            document.getElementById('req-number').classList.toggle('met', checks.number);
            document.getElementById('req-special').classList.toggle('met', checks.special);
            
            // Calculate strength
            const metCount = Object.values(checks).filter(Boolean).length;
            updatePasswordStrength(metCount);
            
            // Clear error when typing
            clearError('password');
        });
        
        // Update password strength indicator
        function updatePasswordStrength(metCount) {
            strengthBar.className = 'strength-bar-fill';
            
            if (metCount <= 2) {
                strengthBar.classList.add('weak');
                strengthText.textContent = 'Weak password';
                strengthText.style.color = '#dc3545';
            } else if (metCount <= 4) {
                strengthBar.classList.add('medium');
                strengthText.textContent = 'Medium password';
                strengthText.style.color = '#ffc107';
            } else {
                strengthBar.classList.add('strong');
                strengthText.textContent = 'Strong password';
                strengthText.style.color = '#28a745';
            }
        }
        
        // Real-time confirm password validation
        confirmPassword.addEventListener('input', (e) => {
            if (e.target.value && e.target.value !== password.value) {
                showError('confirmPassword', 'Passwords do not match');
            } else {
                clearError('confirmPassword');
            }
        });
        
        // Email validation on blur
        email.addEventListener('blur', (e) => {
            const emailValue = e.target.value.trim();
            if (emailValue && !isValidEmail(emailValue)) {
                showError('email', 'Please enter a valid email address');
            } else {
                clearError('email');
            }
        });
        
        // Clear errors on input
        username.addEventListener('input', () => clearError('username'));
        email.addEventListener('input', () => clearError('email'));
        
        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Clear all previous errors
            clearAllErrors();
            
            let isValid = true;
            
            // Validate username
            const usernameValue = username.value.trim();
            if (!usernameValue) {
                showError('username', 'Username is required');
                isValid = false;
            } else if (usernameValue.length < 3) {
                showError('username', 'Username must be at least 3 characters');
                isValid = false;
            } else if (!/^[a-zA-Z0-9_]+$/.test(usernameValue)) {
                showError('username', 'Username can only contain letters, numbers, and underscores');
                isValid = false;
            }
            
            // Validate email
            const emailValue = email.value.trim();
            if (!emailValue) {
                showError('email', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(emailValue)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate password
            const passwordValue = password.value;
            if (!passwordValue) {
                showError('password', 'Password is required');
                isValid = false;
            } else {
                const passwordCheck = checkPasswordStrength(passwordValue);
                if (!passwordCheck.isValid) {
                    showError('password', passwordCheck.errors[0]);
                    isValid = false;
                }
            }
            
            // Validate confirm password
            const confirmPasswordValue = confirmPassword.value;
            if (!confirmPasswordValue) {
                showError('confirmPassword', 'Please confirm your password');
                isValid = false;
            } else if (passwordValue !== confirmPasswordValue) {
                showError('confirmPassword', 'Passwords do not match');
                isValid = false;
            }
            
            // If all validations pass
            if (isValid) {
                // Show success message
                document.getElementById('successMessage').classList.add('show');
                
                // Log form data (in real app, send to server)
                console.log('Form submitted successfully!');
                console.log({
                    username: usernameValue,
                    email: emailValue,
                    password: '***hidden***'
                });
                
                // Reset form
                form.reset();
                requirements.classList.remove('show');
                strengthBar.className = 'strength-bar-fill';
                strengthText.textContent = '';
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    document.getElementById('successMessage').classList.remove('show');
                }, 3000);
            }
        });
        
        // Helper functions
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        function checkPasswordStrength(pwd) {
            const errors = [];
            
            if (pwd.length < 8) {
                errors.push('Password must be at least 8 characters');
            }
            if (!/[A-Z]/.test(pwd)) {
                errors.push('Password must contain at least one uppercase letter');
            }
            if (!/[a-z]/.test(pwd)) {
                errors.push('Password must contain at least one lowercase letter');
            }
            if (!/[0-9]/.test(pwd)) {
                errors.push('Password must contain at least one number');
            }
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
                errors.push('Password must contain at least one special character');
            }
            
            return {
                isValid: errors.length === 0,
                errors: errors
            };
        }
        
        function showError(fieldName, message) {
            const field = document.getElementById(fieldName);
            const errorDiv = document.getElementById(`${fieldName}Error`);
            
            field.classList.add('invalid');
            field.classList.remove('valid');
            errorDiv.textContent = message;
            errorDiv.classList.add('show');
        }
        
        function clearError(fieldName) {
            const field = document.getElementById(fieldName);
            const errorDiv = document.getElementById(`${fieldName}Error`);
            
            field.classList.remove('invalid');
            errorDiv.classList.remove('show');
            errorDiv.textContent = '';
        }
        
        function clearAllErrors() {
            const fields = ['username', 'email', 'password', 'confirmPassword'];
            fields.forEach(field => clearError(field));
        }
    </script>
</body>
</html>
```

### 2. Interactive Feedback Form with Error Highlights

Create a contact form with real-time validation and visual feedback.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f5f5f5;
            padding: 40px 20px;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        h1 {
            margin-bottom: 10px;
            color: #333;
        }
        
        .subtitle {
            color: #666;
            margin-bottom: 30px;
        }
        
        .form-group {
            margin-bottom: 25px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 500;
        }
        
        label .required {
            color: #e74c3c;
        }
        
        input, textarea, select {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            font-family: inherit;
            transition: all 0.3s;
        }
        
        textarea {
            resize: vertical;
            min-height: 120px;
        }
        
        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #3498db;
        }
        
        input.valid, textarea.valid, select.valid {
            border-color: #27ae60;
            background: #f0fff4;
        }
        
        input.invalid, textarea.invalid, select.invalid {
            border-color: #e74c3c;
            background: #fff5f5;
        }
        
        .error-message {
            color: #e74c3c;
            font-size: 13px;
            margin-top: 5px;
            display: none;
        }
        
        .error-message.show {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .error-message::before {
            content: '⚠';
        }
        
        .success-icon {
            color: #27ae60;
            margin-left: 10px;
            display: none;
        }
        
        .success-icon.show {
            display: inline;
        }
        
        .char-count {
            text-align: right;
            font-size: 13px;
            color: #999;
            margin-top: 5px;
        }
        
        .char-count.warning {
            color: #f39c12;
        }
        
        .char-count.danger {
            color: #e74c3c;
        }
        
        button {
            width: 100%;
            padding: 14px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        button:hover:not(:disabled) {
            background: #2980b9;
        }
        
        button:disabled {
            background: #bdc3c7;
            cursor: not-allowed;
        }
        
        .success-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        
        .success-modal.show {
            display: flex;
        }
        
        .modal-content {
            background: white;
            padding: 40px;
            border-radius: 10px;
            text-align: center;
            max-width: 400px;
            animation: slideIn 0.3s;
        }
        
        @keyframes slideIn {
            from {
                transform: translateY(-50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .success-checkmark {
            width: 80px;
            height: 80px;
            background: #27ae60;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            color: white;
            font-size: 50px;
        }
        
        .modal-content h2 {
            margin-bottom: 10px;
            color: #333;
        }
        
        .modal-content p {
            color: #666;
            margin-bottom: 20px;
        }
        
        .modal-close {
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 30px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Get in Touch</h1>
        <p class="subtitle">We'd love to hear from you. Send us a message!</p>
        
        <form id="contactForm">
            <div class="form-group">
                <label for="name">
                    Full Name <span class="required">*</span>
                </label>
                <input type="text" id="name" name="name" autocomplete="name">
                <span class="success-icon" id="nameSuccess">✓</span>
                <div class="error-message" id="nameError"></div>
            </div>
            
            <div class="form-group">
                <label for="email">
                    Email Address <span class="required">*</span>
                </label>
                <input type="email" id="email" name="email" autocomplete="email">
                <span class="success-icon" id="emailSuccess">✓</span>
                <div class="error-message" id="emailError"></div>
            </div>
            
            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890">
                <div class="error-message" id="phoneError"></div>
            </div>
            
            <div class="form-group">
                <label for="subject">
                    Subject <span class="required">*</span>
                </label>
                <select id="subject" name="subject">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
                <div class="error-message" id="subjectError"></div>
            </div>
            
            <div class="form-group">
                <label for="message">
                    Message <span class="required">*</span>
                </label>
                <textarea id="message" name="message" maxlength="500"></textarea>
                <div class="char-count" id="charCount">0 / 500 characters</div>
                <div class="error-message" id="messageError"></div>
            </div>
            
            <button type="submit" id="submitBtn">Send Message</button>
        </form>
    </div>
    
    <div class="success-modal" id="successModal">
        <div class="modal-content">
            <div class="success-checkmark">✓</div>
            <h2>Message Sent!</h2>
            <p>Thank you for contacting us. We'll get back to you soon.</p>
            <button class="modal-close" onclick="closeModal()">Close</button>
        </div>
    </div>
    
    <script>
        const form = document.getElementById('contactForm');
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const charCount = document.getElementById('charCount');
        const submitBtn = document.getElementById('submitBtn');
        
        // Character counter for message
        message.addEventListener('input', (e) => {
            const length = e.target.value.length;
            const max = 500;
            charCount.textContent = `${length} / ${max} characters`;
            
            charCount.classList.remove('warning', 'danger');
            if (length > max * 0.8) {
                charCount.classList.add('warning');
            }
            if (length >= max) {
                charCount.classList.add('danger');
            }
            
            clearError('message');
        });
        
        // Name validation
        name.addEventListener('blur', () => {
            const value = name.value.trim();
            if (!value) {
                showError('name', 'Name is required');
            } else if (value.length < 2) {
                showError('name', 'Name must be at least 2 characters');
            } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                showError('name', 'Name can only contain letters');
            } else {
                showSuccess('name');
            }
        });
        
        name.addEventListener('input', () => clearError('name'));
        
        // Email validation
        email.addEventListener('blur', () => {
            const value = email.value.trim();
            if (!value) {
                showError('email', 'Email is required');
            } else if (!isValidEmail(value)) {
                showError('email', 'Please enter a valid email address');
            } else {
                showSuccess('email');
            }
        });
        
        email.addEventListener('input', () => clearError('email'));
        
        // Phone validation (optional field)
        phone.addEventListener('blur', () => {
            const value = phone.value.trim();
            if (value && !isValidPhone(value)) {
                showError('phone', 'Please enter a valid phone number');
            } else {
                clearError('phone');
            }
        });
        
        phone.addEventListener('input', () => clearError('phone'));
        
        // Subject validation
        subject.addEventListener('change', () => {
            if (!subject.value) {
                showError('subject', 'Please select a subject');
            } else {
                showSuccess('subject');
            }
        });
        
        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Clear all errors
            clearAllErrors();
            
            let isValid = true;
            
            // Validate all fields
            if (!name.value.trim()) {
                showError('name', 'Name is required');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showError('name', 'Name must be at least 2 characters');
                isValid = false;
            }
            
            if (!email.value.trim()) {
                showError('email', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email.value.trim())) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (phone.value.trim() && !isValidPhone(phone.value.trim())) {
                showError('phone', 'Please enter a valid phone number');
                isValid = false;
            }
            
            if (!subject.value) {
                showError('subject', 'Please select a subject');
                isValid = false;
            }
            
            if (!message.value.trim()) {
                showError('message', 'Message is required');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showError('message', 'Message must be at least 10 characters');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                
                setTimeout(() => {
                    // Show success modal
                    document.getElementById('successModal').classList.add('show');
                    
                    // Log form data
                    console.log('Form Data:', {
                        name: name.value.trim(),
                        email: email.value.trim(),
                        phone: phone.value.trim(),
                        subject: subject.value,
                        message: message.value.trim()
                    });
                    
                    // Reset form
                    form.reset();
                    charCount.textContent = '0 / 500 characters';
                    charCount.classList.remove('warning', 'danger');
                    clearAllErrors();
                    
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }, 1000);
            }
        });
        
        // Helper functions
        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        
        function isValidPhone(phone) {
            // Accepts various formats: (123) 456-7890, 123-456-7890, 1234567890
            return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/.test(phone);
        }
        
        function showError(fieldName, message) {
            const field = document.getElementById(fieldName);
            const errorDiv = document.getElementById(`${fieldName}Error`);
            const successIcon = document.getElementById(`${fieldName}Success`);
            
            field.classList.add('invalid');
            field.classList.remove('valid');
            errorDiv.textContent = message;
            errorDiv.classList.add('show');
            
            if (successIcon) {
                successIcon.classList.remove('show');
            }
        }
        
        function showSuccess(fieldName) {
            const field = document.getElementById(fieldName);
            const errorDiv = document.getElementById(`${fieldName}Error`);
            const successIcon = document.getElementById(`${fieldName}Success`);
            
            field.classList.add('valid');
            field.classList.remove('invalid');
            errorDiv.classList.remove('show');
            
            if (successIcon) {
                successIcon.classList.add('show');
            }
        }
        
        function clearError(fieldName) {
            const field = document.getElementById(fieldName);
            const errorDiv = document.getElementById(`${fieldName}Error`);
            const successIcon = document.getElementById(`${fieldName}Success`);
            
            field.classList.remove('invalid', 'valid');
            errorDiv.classList.remove('show');
            
            if (successIcon) {
                successIcon.classList.remove('show');
            }
        }
        
        function clearAllErrors() {
            const fields = ['name', 'email', 'phone', 'subject', 'message'];
            fields.forEach(field => clearError(field));
        }
        
        function closeModal() {
            document.getElementById('successModal').classList.remove('show');
        }
    </script>
</body>
</html>
```

---

## Additional Resources

### Documentation
- [MDN Web Docs - HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [MDN Web Docs - FormData API](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

### Regular Expression Resources
- [Regex101](https://regex101.com/) - Test and debug regex patterns
- [RegExr](https://regexr.com/) - Learn, build, and test regex
- [MDN Regular Expressions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### Common Regex Patterns

```javascript
// Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone (US)
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

// URL
const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

// Password (strong)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Username (alphanumeric + underscore)
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;

// ZIP Code (US)
const zipRegex = /^\d{5}(-\d{4})?$/;

// Credit Card
const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/;

// Hex Color
const hexColorRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

// Date (YYYY-MM-DD)
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// Time (HH:MM)
const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
```

---

## Summary

### Key Takeaways

**Reading Form Values:**
- Use `.value` for input, textarea, select
- Use `.checked` for checkboxes and radio buttons
- Use `FormData` API for easy form data collection
- Always `.trim()` text inputs to remove whitespace

**Preventing Default:**
- Always use `e.preventDefault()` on form submit to stop page reload
- Listen to `submit` event on the form, not `click` on the button
- This allows Enter key submission to work properly

**Validation:**
- Use HTML5 attributes for basic validation (required, pattern, minlength)
- Add JavaScript validation for complex rules and better UX
- Validate on multiple events: `input` (real-time), `blur` (after field), `submit` (final)
- Always validate on both client and server side

**Error Messages:**
- Show errors inline below the field
- Use clear, specific language (not technical jargon)
- Display errors conditionally based on user interaction
- Clear errors when user starts correcting the input

**Pattern vs Custom Regex:**
- Use `pattern` attribute for simple validation without JavaScript
- Use custom regex in JavaScript for complex validation and detailed feedback
- Combine both approaches for best UX

**Common Confusions:**
- `.value` vs `.textContent`: Use `.value` for form elements
- Form `submit` vs button `click`: Always use form `submit`
- `input` vs `change` vs `blur`: Choose based on when you want to validate

**Best Practices:**
- Sanitize all user input before using it
- Validate deeply, not just "is it empty?"
- Provide clear, helpful error messages
- Use accessibility features (labels, ARIA attributes)
- Never rely solely on client-side validation

---

## Quick Reference

### Validation Event Timeline

```
User starts typing
    ↓
'focus' event (field gets focus)
    ↓
'input' event (every keystroke) → Real-time validation
    ↓
'change' event (value changes + blur)
    ↓
'blur' event (field loses focus) → Field-level validation
    ↓
User clicks submit
    ↓
'submit' event (form submitted) → Final validation
```

### Common Validation Checklist

```javascript
// ✓ Is it required and not empty?
// ✓ Is it the right length (min/max)?
// ✓ Does it match the expected format (email, phone, etc.)?
// ✓ Is it within allowed range (numbers)?
// ✓ Does it match other fields (password confirmation)?
// ✓ Is it safe (no malicious code)?
```

---

## Practice Exercises

Try building these forms to practice:

1. **Login Form** - Email and password with validation
2. **Registration Form** - Username, email, password, confirm password
3. **Contact Form** - Name, email, subject, message with character counter
4. **Checkout Form** - Name, address, card number with real-time formatting
5. **Survey Form** - Multiple input types (text, radio, checkbox, select)
6. **Search Form** - Search input with suggestions and validation
7. **Password Reset Form** - Email with format validation
8. **Profile Update Form** - Multiple fields with image upload preview

Each project will help you master different aspects of form handling and validation!
