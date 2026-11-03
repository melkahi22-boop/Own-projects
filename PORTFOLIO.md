# Melinda Kahi — PM portfolio

Start with [PORTFOLIO_CONTEXT.md](PORTFOLIO_CONTEXT.md) for the owner's accepted content, design decisions, source facts, deployment history, and future-edit workflow.

## Run and implementation

In this checkout, run `npm start` (Python 3; server on port 3000). No dependencies or build step are required. `npm run check` validates app.js syntax; also check the embedded script when modifying runtime behaviour.

The public site has Home, Products portfolio, Case studies, Services, and Contacts. Hash navigation does not require server rewrites. index.html embeds CSS and JavaScript to avoid the earlier missing-styles deployment failure. Keep the style.css/app.js reference copies synchronized when editing styles or behaviour. portfolio-v6.html is an identical alternate entry page; its historical filename is retained for deployment troubleshooting.

Approved design: purple theme, Arial, 20px desktop / 18px mobile reading text, permanent portrait at assets/melinda-kahi.jpg. The optional photo picker saves only a browser-local preview under pm-portfolio-photo-v2; it does not publish uploads. Both supplied email addresses and LinkedIn are active contact links. Independent concepts are clearly separated from shipped products and their measured outcomes.

## Deployment

Public domain: https://melindakahipm.com/. Hosting: Namecheap with cPanel; document root /public_html. Latest package at documentation update: melinda-kahi-portfolio-purple-v7.zip, on branch portfolio/melinda-kahi.

Download the selected versioned ZIP from GitHub using Download raw file. Upload it into public_html, extract there, and overwrite existing files. index.html must be directly inside the document root, alongside assets/. Uploading the ZIP without extraction does not update the site. Preserve unrelated hosting files and DNS records.

The owner observed old content at homepage URLs while a fresh filename served the uploaded version correctly. Cache/routing diagnosis remains unresolved; see the continuity record. A source push or correct ZIP does not prove the live homepage was refreshed. No automated Namecheap deployment has been configured.

Do not publish the cloud environment or reapply historical changes without a new user request.
