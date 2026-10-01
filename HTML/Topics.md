# HTML Tags Cheat Sheet

### Structure

| Tag               | work                        |
| ----------------- | --------------------------- |
| `<!DOCTYPE html>` | HTML5 declaration           |
| `<html>`          | Root element                |
| `<head>`          | Meta info (invisible)       |
| `<title>`         | Browser tab ka naam         |
| `<body>`          | Visible content             |
| `<meta>`          | Charset, viewport, SEO info |

### Text & Headings

| Tag             | work                      |
| --------------- | ------------------------- |
| `<h1>` – `<h6>` | Headings (h1 = biggest)   |
| `<p>`           | Paragraph                 |
| `<br>`          | Line break                |
| `<hr>`          | Horizontal line           |
| `<b>`           | Bold (visual only)        |
| `<strong>`      | Bold + important meaning  |
| `<i>`           | Italic (visual only)      |
| `<em>`          | Italic + emphasis meaning |
| `<mark>`        | Highlighted text          |
| `<small>`       | Chota text                |
| `<!-- -->`      | Comment                   |

### Lists

| Tag    | work          |
| ------ | ------------- |
| `<ul>` | Bullet list   |
| `<ol>` | Numbered list |
| `<li>` | List item     |

### Links

| Tag               | work               |
| ----------------- | ------------------ |
| `<a href="">`     | Hyperlink          |
| `target="_blank"` | New tab mein khole |

### Media

| Tag                   | work         |
| --------------------- | ------------ |
| `<img src="" alt="">` | Image        |
| `<audio controls>`    | Audio player |
| `<video controls>`    | Video player |

### Tables

| Tag                   | work                |
| --------------------- | ------------------- |
| `<table>`             | Table wrapper       |
| `<thead>`             | Head row            |
| `<tbody>`             | table body          |
| `<tr>`                | Row                 |
| `<th>`                | Header cell         |
| `<td>`                | Data cell           |
| `colspan` / `rowspan` | Cell ko merge karna |

### Forms

| Tag                          | work                                        |
| ---------------------------- | ------------------------------------------- |
| `<form action="" method="">` | Form wrapper                                |
| `<label for="">`             | Input ka naam                               |
| `<input type="text">`        | Text field                                  |
| `<input type="email">`       | Email field                                 |
| `<input type="password">`    | Password field                              |
| `<input type="radio">`       | Single-select option                        |
| `<input type="checkbox">`    | Multi-select option                         |
| `<input type="submit">`      | Submit button                               |
| `<select>` `<option>`        | Dropdown                                    |
| `<textarea>`                 | Multi-line text box                         |
| `<fieldset>`                 | Related fields ko group/box mein rakhta hai |
| `<legend>`                   | Fieldset ka title/caption                   |

### Layout & Semantic

| Tag         | work                      |
| ----------- | ------------------------- |
| `<div>`     | Block container           |
| `<span>`    | Inline container          |
| `<header>`  | Top section               |
| `<nav>`     | Navigation links          |
| `<section>` | Content group             |
| `<article>` | Independent content block |
| `<footer>`  | Bottom section            |

---

## 🎁 Bonus Tags (Interesting, Kam Log Jaante Hain)

| Tag                               | work                                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `<abbr title="">`                 | Short form hover pe full form dikhata hai (e.g. `<abbr title="HyperText Markup Language">HTML</abbr>`) |
| `<blockquote>`                    | Kisi doosre source se liya gaya quote                                                                  |
| `<code>`                          | Code snippet ko style se dikhata hai                                                                   |
| `<kbd>`                           | Keyboard key jaisa dikhta hai (e.g. `Ctrl + C`)                                                        |
| `<progress value="70" max="100">` | Progress bar without JS                                                                                |
| `<details>` `<summary>`           | Collapsible "click to expand" box — bina JS ke!                                                        |
| `<datalist>`                      | Input field ke saath auto-suggestions                                                                  |
| `<time datetime="">`              | Date/time ko machine-readable banata hai                                                               |
| `<sup>` / `<sub>`                 | Superscript / Subscript (e.g. x² ya H₂O)                                                               |
| `<dialog>`                        | Native popup/modal box — bina JS library ke                                                            |

---

## 🏷️ Semantic Tags — Kya Hote Hain?

Semantic tags wo tags hain jinka **naam khud batata hai ki andar kya content hai** — `<div>` ki tarah generic box nahi, balki meaningful naam.

**Kyu use karte hain:**

- **SEO** — Google page ka structure aasani se samajh leta hai
- **Accessibility** — Screen readers semantic tags se jaldi navigate karte hain
- **Readability** — Doosra developer code jaldi samajh jaata hai

| Tag            | work                         |
| -------------- | ---------------------------- |
| `<header>`     | Top section                  |
| `<nav>`        | Navigation links             |
| `<main>`       | Page ka main/central content |
| `<section>`    | Content ka logical group     |
| `<article>`    | Independent content block    |
| `<aside>`      | Side content (jaise sidebar) |
| `<footer>`     | Bottom section               |
| `<figure>`     | Image/diagram ka wrapper     |
| `<figcaption>` | Figure ka caption            |

---

## 🔲 Inline vs Block Elements

|                                   | Block Element                                                | Inline Element                                                    |
| --------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| **Space leta hai**                | Poori line (full width)                                      | Sirf jitna content hai utna                                       |
| **Naya line pe jaata hai**        | Haan, apne aap next line                                     | Nahi, saath-saath flow karta hai                                  |
| **Width/Height set kar sakte ho** | Haan                                                         | Nahi                                                              |
| **Examples**                      | `<div>`, `<p>`, `<h1>`–`<h6>`, `<ul>`, `<section>`, `<form>` | `<span>`, `<a>`, `<b>`, `<strong>`, `<img>`, `<label>`, `<input>` |

**Trick:** Do `<span>` ek line mein saath baith jaayenge, but do `<div>` automatically alag-alag lines pe chale jaayenge — chahe content kitna bhi chota ho.
