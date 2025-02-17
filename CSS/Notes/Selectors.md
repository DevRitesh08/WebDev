# **CSS Selectors**

CSS **selectors** are patterns used to select and style specific HTML elements. They define which elements a set of CSS rules apply to.  

---

## **Priority of selectors :**

 -Tag selector < Class selector < Id selector < Inline CSS < !important (can be placed inside any selector - BUT DON'T USE --> BAD PRACTICE )

## **Types of CSS Selectors**

## **1. Universal Selector (`*`)**

👉 Selects **all** elements on the page.  

```css
* {
    margin: 0;
    padding: 0;
}
```

---

## **2. Element Selector (Tag Selector)**  

👉 Targets HTML elements by their tag name.  

```css
p {
    color: blue;
    font-size: 18px;
}
```

📝 **Applies to all `<p>` elements** in the document.

---

## **3. Class Selector (`.`)**  

👉 Selects elements with a **specific class**.  

```css
.red-text {
    color: red;
}
```

```html
<p class="red-text">This text will be red.</p>
```

💡 **Use for multiple elements** with the same styling.

---

## **4. ID Selector (`#`)**  

👉 Selects a **unique element** by its ID.  

```css
#main-heading {
    font-size: 24px;
    color: green;
}
```

```html
<h1 id="main-heading">Hello, World!</h1>
```

⚠️ **ID should be unique** on a page.

---

## **5. Grouping Selector (``,``)**  

👉 Targets multiple elements with the **same styles**.  

```css
h1, h2, p {
    font-family: Arial, sans-serif;
}
```

💡 Saves time by applying the same styles to different elements.

---

## **6. Descendant Selector (Space " ")**  

👉 Selects elements inside another element.  

```css
div p {
    color: purple;
}
```

```html
<div>
    <p>This text will be purple.</p>
</div>
```

🎯 **Only affects `<p>` inside `<div>`**.

---

## **7. Child Selector (`>`)**  

👉 Selects **direct children** only.  

```css
div > p {
    color: orange;
}
```

```html
<div>
    <p>This is orange.</p> <!-- ✅ Selected -->
    <span><p>This is NOT orange.</p></span> <!-- ❌ Not selected -->
</div>
```

🔹 More specific than the **descendant selector**.

---

## **8. Adjacent Sibling Selector (`+`)**  

👉 Selects the **immediate** next sibling element.  

```css
h1 + p {
    color: brown;
}
```

```html
<h1>Title</h1>
<p>This paragraph is brown.</p>
<p>This one is NOT affected.</p>
```

📌 Only affects the **first** `<p>` after `<h1>`.

---

## **9. General Sibling Selector (`~`)**  

👉 Selects **all** following siblings.  

```css
h1 ~ p {
    color: pink;
}
```

```html
<h1>Heading</h1>
<p>This is pink.</p>
<p>This is also pink.</p>
```

📢 **Selects all `<p>` after `<h1>`.**

---

## **10. Attribute Selector (`[]`)**  

👉 Targets elements with specific attributes.  

```css
input[type="text"] {
    border: 2px solid blue;
}
```

```html
<input type="text">  <!-- Has blue border -->
<input type="password">  <!-- No effect -->
```

🔹 Works with **any** attribute like `href`, `alt`, `target`, etc.

---

## **11. Pseudo-classes (`:`)**  

👉 Targets elements based on their **state**.  

```css
a:hover {
    color: red;
}
```

🔹 **Common pseudo-classes:**

- `:hover` → When mouse is over an element  
- `:focus` → When an input field is selected  
- `:first-child` → First child of a parent  
- `:last-child` → Last child of a parent  

---

## **12. Pseudo-elements (`::`)**  

👉 Style **parts** of elements.  

```css
p::first-letter {
    font-size: 30px;
    color: red;
}
```

🔹 **Common pseudo-elements:**

- `::first-letter` → Styles first letter  
- `::first-line` → Styles first line  
- `::before` → Inserts content before an element  
- `::after` → Inserts content after an element  

---

## **Summary Table** 📌

| Selector Type      | Symbol  | Example |
|--------------------|---------|---------|
| Universal         | `*`     | `* { margin: 0; }` |
| Element (Tag)     | `tag`   | `p { color: blue; }` |
| Class             | `.`     | `.class { font-size: 18px; }` |
| ID                | `#`     | `#id { font-weight: bold; }` |
| Grouping          | `,`     | `h1, h2 { color: green; }` |
| Descendant        | (space) | `div p { color: red; }` |
| Child             | `>`     | `div > p { font-style: italic; }` |
| Adjacent Sibling  | `+`     | `h1 + p { text-decoration: underline; }` |
| General Sibling   | `~`     | `h1 ~ p { background: yellow; }` |
| Attribute         | `[]`    | `input[type="text"] { border: 1px solid; }` |
| Pseudo-class      | `:`     | `a:hover { color: red; }` |
| Pseudo-element    | `::`    | `p::first-letter { font-size: 24px; }` |

---

## **💡 Which One Should You Use?**

- **Use `class` selectors** (`.`) for reusability.  
- **Use `id` selectors** (`#`) for unique elements.  
- **Use element selectors** for global styles.  
- **Combine selectors** for precision.  
