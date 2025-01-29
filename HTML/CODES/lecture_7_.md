# HTML Tables and forms

## HTML Tables

Tables are used to organize data in rows and columns.

### 1. `<table>`

- **Description**: Defines a table structure.
- **Attributes**:
  - `border`: Sets the width of the table border.
  - `cellspacing`: Defines the space between table cells.
  - `cellpadding`: Specifies the padding inside cells.
  - `bgcolor`: Adds a background color to the table.
  - `align`: Aligns the table (`left`, `center`, `right`).
  - `width`: Specifies the width of the table.
- **Example**:

  ```html
  <table border="1" cellspacing="0" cellpadding="10" bgcolor="lightblue" width="80%" align="center">
      <!-- Table rows and data go here -->
  </table>
  ```

---

### 2. `<tr>`: Table Row

- **Description**: Represents a row in the table.
- **Example**:

  ```html
  <tr>
      <!-- Table header or data cells go here -->
  </tr>
  ```

---

### 3. `<th>`: Table Header

- **Description**: Defines header cells in the table, which are bold and center-aligned by default.
- **Example**:

  ```html
  <th>Header 1</th>
  ```

---

### 4. `<td>`: Table Data

- **Description**: Defines data cells in the table.
- **Attributes**:
  - `colspan`: Merges cells horizontally.
  - `rowspan`: Merges cells vertically.
  - `align`: Aligns the content of the cell (`left`, `center`, `right`).
- **Example**:

  ```html
  <td colspan="2" align="center">Merged Cell</td>
  ```

---

### Full Table Example

```html
<table border="1" cellspacing="0" cellpadding="10" bgcolor="lightblue" width="80%" align="center">
    <tr>
        <th>Sr. No</th>
        <th>Subject 1</th>
        <th>Subject 2</th>
        <th>Subject 3</th>
        <th>Subject 4</th>
    </tr>
    <tr>
        <td>1</td>
        <td colspan="2" align="center">English</td>
        <td align="center">Biology</td>
        <td align="center">OOPs</td>
    </tr>
    <tr>
        <td>2</td>
        <td align="center">OOPs</td>
        <td align="center">Maths</td>
        <td align="center">Biology</td>
        <td align="center">English</td>
    </tr>
    <tr>
        <td>3</td>
        <td align="center">Maths</td>
        <td align="center">English</td>
        <td align="center">OOPs</td>
        <td rowspan="2" align="center">Biology</td>
    </tr>
    <tr>
        <td>4</td>
        <td align="center">OOPs</td>
        <td align="center">Biology</td>
        <td align="center">Maths</td>
    </tr>
</table>
```

---

## HTML Forms

Forms allow user input to be collected and submitted to a server.

### 1. `<form>`

- **Description**: Defines the form container , The `<form>` element is the foundation of an HTML form, used to collect user input and send it to a server for processing. The behavior of a form is primarily controlled by its **attributes**.

- **Attributes**:
  
  - `action`: Specifies the URL or endpoint where the form data should be submitted . If not provided, the form submits data to the same page.
  - `method`: Specifies the HTTP method used to send form data to the server. values used in method are :->
    - `GET`: Sends data as part of the URL (e.g., in query strings). It is less secure but suitable for non-sensitive data.
    - `POST`: Sends data in the HTTP request body. It is more secure and suitable for sensitive or large data.

- **Example**:

  ```html
  <form action="/submit.php" method="POST">
  </form>
  ```

---

### 2. `<fieldset>` and `<legend>`

- **Description**:
  - `<fieldset>`: Groups related inputs together.
  - `<legend>`: Provides a title for the grouped inputs.
- **Example**:

  ```html
  <fieldset>
      <legend>User Details</legend>
      <!-- Inputs go here -->
  </fieldset>
  ```

---

### 3. `<label>`

- **Description**: Links descriptive text to an input field.
- **Attributes**:
  - `for`: Links the label to the `id` of an input element.
- **Example**:

  ```html
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  ```

---

### 4. `<input>`: Single-Line Inputs

#### 4.1 `type="text"`

- **Description**: Accepts single-line text input.
- **Attributes**:
  - `placeholder`: Text displayed as a hint.
  - `maxlength`: Limits the number of characters.
- **Example**:

  ```html
  <input type="text" id="name" name="name" placeholder="Enter your name">
  ```

#### 4.2 `type="password"`

- **Description**: Masks user input for sensitive data.
- **Example**:

  ```html
  <input type="password" id="password" name="password">
  ```

#### 4.3 `type="date"`

- **Description**: Provides a date picker.
- **Example**:

  ```html
  <input type="date" id="dob" name="dob">
  ```

---

### 5. `<textarea>`

- **Description**: Allows multi-line text input.
- **Attributes**:
  - `rows`: Number of visible rows.
  - `cols`: Number of visible columns.
- **Example**:

  ```html
  <textarea id="address" name="address" rows="4" cols="20"></textarea>
  ```

---

### 6. `<input>`: Selection Inputs

#### 6.1 `type="radio"`

- **Description**: Allows selecting one option from a group.
- **Attributes**:
  - `checked`: Pre-selects the option.
- **Example**:

  ```html
  <input type="radio" id="male" name="gender" value="Male">
  <label for="male">Male</label>
  ```

#### 6.2 `type="checkbox"`

- **Description**: Allows selecting multiple options.
- **Example**:

  ```html
  <input type="checkbox" id="thor" name="hero" value="Thor">
  <label for="thor">Thor</label>
  ```

---

### 7. Buttons

#### 7.1 `type="submit"`

- **Description**: Submits the form data to the server.
- **Example**:

  ```html
  <input type="submit" value="Submit">
  ```

#### 7.2 `type="reset"`

- **Description**: Clears all form inputs.
- **Example**:

  ```html
  <input type="reset" value="Reset">
  ```

---

### Full Forms Example

```html
<form action="/submit.php" method="POST">
    <fieldset>
        <legend>User Details</legend>

        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name"><br><br>

        <label for="address">Address:</label>
        <textarea id="address" name="address" rows="4" cols="20"></textarea><br><br>

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob"><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>

        Gender:<br>
        <input type="radio" id="male" name="gender" value="Male">
        <label for="male">Male</label><br>
        <input type="radio" id="female" name="gender" value="Female">
        <label for="female">Female</label><br><br>

        Favorite Hero:<br>
        <input type="checkbox" id="thor" name="hero" value="Thor">
        <label for="thor">Thor</label><br>
        <input type="checkbox" id="ironman" name="hero" value="Ironman">
        <label for="ironman">Ironman</label><br>

        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </fieldset>
</form>
```

---

## Key Notes

1. Tables are great for organizing structured data.
2. Forms enable data collection with various input types.
3. Use attributes like `colspan`, `rowspan`, `required`, and `maxlength` for better control and validation.
4. Combine `<fieldset>` and `<legend>` for well-structured forms.
