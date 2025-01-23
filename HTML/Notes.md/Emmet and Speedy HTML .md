# **Complete Guide to Emmet and Speedy HTML**

---

## **What is Emmet?**

Emmet is a powerful tool integrated into modern code editors to speed up HTML and CSS writing. It uses **abbreviations** and shortcuts to expand complex HTML structures instantly. This makes coding faster and reduces repetitive typing.

---

## **How to Use Emmet in HTML?**

### **1. Basics of Emmet Syntax**

1. **Tag Creation**:  
   Write the tag name, and Emmet generates the full HTML element.  
   - Input: `div`  
   - Output:  

     ```html
     <div></div>
     ```

2. **ID and Class**:  
   Use `#` for IDs and `.` for classes.  
   - Input: `div#main.container`  
   - Output:  

     ```html
     <div id="main" class="container"></div>
     ```

3. **Text Content**:  
   Use `{}` to insert text into an element.  
   - Input: `h1{Welcome to Emmet}`  
   - Output:  

     ```html
     <h1>Welcome to Emmet</h1>
     ```

---

## **2. Parent-Child and Sibling Relationships**

1. **Parent-Child (`>`)**:  
   Use `>` to create a child element inside a parent.  
   - Input: `div>p`  
   - Output:  

     ```html
     <div>
         <p></p>
     </div>
     ```

2. **Sibling (`+`)**:  
   Use `+` to create sibling elements.  
   - Input: `h1+h2+p`  
   - Output:  

     ```html
     <h1></h1>
     <h2></h2>
     <p></p>
     ```

3. **Grouping (`()`)**:  
   Use parentheses for complex structures.  
   - Input: `div>(header>h1)+footer`  
   - Output:  

     ```html
     <div>
         <header>
             <h1></h1>
         </header>
         <footer></footer>
     </div>
     ```

---

## **3. Repetition and Numbering**

1. **Repeating Elements (`*`)**:  
   Use `*` to repeat elements multiple times.  
   - Input: `ul>li*3`  
   - Output:  

     ```html
     <ul>
         <li></li>
         <li></li>
         <li></li>
     </ul>
     ```

2. **Numbering (`$`)**:  
   Use `$` for automatic numbering.  
   - Input: `ul>li*3{Item $}`  
   - Output:  

     ```html
     <ul>
         <li>Item 1</li>
         <li>Item 2</li>
         <li>Item 3</li>
     </ul>
     ```

---

## **4. Attributes**

1. **Adding Attributes (`[]`)**:  
   Add custom attributes using square brackets.  
   - Input: `a[href="https://example.com" target="_blank"]`  
   - Output:  

     ```html
     <a href="https://example.com" target="_blank"></a>
     ```

2. **Attributes with Text**:  
   Combine attributes and text in an element.  
   - Input: `a[href="https://example.com"]{Visit Site}`  
   - Output:  

     ```html
     <a href="https://example.com">Visit Site</a>
     ```

---

## **5. Advanced Nesting**

1. **Complex Structures**:  
   Use multiple features together for nested layouts.  
   - Input: `div#container>ul>li*3>a[href="#"]{Link $}`  
   - Output:  

     ```html
     <div id="container">
         <ul>
             <li><a href="#">Link 1</a></li>
             <li><a href="#">Link 2</a></li>
             <li><a href="#">Link 3</a></li>
         </ul>
     </div>
     ```

2. **Multiple Classes and IDs**:  
   Add multiple classes and IDs simultaneously.  
   - Input: `div#main.class1.class2`  
   - Output:  

     ```html
     <div id="main" class="class1 class2"></div>
     ```

---

## **6. HTML Boilerplate**

1. **Basic Boilerplate (`!`)**:  
   Generate a complete HTML document structure instantly.  
   - Input: `!`  
   - Output:  

     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
     </head>
     <body>
     </body>
     </html>
     ```

2. **Custom Boilerplate**:  
   Add elements inside the boilerplate.  
   - Input: `!>div#app`  
   - Output:  

     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
     </head>
     <body>
         <div id="app"></div>
     </body>
     </html>
     ```

---

## **7. Practical Examples**

1. **Navigation Bar**  
   - Input: `nav>ul>li*3>a[href="#"]{Menu $}`  
   - Output:  

     ```html
     <nav>
         <ul>
             <li><a href="#">Menu 1</a></li>
             <li><a href="#">Menu 2</a></li>
             <li><a href="#">Menu 3</a></li>
         </ul>
     </nav>
     ```

2. **Image Gallery**  
   - Input: `div.gallery>img[src="img$.jpg"]*3`  
   - Output:  

     ```html
     <div class="gallery">
         <img src="img1.jpg">
         <img src="img2.jpg">
         <img src="img3.jpg">
     </div>
     ```

3. **Contact Form**  
   - Input: `form>label+input[type="text" placeholder="Name"]+label+input[type="email" placeholder="Email"]+button{Submit}`  
   - Output:  

     ```html
     <form>
         <label></label>
         <input type="text" placeholder="Name">
         <label></label>
         <input type="email" placeholder="Email">
         <button>Submit</button>
     </form>
     ```

---

## **Key Operators in Emmet**

- **`>`**: Parent-Child relationship.  
- **`+`**: Sibling relationship.  
- **`*`**: Repetition of elements.  
- **`{}`**: Text inside an element.  
- **`[]`**: Attributes for elements.  
- **`()`**: Grouping for complex structures.  

---

### **Why Use Emmet?**

- Saves time with complex HTML structures.  
- Simplifies repetitive coding tasks.  
- Easy to learn and integrate into modern editors like VSCode or Zed.
