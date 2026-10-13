Signature pill CTA button — use for every primary action (View Projects, Send Message, Download CV).

```jsx
<Button variant="primary" as="a" href="/cv.pdf">Download CV</Button>
<Button variant="secondary">Contact</Button>
<Button variant="primary" size="sm">Live Demo</Button>
```

Variants: `primary` (solid cyan, inverts to outline on hover), `secondary` (cyan outline, fills on hover). Sizes: `md` (default), `sm`. Both lift -2px on hover. Pass `as="a"` + `href` for links, or `icon={…}` for a leading glyph.
