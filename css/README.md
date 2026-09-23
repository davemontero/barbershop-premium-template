# CSS organization

`main.css` is the only local stylesheet linked from `index.html`. It imports shared styles first, followed by sections in page order.

- `variables.css`: shared colors, typography, spacing and other design tokens.
- `base.css`: resets, global elements, containers and the shared photographic tone.
- `components/buttons.css`: reusable buttons.
- `components/navbar.css`: desktop and mobile navigation.
- `sections/`: one stylesheet per page section, including the footer.
- `sections/visit.css`: Visit Us and its FAQ accordion.

## Editing styles

Edit a section in its own file. Keep its responsive rules after the base rules in that same file. Reuse existing variables and breakpoints where practical.

For a new section, create a stylesheet in `sections/` and add its import to `main.css` in the appropriate page order. Keep all imports before any CSS declarations. Do not add another stylesheet link to the HTML.

Image filenames use lowercase letters and hyphens with the `.webp` extension. When changing a photo, update its `src`, descriptive `alt`, and intrinsic `width` and `height` in `index.html`.

No CSS framework, package installation or build step is required.
