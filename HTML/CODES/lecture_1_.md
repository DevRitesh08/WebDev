# **HTML Boilerplate**

1. **`<!DOCTYPE html>`**

   - This declaration defines the document type and version of HTML (HTML5 in this case). It ensures that the browser renders the document in standards mode.

2. **`<html lang="en">`**:

   - The `<html>` element is the root of the HTML document.
   - The `lang="en"` attribute specifies the language of the document (English in this case) for accessibility and SEO.

3. **`<head>`**:
   - Contains meta-information (metadata) about the HTML document, such as character encoding, viewport settings, and the document title.

4. **`<meta charset="UTF-8">`**:
   - Specifies the character encoding for the document (UTF-8 supports most characters, including special symbols).

5. **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**:
   - Ensures the webpage is responsive by adjusting its layout to fit different screen sizes (e.g., mobile, tablet, desktop).

6. **`<title>`**:
   - Defines the title of the HTML document, which is displayed on the browser tab.

---

## **HTML and Project Structure**

![alt text](<Screenshot 2025-01-30 225252.png>)

## **Body Section**

The `<body>` contains the content displayed on the web page.

1. **Headings**:
   - `<h1>` to `<h6>` define headings, with `<h1>` being the largest and most important.
   - Example:

     ```html
     <h1>Main Heading</h1>
     <h2>Subheading</h2>
     ```

2. **Paragraph and Dummy Text**:
   - `<h3>` is used here to display a block of dummy text.
   - Dummy text like `Lorem ipsum` is often used for layout testing and design.

3. **Images**:
   - `<img>`: Used to display images on the web page. It is a self-closing tag.
   - Attributes:
     - `src`: Specifies the source of the image (URL or local file path).
     - `alt`: Alternate text displayed if the image fails to load (important for accessibility and SEO).
   - Example:

     ```html
     <img src="https://example.com/image.jpg" alt="Sample Image">
     ```

4. **HTML Reserved Symbols**:
   - Some symbols (`<`, `>`, `&`, etc.) have special meanings in HTML and must be escaped using entities.
   - Entities allow these symbols to be displayed as content.
   - Common Entities:
     - `&lt;` for `<`
     - `&gt;` for `>`
     - `&amp;` for `&`
     - `&quot;` for `"`
     - `&apos;` for `'`
   - Example:

     ```html
     <p>Less than: &lt;, Greater than: &gt;</p>
     ```

## Commonly Used Reserved Symbols and Their Entities

Here’s how you can display reserved symbols in HTML:

| Symbol | Description        | Entity Name | Entity Number |
|--------|--------------------|-------------|---------------|
| `<`    | Less-than sign     | `&lt;`      | `&#60;`       |
| `>`    | Greater-than sign  | `&gt;`      | `&#62;`       |
| `&`    | Ampersand          | `&amp;`     | `&#38;`       |
| `"`    | Double quotation   | `&quot;`    | `&#34;`       |
| `'`    | Single quotation   | `&apos;`    | `&#39;`       |

## Why Use Entities?

1. **Avoid Misinterpretation:** Using `<` and `>` directly in content might confuse the browser, as it interprets them as HTML tags.
2. **Valid HTML:** Some symbols (like `&`) are required to be escaped in HTML to maintain proper structure.

---

## **Comments**

- HTML comments are written inside `<!-- ... -->` and are ignored by the browser.
- They are used to document the code for readability and maintainability.
- Example:

  ```html
  <!-- This is a comment -->
  ```
