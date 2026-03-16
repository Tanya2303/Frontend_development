# 🎯 HTML Interview Questions & Answers
> **Complete Interview Preparation Guide** | Beginner → Intermediate → Advanced
>
> 📌 *Use `Ctrl+F` to search. Each section is collapsible — click to expand.*

---

## 📊 Quick Index

| Level | Topics Covered |
|-------|---------------|
| 🟢 Beginner | Basics, Tags, Attributes, Lists, Links, Images, Forms |
| 🟡 Intermediate | Semantic HTML, Tables, Meta Tags, Accessibility, Scripts |
| 🔴 Advanced | HTML5 APIs, Storage, Canvas, Shadow DOM, SEO, Security |

---

# 🟢 BEGINNER LEVEL

---

<details>
<summary><h2>Q1. What is HTML? What does it stand for?</h2></summary>

### ✅ Answer:
**HTML** stands for **HyperText Markup Language**. It is the **standard language** used to create and structure content on the web.

- **HyperText** → Text that contains links to other texts/pages
- **Markup Language** → Uses tags to annotate/structure content (not a programming language)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

### 🔥 Key Points Interviewers Expect:
- HTML is **NOT** a programming language — it's a **markup language**
- HTML defines **structure**, CSS defines **style**, JS defines **behavior**
- Current version is **HTML5**

### 🔁 Follow-up Questions:
- *What is the difference between HTML and HTML5?*
- *Is HTML case-sensitive?* → No, but **lowercase is best practice**

</details>

---

<details>
<summary><h2>Q2. What is the difference between HTML elements, tags, and attributes?</h2></summary>

### ✅ Answer:

| Term | Definition | Example |
|------|-----------|---------|
| **Tag** | The markup syntax with angle brackets | `<p>`, `</p>` |
| **Element** | The full structure: opening tag + content + closing tag | `<p>Hello</p>` |
| **Attribute** | Extra info added inside the opening tag | `<p class="text">Hello</p>` |

```html
<!-- Tag -->
<a>

<!-- Element (tag + content + closing tag) -->
<a>Click Here</a>

<!-- Attribute (name="value" inside opening tag) -->
<a href="https://google.com" target="_blank">Click Here</a>
```

### 🔥 Key Points:
- Attributes always go in the **opening tag**
- Attributes have `name="value"` format
- Some attributes are **boolean** (no value needed): `disabled`, `checked`, `required`

```html
<input type="checkbox" checked disabled required>
```

</details>

---

<details>
<summary><h2>Q3. What is the purpose of `<!DOCTYPE html>`?</h2></summary>

### ✅ Answer:
`<!DOCTYPE html>` is a **declaration** (not a tag) that tells the browser:
- Which **version of HTML** the page is using
- To render the page in **standards mode** (not quirks mode)

```html
<!DOCTYPE html>  <!-- HTML5 declaration — must be FIRST line -->
<html>
  ...
</html>
```

### 🔥 Key Points:
- It is **not** an HTML tag — it's an instruction to the browser
- In HTML5, it's simplified to just `<!DOCTYPE html>`
- Without it, browsers enter **"quirks mode"** — rendering is unpredictable
- It is **case-insensitive** but `<!DOCTYPE html>` (lowercase) is standard

### 🔁 Follow-up:
- *What is quirks mode?* → Old rendering mode for backward compatibility with legacy sites

</details>

---

<details>
<summary><h2>Q4. What are void/self-closing elements in HTML?</h2></summary>

### ✅ Answer:
**Void elements** (also called **self-closing elements**) are HTML elements that **do not have a closing tag** because they cannot contain any content.

```html
<!-- Common void elements -->
<br />       <!-- Line break -->
<hr />       <!-- Horizontal rule -->
<img />      <!-- Image -->
<input />    <!-- Input field -->
<link />     <!-- External resource link -->
<meta />     <!-- Metadata -->
<source />   <!-- Media source -->
<area />     <!-- Image map area -->
<col />      <!-- Table column -->
<embed />    <!-- Embedded content -->
<param />    <!-- Object parameter -->
<track />    <!-- Subtitle track -->
<wbr />      <!-- Word break opportunity -->
```

### 🔥 Key Points:
- In HTML5, the `/` before `>` is **optional** but recommended for clarity
- `<br>` and `<br />` are **both valid** in HTML5
- These elements **cannot have child elements**

</details>

---

<details>
<summary><h2>Q5. What is the difference between block-level and inline elements?</h2></summary>

### ✅ Answer:

| Feature | Block-Level | Inline |
|---------|------------|--------|
| Starts on | New line | Same line |
| Width | Full width of parent | Only as wide as content |
| Can contain | Block + inline elements | Only inline elements |
| Examples | `<div>`, `<p>`, `<h1>`, `<ul>`, `<table>` | `<span>`, `<a>`, `<strong>`, `<img>`, `<input>` |

```html
<!-- Block elements stack vertically -->
<div>I'm a block</div>
<div>I'm also a block (new line)</div>

<!-- Inline elements sit side by side -->
<span>I'm inline</span>
<span>I'm also inline (same line)</span>

<!-- Can be changed with CSS -->
<style>
  span { display: block; }    /* inline → block */
  div  { display: inline; }   /* block → inline */
</style>
```

### 🔥 Key Points:
- `<p>` cannot contain block elements like `<div>` inside it
- `display: inline-block` gives block features while staying inline
- `<img>` is technically inline but behaves somewhat like block

</details>

---

<details>
<summary><h2>Q6. What is the difference between `<div>` and `<span>`?</h2></summary>

### ✅ Answer:

| Feature | `<div>` | `<span>` |
|---------|---------|----------|
| Type | Block-level | Inline |
| Purpose | Group large sections | Style small inline content |
| Line break | Yes (starts on new line) | No |
| Use case | Layout containers | Text highlighting, wrapping |

```html
<!-- div: groups a whole block section -->
<div class="card">
  <h2>Title</h2>
  <p>Content here.</p>
</div>

<!-- span: wraps inline text -->
<p>
  My name is <span style="color: blue; font-weight: bold;">Rahul</span>.
</p>
```

### 🔥 Key Points:
- Both are **non-semantic** — they carry no meaning by themselves
- Prefer **semantic elements** (`<section>`, `<article>`, etc.) over `<div>` when possible
- `<span>` should never contain block elements

</details>

---

<details>
<summary><h2>Q7. What are the different heading tags in HTML?</h2></summary>

### ✅ Answer:
HTML provides **6 levels of headings** — `<h1>` to `<h6>`.

```html
<h1>Heading Level 1 — Most Important (Page Title)</h1>
<h2>Heading Level 2 — Section Title</h2>
<h3>Heading Level 3 — Sub-section</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6 — Least Important</h6>
```

### 🔥 Key Points Interviewers Expect:
- Use **only one `<h1>` per page** for SEO
- Don't **skip heading levels** (e.g., h1 → h3) — bad for accessibility
- Headings define **document outline**, not visual size (use CSS for that)
- Screen readers use headings for navigation

</details>

---

<details>
<summary><h2>Q8. What is the difference between `<strong>` & `<b>`, and `<em>` & `<i>`?</h2></summary>

### ✅ Answer:

| Tag | Type | Purpose |
|-----|------|---------|
| `<strong>` | Semantic | **Important** text (screen readers announce importance) |
| `<b>` | Stylistic | Bold text (no special importance) |
| `<em>` | Semantic | *Emphasized* text (screen readers change tone) |
| `<i>` | Stylistic | Italic text (no semantic meaning — for foreign words, technical terms) |

```html
<!-- Semantic (preferred for meaningful content) -->
<p><strong>Warning:</strong> Do not click this button.</p>
<p>You should <em>never</em> skip breakfast.</p>

<!-- Stylistic (for visual styling only) -->
<p>The word <b>bold</b> appears heavier.</p>
<p>The term <i>Lorem Ipsum</i> is Latin placeholder text.</p>
```

### 🔥 Key Points:
- `<strong>` and `<em>` have **semantic meaning** — preferred
- `<b>` and `<i>` are purely **visual** — use CSS instead for styling
- Both render identically visually, but differ for screen readers and SEO

</details>

---

<details>
<summary><h2>Q9. How do you create links in HTML? Explain all types.</h2></summary>

### ✅ Answer:
Links are created using the `<a>` (anchor) tag.

```html
<!-- 1. External link -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>

<!-- 2. Internal page link -->
<a href="about.html">About Us</a>
<a href="./pages/contact.html">Contact</a>

<!-- 3. Anchor link (jump to section on same page) -->
<a href="#contact-section">Jump to Contact</a>
<section id="contact-section">Contact Info here</section>

<!-- 4. Email link -->
<a href="mailto:hello@example.com">Send Email</a>

<!-- 5. Phone link -->
<a href="tel:+911234567890">Call Us</a>

<!-- 6. Download link -->
<a href="/files/resume.pdf" download="My_Resume.pdf">Download Resume</a>

<!-- 7. Blank link (no destination) -->
<a href="#">Placeholder Link</a>
```

### 🔥 Key Points:
- Always use `rel="noopener noreferrer"` with `target="_blank"` — **security best practice**
- `href="#"` scrolls to the top of the page
- `download` attribute triggers file download instead of navigation

</details>

---

<details>
<summary><h2>Q10. How do you add images in HTML? What is the `alt` attribute?</h2></summary>

### ✅ Answer:

```html
<!-- Basic image -->
<img src="photo.jpg" alt="A description of the photo" />

<!-- With dimensions (prevents layout shift) -->
<img src="logo.png" alt="Company Logo" width="200" height="100" />

<!-- Lazy loading (performance optimization) -->
<img src="banner.jpg" alt="Banner" loading="lazy" />

<!-- Decorative image (no alt needed, use empty string) -->
<img src="divider.png" alt="" />
```

### What is `alt`?
The `alt` attribute provides **alternative text** that:
1. Displays when the image **fails to load**
2. Is read by **screen readers** (accessibility)
3. Helps **search engines** understand the image (SEO)

### 🔥 Key Points:
- `alt` is **mandatory** for accessibility (WCAG requirement)
- For decorative images: use **empty `alt=""`** (not missing `alt`)
- Missing `alt` is not the same as empty `alt` — missing means screen reader reads the file name

</details>

---

<details>
<summary><h2>Q11. What are HTML lists? Explain all types with examples.</h2></summary>

### ✅ Answer:

#### 1. Unordered List (`<ul>`) — Bullet points
```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

#### 2. Ordered List (`<ol>`) — Numbered
```html
<ol>
  <li>Open VS Code</li>
  <li>Create index.html</li>
  <li>Write HTML</li>
</ol>

<!-- Custom start number and type -->
<ol start="5" type="A">
  <li>Item E</li>
  <li>Item F</li>
</ol>
```

#### 3. Description List (`<dl>`) — Key-Value pairs
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

#### 4. Nested Lists
```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend
    <ol>
      <li>Node.js</li>
      <li>Python</li>
    </ol>
  </li>
</ul>
```

### `<ol>` `type` Attribute:
| Value | Output |
|-------|--------|
| `1` | 1, 2, 3 (default) |
| `A` | A, B, C |
| `a` | a, b, c |
| `I` | I, II, III |
| `i` | i, ii, iii |

</details>

---

<details>
<summary><h2>Q12. How do HTML forms work? Explain `GET` vs `POST`.</h2></summary>

### ✅ Answer:

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <button type="submit">Submit</button>
</form>
```

### GET vs POST:

| Feature | GET | POST |
|---------|-----|------|
| Data location | URL query string | Request body |
| Visibility | Visible in URL | Hidden |
| Security | Less secure | More secure |
| Length limit | ~2000 chars | No limit |
| Cacheable | Yes | No |
| Use case | Search, filters | Login, signup, payments |

```html
<!-- GET: data visible in URL → /search?q=html -->
<form action="/search" method="GET">
  <input type="text" name="q" />
  <button type="submit">Search</button>
</form>

<!-- POST: data sent in request body (not visible in URL) -->
<form action="/login" method="POST">
  <input type="password" name="password" />
  <button type="submit">Login</button>
</form>
```

### 🔥 Key Points:
- **Never use GET for sensitive data** (passwords, credit cards)
- For file uploads, use `enctype="multipart/form-data"` with POST
- `required` attribute enables **HTML5 built-in validation**

</details>

---

# 🟡 INTERMEDIATE LEVEL

---

<details>
<summary><h2>Q13. What are semantic HTML elements? Why are they important?</h2></summary>

### ✅ Answer:
**Semantic elements** have meaningful names that describe their **purpose and content** to both browsers and developers.

```html
<!-- ❌ Non-semantic (meaningless structure) -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="main">
  <div class="article">...</div>
  <div class="sidebar">...</div>
</div>
<div class="footer">...</div>

<!-- ✅ Semantic (self-descriptive structure) -->
<header>
  <nav>...</nav>
</header>
<main>
  <article>...</article>
  <aside>...</aside>
</main>
<footer>...</footer>
```

### Common Semantic Elements:
| Element | Purpose |
|---------|---------|
| `<header>` | Page or section header |
| `<nav>` | Navigation links |
| `<main>` | Primary content (only ONE per page) |
| `<article>` | Self-contained content (blog post, card) |
| `<section>` | Thematic grouping of content |
| `<aside>` | Sidebar / related content |
| `<footer>` | Page or section footer |
| `<figure>` | Media with caption |
| `<figcaption>` | Caption for `<figure>` |
| `<time>` | Date/time value |
| `<mark>` | Highlighted text |
| `<address>` | Contact information |

### 🔥 Why Semantic HTML Matters:
1. **SEO** — Search engines better understand content structure
2. **Accessibility** — Screen readers navigate by landmarks
3. **Readability** — Code is self-documenting
4. **Maintainability** — Easier to style and update

</details>

---

<details>
<summary><h2>Q14. What is the difference between `<section>`, `<article>`, and `<div>`?</h2></summary>

### ✅ Answer:

| Element | Use When... | Has Semantic Meaning |
|---------|------------|---------------------|
| `<article>` | Content is **self-contained** and can stand alone (blog post, news, card) | ✅ Yes |
| `<section>` | Content is **thematically grouped** but part of a larger context | ✅ Yes |
| `<div>` | **No semantic meaning** — purely for CSS layout/grouping | ❌ No |

```html
<!-- article: can be syndicated/shared independently -->
<article>
  <h2>10 HTML Tips for Beginners</h2>
  <p>Published by Sheryians on Jan 15...</p>
  <p>Content here...</p>
</article>

<!-- section: part of a larger page, groups related content -->
<section id="features">
  <h2>Our Features</h2>
  <p>Feature description...</p>
</section>

<!-- div: no meaning, just a container for styling -->
<div class="grid-wrapper">
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

### 🔥 Key Rule:
- Ask: *"Would this make sense if extracted from the page?"* → `<article>`
- Ask: *"Is this a named part of a page?"* → `<section>` (should have a heading)
- Otherwise → `<div>`

</details>

---

<details>
<summary><h2>Q15. Explain HTML tables. When should (and shouldn't) you use them?</h2></summary>

### ✅ Answer:

```html
<table>
  <caption>Student Results</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Score</th>
      <th scope="col">Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>95</td>
      <td>A</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>82</td>
      <td>B</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Class Average</td>
      <td>88.5</td>
    </tr>
  </tfoot>
</table>
```

### `rowspan` and `colspan`:
```html
<table border="1">
  <tr>
    <th colspan="2">Full Name</th>  <!-- spans 2 columns -->
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td rowspan="2">Doe</td>        <!-- spans 2 rows -->
    <td>25</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>22</td>
  </tr>
</table>
```

### ✅ Use tables for:
- Displaying **tabular/comparative data**
- Financial reports, schedules, comparison charts

### ❌ Do NOT use tables for:
- **Page layout** (use CSS Flexbox/Grid instead)
- This was a common bad practice in the 1990s

### 🔥 Key Points:
- Always use `<thead>`, `<tbody>`, `<tfoot>` for structure
- `<caption>` improves accessibility
- Use `scope="col"` or `scope="row"` on `<th>` for screen readers

</details>

---

<details>
<summary><h2>Q16. What are meta tags? What are the most important ones?</h2></summary>

### ✅ Answer:
`<meta>` tags provide **metadata** (information about the page) to browsers and search engines. They live inside `<head>` and are not visible on the page.

```html
<head>
  <!-- 1. Character encoding (ALWAYS first) -->
  <meta charset="UTF-8" />

  <!-- 2. Responsive design (ALWAYS include) -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- 3. SEO description -->
  <meta name="description" content="Learn HTML from scratch with Sheryians Coding School." />

  <!-- 4. Author -->
  <meta name="author" content="Sheryians Coding School" />

  <!-- 5. Robots (control indexing) -->
  <meta name="robots" content="index, follow" />

  <!-- 6. Open Graph (social media preview) -->
  <meta property="og:title" content="HTML Interview Notes" />
  <meta property="og:description" content="Complete HTML Q&A for interviews" />
  <meta property="og:image" content="https://example.com/preview.jpg" />
  <meta property="og:url" content="https://example.com/notes" />

  <!-- 7. Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="HTML Interview Notes" />

  <!-- 8. Theme color (mobile browser UI color) -->
  <meta name="theme-color" content="#3498db" />
</head>
```

### 🔥 Key Points:
- `charset="UTF-8"` must be the **first meta tag** in `<head>`
- The `viewport` meta is **essential for mobile responsiveness**
- `description` is used by Google in search results (keep under 160 chars)
- Open Graph tags control how links appear when shared on social media

</details>

---

<details>
<summary><h2>Q17. What is the difference between `id` and `class` attributes?</h2></summary>

### ✅ Answer:

| Feature | `id` | `class` |
|---------|------|---------|
| Uniqueness | **Unique** per page (one element only) | Can be **reused** on multiple elements |
| Specificity | Higher CSS specificity | Lower CSS specificity |
| JS targeting | `document.getElementById()` | `document.getElementsByClassName()` |
| CSS selector | `#id-name` | `.class-name` |
| Multiple values | One only | Multiple classes allowed |

```html
<!-- id: unique, used for specific targeting -->
<header id="main-header">...</header>

<!-- class: reusable, multiple elements, multiple classes -->
<div class="card featured large">...</div>
<div class="card">...</div>
<div class="card">...</div>

<!-- CSS -->
<style>
  #main-header { background: navy; }   /* id selector */
  .card { border: 1px solid #ccc; }    /* class selector */
  .featured { border-color: gold; }
</style>

<!-- JavaScript -->
<script>
  document.getElementById('main-header');
  document.querySelectorAll('.card');
</script>
```

### 🔥 Key Points:
- Duplicate `id` values on a page = **invalid HTML**
- Use `id` for: anchor links, JS targeting, form labels
- Use `class` for: CSS styling, grouping similar elements
- An element can have **both** `id` and `class`

</details>

---

<details>
<summary><h2>Q18. What is the purpose of the `<head>` tag? What goes inside it?</h2></summary>

### ✅ Answer:
The `<head>` element is a **container for metadata** — information about the document that is NOT displayed on the page.

```html
<head>
  <!-- Required -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title — Shown in Browser Tab</title>

  <!-- SEO -->
  <meta name="description" content="Page description for search engines" />
  <link rel="canonical" href="https://example.com/page" />

  <!-- External CSS -->
  <link rel="stylesheet" href="styles.css" />

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png" />

  <!-- Fonts (Google Fonts) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

  <!-- Internal CSS (for critical styles) -->
  <style>
    body { margin: 0; }
  </style>

  <!-- Deferred JS (modern approach) -->
  <script src="app.js" defer></script>
</head>
```

### 🔥 Key Points:
- `<title>` is the **only required** element inside `<head>`
- CSS should be in `<head>` — JS should be at end of `<body>` or with `defer`
- Everything in `<head>` is **invisible** to the user

</details>

---

<details>
<summary><h2>Q19. What is accessibility in HTML? What is ARIA?</h2></summary>

### ✅ Answer:
**Web Accessibility** means making websites usable by people with disabilities (visual, motor, auditory, cognitive).

**ARIA** (Accessible Rich Internet Applications) is a set of HTML attributes that provide extra accessibility information to assistive technologies (screen readers).

```html
<!-- aria-label: gives name to elements without visible text -->
<button aria-label="Close menu">X</button>

<!-- aria-labelledby: points to another element as label -->
<h2 id="form-title">Contact Us</h2>
<form aria-labelledby="form-title">...</form>

<!-- aria-describedby: extra description -->
<input type="password" aria-describedby="pw-hint" />
<small id="pw-hint">Minimum 8 characters</small>

<!-- aria-expanded: for toggle buttons -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>...</ul>

<!-- aria-live: announce dynamic changes -->
<div aria-live="polite" id="status">Loading...</div>

<!-- aria-hidden: hide from screen readers (decorative) -->
<span aria-hidden="true">🎉</span> Congratulations!

<!-- role: define purpose of element -->
<div role="alert">Form submitted successfully!</div>
<nav role="navigation" aria-label="Main navigation">...</nav>
```

### 🔥 Key Accessibility Best Practices:
1. All images → meaningful `alt` text
2. All inputs → paired `<label>`
3. Logical heading hierarchy (`h1` → `h2` → `h3`)
4. Never remove `:focus` styles
5. Use semantic elements over generic divs
6. Sufficient color contrast (4.5:1 for normal text)

```html
<!-- Bad: no focus indicator -->
<style> :focus { outline: none; } </style>

<!-- Good: visible focus -->
<style> :focus { outline: 2px solid #005fcc; outline-offset: 2px; } </style>
```

</details>

---

<details>
<summary><h2>Q20. What is the difference between `<script>` with `defer` and `async`?</h2></summary>

### ✅ Answer:

| Feature | Normal | `async` | `defer` |
|---------|--------|---------|---------|
| HTML parsing | **Paused** during download + execution | Continues during download, **paused** during execution | **Never paused** |
| Execution time | Immediately | As soon as downloaded | After HTML fully parsed |
| Order guaranteed | Yes | No | Yes |
| Best for | — | Independent scripts (analytics, ads) | App scripts that need DOM |

```html
<!-- Normal: blocks HTML parsing (avoid for large scripts) -->
<script src="app.js"></script>

<!-- async: downloads in parallel, executes immediately when ready -->
<!-- ORDER NOT GUARANTEED -->
<script src="analytics.js" async></script>

<!-- defer: downloads in parallel, executes after HTML is parsed -->
<!-- ORDER GUARANTEED, DOM is ready -->
<script src="app.js" defer></script>
```

### 🔥 Key Points:
- **`defer` is the recommended approach** for most app scripts
- `async` is best for **independent scripts** (Google Analytics, Ads)
- Both `defer` and `async` are **ignored** for inline `<script>` blocks
- Scripts at end of `<body>` behave similarly to `defer` (but `defer` is cleaner)

</details>

---

<details>
<summary><h2>Q21. What are data attributes (`data-*`) in HTML?</h2></summary>

### ✅ Answer:
`data-*` attributes allow you to store **custom data** directly on HTML elements, accessible via JavaScript without using hidden inputs or extra classes.

```html
<!-- Storing custom data on HTML elements -->
<div
  class="user-card"
  data-user-id="42"
  data-role="admin"
  data-score="98.5"
>
  Alice
</div>

<button data-product-id="101" data-price="499" onclick="addToCart(this)">
  Add to Cart
</button>
```

```javascript
// Accessing data attributes in JavaScript
const card = document.querySelector('.user-card');

// Using dataset (camelCase conversion)
console.log(card.dataset.userId);   // "42"
console.log(card.dataset.role);     // "admin"
console.log(card.dataset.score);    // "98.5"

// Using getAttribute
console.log(card.getAttribute('data-user-id'));  // "42"

// Setting a data attribute
card.dataset.userId = '100';

// In CSS
// [data-role="admin"] { background: gold; }
```

### 🔥 Key Points:
- Naming: `data-` prefix + **lowercase with hyphens** → `data-user-id`
- In JS, accessed as **camelCase** via `dataset` → `dataset.userId`
- Values are always **strings** — parse with `parseInt()` or `parseFloat()` if needed
- Visible in HTML source — **do not store sensitive data**

</details>

---

# 🔴 ADVANCED LEVEL

---

<details>
<summary><h2>Q22. What are HTML5 new features compared to HTML4?</h2></summary>

### ✅ Answer:

#### New Semantic Elements:
```html
<header>, <footer>, <nav>, <main>, <article>,
<section>, <aside>, <figure>, <figcaption>,
<time>, <mark>, <details>, <summary>, <dialog>
```

#### New Input Types:
```html
<input type="email" />
<input type="url" />
<input type="date" />
<input type="time" />
<input type="number" min="0" max="100" />
<input type="range" />
<input type="color" />
<input type="search" />
<input type="tel" />
```

#### New Elements:
```html
<!-- Canvas for 2D/3D drawing -->
<canvas id="myCanvas" width="500" height="300"></canvas>

<!-- Native audio/video (no Flash needed!) -->
<video src="video.mp4" controls poster="thumbnail.jpg"></video>
<audio src="audio.mp3" controls></audio>

<!-- Inline SVG -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>
```

#### Other HTML5 Additions:
| Feature | Description |
|---------|-------------|
| Web Storage | `localStorage` / `sessionStorage` |
| Web Workers | Background thread execution |
| Geolocation API | Get user's location |
| Drag & Drop API | Native drag and drop |
| WebSockets | Real-time bidirectional communication |
| `<template>` | Reusable HTML templates |
| Form Validation | Built-in `required`, `pattern`, `min`, `max` |
| `data-*` attributes | Custom data attributes |

</details>

---

<details>
<summary><h2>Q23. What is the difference between `localStorage`, `sessionStorage`, and cookies?</h2></summary>

### ✅ Answer:

| Feature | `localStorage` | `sessionStorage` | Cookies |
|---------|---------------|-----------------|---------|
| Capacity | ~5-10 MB | ~5 MB | ~4 KB |
| Expiry | Never (manual clear) | Tab/window close | Set expiry date |
| Sent to server | No | No | Yes (every request) |
| Accessibility | JS only | JS only | JS + Server |
| Scope | Same origin | Same tab | Configurable |

```javascript
// localStorage — persists after browser/tab close
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');  // "dark"
localStorage.removeItem('theme');
localStorage.clear();

// sessionStorage — cleared when tab is closed
sessionStorage.setItem('cart', JSON.stringify([{id: 1}]));
const cart = JSON.parse(sessionStorage.getItem('cart'));

// Cookies — sent with every HTTP request
document.cookie = "username=Alice; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
```

### 🔥 Key Points:
- Use `localStorage` for user preferences, themes, non-sensitive data
- Use `sessionStorage` for temporary data within a session
- Use cookies for **auth tokens**, server-readable data, cross-subdomain sharing
- **Never store passwords or sensitive data** in any browser storage

</details>

---

<details>
<summary><h2>Q24. What is the `<canvas>` element? How is it different from SVG?</h2></summary>

### ✅ Answer:

```html
<canvas id="myCanvas" width="600" height="400"></canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Draw rectangle
  ctx.fillStyle = '#3498db';
  ctx.fillRect(50, 50, 200, 100);

  // Draw circle
  ctx.beginPath();
  ctx.arc(400, 150, 60, 0, Math.PI * 2);
  ctx.fillStyle = '#e74c3c';
  ctx.fill();

  // Draw text
  ctx.font = 'bold 24px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Hello Canvas!', 50, 300);

  // Draw line
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(600, 400);
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 3;
  ctx.stroke();
</script>
```

### Canvas vs SVG:

| Feature | `<canvas>` | SVG |
|---------|-----------|-----|
| Type | **Raster** (pixel-based) | **Vector** (math-based) |
| Scalability | Blurry when scaled | Crisp at any size |
| DOM | No DOM elements | Every shape is a DOM node |
| Performance | Better for many objects | Better for few complex shapes |
| Interactivity | Manual hit detection | CSS/JS events on each element |
| Best for | Games, image editing, data viz | Logos, icons, diagrams, maps |

### 🔥 Key Points:
- Canvas = draw once, **forget it** (imperative)
- SVG = declare shapes, **they stay in DOM** (declarative)
- Canvas is better for **animations with many moving objects** (games)
- SVG is better for **logos and illustrations** that need to scale

</details>

---

<details>
<summary><h2>Q25. What is the `<template>` element in HTML5?</h2></summary>

### ✅ Answer:
The `<template>` element holds **reusable HTML fragments** that are **not rendered** when the page loads. Content inside is inert until cloned via JavaScript.

```html
<!-- Template definition (invisible on page load) -->
<template id="card-template">
  <div class="card">
    <img class="card-img" src="" alt="" />
    <h3 class="card-title"></h3>
    <p class="card-desc"></p>
    <button class="card-btn">View More</button>
  </div>
</template>

<div id="cards-container"></div>

<script>
  const data = [
    { title: "HTML", desc: "Structure of web", img: "html.png" },
    { title: "CSS",  desc: "Style of web",     img: "css.png" },
  ];

  const template = document.getElementById('card-template');
  const container = document.getElementById('cards-container');

  data.forEach(item => {
    // Clone the template content
    const clone = template.content.cloneNode(true);

    clone.querySelector('.card-title').textContent = item.title;
    clone.querySelector('.card-desc').textContent = item.desc;
    clone.querySelector('.card-img').src = item.img;

    container.appendChild(clone);
  });
</script>
```

### 🔥 Key Points:
- Content in `<template>` is **parsed but not rendered**
- Scripts inside templates are **not executed** until cloned
- Fundamental building block of **Web Components**
- Use `template.content.cloneNode(true)` to get a deep copy

</details>

---

<details>
<summary><h2>Q26. What is the Shadow DOM? What are Web Components?</h2></summary>

### ✅ Answer:

**Web Components** are a set of standards for creating reusable, encapsulated custom HTML elements:
1. **Custom Elements** — Define new HTML tags
2. **Shadow DOM** — Encapsulated, isolated DOM + CSS
3. **HTML Templates** — Reusable markup (`<template>`)

```javascript
// Defining a custom element
class MyButton extends HTMLElement {
  constructor() {
    super();

    // Attach Shadow DOM (encapsulated subtree)
    const shadow = this.attachShadow({ mode: 'open' });

    // Create internal structure
    shadow.innerHTML = `
      <style>
        /* These styles are SCOPED — won't leak outside */
        button {
          background: #3498db;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover { background: #2980b9; }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }
}

// Register the custom element
customElements.define('my-button', MyButton);
```

```html
<!-- Using the custom element in HTML -->
<my-button>Click Me</my-button>
<my-button>Submit Form</my-button>
```

### 🔥 Key Points:
- Shadow DOM provides **CSS encapsulation** — styles don't leak in or out
- `<slot>` allows passing content into shadow DOM from outside
- `mode: 'open'` → accessible from JS; `mode: 'closed'` → not accessible
- Web Components work in **all modern browsers natively**
- Custom element names must contain a **hyphen** (e.g., `my-button`, not `mybutton`)

</details>

---

<details>
<summary><h2>Q27. What is the `<picture>` element? How is it different from `<img>`?</h2></summary>

### ✅ Answer:
`<picture>` provides **art direction** — serving different images based on screen size, resolution, or format support.

```html
<!-- img: one image, one format -->
<img src="photo.jpg" alt="A mountain" />

<!-- picture: multiple sources, browser picks best -->
<picture>
  <!-- Serve WebP to browsers that support it (smaller file) -->
  <source srcset="photo.webp" type="image/webp" />

  <!-- Different image for small screens -->
  <source media="(max-width: 600px)" srcset="photo-mobile.jpg" />

  <!-- Different image for large screens -->
  <source media="(min-width: 1200px)" srcset="photo-desktop.jpg" />

  <!-- Fallback img (always required) -->
  <img src="photo.jpg" alt="A mountain" loading="lazy" />
</picture>
```

### Responsive images with `srcset` on `<img>`:
```html
<!-- srcset: different resolutions, same image -->
<img
  src="photo-800.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Responsive photo"
/>
```

### 🔥 Key Points:
- `<picture>` is for **art direction** (different crop/image per device)
- `srcset` on `<img>` is for **resolution switching** (same image, different sizes)
- `<img>` inside `<picture>` is the **required fallback**
- Modern browsers prefer **WebP** format (30-50% smaller than JPEG)

</details>

---

<details>
<summary><h2>Q28. What is the Intersection Observer API?</h2></summary>

### ✅ Answer:
The **Intersection Observer API** efficiently observes when elements **enter or exit the viewport** — without expensive scroll event listeners.

```html
<!-- Lazy load images using Intersection Observer -->
<img class="lazy" data-src="heavy-image.jpg" src="placeholder.jpg" alt="Image" />
<img class="lazy" data-src="another-image.jpg" src="placeholder.jpg" alt="Image" />

<script>
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;       // Load real image
        img.classList.remove('lazy');
        obs.unobserve(img);              // Stop watching after load
      }
    });
  }, {
    threshold: 0.1,      // Trigger when 10% visible
    rootMargin: '50px'   // Start loading 50px before viewport
  });

  document.querySelectorAll('.lazy').forEach(img => observer.observe(img));
</script>
```

```javascript
// Scroll animations with Intersection Observer
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  animObserver.observe(el);
});
```

### 🔥 Key Points:
- Much more **performant** than `scroll` event listeners
- Use cases: **lazy loading**, scroll animations, infinite scroll, analytics (visibility tracking)
- `threshold: 0` fires when any part is visible; `threshold: 1` fires when fully visible
- `rootMargin` extends/shrinks the observation area (like CSS margin)

</details>

---

<details>
<summary><h2>Q29. What are HTML iFrames? What are their security risks?</h2></summary>

### ✅ Answer:
`<iframe>` embeds an **external webpage or content** inside the current page.

```html
<!-- Basic iframe -->
<iframe
  src="https://www.google.com/maps/embed?..."
  width="600"
  height="450"
  title="Google Map"
  loading="lazy"
  allowfullscreen
></iframe>
```

### Security Risks & Mitigations:

| Risk | Mitigation |
|------|-----------|
| **Clickjacking** | Use `X-Frame-Options: DENY` header or `frame-ancestors` in CSP |
| **XSS via iframe** | Use `sandbox` attribute |
| **Data theft** | Same-origin policy restricts cross-origin JS access |
| **Phishing** | Validate `src` URLs; restrict with `allow` attribute |

```html
<!-- sandbox: restricts iframe capabilities -->
<iframe
  src="untrusted-content.html"
  sandbox="allow-scripts allow-same-origin"
></iframe>
```

### `sandbox` attribute values:
| Value | Permission granted |
|-------|-------------------|
| (empty) | All restrictions on |
| `allow-scripts` | Run JavaScript |
| `allow-forms` | Submit forms |
| `allow-same-origin` | Treat as same origin |
| `allow-popups` | Open popups |
| `allow-top-navigation` | Navigate parent frame |

### 🔥 Key Points:
- Always add `title` attribute on `<iframe>` for accessibility
- Use `loading="lazy"` for below-the-fold iframes
- Your page can prevent being iframed via: `Content-Security-Policy: frame-ancestors 'none'`

</details>

---

<details>
<summary><h2>Q30. How does HTML affect SEO? What are the best practices?</h2></summary>

### ✅ Answer:
HTML structure directly impacts how well a page ranks in search engines.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- 1. Unique, keyword-rich title (50-60 chars) -->
  <title>Learn HTML in 30 Days | Sheryians Coding School</title>

  <!-- 2. Compelling meta description (150-160 chars) -->
  <meta name="description" content="Master HTML from basics to advanced with hands-on projects. Join 50,000+ students." />

  <!-- 3. Canonical URL (prevent duplicate content) -->
  <link rel="canonical" href="https://sheryians.com/html-course" />

  <!-- 4. Open Graph for social sharing -->
  <meta property="og:title" content="Learn HTML in 30 Days" />
  <meta property="og:image" content="https://sheryians.com/og-html.jpg" />

  <!-- 5. Structured data (Rich snippets in Google) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "HTML for Beginners",
    "provider": {
      "@type": "Organization",
      "name": "Sheryians Coding School"
    }
  }
  </script>
</head>
<body>
  <!-- 6. One H1 per page with keyword -->
  <h1>Complete HTML Course for Beginners</h1>

  <!-- 7. Logical heading hierarchy -->
  <h2>Module 1: HTML Basics</h2>
    <h3>HTML Document Structure</h3>
    <h3>HTML Tags and Elements</h3>

  <!-- 8. Descriptive link text (NOT "click here") -->
  <a href="/html-forms">Learn about HTML Forms</a>

  <!-- 9. Alt text on images -->
  <img src="html-course.jpg" alt="HTML course curriculum overview" />

  <!-- 10. Semantic structure -->
  <article>...</article>
  <nav>...</nav>
</body>
</html>
```

### 🔥 SEO Checklist:
1. Unique `<title>` on every page
2. Meta `description` under 160 characters
3. Only **one `<h1>`** per page
4. Don't skip heading levels
5. Descriptive `alt` on all images
6. Use **semantic HTML**
7. Fast page load (lazy images, defer scripts)
8. Mobile-responsive (viewport meta tag)
9. Canonical URLs for duplicate content
10. Schema.org structured data for rich snippets

</details>

---

<details>
<summary><h2>Q31. Tricky & Frequently Asked Short Questions</h2></summary>

---

#### Q. What is the difference between `<input type="button">` and `<button>`?

```html
<!-- input button: cannot contain HTML -->
<input type="button" value="Click Me" />

<!-- button: can contain HTML, images, icons -->
<button type="button">
  <img src="icon.svg" alt="" /> Save Draft
</button>
```
**Answer:** `<button>` is preferred — it's more flexible and can contain HTML content including icons and images.

---

#### Q. Can you place a `<div>` inside a `<p>` tag?

```html
<!-- INVALID — p cannot contain block elements -->
<p>
  Text here
  <div>This is wrong!</div>
</p>

<!-- Correct -->
<div>
  <p>Text here</p>
</div>
```
**Answer:** No. `<p>` can only contain **inline content**. Browsers will auto-close `<p>` before a `<div>`.

---

#### Q. What happens if two elements have the same `id`?

**Answer:** Invalid HTML. `getElementById()` returns only the **first match**. CSS will style **all matches** — causing unpredictable behavior. Always keep `id` values unique per page.

---

#### Q. What is the difference between `href` and `src`?

| Attribute | Used on | Purpose |
|-----------|---------|---------|
| `href` | `<a>`, `<link>` | Navigates to or **references** a resource |
| `src` | `<img>`, `<script>`, `<iframe>` | **Embeds** the resource in the page |

```html
<a href="about.html">About</a>                 <!-- navigates to resource -->
<link href="styles.css" rel="stylesheet" />    <!-- links to resource -->
<img src="photo.jpg" alt="Photo" />            <!-- embeds resource -->
<script src="app.js"></script>                 <!-- embeds resource -->
```

---

#### Q. What is the difference between `display:none`, `visibility:hidden`, and `opacity:0`?

| Property | Space taken | Screen readers | Events |
|----------|------------|----------------|--------|
| `display: none` | Removed | Hidden | None |
| `visibility: hidden` | Kept | Hidden | None |
| `opacity: 0` | Kept | Still read | Still fire |

---

#### Q. What does `rel="noopener noreferrer"` do?

```html
<a href="https://external.com" target="_blank" rel="noopener noreferrer">Link</a>
```
- `noopener` — Prevents new tab from accessing `window.opener` (prevents **tab-napping** attack)
- `noreferrer` — Prevents sending the `Referer` header (privacy)

---

#### Q. What is the difference between HTML entities `&nbsp;`, `&lt;`, `&gt;`, `&amp;`?

| Entity | Character | Use |
|--------|-----------|-----|
| `&nbsp;` | (non-breaking space) | Prevent line break between words |
| `&lt;` | `<` | Display `<` without starting a tag |
| `&gt;` | `>` | Display `>` |
| `&amp;` | `&` | Display `&` without starting an entity |
| `&copy;` | © | Copyright symbol |
| `&quot;` | `"` | Double quote inside attribute |

---

#### Q. What is the `tabindex` attribute?

```html
<div tabindex="0">Focusable via Tab (natural order)</div>
<div tabindex="-1">Focusable via JS only (not in Tab order)</div>
<!-- Avoid positive tabindex — breaks natural focus flow -->
```

**Answer:** Controls keyboard tab navigation order. `0` = natural order, `-1` = JS-only focus, positive values = explicit order (avoid).

</details>

---

<details>
<summary><h2>⚡ Final Quick Revision Cheatsheet</h2></summary>

### 🔑 Must-Know One-Liners:

| Question | Quick Answer |
|----------|-------------|
| HTML stands for | HyperText Markup Language |
| Current version | HTML5 |
| Is HTML a programming language? | No — it's a **markup language** |
| `<!DOCTYPE html>` purpose | Tells browser to use HTML5 **standards mode** |
| Void elements | No closing tag: `<br>`, `<img>`, `<input>`, `<hr>`, `<meta>`, `<link>` |
| Block vs inline | Block = full width + new line; Inline = content width + same line |
| Semantic elements | Meaningful tag names: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` |
| `alt` attribute | Alt text for images — accessibility + SEO |
| `id` vs `class` | `id` = unique; `class` = reusable |
| GET vs POST | GET = data in URL; POST = data in body |
| `defer` vs `async` | `defer` = after HTML parsed, ordered; `async` = ASAP, no order guarantee |
| `localStorage` vs `sessionStorage` | localStorage = permanent; sessionStorage = until tab closes |
| `data-*` attributes | Store custom data on elements, read via `dataset` in JS |
| ARIA | Makes web content accessible to screen readers and assistive tech |
| Canvas vs SVG | Canvas = raster/pixels (games); SVG = vector/scalable (icons/logos) |
| Shadow DOM | Encapsulated DOM subtree — scoped styles, used in Web Components |

---

### 🚫 Top 10 Mistakes to Avoid in Interviews:

1. ❌ Calling HTML a **programming language**
2. ❌ Missing `<!DOCTYPE html>` at the top
3. ❌ Using `<table>` for **page layout**
4. ❌ Missing `alt` attribute on images
5. ❌ Using `<b>` and `<i>` instead of `<strong>` and `<em>`
6. ❌ Multiple `<h1>` tags on one page
7. ❌ Using `target="_blank"` without `rel="noopener noreferrer"`
8. ❌ Positive `tabindex` values (breaks tab navigation)
9. ❌ Storing sensitive data in `localStorage`
10. ❌ Not pairing `<label>` with `<input>` (accessibility fail)

---

### 📋 HTML5 New Input Types at a Glance:
`email` | `url` | `tel` | `number` | `range` | `date` | `time` | `datetime-local` | `month` | `week` | `color` | `search`

### 🏷️ Semantic Layout Order:
```
<header> → <nav> → <main> → <article> / <section> / <aside> → <footer>
```

</details>

---

*📌 HTML Interview Prep Notes | Beginner → Intermediate → Advanced | Validate HTML at [validator.w3.org](https://validator.w3.org) | Check accessibility at [wave.webaim.org](https://wave.webaim.org)*