# MAMBAL — website

Machine Learning And Multiomics Bioinformatics for ALS · King's College London

Static HTML/CSS/JS site with no build step. Open `index.html` in a browser, or deploy the folder as-is (e.g. GitHub Pages).

## Structure

```
index.html          Home
research.html       Research areas, projects, collaborations
publications.html   Publications archive
news.html           Lab news and updates
team.html           Team directory
join.html           Open positions and contact
css/styles.css      Stylesheet (design tokens and components)
js/theme.js         Scroll reveals, nav state, mobile menu
img/                Abstract research figures (SVG)
```

## Contributing

**Do not push directly to `main`.** All changes go through a pull request so someone can review before the site goes live.

1. Create a branch from `main` (e.g. `add-paper-smith-2025` or `update-team`).
2. Make your edits locally and check the pages in a browser.
3. Push the branch and open a pull request against `main`.
4. Ask a lab member to review and merge.

This applies to publications, team updates, news items, and any other content changes.

## Adding publications

Publications are listed manually in `publications.html`. There is no database or build step. Submit your changes via a **pull request** (see [Contributing](#contributing) above); do not commit to `main` directly.

### Step 1 — Find the paper

Check the lab members' Google Scholar profiles for title, authors, journal and year:

| Member | Google Scholar |
|--------|----------------|
| Alfredo Iacoangeli (PI) | https://scholar.google.com/citations?user=g410uocAAAAJ |
| Ammar Al-Chalabi | https://scholar.google.co.uk/citations?user=mEMAWwwAAAAJ |
| Ahmad Al Khleifat | https://scholar.google.com/citations?user=eXDCaSQAAAAJ |
| Renato Santos | https://scholar.google.com/citations?user=TNnrFaMAAAAJ |

Use the publisher link (DOI or journal page) for the `href`, not the Google Scholar URL.

### Step 2 — Add a row in `publications.html`

Inside the `<div class="pub-list">` block, copy this template and paste it **above** older entries so the list stays sorted by year (newest first):

```html
<a class="pub-row" href="PUBLISHER_OR_DOI_URL">
  <span class="pub-year">YEAR</span>
  <div class="pub-body">
    <h4>Full paper title</h4>
    <p class="pub-by">First Author A, et al. &middot; <span class="journal">Journal name</span></p>
  </div>
  <span class="pub-go">View →</span>
</a>
```

**Fields:**

- `href` — link to the paper (e.g. `https://doi.org/10.xxxx/...` or the journal abstract page)
- `pub-year` — four-digit year
- `h4` — full title, sentence case as published
- `pub-by` — first author plus `et al.` for long author lists; journal in `<span class="journal">`

### Step 3 — Update the featured block (optional)

If the paper should be highlighted at the top of `publications.html` and on the home page, also update the `<a class="featured">` block in both `publications.html` and `index.html` with the same title, journal, year and link.

### Step 4 — Add a news item (optional)

For notable releases, add an entry to the `<div class="notes">` list in `news.html`:

```html
<div class="note">
  <span class="when">YEAR</span>
  <p><span class="tag">Publication</span>Short description of the work.</p>
</div>
```

Use `Publication`, `Preprint`, or `News` for the tag.

### Step 5 — Update navigation (new pages only)

If you add a new HTML page, copy the `<header>`, `<div class="mobile-menu">`, and `<footer>` from an existing page and add a link in the nav on every page.

## Editing the team

Team members are `.person` blocks in `team.html`, grouped by section. Each uses an initials monogram; replace `<span class="initials">` with an `<img>` if you add photos. Open a pull request for any changes (see [Contributing](#contributing)).

© 2025 MAMBAL · King's College London
