---
layout: "layouts/styles"
title: Home
intro:
  main: "Every default style & layout in one place"
  summary: |
    Below you'll find every style and layout included in Cubetopia. See how each composition works together and on device viewports of different sizes. If you're customizing the default styles, this page will help you test and evaluate how they interact with other elements.
---

# Heading 1

{{ 1 | loremIpsum: "sentence" }}

## Heading 2

{{ 1 | loremIpsum: "sentence" }}

### Heading 3

{{ 1 | loremIpsum: "sentence" }}

#### Heading 4

{{ 1 | loremIpsum: "sentence" }}

##### Heading 5

{{ 1 | loremIpsum: "sentence" }}

###### Heading 6

{{ 1 | loremIpsum: "sentence" }}

# {{ 10 | loremIpsum: 'words' | capitalize }}

{{ 1 | loremIpsum: "paragraphs" }}

## {{ 10 | loremIpsum: 'words' | capitalize }}

{{ 1 | loremIpsum: "paragraphs" }}

### {{ 10 | loremIpsum: 'words' | capitalize }}

{{ 1 | loremIpsum: "paragraphs" }}

#### {{ 10 | loremIpsum: 'words' | capitalize }}

{{ 1 | loremIpsum: "paragraphs" }}

##### {{ 10 | loremIpsum: 'words' | capitalize }}

{{ 1 | loremIpsum: "paragraphs" }}

###### {{ 10 | loremIpsum: 'words' | capitalize }}

{{ 1 | loremIpsum: "paragraphs" }}

This is a line of text that will be inserted between paragraph HTML tags.

[This entire sentence is a link.](https://www.google.com/) Only the word [monkey](https://www.yahoo.com/) is a link in this sentence.

The word **strong** has strong emphasis in this sentence. The word _italics_ is, well, you guessed it, italicized in this sentence. **_Strong italics_** has both styles applied, which is honestly a bit _much_.^[This is a footnote about the sentence linked above.]

This is an unordered list of items:^[Another footnote about the unordered list.]

- Banana
- Coconut
  - Rum
- Jambalaya
  - Rice
  - Spicy sausage
  - Protein
    - Alligator
    - Rabbit
    - Felines
      1. Cats
      2. Lions
      3. Tigers

This is an ordered list of items:

1. Download Node.js
2. Install packages
3. Run `npm run build`
4. Celebrate!

> This is something that someone _else_ said, not I. They continue with their quote here
>
> > And in this case we're quoting someone that quoted someone. Wild!

Another sentence to break things up.

> {{ 3 | loremIpsum: "sentences" }}

```python
import banana
from library import module as monkey

def hello_world():
  printf("%s", monkey.say_hello())
  variable = "something really super long so that it's guaranteed to require some wrap in the container this code finds itself in"
  variables = [ something, else, that's, separated, into, lots, of, smaller, inline, blocks, that, may, overflow ]
```

This is more realistic code:

```scss
// Global styles start
:root {
  --flow-space: #{get-size("l")};
}

/* Debug: draw borders around all blocks */
/*
* {
  border: 1px solid rgba(black, 0.2);
}
*/

body {
  background: get-color("light");
  color: get-color("dark-shade");

  @include apply-utility("text", 0);
  @include apply-utility("font", "base");
}

a:not([class]) {
  color: currentColor;
  text-decoration-color: get-color("quinary");
}

:focus {
  outline: 2px dashed get-color("primary");
  outline-offset: 0.25rem;
}

main:focus {
  outline: none;
}
```

| Heading 1        | Heading 2 | A longer heading just for fun | Head |
| ---------------- | --------- | ----------------------------- | ---- |
| Data Row         | 7         | 8                             | 09   |
| Another data row | 7393      | 378                           | 874  |
| Data 3           | 0         | 1                             | 333  |
| TOTAL            | 7340      | 387                           | 1216 |

Lastly, here's a horizontal rule--

---

just to divide things up.
