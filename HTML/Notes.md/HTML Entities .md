# **HTML Entities**

**HTML Entities** are special codes used to display reserved characters or symbols that would otherwise be interpreted as part of HTML. They ensure proper rendering of characters that have specific meanings in HTML or are not directly available on the keyboard.

---

## **Why Use HTML Entities?**

1. **Reserved Characters**: Some characters, like `<`, `>`, and `&`, are reserved in HTML because they are part of the markup syntax.  
   Example: `<` is used to open a tag. If you want to display `<` as text, you must use an entity.

2. **Special Symbols**: Characters like `©`, `®`, or mathematical symbols might not be supported by all keyboards or encodings.

3. **Non-breaking Spaces**: Used to prevent text from breaking or wrapping at certain points.

---

## **Syntax**

HTML entities start with an ampersand (`&`) and end with a semicolon (`;`).

```html
&entity_name;
OR
&#entity_number;
```

---

## **Common HTML Entities**

| **Entity Name** | **Character** | **Entity Code** | **Description**         |
|------------------|---------------|------------------|-------------------------|
| `&lt;`          | `<`           | `&#60;`         | Less than               |
| `&gt;`          | `>`           | `&#62;`         | Greater than            |
| `&amp;`         | `&`           | `&#38;`         | Ampersand               |
| `&quot;`        | `"`           | `&#34;`         | Double quotation mark   |
| `&apos;`        | `'`           | `&#39;`         | Single quotation mark   |
| `&nbsp;`        |               | `&#160;`        | Non-breaking space      |
| `&copy;`        | `©`           | `&#169;`        | Copyright symbol        |
| `&reg;`         | `®`           | `&#174;`        | Registered trademark    |
| `&euro;`        | `€`           | `&#8364;`       | Euro sign               |

---

## **Example Usage**

1. Displaying Reserved Characters:

   ```html
   <p>Use &lt;h1&gt; for headings.</p>
   <!-- Output: Use <h1> for headings. -->
   ```

2. Special Symbols:

   ```html
   <p>Copyright &copy; 2025 MyWebsite.</p>
   <!-- Output: Copyright © 2025 MyWebsite. -->
   ```

3. Non-breaking Space:

   ```html
   <p>First&nbsp;Second&nbsp;Third</p>
   <!-- Prevents line breaks between "First", "Second", and "Third". -->
   ```
