# **Display Property**

## **Common Values of `display` Property**  

## 1. **`block`**  

- The element takes up the full width available.  
- Starts on a new line.  
- Examples: `<div>`, `<p>`, `<h1>`, `<section>`, etc.  

   ```css
   span {
       display: block;
       background: lightblue;
       padding: 10px;
   }
   ```

   Example:  

   ```html
   <span>This inline element is now block.</span>
   <span>Another block-level span.</span>
   ```

   💡 These `<span>` elements will now behave like block elements and appear one below the other.

---

## 2. **`inline`**  

- The element takes up only as much width as needed.  
- Does not start on a new line.  
- Examples: `<span>`, `<a>`, `<strong>`, etc.  

   ```css
   div {
       display: inline;
       background: lightcoral;
       padding: 10px;
   }
   ```

   Example:  

   ```html
   <div>This block element is now inline.</div>
   <div>Another inline div.</div>
   ```

   💡 These `<div>` elements will now appear next to each other.

---

## 3. **`inline-block`**  

- Behaves like `inline`, but allows setting width and height.  
- Elements appear next to each other but respect width and height properties.  

   ```css
   button {
       display: inline-block;
       width: 120px;
       height: 50px;
       background: lightgreen;
   }
   ```

   Example:  

   ```html
   <a href="#" class="button">Click Me</a>
   <a href="#" class="button">Another Button</a>
   ```

   💡 Unlike `inline`, `inline-block` allows setting width and height.

---

## 5. **`hidden` (HTML Global Attribute)**  

- The `hidden` attribute **hides** an element but does not remove it from the DOM.  
- Unlike `display: none;`, it is an HTML **global attribute**.  

   ```html
   <p hidden>This paragraph is hidden.</p>
   <p>This paragraph is visible.</p>
   ```

   💡 The first paragraph **won't be visible**, similar to `display: none;`, but can be shown using JavaScript.

---

## 6. **`none`**  

- The element is completely removed from the page (not displayed at all).  

   ```css
   .hidden {
       display: none;
   }
   ```

   Example:  

   ```html
   <p class="hidden">This text is hidden.</p>
   <p>This text is visible.</p>
   ```

   💡 The first `<p>` **disappears completely**, while the second one remains.

---

## 7. **`flex`**  

- Turns an element into a **flex container**, enabling flexible layouts.  

   ```css
   .container {
       display: flex;
       gap: 10px;
   }
   .box {
       width: 100px;
       height: 100px;
       background: orange;
   }
   ```

   Example:  

   ```html
   <div class="container">
       <span class="box">1</span>
       <span class="box">2</span>
       <span class="box">3</span>
   </div>
   ```

   💡 The `.box` elements **align in a row** instead of stacking vertically.

---

## 8. **`grid`**  

- Turns an element into a **grid container**, allowing a structured layout.  

   ```css
   .grid-container {
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: 10px;
   }
   .box {
       background: violet;
       padding: 20px;
   }
   ```

   Example:  

   ```html
   <div class="grid-container">
       <span class="box">Box 1</span>
       <span class="box">Box 2</span>
   </div>
   ```

   💡 The boxes **align in a 2-column grid** instead of stacking.

---

## **Conclusion**  

The `display` property plays a crucial role in structuring web pages. Understanding how different values affect element behavior helps create responsive, well-organized layouts. Additionally, the `hidden` attribute provides a quick way to hide elements without using CSS.
