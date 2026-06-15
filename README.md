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
js/team.js          Team member research profiles (modal content)
img/                Photos and abstract research figures
img/social/         Lab social / event photos (team page gallery)
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

Team content is split across two files. Open a pull request for any changes (see [Contributing](#contributing)).

### Research profiles (click-to-view bios)

When someone clicks a team member on `team.html`, the popup text comes from **`js/team.js`**.

Each person is an entry in the `members` object. Edit the `research` field for their area of work:

```js
renato: {
  name: "Renato Santos",
  role: "PhD Researcher",
  image: "img/renato.jpeg",   // optional — omit if no photo
  initials: "RS",               // optional — shown when no image
  research: "One or two sentences on their research area."
},
```

- **`name`** and **`role`** — shown in the modal header
- **`research`** — the main bio text (this is what you are usually editing)
- **`image`** — path under `img/` if they have a portrait
- **`initials`** — two letters if there is no photo

The `data-person` value on each card in `team.html` must match the key in `members` (e.g. `data-person="renato"`).

### Photos and layout (`team.html`)

- **Portraits** — `<img src="img/...">` inside each `.person` card; use initials (`<span class="initials">`) when no photo exists
- **New members** — copy an existing `<button class="person person-btn" ...>` block, set `data-person` to a new key, and add the matching entry in `js/team.js`
- **Alfredo (PI)** — longer intro stays in the HTML bio; the modal uses the `alfredo` entry in `js/team.js`
- **Lab gallery** — “Life in the lab” at the bottom of `team.html`; add images to `img/social/` and replace the placeholder `<figure class="photo-card">` blocks

### Home page preview

The smaller people grid on `index.html` is edited separately (names, roles, photos only — no modal).

## Adding lab gallery photos

At the bottom of `team.html`, replace a placeholder figure with:

```html
<figure class="photo-card reveal">
  <img src="img/social/your-photo.jpg" alt="Short description">
  <figcaption>Lab social, 2025</figcaption>
</figure>
```

Store images in **`img/social/`**.

© 2025 MAMBAL · King's College London
