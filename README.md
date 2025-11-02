# JavaScript Events and Event Handling

A comprehensive guide to understanding and working with events in JavaScript.

## Table of Contents
- [Event Binding](#event-binding)
- [Common Events](#common-events)
- [Event Object](#event-object)
- [Event Bubbling and Capturing](#event-bubbling-and-capturing)
- [Event Delegation](#event-delegation)
- [Common Confusions](#common-confusions)
- [Best Practices](#best-practices)
- [Practice Projects](#practice-projects)

---

## Event Binding

Event binding is the process of attaching event listeners to DOM elements so they can respond to user interactions.

### addEventListener()

The modern and recommended way to bind events.

```javascript
const button = document.querySelector('#myButton');

// Syntax: element.addEventListener(event, handler, options)
button.addEventListener('click', function() {
    console.log('Button clicked!');
});
```

**Advantages:**
- Can attach multiple listeners to the same event
- Easy to remove with `removeEventListener()`
- Supports event capturing and bubbling control

### removeEventListener()

Removes an event listener that was previously attached.

```javascript
function handleClick() {
    console.log('Clicked!');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener (must use the same function reference)
button.removeEventListener('click', handleClick);
```

⚠️ **Important:** To remove an event listener, you must pass the exact same function reference that was used when adding it.

### Other Methods (Less Common)

```javascript
// Inline HTML (not recommended)
<button onclick="handleClick()">Click me</button>

// DOM property (can only have one handler per event)
button.onclick = function() {
    console.log('Clicked!');
};
```

---

## Common Events

JavaScript provides many built-in events for different types of user interactions.

### Mouse Events

```javascript
const element = document.querySelector('#myElement');

// Click event
element.addEventListener('click', (e) => {
    console.log('Element clicked!');
});

// Double click
element.addEventListener('dblclick', (e) => {
    console.log('Element double-clicked!');
});

// Mouse enter (doesn't bubble)
element.addEventListener('mouseenter', (e) => {
    console.log('Mouse entered element');
});

// Mouse leave (doesn't bubble)
element.addEventListener('mouseleave', (e) => {
    console.log('Mouse left element');
});

// Mouse over (bubbles)
element.addEventListener('mouseover', (e) => {
    console.log('Mouse over element');
});

// Mouse move
element.addEventListener('mousemove', (e) => {
    console.log(`Mouse position: ${e.clientX}, ${e.clientY}`);
});
```

### Keyboard Events

```javascript
const input = document.querySelector('#myInput');

// Key down (fires when key is pressed)
input.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Key up (fires when key is released)
input.addEventListener('keyup', (e) => {
    console.log(`Key released: ${e.key}`);
});

// Key press (deprecated, use keydown instead)
input.addEventListener('keypress', (e) => {
    console.log(`Character: ${e.key}`);
});
```

### Form Events

```javascript
const form = document.querySelector('#myForm');
const input = document.querySelector('#myInput');

// Input event (fires on every change)
input.addEventListener('input', (e) => {
    console.log(`Current value: ${e.target.value}`);
});

// Change event (fires when element loses focus after value changed)
input.addEventListener('change', (e) => {
    console.log(`Changed to: ${e.target.value}`);
});

// Submit event
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted!');
});

// Focus event
input.addEventListener('focus', (e) => {
    console.log('Input focused');
});

// Blur event (when element loses focus)
input.addEventListener('blur', (e) => {
    console.log('Input lost focus');
});
```

---

## Event Object

When an event occurs, the browser creates an event object with information about the event.

### Common Properties

```javascript
element.addEventListener('click', (event) => {
    // The element that triggered the event
    console.log('Target:', event.target);
    
    // The type of event
    console.log('Type:', event.type);
    
    // The element the listener is attached to
    console.log('Current Target:', event.currentTarget);
    
    // Timestamp when event occurred
    console.log('Timestamp:', event.timeStamp);
});
```

### Mouse Event Properties

```javascript
element.addEventListener('click', (e) => {
    // Mouse position relative to viewport
    console.log(`Client X: ${e.clientX}, Client Y: ${e.clientY}`);
    
    // Mouse position relative to page (includes scroll)
    console.log(`Page X: ${e.pageX}, Page Y: ${e.pageY}`);
    
    // Mouse position relative to element
    console.log(`Offset X: ${e.offsetX}, Offset Y: ${e.offsetY}`);
    
    // Which mouse button was clicked (0: left, 1: middle, 2: right)
    console.log('Button:', e.button);
    
    // Modifier keys
    console.log('Shift key:', e.shiftKey);
    console.log('Ctrl key:', e.ctrlKey);
    console.log('Alt key:', e.altKey);
});
```

### Keyboard Event Properties

```javascript
input.addEventListener('keydown', (e) => {
    // The key value
    console.log('Key:', e.key);
    
    // The key code (deprecated but still used)
    console.log('Key Code:', e.keyCode);
    
    // The physical key code
    console.log('Code:', e.code);
    
    // Modifier keys
    console.log('Shift:', e.shiftKey);
    console.log('Ctrl:', e.ctrlKey);
    console.log('Alt:', e.altKey);
});
```

### preventDefault()

Prevents the default action of an event.

```javascript
// Prevent link from navigating
link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Link click prevented!');
});

// Prevent form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submission prevented!');
});

// Prevent context menu
element.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log('Right-click menu prevented!');
});
```

---

## Event Bubbling and Capturing

Events in JavaScript propagate through the DOM in three phases:

1. **Capturing Phase**: Event travels from window down to target element
2. **Target Phase**: Event reaches the target element
3. **Bubbling Phase**: Event bubbles up from target to window

### Event Bubbling (Default)

Events bubble up from the target element through its ancestors.

```javascript
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

parent.addEventListener('click', () => {
    console.log('Parent clicked!');
});

child.addEventListener('click', () => {
    console.log('Child clicked!');
});

// Clicking child logs:
// "Child clicked!"
// "Parent clicked!"
```

### Event Capturing

You can listen during the capturing phase by setting the third parameter to `true`.

```javascript
parent.addEventListener('click', () => {
    console.log('Parent clicked (capturing)');
}, true); // Enable capturing

child.addEventListener('click', () => {
    console.log('Child clicked');
});

// Clicking child logs:
// "Parent clicked (capturing)"
// "Child clicked"
```

### stopPropagation()

Stops the event from bubbling or capturing further.

```javascript
child.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Child clicked - propagation stopped!');
});

parent.addEventListener('click', () => {
    console.log('This will NOT run when child is clicked');
});
```

### stopImmediatePropagation()

Stops propagation and prevents other listeners on the same element from executing.

```javascript
element.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    console.log('First listener');
});

element.addEventListener('click', () => {
    console.log('This will NOT run');
});
```

---

## Event Delegation

Event delegation is a pattern where you attach a single event listener to a parent element instead of multiple listeners to child elements. This leverages event bubbling.

### Without Delegation (Inefficient)

```javascript
// Bad: Adding listener to each item
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('Item clicked:', e.target.textContent);
    });
});
```

### With Delegation (Efficient)

```javascript
// Good: Single listener on parent
const list = document.querySelector('#list');

list.addEventListener('click', (e) => {
    // Check if clicked element is an item
    if (e.target.classList.contains('item')) {
        console.log('Item clicked:', e.target.textContent);
    }
});
```

### Benefits of Event Delegation

1. **Better Performance**: Fewer event listeners in memory
2. **Dynamic Elements**: Works with elements added after page load
3. **Less Memory**: Single listener instead of many
4. **Simpler Code**: Centralized event handling logic

### Real-World Example: Todo List

```javascript
const todoList = document.querySelector('#todoList');

// Single delegated listener
todoList.addEventListener('click', (e) => {
    // Delete button clicked
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('.todo-item').remove();
    }
    
    // Checkbox clicked
    if (e.target.classList.contains('todo-checkbox')) {
        e.target.closest('.todo-item').classList.toggle('completed');
    }
    
    // Edit button clicked
    if (e.target.classList.contains('edit-btn')) {
        const todoItem = e.target.closest('.todo-item');
        const text = todoItem.querySelector('.todo-text');
        text.contentEditable = true;
        text.focus();
    }
});
```

---

## Common Confusions

### event.target vs event.currentTarget

```javascript
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

parent.addEventListener('click', (e) => {
    // target: The element that triggered the event (what you clicked)
    console.log('Target:', e.target); // Could be child
    
    // currentTarget: The element the listener is attached to
    console.log('Current Target:', e.currentTarget); // Always parent
});
```

**Simple Rule:**
- `event.target` = What you clicked
- `event.currentTarget` = Where the listener is attached

### Example Demonstrating the Difference

```javascript
<div id="parent" style="padding: 20px; background: blue;">
    <button id="child">Click Me</button>
</div>

<script>
const parent = document.querySelector('#parent');

parent.addEventListener('click', (e) => {
    console.log('Target:', e.target.id); 
    // If you click button: "child"
    // If you click blue area: "parent"
    
    console.log('Current Target:', e.currentTarget.id); 
    // Always: "parent"
});
</script>
```

### Capturing Phase vs Bubbling Phase

```javascript
const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');

// Bubbling (default) - runs after target phase
outer.addEventListener('click', () => {
    console.log('Outer - Bubbling');
});

// Capturing - runs before target phase
outer.addEventListener('click', () => {
    console.log('Outer - Capturing');
}, true);

inner.addEventListener('click', () => {
    console.log('Inner - Target');
});

// Clicking inner logs:
// "Outer - Capturing"
// "Inner - Target"
// "Outer - Bubbling"
```

**When to Use Each:**
- **Bubbling (default)**: 99% of the time, use this
- **Capturing**: Rarely needed, useful for intercepting events before they reach the target

---

## Best Practices

### ✅ DO: Use Event Delegation

```javascript
// Good: One listener for all items
document.querySelector('#list').addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        handleItemClick(e.target);
    }
});
```

### ❌ DON'T: Bind Events Everywhere

```javascript
// Bad: Multiple listeners
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', handleItemClick);
});
```

### ✅ DO: Remove Listeners When Not Needed

```javascript
function cleanup() {
    element.removeEventListener('click', handleClick);
}
```

### ❌ DON'T: Use Inline Event Handlers

```javascript
// Bad
<button onclick="handleClick()">Click</button>

// Good
<button id="myButton">Click</button>
<script>
document.querySelector('#myButton').addEventListener('click', handleClick);
</script>
```

### ✅ DO: Use Named Functions for Easy Removal

```javascript
// Good
function handleClick(e) {
    console.log('Clicked!');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick); // Easy to remove
```

### ❌ DON'T: Use Anonymous Functions if You Need to Remove Them

```javascript
// Bad: Can't remove this listener
button.addEventListener('click', function() {
    console.log('Clicked!');
});
```

### ✅ DO: Prevent Default When Needed

```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission
});
```

### ✅ DO: Use Passive Listeners for Scroll Performance

```javascript
// Improves scroll performance
document.addEventListener('scroll', handleScroll, { passive: true });
```

---

## Practice Projects

### 1. Live Character Counter

A text input that shows remaining characters in real-time.

```javascript
const textarea = document.querySelector('#message');
const counter = document.querySelector('#counter');
const maxLength = 280;

textarea.addEventListener('input', (e) => {
    const remaining = maxLength - e.target.value.length;
    counter.textContent = `${remaining} characters remaining`;
    
    if (remaining < 0) {
        counter.style.color = 'red';
    } else if (remaining < 20) {
        counter.style.color = 'orange';
    } else {
        counter.style.color = 'green';
    }
});
```

### 2. Delegated Event Handler on Todo List

A todo list using event delegation for all interactions.

```javascript
const todoList = document.querySelector('#todoList');
const addButton = document.querySelector('#addTodo');
const input = document.querySelector('#todoInput');

// Add new todo
addButton.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox">
            <span class="todo-text">${text}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);
        input.value = '';
    }
});

// Delegated event handler
todoList.addEventListener('click', (e) => {
    const item = e.target.closest('.todo-item');
    if (!item) return;
    
    // Handle checkbox
    if (e.target.classList.contains('todo-checkbox')) {
        item.classList.toggle('completed');
    }
    
    // Handle delete
    if (e.target.classList.contains('delete-btn')) {
        item.remove();
    }
});

// Handle Enter key
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addButton.click();
    }
});
```

### 3. Interactive Dropdown Menu

```javascript
const dropdown = document.querySelector('.dropdown');
const toggle = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');

// Toggle dropdown
toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Don't close immediately
    menu.classList.toggle('active');
});

// Close when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Handle menu items with delegation
menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('dropdown-item')) {
        console.log('Selected:', e.target.textContent);
        menu.classList.remove('active');
    }
});
```

### 4. Keyboard Navigation

```javascript
const items = document.querySelectorAll('.nav-item');
let currentIndex = 0;

document.addEventListener('keydown', (e) => {
    // Remove focus from current item
    items[currentIndex].classList.remove('focused');
    
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % items.length;
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    } else if (e.key === 'Enter') {
        items[currentIndex].click();
    }
    
    // Add focus to new item
    items[currentIndex].classList.add('focused');
    items[currentIndex].scrollIntoView({ block: 'nearest' });
});
```

---

## Additional Resources

- [MDN Web Docs - Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN Web Docs - Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info - Event Delegation](https://javascript.info/event-delegation)

---

## Summary

**Key Takeaways:**
- Use `addEventListener()` for binding events (not inline handlers)
- Understand the event object and its properties (`target`, `currentTarget`, `preventDefault`)
- Events bubble up by default (child → parent → document)
- Use event delegation for better performance and dynamic content
- Know the difference between `target` (what was clicked) and `currentTarget` (where listener is)
- Remove event listeners when they're no longer needed
- Practice with real projects to solidify understanding

Happy coding! 🚀