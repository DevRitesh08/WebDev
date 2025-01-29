# List and Interlinking of Web Pages

This document explains the use of various lists and how to interlink web pages using HTML. Examples and code snippets are included for each section, along with their outputs.

## Lists in HTML

Lists are used to group related items. HTML provides three types of lists:

### 1. Ordered List (`<ol>`)

Ordered lists display items in a sequential order using numbers or letters.

#### Example

```html
<h2>Ordered List</h2>
<ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
</ol>
```

#### Output

1. One
2. Two
3. Three
4. Four

#### Types of Ordered Lists

You can use the `type` attribute to specify the style of numbering.

```html
<h3>Types of Ordered Lists</h3>
<ol>
    <li type="1">Type 1: One</li> <!-- Default numeric type -->
    <li type="A">Type A: Two</li> <!-- Uppercase letters -->
    <li type="a">Type a: Three</li> <!-- Lowercase letters -->
    <li type="I">Type I: Four</li> <!-- Uppercase Roman -->
    <li type="i">Type i: Five</li> <!-- Lowercase Roman -->
</ol>
```

#### output

1. Type 1: One
2. Type A: Two
3. Type a: Three
4. Type I: Four
5. Type i: Five

### 2. Unordered List (`<ul>`)

Unordered lists display items with bullet points.

#### example

```html
<h2>Unordered List</h2>
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
</ul>
```

#### Output-

- One
- Two
- Three
- Four

#### Types of Unordered Lists

Use `style="list-style-type: ...;"` to customize the bullet style.

```html
<h3>Types of Unordered Lists</h3>
<ul>
    <li style="list-style-type: circle;">Circle: One</li>
    <li style="list-style-type: square;">Square: Two</li>
    <li style="list-style-type: none;">None: Three</li>
    <li style="list-style-type: disc;">Disc (default): Four</li>
</ul>
```

#### Output_

- ◦ Circle: One
- ■ Square: Two
- None: Three
- ● Disc (default): Four

### 3. Description List (`<dl>`)

Description lists are used to define terms and their descriptions.

#### Example-

```html
<h2>Description List</h2>
<dl>
    <dt>HTML</dt>
    <dd>Hyper Text Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
    <dt>JS</dt>
    <dd>JavaScript</dd>
    <dt>Random Data</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</dd>
</dl>
```

#### Output->

- **HTML**: Hyper Text Markup Language
- **CSS**: Cascading Style Sheets
- **JS**: JavaScript
- **Random Data**: Lorem ipsum dolor sit amet, consectetur adipisicing elit.

## Interlinking Web Pages

Interlinking is the process of connecting different web pages or resources using hyperlinks (`<a>` tag).

### External Links

Use `href` with the target URL to link to external websites. The `target="_blank"` attribute opens the link in a new tab.

#### Example_

```html
<a href="https://chatgpt.com/" target="_blank">ChatGPT</a><br>
<a href="https://web.dev/" target="_blank">WebDev</a><br>
<a href="https://www.w3schools.com/" target="_blank">W3Schools</a><br>
```

#### Output :-

- [ChatGPT](https://chatgpt.com/)
- [WebDev](https://web.dev/)
- [W3Schools](https://www.w3schools.com/)

### Internal Links

Use relative paths to link to pages within the same website.

#### Example :-

```html
<a href="lecture_5_.html" target="_blank">Lecture 5</a><br>
```

#### Output  :-

- [Lecture 5](lecture_5_.html)

### Email Links

Use the `mailto:` prefix to create a link for sending an email.

#### Example  :-

```html
<a href="mailto:riteshswami4567@gmail.com" target="_blank">Send an Email</a><br>
```

#### Output'

- [Send an Email](mailto:riteshswami4567@gmail.com)

### Telephone Links

Use the `tel:` prefix to create a link for making a phone call.

#### Example'

```html
<a href="tel:+919982362795" target="_blank">Call Me</a><br>
```

#### Output''

- [Call Me](tel:+919982362795)

### Downloadable File

Use the `download` attribute to allow users to download a file.

#### Example''

```html
<a href="/HTML/Notes.md/Emmet and Speedy HTML .md" download>Download Notes</a>
```

#### Output"

- [Download Notes](/HTML/Notes.md/Emmet%20and%20Speedy%20HTML%20.md)

## Full HTML Code

Here is the complete code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List and Interlinking of Web Pages</title>
</head>
<body>
    <h1>List and Interlinking Web Pages</h1>

    <section>
        <h1>List</h1>
        <h2>Ordered List</h2>
        <ol>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
        </ol>

        <h3>Types of Ordered Lists</h3>
        <ol>
            <li type="1">Type 1: One</li>
            <li type="A">Type A: Two</li>
            <li type="a">Type a: Three</li>
            <li type="I">Type I: Four</li>
            <li type="i">Type i: Five</li>
        </ol>

        <h2>Unordered List</h2>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
        </ul>

        <h3>Types of Unordered Lists</h3>
        <ul>
            <li style="list-style-type: circle;">Circle: One</li>
            <li style="list-style-type: square;">Square: Two</li>
            <li style="list-style-type: none;">None: Three</li>
            <li style="list-style-type: disc;">Disc (default): Four</li>
        </ul>

        <h2>Description List</h2>
        <dl>
            <dt>HTML</dt>
            <dd>Hyper Text Markup Language</dd>
            <dt>CSS</dt>
            <dd>Cascading Style Sheets</dd>
            <dt>JS</dt>
            <dd>JavaScript</dd>
            <dt>Random Data</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</dd>
        </dl>
    </section>

    <section>
        <h1>Interlinking Web Pages</h1>
        <a href="https://chatgpt.com/" target="_blank">ChatGPT</a><br>
        <a href="https://web.dev/" target="_blank">WebDev</a><br>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a><br>

        <a href="lecture_5_.html" target="_blank">Lecture 5</a><br>

        <a href="mailto:riteshswami4567@gmail.com" target="_blank">Send an Email</a><br>
        <a href="tel:+919982362795" target="_blank">Call Me</a><br>

        <a href="/HTML/Notes.md/Emmet and Speedy HTML .md" download target="_blank">Download Notes</a>
    </section>
</body>
</html>
```
