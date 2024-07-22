---
layout: "layouts/home"
intro:
  main: "Vivamus quis tortor metus. Pellentesque faucibus erat sit amet sagittis."
  summary: |
    Fugiat commodo adipisicing culpa elit ut eiusmod cillum ad commodo ipsum occaecat. Reprehenderit culpa aliquip excepteur in commodo eu ea veniam exercitation. Ad sunt enim duis in adipisicing sit aliquip do non. Voluptate esse consequat pariatur in fugiat nisi in elit ex velit aliquip nostrud ipsum. Aliquip in id ut minim id nisi nisi aliquip Lorem ex ea laborum.
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

The word **strong** has strong emphasis in this sentence. The word _italics_ is, well, you guessed it, italicized in this sentence. **_Strong italics_** has both styles applied, which is honestly a bit _much_.

This is an unordered list of items:

- Banana
- Coconut
  - Rum
- Jambalaya
  - Rice
  - Spicy sausage
  - Protein
    - Alligator

This is an ordered list of items:

1. Download Node.js
2. Install packages
3. Run `npm run build`
4. Celebrate!

> This is something that someone _else_ said, not I. They continue with their quote here
>
> > And in this case we're quoting someone that quoted someone. Wild!

```python
import banana
# There is an extra space at the start of the first line...why?
from library import module as monkey

def hello_world():
  printf("%s", monkey.say_hello())
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