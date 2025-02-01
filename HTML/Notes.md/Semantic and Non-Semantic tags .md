
# **1. Semantic Tags**

Semantic HTML tags provide meaningful structure and context to a webpage. They describe the role of content, making it easier for developers, search engines, and assistive technologies (such as screen readers) to understand the content.

---

## **1.1 `<article>`**

An `<article>` tag represents a self-contained unit of content that could be distributed or reused independently (e.g., blog posts, news articles). It's often used for pieces of content that are not necessarily tied to the rest of the page.

**Attributes**:

- `lang`: Specifies the language of the article content.
- `title`: Provides a title for the article.

**Example**:

```html
<article lang="en" title="Introduction to HTML">
    <h2>What is HTML?</h2>
    <p>HTML stands for Hypertext Markup Language...</p>
</article>
```

---

## **1.2 `<section>`**

The `<section>` tag defines a section of content, typically with its own heading. It is used to group related content together.

**Attributes**:

- `id`: Assigns a unique identifier to the section.
- `class`: Defines the CSS class for styling purposes.

**Example**:

```html
<section id="about" class="content-section">
    <h2>About Us</h2>
    <p>We are a tech company focused on innovation...</p>
</section>
```

---

## **1.3 `<nav>`**

The `<nav>` tag is used to define navigation links that help users navigate to different sections or pages of the website.

**Attributes**:

- `aria-label`: Provides a label for the navigation to improve accessibility.

**Example**:

```html
<nav aria-label="Main Navigation">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
```

---

## **1.4 `<header>`**

The `<header>` tag represents the header content of a document or section, typically containing introductory content or navigational links.

**Attributes**:

- `role`: Defines the role of the header (e.g., `banner` for the page header).
- `aria-label`: Improves accessibility by labeling the header.

**Example**:

```html
<header role="banner" aria-label="Website Header">
    <h1>My Website</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
</header>
```

---

## **1.5 `<footer>`**  

The `<footer>` tag defines the footer content of a document or section, typically containing author information, copyright details, or related documents.

**Attributes**:

- `role`: Defines the role of the footer (e.g., `contentinfo` for page footer).
- `aria-labelledby`: Points to an element that provides a label for the footer.

**Example**:

```html
<footer role="contentinfo">
    <p>© 2025 My Company. All rights reserved.</p>
    <p><a href="#privacy-policy">Privacy Policy</a></p>
</footer>
```

---

## **1.6 `<aside>`**  

The `<aside>` tag represents content that is tangentially related to the content around it, often placed as sidebars or pull quotes.

**Attributes**:

- `aria-label`: Provides a label for the aside section for accessibility.

**Example**:

```html
<aside aria-label="Related Articles">
    <h3>Related Articles</h3>
    <ul>
        <li><a href="#article1">Article 1</a></li>
        <li><a href="#article2">Article 2</a></li>
    </ul>
</aside>
```

---

## **1.7 `<main>`**  

The `<main>` tag defines the **primary content** of the document. There should only be one `<main>` tag in a document, and it should not contain headers, footers, or sidebars.

**Attributes**:

- `role`: Defines the main role of the content (e.g., `main`).

**Example**:

```html
<main role="main">
    <h2>Welcome to Our Website</h2>
    <p>This is the main content of the page...</p>
</main>
```

---

## **HTML and Project Structure**

![alt text](<Screenshot 2025-01-30 225252.png>)

# **2. Non-Semantic Tags**

Non-semantic tags don't provide any specific meaning about the content within them. They are used mostly for styling, grouping elements, and structuring the layout.

---

## **2.1 `<div>`**  

The `<div>` tag is a generic container used to group content. It has no semantic meaning but is useful for structuring and styling.

**Attributes**:

- `id`: Assigns a unique identifier to the `div`.
- `class`: Defines the CSS class for styling.

**Example**:

```html
<div class="container">
    <h2>Welcome to My Website</h2>
    <p>Here is some introductory text...</p>
</div>
```

---

## **2.2 `<span>`**  

The `<span>` tag is an inline container used to group inline elements or text for styling purposes.

**Attributes**:

- `class`: Assigns a CSS class for styling.
- `style`: Applies inline styles directly to the element.

**Example**:

```html
<p>The <span style="color:blue">quick brown fox</span> jumped over the lazy dog.</p>
```

---

## **2.3 `<b>`**  

The `<b>` tag represents bold text without any emphasis or importance. Use `<strong>` if you want to indicate importance.

**Attributes**:

- No attributes commonly used for `<b>`.

**Example**:

```html
<b>This is bold text without semantic meaning.</b>
```

---

## **2.4 `<i>`**  

The `<i>` tag represents italic text without indicating any special emphasis. Use `<em>` for text that should be emphasized.

**Attributes**:

- No attributes commonly used for `<i>`.

**Example**:

```html
<i>This is italic text without semantic meaning.</i>
```

---

## **Key Differences Between Semantic and Non-Semantic Tags**

| **Semantic Tags**                 | **Non-Semantic Tags**             |
|-----------------------------------|-----------------------------------|
| Describes the **meaning** of the content | Provides **no specific meaning** about the content |
| Improves **SEO** and **accessibility** | Primarily used for **layout** and **styling** |
| Makes the HTML more **readable** and **structured** | Makes HTML more **flexible** but harder to understand without context |
| **Examples**: `<article>`, `<section>`, `<header>`, `<footer>`, `<main>`, `<nav>` | **Examples**: `<div>`, `<span>`, `<b>`, `<i>` |

## **Conclusion**

- **Semantic tags** should be used wherever possible as they provide structure and meaning to the content, improve SEO, and are more accessible.
- **Non-semantic tags** like `<div>` and `<span>` are useful for styling and layout but do not communicate the content's meaning.
