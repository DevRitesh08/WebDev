# There are **three main ways** to include CSS in an HTML file

## 1. **Inline CSS**

CSS is written directly in the `style` attribute of an HTML element.

- Advantages:

  - By using the inline css approach, css can be applied to a single element (difficult to reuse) .
  - Useful for testing or overriding styles.
  - Quick and easy for small changes.

- Disadvantages:

  - Violates Separation of Concerns (mixing content and style).
  - Has the highest priority among all other ways of CSS inclusion (Inline > Internal > External).
  - Does not provide browser cache advantage.
  - Hard to maintain for large projects.

**Example:**

```html
<p style="color: blue; font-size: 20px;">This is inline CSS.</p>
```

**Use Case:**  
For quick styling or when you need to style a single element differently.

---

## 2. **Internal CSS**  

CSS is written inside a `<style>` tag within the `<head>` section of the HTML document.

- Advantages:

  - Styles are centralized within the same file.
  - Good for single-page websites.

- Disadvantages:

  - Styles are limited to that specific HTML file.
  - Increases the size of the HTML file.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: green;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>This is internal CSS.</p>
</body>
</html>
```

**Use Case:**  
For styling a single document without affecting others.

---

## 3. **External CSS**  

CSS is written in a separate `.css` file and linked to the HTML file using the `<link>` tag , The link element should be placed within the head of the html .

- Advantages:

  - Keeps HTML and CSS separate (Separation of Concerns).
  - Easier to maintain and reuse styles across multiple pages.
  - Reduces HTML file size.

- Disadvantages:

  - Requires an additional HTTP request (can affect loading time if not optimized).
  - Will not work without an internet connection if the CSS is hosted externally.

**Example:**  
**style.css:**

```css
p {
    color: red;
    font-size: 16px;
}
```

**index.html:**

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p>This is external CSS.</p>
</body>
</html>
```

**Use Case:**  
For large websites where you want to apply the same style across multiple pages. It promotes better organization and easier maintenance.

---

## Bonus: **CSS Import**  

You can also import one CSS file into another using `@import`.

**Example (inside a CSS file):**

```css
@import url('another-style.css');
```

---
