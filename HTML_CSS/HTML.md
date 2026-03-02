# 📘 Complete HTML Notes for Frontend Development

> **How to use:** Each section below uses `<details>` + `<summary>` toggles — click any heading to expand/collapse. Works in GitHub, Notion (paste as markdown), Obsidian, and most modern markdown renderers.

---

<details>
<summary><h2>🔰 1. HTML Basics & Document Structure</h2></summary>

### What is HTML?
HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It uses **elements** (tags) to define the structure and meaning of web content.

### Basic HTML Document Template
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Page description here" />
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Your content goes here -->
    <script src="script.js"></script>
  </body>
</html>
```

### Key Concepts
| Term | Description |
|------|-------------|
| `<!DOCTYPE html>` | Declares the document as HTML5 |
| `<html lang="en">` | Root element; `lang` helps screen readers & SEO |
| `<head>` | Metadata container (not visible on page) |
| `<body>` | All visible content goes here |
| `<meta charset="UTF-8">` | Supports all characters/emoji |
| `viewport meta` | Makes page responsive on mobile |

### HTML Element Anatomy
```
<tagname attribute="value"> Content </tagname>
   ↑          ↑                  ↑
Opening tag  Attribute         Closing tag

<!-- Self-closing (void elements) -->
<img src="photo.jpg" alt="A photo" />
<br />
<hr />
<input type="text" />
```

### HTML Comments
```html
<!-- This is a single-line comment -->

<!--
  This is a
  multi-line comment
-->
```

</details>

---

<details>
<summary><h2>📝 2. Text & Heading Elements</h2></summary>

### Headings (`h1` – `h6`)
```html
<h1>Main Heading (Most Important)</h1>
<h2>Section Heading</h2>
<h3>Sub-section</h3>
<h4>Sub-sub-section</h4>
<h5>Minor Heading</h5>
<h6>Least Important Heading</h6>
```
> 💡 **Best Practice:** Use only **one `<h1>` per page** for SEO. Don't skip heading levels.

### Paragraphs & Line Breaks
```html
<p>This is a paragraph of text.</p>
<p>Another paragraph. HTML ignores extra   spaces   and
line breaks in source code.</p>

<!-- Force a line break inside a paragraph -->
<p>First line.<br />Second line.</p>

<!-- Horizontal rule / divider -->
<hr />
```

### Text Formatting Tags
```html
<strong>Bold / Important text</strong>
<b>Bold (no semantic importance)</b>

<em>Italic / Emphasized text</em>
<i>Italic (no semantic importance)</i>

<u>Underlined text</u>
<s>Strikethrough text</s>
<del>Deleted text</del>
<ins>Inserted text</ins>

<mark>Highlighted text</mark>

<small>Small/fine print text</small>
<big>Larger text (deprecated, use CSS)</big>

<sub>Subscript: H<sub>2</sub>O</sub>
<sup>Superscript: x<sup>2</sup></sup>

<code>Inline code snippet</code>
<kbd>Keyboard input: Ctrl+C</kbd>
<samp>Sample output</samp>
<var>Variable name: x = 5</var>

<abbr title="HyperText Markup Language">HTML</abbr>
<cite>Book or Work Title</cite>
<q>Short inline quotation</q>
<blockquote cite="https://source.com">
  A longer block quotation pulled from another source.
</blockquote>

<pre>
  Preformatted text
  preserves    spaces
  and line breaks
</pre>
```

### Special Characters (HTML Entities)
| Symbol | Entity |
|--------|--------|
| `&` | `&amp;` |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `"` | `&quot;` |
| `'` | `&apos;` |
| ` ` (non-breaking space) | `&nbsp;` |
| `©` | `&copy;` |
| `®` | `&reg;` |
| `™` | `&trade;` |
| `→` | `&rarr;` |

</details>

---

<details>
<summary><h2>🔗 3. Links & Anchors</h2></summary>

### Basic Link
```html
<a href="https://example.com">Visit Example</a>
```

### Link Types
```html
<!-- External link (opens in new tab) -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>

<!-- Internal link (same site) -->
<a href="/about.html">About Us</a>
<a href="./contact.html">Contact</a>

<!-- Anchor link (jump to section on same page) -->
<a href="#section-id">Jump to Section</a>
<div id="section-id">This is the target section</div>

<!-- Email link -->
<a href="mailto:user@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+11234567890">Call Us</a>

<!-- Download link -->
<a href="/files/resume.pdf" download="MyResume.pdf">Download Resume</a>

<!-- Link with title tooltip -->
<a href="https://example.com" title="Hover tooltip text">Hover over me</a>
```

### `target` Attribute Values
| Value | Behavior |
|-------|----------|
| `_self` | Opens in same tab (default) |
| `_blank` | Opens in new tab |
| `_parent` | Opens in parent frame |
| `_top` | Opens in full window |

> ⚠️ **Security:** Always add `rel="noopener noreferrer"` when using `target="_blank"` to prevent tab-napping attacks.

</details>

---

<details>
<summary><h2>🖼️ 4. Images & Media</h2></summary>

### Images
```html
<!-- Basic image -->
<img src="photo.jpg" alt="Description of image" />

<!-- With width and height (prevents layout shift) -->
<img src="photo.jpg" alt="A mountain" width="800" height="600" />

<!-- Lazy loading (improves performance) -->
<img src="photo.jpg" alt="A photo" loading="lazy" />

<!-- Responsive image with srcset -->
<img
  src="image-400.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Responsive image"
/>

<!-- Image with figure and caption -->
<figure>
  <img src="diagram.png" alt="System architecture diagram" />
  <figcaption>Fig 1. System Architecture Overview</figcaption>
</figure>
```

### Picture Element (Art Direction)
```html
<picture>
  <source media="(max-width: 600px)" srcset="small.jpg" />
  <source media="(max-width: 1200px)" srcset="medium.jpg" />
  <img src="large.jpg" alt="Responsive picture" />
</picture>
```

### Audio
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>

<!-- Attributes: autoplay, loop, muted, preload="auto|metadata|none" -->
<audio src="song.mp3" controls autoplay loop muted></audio>
```

### Video
```html
<video controls width="640" height="360" poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track src="captions.vtt" kind="subtitles" srclang="en" label="English" />
  Your browser does not support video.
</video>

<!-- Attributes: autoplay, loop, muted, playsinline, preload -->
```

### Embedding (iFrame)
```html
<!-- Embed a webpage or map -->
<iframe
  src="https://www.google.com/maps/embed?..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Google Map"
></iframe>

<!-- Embed YouTube video -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

### SVG (Inline)
```html
<!-- Inline SVG - can be styled with CSS -->
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="blue" stroke="black" stroke-width="3" />
</svg>
```

</details>

---

<details>
<summary><h2>📋 5. Lists</h2></summary>

### Unordered List (Bullet List)
```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
```

### Ordered List (Numbered List)
```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<!-- Starting from a specific number -->
<ol start="5">
  <li>Fifth item</li>
  <li>Sixth item</li>
</ol>

<!-- Reversed order -->
<ol reversed>
  <li>Last item</li>
  <li>Second to last</li>
</ol>

<!-- List type: 1, A, a, I, i -->
<ol type="A">
  <li>Item A</li>
  <li>Item B</li>
</ol>
```

### Description List
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — used to structure web content.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — used to style web content.</dd>

  <dt>JavaScript</dt>
  <dd>A scripting language for interactivity on the web.</dd>
</dl>
```

### Nested Lists
```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>
```

</details>

---

<details>
<summary><h2>📊 6. Tables</h2></summary>

### Basic Table Structure
```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>28</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>34</td>
      <td>Los Angeles</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total: 2 people</td>
    </tr>
  </tfoot>
</table>
```

### Spanning Rows & Columns
```html
<table border="1">
  <tr>
    <th colspan="2">Full Name</th>  <!-- spans 2 columns -->
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td rowspan="2">25</td>  <!-- spans 2 rows -->
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

### Accessible Table with Caption & Scope
```html
<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Sales</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>150</td>
      <td>$15,000</td>
    </tr>
  </tbody>
</table>
```

### Table Tags Summary
| Tag | Purpose |
|-----|---------|
| `<table>` | Container |
| `<thead>` | Header section |
| `<tbody>` | Body section |
| `<tfoot>` | Footer section |
| `<tr>` | Table row |
| `<th>` | Header cell (bold & centered by default) |
| `<td>` | Data cell |
| `<caption>` | Table title/description |
| `colspan` | Span multiple columns |
| `rowspan` | Span multiple rows |

</details>

---

<details>
<summary><h2>📝 7. Forms & Inputs</h2></summary>

### Basic Form Structure
```html
<form action="/submit" method="POST">
  <!-- form elements here -->
  <button type="submit">Submit</button>
</form>
```

### `<form>` Attributes
| Attribute | Values | Description |
|-----------|--------|-------------|
| `action` | URL | Where to send form data |
| `method` | `GET`, `POST` | HTTP method |
| `enctype` | `multipart/form-data` | Required for file uploads |
| `novalidate` | — | Disable browser validation |
| `autocomplete` | `on`, `off` | Browser autocomplete |
| `target` | `_blank`, `_self` | Where to open response |

### All Input Types
```html
<!-- Text inputs -->
<input type="text" placeholder="Enter text" />
<input type="email" placeholder="user@example.com" />
<input type="password" placeholder="Password" />
<input type="number" min="0" max="100" step="5" />
<input type="tel" placeholder="+1 234 567 8900" />
<input type="url" placeholder="https://example.com" />
<input type="search" placeholder="Search..." />

<!-- Date and time -->
<input type="date" />
<input type="time" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />

<!-- Selection -->
<input type="checkbox" id="check1" name="check1" value="yes" checked />
<input type="radio" name="gender" value="male" id="male" />
<input type="radio" name="gender" value="female" id="female" />
<input type="range" min="0" max="100" value="50" />
<input type="color" value="#ff0000" />

<!-- File -->
<input type="file" accept=".jpg,.png,.pdf" multiple />

<!-- Hidden -->
<input type="hidden" name="token" value="abc123" />

<!-- Buttons -->
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
<input type="button" value="Click Me" />
```

### Labels (Always Use Them!)
```html
<!-- Explicit label -->
<label for="username">Username:</label>
<input type="text" id="username" name="username" />

<!-- Implicit label (wraps the input) -->
<label>
  Email:
  <input type="email" name="email" />
</label>
```

### Textarea & Select
```html
<!-- Multi-line text input -->
<textarea name="message" rows="5" cols="40" placeholder="Your message..."></textarea>

<!-- Dropdown select -->
<select name="country">
  <option value="">-- Select Country --</option>
  <option value="us">United States</option>
  <option value="uk" selected>United Kingdom</option>
  <option value="ca">Canada</option>
</select>

<!-- Grouped options -->
<select name="car">
  <optgroup label="German Cars">
    <option value="bmw">BMW</option>
    <option value="mercedes">Mercedes</option>
  </optgroup>
  <optgroup label="Japanese Cars">
    <option value="toyota">Toyota</option>
    <option value="honda">Honda</option>
  </optgroup>
</select>

<!-- Multiple selection -->
<select name="skills" multiple size="4">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="react">React</option>
</select>
```

### Input Attributes
```html
<input
  type="text"
  name="username"
  id="username"
  value="default value"
  placeholder="Hint text"
  required
  disabled
  readonly
  autofocus
  autocomplete="off"
  minlength="3"
  maxlength="20"
  pattern="[A-Za-z]{3,}"
  title="Only letters, minimum 3 characters"
/>
```

### Fieldset & Legend (Grouping)
```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="fname">First Name:</label>
  <input type="text" id="fname" name="fname" /><br />
  <label for="lname">Last Name:</label>
  <input type="text" id="lname" name="lname" />
</fieldset>
```

### Datalist (Autocomplete Suggestions)
```html
<input list="browsers" name="browser" placeholder="Choose a browser" />
<datalist id="browsers">
  <option value="Chrome" />
  <option value="Firefox" />
  <option value="Safari" />
  <option value="Edge" />
</datalist>
```

### Output Element
```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50" /> +
  <input type="number" id="b" value="25" /> =
  <output name="result" for="a b">75</output>
</form>
```

### Button Element
```html
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>
<button type="button" onclick="doSomething()">Click Me</button>

<!-- Button with icon -->
<button type="button">
  <img src="icon.svg" alt="" /> Save
</button>
```

</details>

---

<details>
<summary><h2>🏗️ 8. Semantic HTML Elements</h2></summary>

### Why Semantic HTML?
Semantic elements clearly describe their **meaning** to both the browser and developers. They improve: SEO, accessibility (screen readers), code readability, and maintainability.

### Page Layout Semantics
```html
<body>
  <header>
    <!-- Site logo, nav, branding -->
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h1>Article Title</h1>
        <time datetime="2024-01-15">January 15, 2024</time>
      </header>

      <section>
        <h2>Introduction</h2>
        <p>Article content...</p>
      </section>

      <section>
        <h2>Main Content</h2>
        <p>More content...</p>
      </section>

      <footer>
        <p>Written by <address><a href="mailto:author@example.com">Author Name</a></address></p>
      </footer>
    </article>

    <aside>
      <!-- Sidebar, related links, ads -->
    </aside>
  </main>

  <footer>
    <!-- Site-wide footer: copyright, links -->
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
```

### Semantic Elements Reference
| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content or nav (for page or section) |
| `<nav>` | Navigation links |
| `<main>` | Main content (one per page) |
| `<article>` | Self-contained content (blog post, card) |
| `<section>` | Thematic grouping of content |
| `<aside>` | Tangentially related content (sidebar) |
| `<footer>` | Footer for page or section |
| `<figure>` | Self-contained media with optional caption |
| `<figcaption>` | Caption for `<figure>` |
| `<time>` | Date/time |
| `<address>` | Contact info for nearest article/body |
| `<mark>` | Highlighted/relevant text |
| `<summary>` | Visible heading for `<details>` |
| `<details>` | Disclosure widget (expand/collapse) |
| `<dialog>` | Modal or popup dialog |
| `<progress>` | Progress bar |
| `<meter>` | Scalar measurement within a range |

### Non-Semantic vs Semantic Comparison
```html
<!-- ❌ Non-semantic (avoid) -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="content">...</div>
<div class="footer">...</div>

<!-- ✅ Semantic (preferred) -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

### Details & Summary (Native Toggle)
```html
<details>
  <summary>Click to expand</summary>
  <p>Hidden content that appears when expanded.</p>
</details>

<!-- Open by default -->
<details open>
  <summary>This is open by default</summary>
  <p>Content visible on load.</p>
</details>
```

### Dialog (Native Modal)
```html
<dialog id="myModal">
  <h2>Modal Title</h2>
  <p>Modal content goes here.</p>
  <button onclick="document.getElementById('myModal').close()">Close</button>
</dialog>

<button onclick="document.getElementById('myModal').showModal()">Open Modal</button>
```

### Progress & Meter
```html
<!-- Progress bar -->
<label for="file-progress">Uploading:</label>
<progress id="file-progress" value="70" max="100"> 70% </progress>

<!-- Meter (gauge) -->
<label for="disk-usage">Disk usage:</label>
<meter id="disk-usage" value="0.6" min="0" max="1" low="0.3" high="0.8" optimum="0.5">
  60%
</meter>
```

</details>

---

<details>
<summary><h2>🎨 9. HTML & CSS Integration</h2></summary>

### Three Ways to Add CSS

#### 1. Inline Styles (Avoid for large projects)
```html
<p style="color: red; font-size: 18px; font-weight: bold;">Styled paragraph</p>
```

#### 2. Internal `<style>` Block
```html
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }
    h1 {
      color: navy;
    }
  </style>
</head>
```

#### 3. External Stylesheet (Best Practice ✅)
```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

### The `class` and `id` Attributes
```html
<!-- id: unique per page, used for specific targeting -->
<div id="main-header">Header</div>

<!-- class: reusable, used for multiple elements -->
<p class="highlight">First highlighted paragraph</p>
<p class="highlight large-text">Multiple classes</p>

<!-- In CSS -->
<style>
  #main-header { background: navy; color: white; }
  .highlight { background: yellow; }
  .large-text { font-size: 1.5rem; }
</style>
```

### `data-*` Custom Attributes
```html
<!-- Store custom data on elements -->
<div
  data-user-id="42"
  data-role="admin"
  data-theme="dark"
>
  Content
</div>

<script>
  const div = document.querySelector('div');
  console.log(div.dataset.userId);  // "42"
  console.log(div.dataset.role);    // "admin"
</script>
```

### CSS Variables (Custom Properties)
```html
<style>
  :root {
    --primary-color: #3498db;
    --font-size-base: 16px;
    --border-radius: 8px;
  }

  .button {
    background-color: var(--primary-color);
    font-size: var(--font-size-base);
    border-radius: var(--border-radius);
  }
</style>
```

</details>

---

<details>
<summary><h2>⚡ 10. HTML & JavaScript Integration</h2></summary>

### Adding JavaScript

#### Inline (Avoid)
```html
<button onclick="alert('Hello!')">Click</button>
```

#### Internal `<script>` Block
```html
<script>
  function sayHello() {
    alert('Hello World!');
  }
</script>
```

#### External Script (Best Practice ✅)
```html
<!-- At end of body (traditional) -->
<script src="app.js"></script>

<!-- In head with defer (recommended) -->
<head>
  <script src="app.js" defer></script>
</head>

<!-- In head with async (for independent scripts) -->
<head>
  <script src="analytics.js" async></script>
</head>
```

### `defer` vs `async`
| | `defer` | `async` |
|--|---------|---------|
| Downloads | In parallel | In parallel |
| Executes | After HTML parsed | Immediately after download |
| Order | Maintained | Not guaranteed |
| Use for | App scripts | Independent scripts (analytics) |

### DOM Manipulation Basics
```html
<div id="box" class="container">Hello</div>
<button id="btn">Change Text</button>

<script>
  // Select elements
  const box = document.getElementById('box');
  const btn = document.querySelector('#btn');
  const allDivs = document.querySelectorAll('div');

  // Change content
  box.textContent = 'Changed!';       // text only
  box.innerHTML = '<strong>Bold!</strong>';  // HTML

  // Change attributes
  box.setAttribute('data-status', 'active');
  box.getAttribute('class');          // "container"
  box.removeAttribute('class');

  // Change styles
  box.style.color = 'red';
  box.style.backgroundColor = 'blue';

  // Add/remove classes
  box.classList.add('active');
  box.classList.remove('container');
  box.classList.toggle('dark');

  // Event listeners
  btn.addEventListener('click', () => {
    box.textContent = 'Button Clicked!';
  });
</script>
```

### Common Events
```html
<!-- Mouse events -->
<button onclick="..." ondblclick="..." onmouseenter="..." onmouseleave="...">

<!-- Keyboard events -->
<input onkeydown="..." onkeyup="..." onkeypress="...">

<!-- Form events -->
<form onsubmit="..." onreset="...">
<input onchange="..." oninput="..." onfocus="..." onblur="...">

<!-- Window events -->
<body onload="..." onresize="..." onscroll="...">
```

</details>

---

<details>
<summary><h2>♿ 11. Accessibility (A11y) in HTML</h2></summary>

### Why Accessibility?
- ~15% of the world has a disability
- Required by law in many countries (ADA, WCAG)
- Improves SEO and overall UX

### ARIA (Accessible Rich Internet Applications)
```html
<!-- ARIA roles -->
<div role="button" tabindex="0">Custom Button</div>
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Dialog Heading</h2>
</div>
<nav role="navigation" aria-label="Main navigation">...</nav>

<!-- ARIA labels -->
<button aria-label="Close menu">×</button>
<input type="search" aria-label="Search the website" />

<!-- aria-labelledby: points to another element -->
<h2 id="form-title">Contact Us</h2>
<form aria-labelledby="form-title">...</form>

<!-- aria-describedby: additional description -->
<input type="password" aria-describedby="pw-hint" />
<small id="pw-hint">Must be at least 8 characters.</small>

<!-- aria-live: announce dynamic changes -->
<div aria-live="polite" id="status-msg"></div>

<!-- aria-hidden: hide from screen readers -->
<span aria-hidden="true">🎉</span> Congratulations!

<!-- aria-expanded: for dropdowns/accordions -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>...</ul>

<!-- aria-required -->
<input type="email" aria-required="true" required />

<!-- aria-disabled -->
<button aria-disabled="true" disabled>Submit</button>
```

### Keyboard Navigation
```html
<!-- tabindex: control tab order -->
<div tabindex="0">Focusable div (natural order)</div>
<div tabindex="-1">Focusable via JS only</div>
<div tabindex="1">First in tab order (avoid using positive values)</div>

<!-- Skip navigation link (accessibility best practice) -->
<a href="#main-content" class="skip-link">Skip to main content</a>
<main id="main-content">...</main>
```

### Accessible Forms
```html
<!-- Always pair labels with inputs -->
<label for="email">Email Address <span aria-hidden="true">*</span></label>
<input
  type="email"
  id="email"
  name="email"
  required
  aria-required="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert" style="color:red;">
  Please enter a valid email.
</span>
```

### Accessible Images
```html
<!-- Meaningful image: use descriptive alt -->
<img src="chart.png" alt="Bar chart showing 40% increase in sales Q3 2024" />

<!-- Decorative image: empty alt -->
<img src="divider.png" alt="" />

<!-- Complex image: use aria-describedby or longdesc -->
<img src="complex-diagram.png" alt="System diagram" aria-describedby="diagram-desc" />
<p id="diagram-desc">Detailed description of the diagram...</p>
```

### Color Contrast & Focus
```html
<style>
  /* Always show focus indicator */
  :focus {
    outline: 2px solid #005fcc;
    outline-offset: 2px;
  }

  /* Never do this: */
  /* :focus { outline: none; } ❌ */
</style>
```

### WCAG Levels
| Level | Meaning |
|-------|---------|
| A | Minimum accessibility |
| AA | Standard (legally required in most countries) |
| AAA | Enhanced (gold standard) |

</details>

---

<details>
<summary><h2>📱 12. Responsive HTML & Meta Tags</h2></summary>

### Viewport Meta Tag (Essential)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Important Meta Tags
```html
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8" />

  <!-- Viewport for responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO meta tags -->
  <meta name="description" content="Page description (150-160 chars)" />
  <meta name="keywords" content="html, css, frontend, web development" />
  <meta name="author" content="Your Name" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph (for social media sharing) -->
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Page description" />
  <meta property="og:image" content="https://example.com/image.jpg" />
  <meta property="og:url" content="https://example.com/page" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Page Title" />
  <meta name="twitter:description" content="Page description" />
  <meta name="twitter:image" content="https://example.com/image.jpg" />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- Theme color (mobile browser UI) -->
  <meta name="theme-color" content="#3498db" />

  <!-- Canonical URL (prevents duplicate content) -->
  <link rel="canonical" href="https://example.com/page" />

  <!-- Preload important resources -->
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="hero.jpg" as="image" />

  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://cdn.example.com" />
</head>
```

### Responsive Images
```html
<!-- Using srcset for responsive images -->
<img
  src="image-medium.jpg"
  srcset="
    image-small.jpg 480w,
    image-medium.jpg 800w,
    image-large.jpg 1200w
  "
  sizes="
    (max-width: 480px) 100vw,
    (max-width: 800px) 80vw,
    1200px
  "
  alt="Responsive image"
  loading="lazy"
/>
```

</details>

---

<details>
<summary><h2>🔍 13. SEO Essentials in HTML</h2></summary>

### SEO Checklist
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- 1. Unique, descriptive title (50-60 chars) -->
  <title>Buy Red Shoes Online | ShoeStore</title>

  <!-- 2. Meta description (150-160 chars) -->
  <meta name="description" content="Shop our collection of red shoes. Free shipping on orders over $50. Find your perfect pair today." />

  <!-- 3. Canonical URL -->
  <link rel="canonical" href="https://shoestore.com/red-shoes" />

  <!-- 4. Open Graph for social sharing -->
  <meta property="og:title" content="Buy Red Shoes Online" />
  <meta property="og:description" content="Shop our collection..." />
  <meta property="og:image" content="https://shoestore.com/img/red-shoes-og.jpg" />
</head>
<body>
  <!-- 5. One H1 per page with keyword -->
  <h1>Red Shoes for Women and Men</h1>

  <!-- 6. Structured headings (H2, H3...) -->
  <h2>Popular Red Shoe Styles</h2>
  <h3>Red Sneakers</h3>
  <h3>Red Heels</h3>

  <!-- 7. Alt text on all images -->
  <img src="red-nike.jpg" alt="Red Nike Air Max sneakers for women" />

  <!-- 8. Descriptive anchor text (NOT "click here") -->
  <a href="/red-sneakers">Shop Red Sneakers</a>

  <!-- 9. Structured data (Schema.org) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Red Nike Air Max",
    "description": "Comfortable red sneakers for everyday wear",
    "image": "https://shoestore.com/img/red-nike.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Nike"
    },
    "offers": {
      "@type": "Offer",
      "price": "99.99",
      "priceCurrency": "USD"
    }
  }
  </script>
</body>
</html>
```

### Common Schema Types
| Type | Use Case |
|------|----------|
| `Article` | Blog posts, news |
| `Product` | E-commerce items |
| `FAQPage` | FAQ sections |
| `BreadcrumbList` | Navigation breadcrumbs |
| `LocalBusiness` | Physical businesses |
| `Person` | Author profiles |
| `Event` | Events |
| `Recipe` | Cooking recipes |

</details>

---

<details>
<summary><h2>⚙️ 14. HTML5 APIs & Advanced Features</h2></summary>

### Web Storage
```html
<script>
  // localStorage: persists after browser closes
  localStorage.setItem('theme', 'dark');
  const theme = localStorage.getItem('theme');
  localStorage.removeItem('theme');
  localStorage.clear();

  // sessionStorage: cleared when tab closes
  sessionStorage.setItem('sessionData', 'value');
  const data = sessionStorage.getItem('sessionData');
</script>
```

### Canvas API
```html
<canvas id="myCanvas" width="500" height="300"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Draw rectangle
  ctx.fillStyle = 'blue';
  ctx.fillRect(50, 50, 200, 100);

  // Draw circle
  ctx.beginPath();
  ctx.arc(300, 150, 60, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();

  // Draw text
  ctx.font = '24px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Hello Canvas!', 50, 250);
</script>
```

### Drag & Drop
```html
<div id="drag-item" draggable="true"
  ondragstart="event.dataTransfer.setData('text', event.target.id)">
  Drag me!
</div>

<div id="drop-zone"
  ondragover="event.preventDefault()"
  ondrop="drop(event)">
  Drop here
</div>

<script>
  function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(id));
  }
</script>
```

### Geolocation API
```html
<button onclick="getLocation()">Get My Location</button>
<p id="location-output"></p>

<script>
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          document.getElementById('location-output').textContent =
            `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`;
        },
        (error) => console.error('Error:', error)
      );
    }
  }
</script>
```

### Web Workers
```html
<script>
  // Main thread
  const worker = new Worker('worker.js');
  worker.postMessage({ task: 'compute', data: [1, 2, 3] });
  worker.onmessage = (e) => console.log('Result:', e.data);
</script>

<!-- worker.js (separate file) -->
<!-- self.onmessage = (e) => { ... self.postMessage(result); } -->
```

### Intersection Observer (Lazy Loading / Animations)
```html
<img class="lazy" data-src="image.jpg" alt="Lazy loaded image" />

<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('.lazy').forEach(img => observer.observe(img));
</script>
```

### Template Element
```html
<template id="card-template">
  <div class="card">
    <h3 class="card-title"></h3>
    <p class="card-body"></p>
  </div>
</template>

<div id="cards-container"></div>

<script>
  const template = document.getElementById('card-template');
  const clone = template.content.cloneNode(true);
  clone.querySelector('.card-title').textContent = 'Card Title';
  clone.querySelector('.card-body').textContent = 'Card body text.';
  document.getElementById('cards-container').appendChild(clone);
</script>
```

</details>

---

<details>
<summary><h2>🧩 15. HTML Best Practices & Checklist</h2></summary>

### Document Structure Checklist
- [ ] `<!DOCTYPE html>` at the very top
- [ ] `<html lang="en">` with language attribute
- [ ] `<meta charset="UTF-8">` first in `<head>`
- [ ] `<meta name="viewport" ...>` for responsiveness
- [ ] Unique, descriptive `<title>` on every page
- [ ] Meta description added
- [ ] Favicon linked
- [ ] CSS loaded in `<head>`, JS loaded before `</body>` or with `defer`

### Accessibility Checklist
- [ ] All images have `alt` text (empty `alt=""` for decorative)
- [ ] All form inputs have associated `<label>`
- [ ] Logical heading hierarchy (h1 → h2 → h3)
- [ ] Only one `<h1>` per page
- [ ] Color not the only way to convey information
- [ ] Sufficient color contrast (4.5:1 for normal text)
- [ ] Focus indicators visible (never `outline: none`)
- [ ] Skip navigation link for keyboard users
- [ ] ARIA attributes used where needed

### Performance Checklist
- [ ] Images have `width` and `height` attributes (prevents layout shift)
- [ ] Images use `loading="lazy"` (except above-the-fold)
- [ ] Use `<picture>` for art direction
- [ ] Use `srcset` for responsive images
- [ ] `defer` or `async` on non-critical scripts
- [ ] Preconnect to critical third-party origins
- [ ] Preload critical resources (fonts, hero images)

### Code Quality Checklist
- [ ] Validate HTML at https://validator.w3.org
- [ ] Use semantic elements over generic `<div>` and `<span>`
- [ ] Consistent indentation (2 or 4 spaces)
- [ ] No inline styles (use CSS classes)
- [ ] No deprecated tags (`<center>`, `<font>`, `<b>` for styling)
- [ ] `id` values are unique per page
- [ ] Double quotes for attribute values
- [ ] Lowercase tag names and attributes

### Deprecated Tags to Avoid
| Deprecated | Use Instead |
|------------|------------|
| `<center>` | CSS `text-align: center` |
| `<font>` | CSS `font-family`, `color` |
| `<b>` (for style) | `<strong>` or CSS `font-weight` |
| `<i>` (for style) | `<em>` or CSS `font-style` |
| `<u>` (for style) | CSS `text-decoration` |
| `<strike>` | `<del>` or CSS `text-decoration: line-through` |
| `<frame>`, `<frameset>` | `<iframe>` or CSS layouts |
| `<big>` | CSS `font-size` |
| `<marquee>` | CSS animations |
| `<blink>` | CSS animations |

### Useful HTML Validators & Tools
| Tool | URL |
|------|-----|
| W3C HTML Validator | https://validator.w3.org |
| WAVE Accessibility | https://wave.webaim.org |
| Lighthouse (Chrome DevTools) | Built-in |
| axe DevTools | Browser extension |
| Can I Use | https://caniuse.com |

</details>

---

<details>
<summary><h2>📦 16. HTML Elements Quick Reference Cheatsheet</h2></summary>

### All Common HTML Tags at a Glance

```
DOCUMENT STRUCTURE
------------------
<!DOCTYPE html>    - HTML5 doctype
<html>             - Root element
<head>             - Metadata container
<body>             - Visible content
<title>            - Page title (browser tab)
<meta>             - Metadata (charset, viewport, SEO)
<link>             - External resources (CSS, favicon)
<script>           - JavaScript
<style>            - Internal CSS
<base>             - Base URL for relative links
<noscript>         - Fallback when JS disabled

HEADINGS & TEXT
---------------
<h1> to <h6>       - Headings (h1 is most important)
<p>                - Paragraph
<br>               - Line break
<hr>               - Horizontal rule
<strong>           - Important/bold
<em>               - Emphasized/italic
<small>            - Small text
<mark>             - Highlighted text
<del>              - Deleted text
<ins>              - Inserted text
<sup>              - Superscript
<sub>              - Subscript
<code>             - Inline code
<pre>              - Preformatted block
<blockquote>       - Block quote
<q>                - Inline quote
<abbr>             - Abbreviation
<cite>             - Citation/reference
<kbd>              - Keyboard input
<samp>             - Sample output
<var>              - Variable
<time>             - Date/time
<address>          - Contact info

LINKS & MEDIA
-------------
<a>                - Hyperlink / anchor
<img>              - Image
<picture>          - Responsive image container
<source>           - Media source
<figure>           - Self-contained media
<figcaption>       - Caption for figure
<video>            - Video player
<audio>            - Audio player
<track>            - Captions/subtitles
<iframe>           - Embedded frame
<embed>            - External content
<object>           - External object
<canvas>           - Drawing surface
<svg>              - Scalable vector graphics

LISTS
-----
<ul>               - Unordered list
<ol>               - Ordered list
<li>               - List item
<dl>               - Description list
<dt>               - Description term
<dd>               - Description detail

TABLES
------
<table>            - Table
<thead>            - Table header section
<tbody>            - Table body section
<tfoot>            - Table footer section
<tr>               - Table row
<th>               - Header cell
<td>               - Data cell
<caption>          - Table caption
<colgroup>         - Column group
<col>              - Column properties

FORMS
-----
<form>             - Form container
<input>            - Input control (many types)
<textarea>         - Multi-line text input
<select>           - Dropdown
<option>           - Dropdown option
<optgroup>         - Option group
<button>           - Clickable button
<label>            - Input label
<fieldset>         - Group of inputs
<legend>           - Fieldset title
<datalist>         - Autocomplete suggestions
<output>           - Calculation result
<progress>         - Progress bar
<meter>            - Scalar measurement

SEMANTIC LAYOUT
---------------
<header>           - Page/section header
<nav>              - Navigation links
<main>             - Main content (one per page)
<article>          - Self-contained content
<section>          - Thematic section
<aside>            - Sidebar/related content
<footer>           - Page/section footer

INTERACTIVE
-----------
<details>          - Expandable disclosure
<summary>          - Heading for <details>
<dialog>           - Modal/dialog box
<menu>             - Context/toolbar menu

SCRIPTING
---------
<script>           - JavaScript
<noscript>         - JS fallback
<template>         - Reusable template
<slot>             - Web component slot

GENERIC CONTAINERS
------------------
<div>              - Block-level container
<span>             - Inline container
```

</details>

