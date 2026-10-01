# CSS Properties

## 1. Text / Typography

**Properties**

- `color` – text color
- `font-family` – typeface
- `font-size` – text size
- `font-weight` – boldness (`normal`, `bold`, `100–900`)
- `font-style` – `normal`, `italic`, `oblique`
- `font-variant` – small-caps and other variants
- `line-height` – vertical spacing between lines
- `letter-spacing` – space between characters
- `word-spacing` – space between words
- `text-align` – `left`, `right`, `center`, `justify`
- `text-decoration` – `underline`, `line-through`, `overline`, `none`
- `text-transform` – `uppercase`, `lowercase`, `capitalize`
- `text-shadow` – shadow behind text
- `text-overflow` – `ellipsis` for truncated text
- `white-space` – `nowrap`, `pre`, `pre-wrap`
- `word-break` / `overflow-wrap` – controlling text wrapping
- `vertical-align` – aligning inline/table-cell content
- `direction` – `ltr` / `rtl`
- `writing-mode` – horizontal vs vertical text flow

---

## 2. Background

**Properties**

- `background-color` – solid background color
- `background-image` – image or gradient
- `background-repeat` – `repeat`, `no-repeat`, `repeat-x`, `repeat-y`
- `background-position` – placement of background image
- `background-size` – `cover`, `contain`, custom size
- `background-clip` – how far background extends (`border-box`, `padding-box`, `content-box`, `text`)
- `background-origin` – positioning reference point
- `background-blend-mode` – blending multiple backgrounds
- `background` – shorthand for all of the above

---

## 3. Box Model

**Properties**

- `width` / `height` – element dimensions
- `min-width` / `max-width` – width constraints
- `min-height` / `max-height` – height constraints
- `padding` (`-top`, `-right`, `-bottom`, `-left`) – inner spacing
- `margin` (`-top`, `-right`, `-bottom`, `-left`) – outer spacing
- `box-sizing` – `content-box` vs `border-box`
- `overflow` / `overflow-x` / `overflow-y` – `visible`, `hidden`, `scroll`, `auto`
- `aspect-ratio` – enforce width-to-height ratio

---

## 4. Border

**Properties**

- `border-width` – thickness
- `border-style` – `solid`, `dashed`, `dotted`, `double`, `none`
- `border-color` – border color
- `border` – shorthand (width, style, color)
- `border-radius` – rounded corners
- `border-top` / `-right` / `-bottom` / `-left` – individual side shorthand
- `border-collapse` – for table borders
- `border-spacing` – spacing between table cell borders
- `outline` / `outline-offset` – outline outside the border, doesn't affect layout

---

## 5. Color & Opacity

**Properties**

- `color` – text/foreground color
- `background-color` – background color
- `opacity` – overall element transparency
- `accent-color` – color of native form controls (checkbox, radio, range)
- `caret-color` – color of the text input cursor

---

## 6. Display & Positioning

**Properties**

- `display` – `block`, `inline`, `inline-block`, `flex`, `grid`, `none`, `contents`
- `position` – `static`, `relative`, `absolute`, `fixed`, `sticky`
- `top` / `right` / `bottom` / `left` – offsets for positioned elements
- `z-index` – stacking order
- `visibility` – `visible`, `hidden`, `collapse`

---

## 7. Flexbox

**Properties (on the container)**

- `display: flex`
- `flex-direction` – `row`, `column`, `row-reverse`, `column-reverse`
- `flex-wrap` – `nowrap`, `wrap`, `wrap-reverse`
- `justify-content` – main-axis alignment
- `align-items` – cross-axis alignment
- `align-content` – multi-line cross-axis alignment
- `gap` / `row-gap` / `column-gap` – spacing between flex items

**Properties (on the flex items)**

- `flex-grow` – how much an item grows
- `flex-shrink` – how much an item shrinks
- `flex-basis` – initial size before growing/shrinking
- `flex` – shorthand (`grow shrink basis`)
- `align-self` – override `align-items` for one item
- `order` – visual reordering without changing HTML

---

## 8. CSS Grid

**Properties (on the container)**

- `display: grid`
- `grid-template-columns` / `grid-template-rows` – define track sizes
- `grid-template-areas` – named layout regions
- `grid-auto-columns` / `grid-auto-rows` – sizing for implicit tracks
- `gap` / `row-gap` / `column-gap` – spacing between grid cells
- `justify-items` / `align-items` – aligning items inside their cells
- `justify-content` / `align-content` – aligning the whole grid within the container

**Properties (on the grid items)**

- `grid-column` / `grid-column-start` / `grid-column-end`
- `grid-row` / `grid-row-start` / `grid-row-end`
- `grid-area` – shorthand or named area placement
- `justify-self` / `align-self` – per-item alignment override

---

## 9. Sizing & Spacing Units (functions used inside properties)

- `clamp(min, preferred, max)` – fluid, responsive values
- `min()` / `max()` – pick smallest/largest of given values
- `calc()` – mixed-unit calculations
- `var()` – reference a CSS variable
- Units: `px`, `%`, `em`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `fr` (grid fraction unit)

---

## 10. Transitions & Animations

**Properties**

<!-- animation: name, duration, timing-function, delay, iteration-count, direction, fillMode, playState -->

- `transition-property` – which property animates
- `transition-duration` – how long
- `transition-timing-function` – `ease`, `linear`, `ease-in-out`, `cubic-bezier()`
- `transition` – shorthand for all four
- `animation-name` – links to a `@keyframes` block
- `animation-duration` – length of one cycle
- `animation-timing-function` – easing curve
- `animation-delay` – wait before starting
- `animation-iteration-count` – `1`, `infinite`, etc.
- `animation-direction` – `normal`, `reverse`, `alternate`
- `animation` – shorthand for all animation properties

---

## 11. Transform

**Properties**

- `transform` – `translate()`, `scale()`, `rotate()`, `skew()`, `matrix()`
- `transform-style` – `flat` vs `preserve-3d`
- `backface-visibility` – show/hide the back face of a rotated element

---

## 12. Visual Effects

**Properties**

- `box-shadow` – shadow around an element's box
- `filter` – `blur()`, `brightness()`, `contrast()`, `grayscale()`, `drop-shadow()`
- `backdrop-filter` – blur/effects on content behind an element

---

## 13. Interactivity & Misc

**Properties**

- `cursor` – `pointer`, `default`, `not-allowed`, `grab`, etc.
- `pointer-events` – `none` disables clicks/hover on an element
- `user-select` – controls text selection (`none`, `text`, `all`)
- `scroll-behavior` – `smooth` scrolling
- `object-fit` – how replaced content (img/video) fits its box
- `object-position` – positioning of that content within the box
- `content` – inserts generated content (used with `::before` / `::after`)

---

## 14. Responsive & Layout Queries

**Features**

- `@media` – conditional styles based on viewport, screen type
- `@container` – conditional styles based on a parent container's size
- `@supports` – conditional styles based on browser feature support
- `@font-face` – load and define custom fonts
