# 11ty-cubetopia

## What is Cubetopia?
Cubetopia is a modern [Eleventy](https://www.11ty.dev) website baseline that's easy to adapt and extend. It comes out of the box with sensible and responsive styling and site defaults. Minimal, if any, adjustments are necessary to deploy a good-looking website: just add content.

The stack in summary is:
- Node.js
- 11ty v3 (ESM)
- Markdown content + frontmatter
- Liquid layout templates
- [CUBE CSS](https://cube.fyi), a CSS paradigm championed by Andy Bell
- [Utopia](https://utopia.fyi), an approach to scaling type and space without using jarring CSS @media breakpoints.

## Features

- Standard HTML5 semantics with accessibility considerations
- [PrismJS](https://prismjs.com) syntax highlighting
- Locally served Google Fonts, fetched automatically at build time
- Automatic type and space scaling based on viewport width by Utopia, eliminating the need for @media breakpoints
- Uses CUBE CSS paradigm for a surprisingly lightweight and reusable CSS implementation
- Automatically removes unused CSS classes via PurgeCSS plugin
- Automatic image processing into WebP and device-appropriate dimensions
- RSS (Atom) feed
- Configuration file driven collection creation and site navigation
- Markdown footnotes
- Sass processing as a template format (no need for a separate Sass to CSS build)
