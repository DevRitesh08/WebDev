# **Class vs ID**

## **Class in HTML**

- **Purpose**:  
  The `class` attribute is used to group multiple HTML elements under the same classification for styling or scripting.

- **Key Features**:
  - **Reusable**: The same `class` can be applied to multiple elements.
  - **Multi-class Support**: An element can have multiple classes separated by spaces.

- **Syntax**:

  ```html
  <tag class="class-name">Content</tag>
  ```

- **Example**:

  ```html
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <p class="highlight">This is highlighted text.</p>
  ```

  Explanation:  
  - All elements with the `card` class can share the same styling or behavior.  
  - The `highlight` class applies specific styles to the paragraph.

---

## **ID in HTML**

- **Purpose**:  
  The `id` attribute uniquely identifies an HTML element.

- **Key Features**:
  - **Unique**: Each `id` value must be unique within the entire document.
  - **Specific Targeting**: Commonly used for targeting specific elements in CSS or JavaScript.

- **Syntax**:

  ```html
  <tag id="unique-id">Content</tag>
  ```

- **Example**:

  ```html
  <div id="header">Website Header</div>
  <div id="footer">Website Footer</div>
  ```

  Explanation:  
  - The `id="header"` is used for the specific header section.  
  - The `id="footer"` is unique to the footer section.

---

## **Differences Between Class and ID in HTML**

| **Aspect**          | **Class**                            | **ID**                              |
|----------------------|---------------------------------------|--------------------------------------|
| **Scope**            | Can be used on multiple elements.    | Must be unique per document.        |
| **Reusability**      | Reusable for grouping elements.      | Not reusable; designed for single use. |
| **Targeting**        | Used for styling and scripting groups of elements. | Targets a specific, unique element. |
| **Example Syntax**   | `<div class="box"></div>`            | `<div id="main"></div>`             |

---

## **When to Use Class vs ID in HTML**

- **Use Class**:
  - When you want to apply styles to a group of elements.  
  - Example: All buttons on a page share the same `class="btn"`.

- **Use ID**:
  - When you want to target a single, unique element.  
  - Example: `id="navbar"` for the navigation bar of a website.

---

### **Examples of Combined Use**

```html
<div id="header" class="main-section">Welcome to My Website</div>
<p class="highlight">This is important text.</p>
<p>This is normal text.</p>
```

- The `id="header"` uniquely identifies the header section.
- The `class="highlight"` styles only the important text.
- Normal text has no `class` or `id`.

---

**Conclusion**:  
In HTML, use `class` for grouping multiple elements and `id` for uniquely identifying single elements. Both are essential for organizing, styling, and scripting elements effectively.