# MAMBAL — website

Machine Learning And Multiomics Bioinformatics for ALS · King's College London

A redesigned, editorial research identity. Static HTML/CSS/JS — no build step.
Open `index.html` in a browser, or deploy the folder as-is.

## Structure
```
index.html          Home — editorial homepage
research.html       Research areas, projects, collaborations
publications.html   Publications archive
team.html           Full team directory
join.html           Open positions + contact
css/styles.css      Single stylesheet (design tokens + components)
js/theme.js         Scroll reveals, nav state, mobile menu
img/                Hand-built abstract research figures (SVG)
```

## Design system
- Palette: warm paper `#FAF8F4`, ink `#1A1714`, deep forest `#2C3A30`, burgundy `#6B2C38`.
- Type: Instrument Serif (display), Inter (body), IBM Plex Mono (labels/metadata).
- Figures in `img/` are real, abstract scientific plots (Manhattan, embedding, multi-omics
  tracks) drawn in the palette — swap them for your own SVGs to taste.

## Adding publications
In `publications.html`, copy a `.pub-row` block under the archive list (a commented
template is included) and fill in year, title, authors, journal and link.

## Editing the team
Team members live in `team.html` as `.person` blocks grouped by section. Each uses an
initials monogram; replace the `<span class="initials">` with an `<img>` if you add photos.

© 2025 MAMBAL · King's College London
