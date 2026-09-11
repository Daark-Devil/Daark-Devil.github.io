# Devansh Pancholi — portfolio refresh with research galleries

A buildless, responsive portfolio using HTML, CSS, and a small JavaScript mobile menu. No npm install, framework, database, API key, or paid service is required for GitHub Pages.

## Preview on your computer

Open `dist/index.html` in a browser. In the GitHub-ready download, `index.html` is directly at the top level. Google Fonts are optional: system-font fallbacks work when offline.

## Put the new version on your existing GitHub Pages address

1. Sign in to GitHub and open the repository that publishes `https://daark-devil.github.io/`. For a user site, this is normally `Daark-Devil.github.io`; confirm the repository and its Pages settings before changing anything.
2. Download a backup of that repository using **Code → Download ZIP**. Keep the current public site until you have reviewed this replacement. Your originally uploaded ZIP has not been changed.
3. Open **Settings → Pages**. Note the current publishing method, source branch, and folder. If it uses GitHub Actions, retain its workflow and check which folder it deploys before uploading. Do not switch an unfamiliar existing workflow blindly.
4. For a branch-based site, upload the contents of the new GitHub-ready ZIP into the configured publishing folder using **Add file → Upload files**. Upload `index.html`, `styles.css`, `script.js`, the complete `assets` folder, and `.nojekyll`. Upload the contents, not the ZIP or an extra enclosing directory. If Pages publishes from `/docs`, these files belong inside `docs`; if it publishes from `/(root)`, they belong at the repository root. Replace only matching portfolio files; preserve unrelated files, custom-domain settings, and workflow files.
5. Commit the upload with a clear message such as “Refresh portfolio with current cancer-bioinformatics research.” For a simple new branch-based configuration, select the branch containing your files and its actual folder under **Settings → Pages → Deploy from a branch**, then save.
6. Check the repository’s **Actions** tab for the Pages deployment result. Once successful, open your normal portfolio address and refresh. Confirm the portrait, project links, mobile menu, and résumé download.

GitHub’s official publishing-source guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The public GitHub repository was not modified during this refresh. Its current branch and publishing configuration could not be inspected, so the steps above intentionally ask you to verify them.

## Future updates

- **Résumé:** replace `assets/Devansh_Pancholi_Resume.pdf` with your newest PDF using exactly the same filename. All résumé links use this one file. The included PDF is a byte-for-byte copy of your September 11, 2026 upload, not the old ZIP’s résumé. Its wording/layout has not been rewritten.
- **Summary:** edit the hero introduction and description near the top of `index.html`.
- **Projects:** edit the articles inside the `research` section. Keep clear distinctions between completed work, ongoing analysis, and planned extensions.
- **Galleries:** each `project-gallery` in `index.html` contains one `figure class="gallery-slide"` per image. Replace an image using its existing filename to update that slide. To add a slide, copy a complete figure block inside the same `gallery-slides` container and update its image path, alternative text, title, caption, and full-size link. The counter and Previous/Next buttons adjust automatically. Readers can also use left/right arrow keys when focused within the gallery, or swipe on touch devices. No autoplay is used.
- **HNSCC figures:** the current gallery uses your supplied crops of Liu et al. (2024), Figure 1 panels B, E, and A. The captions are concise; attribution is on image-credits.html, linked from the footer. These remain externally sourced context figures. Keep image-credits.html when uploading the site. When you provide your own results, replace the image and its caption together. See `FIGURE_CREDITS.md` for attribution and licensing.
- **Research interests and workflow:** edit the `interests` and `workflow` sections. Both have been restored and expanded.
- **Experience:** edit the entries in the `experience` section and verify title, affiliation, and dates.
- **Skills:** edit the four groups in `expertise`; developing spatial methods are labeled separately.
- **Styling:** colors, fonts, spacing, and responsive rules are in `styles.css`. Color variables are at its beginning.
- **Links:** use only real repositories. HNSCC has no invented repository link.

## What was preserved and updated

Preserved: portrait; RNAMotifDB, RNA-Structure-AI, and Fragmentomics repositories and original figures; ESM-2 classification work; Smart Stethoscope publication; education; GitHub, LinkedIn, and email.

Added or refreshed: HNSCC immune-state research and developing spatial integration; 72-sample breast-cancer atlas; somatic-variant pipeline; dated SLU/WashU experience; broader DNA/RNA/epigenomics/structural-biology/AI summary; grouped skills; research-interests and workflow sections; latest-résumé links; responsive navigation; galleries containing five cfDNA outputs, three RNA outputs, and two attributed published HNSCC reference figures.

The introduction now connects molecular changes, cellular states, treatment response, progression, and survival as research interests. The RNA project emphasizes OpenFold3 source modifications and RNA templates with synthetic MSAs. The “over 70%” statement refers to selected C1′ RMSD reductions, not a benchmark-wide increase in accuracy. For example, the repository's 4cond_results.tsv lists 1P5P baseline 22.452 Å and combined 3.565 Å, an approximately 84% reduction. Per-RNA performance varies. The previously supplied résumé PDF remains unchanged.

New galleries include your breast-cancer atlas overview and three marker-expression panels, and your somatic-variant overview, TLOD plot, and a gene-by-effect matrix obtained from your GitHub repository. All existing cfDNA and RNA gallery assets remain available.

## Checks completed

Local asset paths, section anchors, original external-link preservation, JavaScript syntax, PDF identity, and ZIP contents are checked programmatically. Automated browser/visual testing was not performed. Before public release, inspect desktop and mobile layouts and open each external repository, whose live availability was not verified here.

Education GPAs are displayed as supplied: M.S. 3.97 and B.E. 3.63. Upload image-credits.html alongside index.html so the footer link works.
