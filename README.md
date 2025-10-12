# Portfolio_JR (Static)

A static HTML/CSS/JS portfolio for GitHub Pages.

## Structure
- `static/index.html` – page markup (navbar, hero, projects, about, experience, education, contact)
- `static/assets/style.css` – small custom styles plus Tailwind CDN on the page
- `static/assets/app.js` – data + rendering (projects, paragraphs, skills marquee, awards, timeline)
- `scripts/deploy-gh-pages.ps1` – deploy `static/` to `gh-pages` using git subtree

## Local preview
- Open `static/index.html` directly in the browser, or
- Serve the folder:
```sh
npx serve -s static -l 4174
```

## Deploy to GitHub Pages
- Push only `static/` to `gh-pages` without temp branches:
```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\deploy-gh-pages.ps1
```
- Or the direct commands:
```powershell
git fetch origin --prune
$hash = git subtree split --prefix static HEAD
git push -f origin "$hash:gh-pages"
```
- Repo Settings → Pages → Source: `gh-pages` branch
- Site URL: `https://<your-username>.github.io/Portfolio_JR/`

## Notes
- Update images under `static/images/` and references in `static/assets/app.js`.
- The mobile menu uses `menu-open/menu-closed` classes with CSS transitions.
