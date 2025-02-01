# **🔹 Essential Attributes for `<input>`**

## **1. `type`**

Defines the type of input field.  
**Example:**

```html
<input type="text">
<input type="password">
<input type="email">
```

---

## **2. `name`**

Specifies a **name** for the input field, used when submitting form data.  
**Example:**

```html
<input type="text" name="username">
```

---

## **3. `value`**

Sets a **default value** inside the input field.  
**Example:**

```html
<input type="text" value="Default Text">
```

---

## **4. `placeholder`**

Displays a **hint text** inside the input field until the user types something.  
**Example:**

```html
<input type="email" placeholder="Enter your email">
```

---

## **5. `required`**

Makes the input **mandatory** before submitting the form.  
**Example:**

```html
<input type="text" required>
```

---

## **6. `readonly`**

Prevents users from **editing** the input field.  
**Example:**

```html
<input type="text" value="Fixed Text" readonly>
```

---

## **7. `disabled`**

Disables the input field so users **cannot interact** with it.  
**Example:**

```html
<input type="text" value="Disabled Field" disabled>
```

---

## **8. `maxlength`**

Limits the number of characters a user can enter.  
**Example:**

```html
<input type="text" maxlength="10">
```

---

## **9. `min` and `max`**

Defines a **minimum** and **maximum** value (for number, date, etc.).  
**Example:**

```html
<input type="number" min="1" max="100">
<input type="date" min="2000-01-01" max="2025-12-31">
```

---

## **10. `step`**

Specifies the **increment value** for number inputs.  
**Example:**

```html
<input type="number" step="5">
```

➡ Accepts only numbers like **5, 10, 15, ...**

---

## **11. `autofocus`**

Automatically focuses the input field when the page loads.  
**Example:**

```html
<input type="text" autofocus>
```

---

## **12. `pattern`**

Specifies a **regular expression** for validation.  
**Example (only allows 5-digit numbers):**

```html
<input type="text" pattern="\d{5}" title="Enter a 5-digit number">
```

---

## **13. `autocomplete`**

Controls whether the browser should **autofill** input fields.  
**Example:**

```html
<input type="email" autocomplete="on">
```

---

## **14. `multiple`**

Allows users to select **multiple files or emails** (for `file` and `email` types).  
**Example:**

```html
<input type="file" multiple>
<input type="email" multiple>
```

---

## **15. `size`**

Specifies the **width** of the input field in terms of characters.  
**Example:**

```html
<input type="text" size="20">
```

---

## **16. `list`**

Associates the input field with a `<datalist>` for predefined suggestions.  
**Example:**

```html
<input type="text" list="colors">
<datalist id="colors">
  <option value="Red">
  <option value="Blue">
  <option value="Green">
</datalist>
```

---

## **📌 Summary Table**

| Attribute | Description | Example |
|-----------|-------------|---------|
| `type` | Defines input type | `<input type="text">` |
| `name` | Identifies input in forms | `<input name="username">` |
| `value` | Sets default value | `<input value="Hello">` |
| `placeholder` | Displays hint text | `<input placeholder="Enter name">` |
| `required` | Makes input mandatory | `<input required>` |
| `readonly` | Makes input uneditable | `<input readonly>` |
| `disabled` | Disables input | `<input disabled>` |
| `maxlength` | Limits character count | `<input maxlength="10">` |
| `min` / `max` | Defines value range | `<input min="1" max="100">` |
| `step` | Defines value increment | `<input step="5">` |
| `autofocus` | Focuses input on page load | `<input autofocus>` |
| `pattern` | Enforces a pattern | `<input pattern="\d{5}">` |
| `autocomplete` | Enables/disables autofill | `<input autocomplete="off">` |
| `multiple` | Allows multiple selections | `<input type="file" multiple>` |
| `size` | Defines input width | `<input size="20">` |
| `list` | Connects to `<datalist>` | `<input list="colors">` |
