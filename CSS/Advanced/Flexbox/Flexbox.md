# **Flexbox**

## 1. Introduction

**What is Flexbox?**  
Flexbox (Flexible Box Layout) is a one-dimensional layout module in CSS designed to distribute space and align items within a container even when their sizes are dynamic or unknown. It streamlines the creation of responsive layouts and simplifies vertical and horizontal alignment.

**Why Use Flexbox?**  

- **Responsive Layouts:** Easily adapts to various screen sizes.  
- **Simplified Alignment:** Provides powerful properties like `justify-content` and `align-items` for aligning items along the main and cross axes, respectively.  
- **Dynamic Sizing:** Allows flex items to grow or shrink based on available space.  
- **Cleaner Code:** Reduces the need for floats and complex CSS positioning.

---

## 2. Core Concepts of Flexbox

**Flex Container & Flex Items:**  

- A container becomes a flex container when you set its `display` property to `flex` or `inline-flex`.  
- All direct children of a flex container are automatically flex items.

**Main Axis and Cross Axis:**  

- **Main Axis:** Determined by the `flex-direction` property (e.g., `row` or `column`). Flex items are laid out along this axis.  
- **Cross Axis:** Perpendicular to the main axis. When `flex-direction` is `row`, the cross axis is vertical; when `column`, it is horizontal.

**Example Setup:**  

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>
```

```css
.flex-container {
  display: flex;        /* Establishes a flex container */
  flex-direction: row;  /* Items laid out horizontally (default) */
}
```

---

## 3. Flex Container Properties

### 3.1. `flex-direction`

- **Purpose:** Sets the direction of the main axis.
- **Values:**  
  - `row` (default): Left to right.  
  - `row-reverse`: Right to left.  
  - `column`: Top to bottom.  
  - `column-reverse`: Bottom to top.
- **Example:**

  ```css
  .flex-container {
    display: flex;
    flex-direction: column;
  }
  ```

### 3.2. `justify-content`

- **Purpose:** Aligns flex items along the main axis.
- **Common Values:**  
  - `flex-start`: Items are packed at the start.  
  - `flex-end`: Items are packed at the end.  
  - `center`: Items are centered.  
  - `space-between`: Items are evenly distributed with the first item at the start and the last at the end.  
  - `space-around`: Items are distributed with equal space around them.  
  - `space-evenly`: Items are evenly spaced with equal space between.
- **Example:**

  ```css
  .flex-container {
    justify-content: space-evenly;
  }
  ```

### 3.3. `align-items`

- **Purpose:** Aligns flex items along the cross axis.
- **Common Values:**  
  - `stretch` (default): Items stretch to fill the container.  
  - `flex-start`: Items align at the start of the cross axis.  
  - `flex-end`: Items align at the end.  
  - `center`: Items are centered.  
  - `baseline`: Items align along their text baselines.
- **Example:**

  ```css
  .flex-container {
    align-items: center;
  }
  ```

### 3.4. `flex-wrap`

- **Purpose:** Determines whether flex items should wrap onto multiple lines.
- **Values:**  
  - `nowrap` (default): All items remain on one line.  
  - `wrap`: Items wrap onto multiple lines.  
  - `wrap-reverse`: Items wrap onto multiple lines in reverse order.
- **Example:**

  ```css
  .flex-container {
    flex-wrap: wrap;
  }
  ```

### 3.5. `align-content`

- **Purpose:** Aligns the flex lines when there is extra space on the cross axis (only applicable when items wrap).
- **Common Values:**  
  - `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch` (default).
- **Example:**

  ```css
  .flex-container {
    align-content: space-around;
  }
  ```

---

## 4. Flex Item Properties

Each flex item can be individually controlled using properties that dictate its behavior within the container.

### 4.1. `order`

- **Purpose:** Specifies the order of the flex items.  
- **Default:** `0` (items with lower values appear first).
- **Example:**

  ```css
  .flex-item:nth-child(1) {
    order: 2;
  }
  .flex-item:nth-child(2) {
    order: 1;
  }
  ```

### 4.2. `flex-grow`

- **Purpose:** Determines how much a flex item should grow relative to the others.
- **Default:** `0` (do not grow).
- **Example:**

  ```css
  .flex-item {
    flex-grow: 1;
  }
  ```

### 4.3. `flex-shrink`

- **Purpose:** Specifies how much a flex item should shrink if necessary.
- **Default:** `1` (items shrink to fit).
- **Example:**

  ```css
  .flex-item {
    flex-shrink: 1;
  }
  ```

### 4.4. `flex-basis`

- **Purpose:** Sets the initial main size of a flex item before extra space is distributed.
- **Example:**

  ```css
  .flex-item {
    flex-basis: 200px;
  }
  ```

### 4.5. Shorthand `flex`

- **Purpose:** A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
- **Example:**

  ```css
  .flex-item {
    flex: 1 1 200px; /* flex-grow:1; flex-shrink:1; flex-basis:200px */
  }
  ```

### 4.6. `align-self`

- **Purpose:** Overrides the container's `align-items` value for individual flex items.
- **Values:** Similar to `align-items` (e.g., `center`, `flex-start`).
- **Example:**

  ```css
  .flex-item.special {
    align-self: flex-end;
  }
  ```

---

## 5. Sample Code Explanation

Consider the following HTML and CSS that illustrate a basic Flexbox layout using a column direction, with even spacing and centered alignment:

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Example</title>
  <link rel="stylesheet" href="1_Flexbox.css">
</head>
<body>
  <div id="box">
    <div id="item1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, facere!</div>
    <div id="item2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique!</div>
    <div id="item3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
  </div>
</body>
</html>
```

**CSS (1_Flexbox.css):**

```css
/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
}

/* Flex Container */
#box {
  display: flex;                  /* Enable Flexbox */
  flex-direction: column;         /* Arrange items in a column */
  justify-content: space-evenly;   /* Evenly distribute space along the main (vertical) axis */
  align-items: center;             /* Center items along the cross (horizontal) axis */
  width: 500px;
  height: 500px;
  background-color: red;
}

/* Flex Items */
#item1, #item2, #item3 {
  width: 120px;
  height: 120px;
}

#item1 {
  background-color: green;
}

#item2 {
  background-color: blue;
}

#item3 {
  background-color: palevioletred;
}
```

**Explanation:**  

- The `#box` element is the flex container. Setting `display: flex` makes its direct children flex items.  
- With `flex-direction: column`, the items are stacked vertically.  
- The `justify-content: space-evenly` property distributes the items with equal space between them along the vertical axis, and `align-items: center` centers them horizontally.  
- Each flex item has fixed dimensions and distinct background colors for visual clarity.

---

## 6. Additional Flexbox Considerations

- **One-Dimensional Layout:** Flexbox manages layout in a single direction (either row or column). For two-dimensional layouts, CSS Grid is recommended.
- **Browser Support:** Modern browsers support Flexbox widely; check for vendor prefixes if targeting very old browsers.
- **Debugging:** Use browser developer tools (which often include Flexbox inspectors) to visualize spacing and alignment.

---

## 7. Pseudo-Elements and Pseudo-Classes in CSS

While not exclusive to Flexbox, pseudo-elements and pseudo-classes are essential CSS features that can be used alongside Flexbox to enhance the styling and interactivity of elements.

### 7.1. Pseudo-Elements

**What They Are:**  
Pseudo-elements allow you to style specific parts of an element without having to add extra markup. They are useful for inserting content or targeting specific parts (like the first letter or line) of an element.

**Key Pseudo-Elements:**

- **`::before` and `::after`:**  
  - **Usage:** Insert generated content before or after an element’s content.  
  - **Requirement:** Must include the `content` property.  
  - **Example:**

    ```css
    .flex-item::before {
      content: "Prefix: ";
      color: grey;
    }
    .flex-item::after {
      content: " :Suffix";
      color: grey;
    }
    ```

- **`::first-line`:**  
  - **Usage:** Style the first line of text in a block-level element.  
  - **Example:**

    ```css
    p::first-line {
      font-weight: bold;
      color: darkblue;
    }
    ```

- **`::first-letter`:**  
  - **Usage:** Style the first letter of a block of text.  
  - **Example:**

    ```css
    p::first-letter {
      font-size: 2em;
      color: red;
    }
    ```

- **`::selection`:**  
  - **Usage:** Style the portion of an element that is selected by the user (highlighted).  
  - **Example:**

    ```css
    ::selection {
      background-color: yellow;
      color: black;
    }
    ```

### 7.2. Pseudo-Classes

**What They Are:**  
Pseudo-classes target elements based on their state or position in the document, enabling dynamic styling without extra classes.

**Common Pseudo-Classes:**

- **`:hover`:**  
  - **Usage:** Styles an element when the user hovers over it with a pointer.
  - **Example:**

    ```css
    .flex-item:hover {
      background-color: #ccc;
    }
    ```

- **`:active`:**  
  - **Usage:** Styles an element at the moment it is being activated (e.g., when it is clicked).
  - **Example:**

    ```css
    .flex-item:active {
      transform: scale(0.98);
    }
    ```

- **`:focus`:**  
  - **Usage:** Applies styling when an element (like a link or form input) has focus.
  - **Example:**

    ```css
    .flex-item:focus {
      outline: 2px solid orange;
    }
    ```

- **`:nth-child(n)`:**  
  - **Usage:** Selects one or more elements based on their source order (position among siblings).
  - **Example:**

    ```css
    .flex-item:nth-child(2) {
      border: 2px solid blue;
    }
    ```

---

## 8. Integration with Other CSS Features

- **Combining Flexbox with Pseudo-Selectors:**  
  Flex items can be enhanced with pseudo-classes (e.g., `:hover`, `:active`) for interactive effects or with pseudo-elements (e.g., `::before`, `::after`) to insert decorative content.  
- **Responsive and Adaptive Design:**  
  Use Flexbox together with relative units (like `%`, `vw`, `vh`, `em`, and `rem`) to create layouts that adjust smoothly to different devices.

---

## 9. Summary

- **Flexbox** is a one-dimensional layout system that simplifies alignment and distribution of space among items within a container.  
- **Key Properties:**  
  - **For Containers:** `display`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`, and `align-content`.  
  - **For Items:** `order`, `flex-grow`, `flex-shrink`, `flex-basis`, the shorthand `flex`, and `align-self`.
- **Axes:**  
  - The **main axis** (controlled by `flex-direction` and `justify-content`) and the **cross axis** (controlled by `align-items`) allow precise control over layout.
- **Additional CSS Features:**  
  - **Pseudo-elements** (such as `::before`, `::after`, `::first-line`, `::first-letter`, `::selection`) and **pseudo-classes** (such as `:hover`, `:active`, `:focus`, `:nth-child(n)`) further enhance styling and interactivity.
- **Use Cases:**  
  Flexbox is ideal for creating responsive, flexible layouts without complex floats or positioning, while pseudo-selectors add depth to interactive and detailed styling.
