# **What is Emmet?**

**Emmet** is a plugin for text editors and Integrated Development Environments (IDEs) that helps web developers write HTML and CSS faster using a shorthand syntax. It allows you to create boilerplate code and repetitive structures efficiently, making it a powerful tool for improving productivity.

---

## **Key Features of Emmet**

1. **Abbreviation Expansion**: Write short abbreviations, and Emmet expands them into full HTML or CSS code.  
   Example: Typing `div.container` expands to `<div class="container"></div>`.

2. **Multi-cursor Editing**: Modify multiple lines or elements simultaneously.

3. **Code Wrapping**: Wrap selected text in an HTML element.

4. **Custom Snippets**: Define your own abbreviations and expansions.

5. **Dynamic Values**: Use numbers or text that increase incrementally.

---

## **Basic Syntax for HTML**

| **Abbreviation**        | **Expands To**                                            |
|--------------------------|----------------------------------------------------------|
| `!`                     | Basic HTML boilerplate                                   |
| `ul>li*3`               | `<ul><li></li><li></li><li></li></ul>`                   |
| `div.container`         | `<div class="container"></div>`                          |
| `a[href="https://"]`    | `<a href="https://"></a>`                                |
| `img[src="image.jpg"]`  | `<img src="image.jpg" alt="">`                           |
| `form>input+button`     | `<form><input type="text"><button></button></form>`      |

---

## **Basic Syntax for CSS**

| **Abbreviation**  | **Expands To**              |
|--------------------|-----------------------------|
| `pos-a`           | `position: absolute;`       |
| `m0a`             | `margin: 0 auto;`           |
| `p10`             | `padding: 10px;`           |
| `w100`            | `width: 100px;`            |
| `d-b`             | `display: block;`          |

---

### **Example Use Cases**

1. **HTML Boilerplate**:
   - Abbreviation: `!`
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

2. **Creating a Navbar**:
   - Abbreviation: `nav>ul>li*3>a[href="#"]`
   - Output:  

     ```html
     <nav>
         <ul>
             <li><a href="#">Link</a></li>
             <li><a href="#">Link</a></li>
             <li><a href="#">Link</a></li>
         </ul>
     </nav>
     ```

3. **Image with Caption**:
   - Abbreviation: `figure>img[src="image.jpg"]+figcaption`
   - Output:  

     ```html
     <figure>
         <img src="image.jpg" alt="">
         <figcaption></figcaption>
     </figure>
     ```

---
