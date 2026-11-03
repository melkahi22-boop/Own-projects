# Melinda Kahi — PM portfolio

Responsive static website for https://melindakahipm.com/ with Home, Products portfolio, Case studies, Services, and Contacts. Content and diagrams were adapted from the supplied “Melinda Kahi · Senior PM Portfolio” PDF. No build step or package installation is needed.

## Run

From `/workspace/Own-projects`, run `npm start` (Python 3 is required). The server listens on port 3000. Run `npm run check` for JavaScript syntax validation.

## Content

The deployed `index.html` includes its CSS and JavaScript so styling and navigation do not depend on separate file requests. Edit the embedded `<style>` and `<script>` blocks for deployed appearance and behaviour. `style.css` and `app.js` are retained as reference sources; changes to them alone will not affect the deployed page. Shipped-product metrics and independent concept hypotheses are labelled separately. LinkedIn is the active contact channel; the PDF supplied no email address. Consultancy service descriptions are based on the PM capabilities described in the PDF, rather than claims of past consultancy clients.

The keyboard-accessible photo picker resizes and saves a preview in the current browser only. To publish a photo for every visitor, add the approved image to `assets/`, set the profile image source in `index.html`, remove its `hidden` attribute, and hide the illustration. Browser-local previews are not server uploads. Do not upload a sensitive photo on a shared browser.

## Deploy to melindakahipm.com

Upload `index.html`, `style.css`, `app.js`, `robots.txt`, `sitemap.xml`, and `assets/` to a static hosting provider. The publish directory is the repository root and no build command is required. Keep assets in their existing relative paths. URL hash navigation requires no server rewrite.

Add `melindakahipm.com` as a custom domain in the hosting dashboard. Use the DNS records supplied by that provider at your DNS manager; do not guess IP addresses or replace unrelated records. Enable its managed HTTPS certificate, and choose the apex domain as the canonical host. Redirect `www` to the apex if you also configure `www`. Confirm HTTPS, all four tabs, images, LinkedIn, and mobile layout on the live domain after deployment.

The canonical URL, social metadata, robots file, and sitemap already reference the requested domain. Setting these files does not connect DNS or deploy the website. Hosting provider and authorised deployment access remain necessary. No deployment or DNS changes have been performed.

Google Fonts enhance typography; local system fonts provide a fallback. The site does not use analytics, a contact-form backend, or third-party JavaScript.

Riverbank fintech delivery and bank/government stakeholder experience were added from the owner’s supplied details. Independent concepts are separate from shipped products. Visible product references use “People Experiences in M365”. Original product screenshots are retained as requested; source documentation URLs retain their original paths.

The current design uses a purple palette and 20px desktop / 18px mobile body text. `font-examples.html` compares Arial, Verdana (DejaVu Sans fallback), and Georgia for owner review. Both supplied email addresses are mailto links. The independent Pickup Confidence case study is a full article, inspired by the supplied reference structure; research limitations remain explicit.

The owner’s approved portrait is bundled as `assets/melinda-kahi.jpg` and displayed by default for all visitors. The photo picker remains a browser-local preview; previously saved placeholder previews use an older storage key and cannot override the new default.
