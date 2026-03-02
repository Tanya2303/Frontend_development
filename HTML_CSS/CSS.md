# 📘 Complete CSS Notes
<details>
<summary><h2>🎯1. CSS Selectors</h2></summary>

Selectors are used to **target specific HTML elements** so you can apply styles to them.

- **Universal Selector (`*`)** — Targets **every** element on the page.
```css
* {
  margin: 0;
  padding: 0;
}
```

- **Element Selector (`div`, `p`, `h1`)** — Targets all elements of a specific type.
```css
h1 {
  color: red;
}
```

- **Class Selector (`.class`)** — Targets elements that have a specific `class` attribute. A class can be reused on multiple elements.
```css
.box {
  background-color: yellow;
}
```

- **ID Selector (`#id`)** — Targets a single unique element with a specific `id`. Each `id` should be used only once per page.
```css
#header {
  text-align: center;
}
```

- **Attribute Selector (`[type="text"]`)** — Targets elements based on the value of their HTML attribute.
```css
input[type="text"] {
  border: 1px solid black;
}
```

- **Pseudo-classes (`:hover`, `:focus`, `:nth-child`)** — Apply styles based on the **state** of an element or its position.
```css
a:hover {
  color: green;
}
```

- **Pseudo-elements (`::before`, `::after`)** — Style **specific parts** of an element, like inserting content before or after it.
```css
p::first-letter {
  font-size: 2rem;
}
```

### Selector Precedence (Specificity & Importance)

When multiple CSS rules target the same element, the browser uses **specificity** to decide which rule wins:

- **Inline styles** have the **highest** specificity.
- **ID selectors** (`#id`) beat class selectors (`.class`).
- **Class selectors** (`.class`) beat element selectors (`div`, `p`).
- The **`!important`** rule overrides all other declarations — use it sparingly.

**Specificity Order (Highest → Lowest):**
```
Inline styles  >  ID selectors  >  Class selectors  >  Element selectors
```

</details>

---

<details>
<summary><h2>🔗2. Adding CSS to HTML</h2></summary>

There are **three ways** to apply CSS to an HTML document:

1. **Inline CSS** — Written directly inside an HTML tag using the `style` attribute. Highest specificity but hardest to maintain.
```html
<p style="color: red;">This is red text.</p>
```

2. **Internal CSS** — Written inside a `<style>` tag placed in the `<head>` section of the HTML file.
```html
<style>
  p {
    color: blue;
  }
</style>
```

3. **External CSS** — Written in a separate `.css` file and linked to the HTML using the `<link>` tag. This is the **recommended** approach for larger projects.
```css
/* styles.css */
p {
  color: green;
}
```
```html
<link rel="stylesheet" href="styles.css">
```

</details>

---

<details>
<summary><h2>🎨3. Colors & Units in CSS</h2></summary>

### Color Representations

CSS supports several formats for defining colors:

| Format | Example | Description |
|--------|---------|-------------|
| Named | `red`, `blue` | Human-readable color names |
| RGB | `rgb(255, 0, 0)` | Red, Green, Blue values (0–255) |
| Hex | `#ff0000` | Hexadecimal color code |
| HSL | `hsl(0, 100%, 50%)` | Hue, Saturation, Lightness |
| RGBA | `rgba(255, 0, 0, 0.5)` | RGB + Alpha (transparency, 0–1) |

### CSS Units

| Type | Units | Description |
|------|-------|-------------|
| Absolute | `px`, `cm`, `mm` | Fixed size, not affected by parent |
| Relative | `%`, `rem`, `em` | Relative to parent or root element |
| Viewport | `vw`, `vh` | Percentage of the browser window size |

### Px vs %

Two of the most common CSS units — each serves a different purpose:

| Unit | Type | Best Used For |
|------|------|---------------|
| `px` | Absolute | Fixed, precise sizing (e.g. borders, icons) |
| `%` | Relative | Responsive layouts relative to parent |

```css
div {
  width: 50%;    /* 50% of the parent element's width */
  height: 200px; /* Fixed height */
}
```

</details>

---

<details>
<summary><h2>✍️4. Text Styling Properties</h2></summary>

### Font Properties

- `font-family` — Sets the typeface/font used for text.
```css
p {
  font-family: Arial, sans-serif;
}
```

- `font-style` — Sets the style of the font (normal, italic, oblique).
```css
p {
  font-style: italic;
}
```

- `font-weight` — Controls how bold the text appears (normal, bold, or values 100–900).
```css
p {
  font-weight: bold;
}
```

- `line-height` — Adjusts the vertical spacing between lines of text.
```css
p {
  line-height: 1.5;
}
```

- `letter-spacing` — Controls the horizontal space between individual characters.
```css
p {
  letter-spacing: 2px;
}
```

### Text Properties

- `text-align` — Aligns text horizontally within its container (left, center, right, justify).
```css
p {
  text-align: center;
}
```

- `text-transform` — Changes the capitalization of text.
```css
p {
  text-transform: uppercase;
}
```

- `text-decoration` — Adds decorative lines to text (underline, overline, line-through).
```css
p {
  text-decoration: underline;
}
```

- `text-shadow` — Adds a shadow effect behind text.
```css
h1 {
  text-shadow: 2px 2px 5px gray;
}
```

</details>

---

<details>
<summary><h2>📦 5. Box Model & Layout</h2></summary>

Every HTML element is treated as a rectangular **box** with four layers:

- `margin` — Space **outside** the element's border (pushes other elements away).
```css
div {
  margin: 10px;
}
```

- `padding` — Space **inside** the element, between the content and the border.
```css
div {
  padding: 10px;
}
```

- `box-sizing` — Defines how the total width/height of an element is calculated.
  - `border-box` (recommended) — Includes padding and border in the element's total width/height.
```css
div {
  box-sizing: border-box;
}
```

### Borders

- `border-width` — Sets the thickness of the border.
- `border-style` — Defines the border line type: `solid`, `dashed`, `dotted`, etc.
- `border-color` — Sets the border color.
- `border-radius` — Rounds the corners of the element.

```css
div {
  border: 2px solid black;
  border-radius: 10px;
}
```

</details>

---

<details>
<summary><h2>🖼️6. Background & Shadows</h2></summary>

### Background Properties

- `background-color` — Sets a solid background color.
- `background-image` — Sets an image as the background.
- `background-size` — Defines how the image is sized:
  - `cover` → Scales the image to cover the entire element. May crop edges. Maintains aspect ratio.
  - `contain` → Scales image to fit inside the element without cropping. Maintains aspect ratio.
  - `50% 50%` → Manually resizes the image to half the element's dimensions.
- `background-position` — Positions the background image:
  - `center` → Centers the image.
  - `top left` → Places image at the top-left corner.
  - `50% 50%` → Places image in the middle using percentage values.
- `background-repeat` — Controls if/how the image repeats:
  - `repeat` *(default)* → Repeats both horizontally and vertically.
  - `no-repeat` → Image appears only once.
  - `repeat-x` → Repeats only horizontally.
  - `repeat-y` → Repeats only vertically.

```css
body {
  background: url('image.jpg') no-repeat center/cover;
}
```

```css
div {
  background-image: url('pattern.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
```

### Gradients

- `linear-gradient` — Creates a **smooth color transition in a straight line** — no image needed.
```css
div {
  background: linear-gradient(to right, red, blue);
}
```

- `radial-gradient` — Creates a **circular gradient** that radiates outward from a central point.
```css
div {
  background: radial-gradient(circle, red, blue);
}
```

### Shadow Effects

- `box-shadow` — Adds a shadow around an HTML element/box.
```css
div {
  box-shadow: 5px 5px 10px gray;
}
```

- `text-shadow` — Adds a shadow effect to text.
```css
h1 {
  text-shadow: 2px 2px 5px gray;
}
```

</details>

---

<details>
<summary><h2>📍7. CSS Positioning</h2></summary>

CSS `position` properties define **how an element is placed** within the page or its container.

### Position: Relative

- Keeps the element in the **normal document flow**.
- Moves the element **relative to its original position** — other elements still respect its original space.

```css
div {
  position: relative;
  top: 20px;
  left: 30px;
}
```

### Position: Absolute

- Removes the element from the **normal document flow**.
- Positioned relative to the **nearest ancestor** that has a `position` value set (not `static`).
- If no such ancestor exists, it positions relative to the **viewport**.

```css
div {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

### Transform: Translate

- Moves an element **visually** without affecting the document flow or surrounding elements.
- Great for centering or nudging elements.

```css
div {
  transform: translate(50px, 100px);
}
```

</details>

---

<details>
<summary><h2>💪8. Flexbox</h2></summary>

**Flexbox** is a powerful one-dimensional layout system in CSS. It makes aligning and distributing elements along a row or column far easier than using floats or positioning.

### 1. display: flex

Enables flexbox on a container. All direct children become **flex items**.

```css
.container {
  display: flex;
}
```

### 2. flex-direction

Specifies the **main axis direction** — how flex items are laid out.

- `row` *(default)* → Items placed **horizontally** (left to right).
- `column` → Items placed **vertically** (top to bottom).

```css
.container {
  display: flex;
  flex-direction: column;
}
```

### 3. flex-wrap

Controls whether flex items **wrap** onto the next line when they overflow.

- `nowrap` *(default)* → All items stay on one line.
- `wrap` → Items wrap to the next line when needed.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

### 4. flex-shrink

Determines how much a flex item **shrinks** relative to others when space is tight.

```css
.item {
  flex-shrink: 2; /* Shrinks twice as fast as other items */
}
```

### 5. justify-content

Aligns flex items **along the main axis** (horizontal by default).

| Value | Behavior |
|-------|----------|
| `flex-start` | Items start from the beginning |
| `center` | Items are centered |
| `flex-end` | Items align at the end |
| `space-between` | Equal space **between** items |
| `space-around` | Equal space **around** each item |

```css
.container {
  display: flex;
  justify-content: center;
}
```

### 6. align-items

Aligns flex items **along the cross-axis** (vertical by default).

| Value | Behavior |
|-------|----------|
| `flex-start` | Items align at the top |
| `center` | Items align in the middle |
| `flex-end` | Items align at the bottom |

```css
.container {
  display: flex;
  align-items: center;
}
```

</details>

---

<details>
<summary><h2>🔮8. Pseudo-Classes & Pseudo-Elements</h2></summary>

### What are Pseudo-Classes?

- Pseudo-classes let you apply styles based on the **state** of an element or user interaction.
- They always start with a **single colon** (`:`).
- Common pseudo-classes: `:hover`, `:focus`, `:active`, `:nth-child`, `:visited`.

```css
/* Change color when a button is hovered */
button:hover {
  background-color: blue;
  color: white;
}

/* Style input when it is focused (clicked into) */
input:focus {
  border: 2px solid red;
}

/* Change link color when actively clicked */
a:active {
  color: green;
}
```

### What are Pseudo-Elements?

- Pseudo-elements let you style **specific parts** of an element, or **insert content** before/after it.
- They start with a **double colon** (`::`).
- Common pseudo-elements: `::before`, `::after`, `::first-letter`, `::first-line`.

```css
/* Add content before an h1 element */
h1::before {
  content: "🔥 ";
  color: orange;
}

/* Add content after an h1 element */
h1::after {
  content: " 🎉";
}
```

</details>

---

<details>
<summary><h2>🎬10. CSS Transitions</h2></summary>

### What are Transitions?

- CSS transitions allow **property changes to happen smoothly** over a set duration, instead of changing instantly.
- They are triggered by state changes — most commonly `:hover`.

```css
/* Smooth background color transition on hover */
.button {
  background: red;
  transition: background 0.5s ease-in-out;
}

.button:hover {
  background: green;
}
```

### Transition Properties

| Property | Description |
|----------|-------------|
| `transition-property` | Which CSS property to animate (e.g., `color`, `background`, `all`) |
| `transition-duration` | How long the transition lasts (e.g., `0.5s`, `1s`) |
| `transition-timing-function` | The speed curve (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`) |
| `transition-delay` | How long to wait before starting the transition (e.g., `0.2s`) |

**Shorthand:**
```css
/* property | duration | timing-function | delay */
.element {
  transition: all 0.3s ease-in-out 0s;
}
```

</details>

---

<details>
<summary><h2>🔄11. CSS Transformations (2D)</h2></summary>

The `transform` property lets you **visually modify an element** by moving, rotating, scaling, or skewing it — without affecting the layout of surrounding elements.

### Transform Functions

| Function | Description |
|----------|-------------|
| `translate(x, y)` | Moves the element horizontally and/or vertically |
| `rotate(deg)` | Rotates the element by a given degree |
| `scale(x, y)` | Enlarges or shrinks the element |
| `skew(x, y)` | Skews the element along the X and/or Y axis |

```css
/* Move element 50px right and 20px down */
.box {
  transform: translate(50px, 20px);
}

/* Rotate element by 45 degrees on hover */
.box:hover {
  transform: rotate(45deg);
}

/* Scale element to 1.5x its size when active */
.box:active {
  transform: scale(1.5);
}
```

</details>

---

<details>
<summary><h2>🌐12. CSS Transformations (3D)</h2></summary>

3D transformations add **depth and perspective** to elements, making interfaces feel more dynamic and immersive.

### 3D Transform Functions

| Function | Description |
|----------|-------------|
| `translate3d(x, y, z)` | Moves the element in 3D space |
| `scale3d(x, y, z)` | Scales the element in 3D |
| `rotate3d(x, y, z, angle)` | Rotates the element around a 3D axis |
| `perspective(value)` | Defines the depth effect (applied to parent) |

```css
/* Rotate an element in 3D space */
.cube {
  transform: rotate3d(1, 1, 1, 45deg);
}

/* Move an element in 3D space when hovered */
.cube:hover {
  transform: translate3d(50px, 20px, 30px);
}

/* Apply perspective to a scene for depth effect */
.scene {
  perspective: 500px;
}
```

> 💡 **Tip:** `perspective` is usually applied to the **parent container**, not the element being transformed. The smaller the value, the more dramatic the depth effect.

</details>

---

<details>
<summary><h2>✨13. CSS Animations</h2></summary>

### What are Animations?

- CSS animations allow elements to **change their styles over time automatically** — no JavaScript needed, no user interaction required.
- Animations are defined using `@keyframes` and then applied to elements.

### Animation Properties

| Property | Description |
|----------|-------------|
| `@keyframes` | Defines the stages/steps of the animation |
| `animation-name` | Names the animation (links it to `@keyframes`) |
| `animation-duration` | How long one cycle of the animation lasts |
| `animation-timing-function` | Speed curve (`ease`, `linear`, `ease-in-out`, etc.) |
| `animation-iteration-count` | How many times it runs (`infinite`, `1`, `2`, etc.) |

```css
/* Step 1: Define the animation keyframes */
@keyframes slide {
  0%   { transform: translateX(0); }
  50%  { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

/* Step 2: Apply the animation to an element */
.box {
  animation: slide 2s infinite ease-in-out;
}
```

**Shorthand:**
```css
/* name | duration | timing-function | iteration-count */
.element {
  animation: slide 2s ease-in-out infinite;
}
```

> 💡 **Transitions vs Animations:**
> - **Transitions** require a trigger (like `:hover`) and animate between two states.
> - **Animations** run automatically and can have multiple keyframe stages.

</details>

---

<details>
<summary><h2>🛠️14. Project Exercises</h2></summary>

### Project Exercise 3: Styling The Page

**Task:** Style a blog page using CSS.

**What you'll do:**
- Add background colors to different sections.
- Set text colors and choose appropriate fonts.
- Adjust text sizes, line heights, and font styles for readability.
- Apply padding and margins for proper spacing.
- Use CSS selectors and the box model to structure the layout.

**Skills Practiced:**
- CSS selectors
- Text formatting (fonts, sizes, colors)
- Padding and margins
- Box model for layout control

---

### Project Exercise 4: Two-Column Layout with Flexbox

**Task:** Build a two-column web layout using Flexbox.

**What you'll do:**
- Create basic HTML with `header`, `nav`, `sidebar`, `main`, and `footer`.
- Use `display: flex` to create the two-column structure.
- Experiment with `flex-direction`, `justify-content`, and `align-items`.
- Use `flex-grow: 1` on the main content area so it expands.
- Use browser **Inspect Element** to experiment with live CSS changes.

**Tips:**
- Start with layout basics before worrying about detailed styling.
- Change one CSS rule at a time and observe the effect in the browser.
- Don't skip Inspect Element — it's the fastest way to learn.

---

### Project Exercise 5: Style Your Form!

**Task:** Make an HTML form look great using CSS with interactive effects.

**What you'll practice:**

| Feature | Hint |
|---------|------|
| **Pseudo-classes** | Change how inputs/buttons look on `:hover`, `:focus`, `:active` |
| **CSS Transitions** | Use `transition` to make all style changes smooth, not instant |
| **2D Transforms** | Make the submit button scale up slightly on hover using `transform: scale()` |
| **3D Transforms** *(Challenge)* | Use `perspective` and `rotateX` to make the form tilt in 3D |
| **CSS Animations** *(Challenge)* | Use `@keyframes` to create a pulsing or glowing button effect |

**Example — Interactive Button:**
```css
.button {
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.button:active {
  transform: scale(0.98);
}
```

</details>
