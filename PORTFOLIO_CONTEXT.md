# Portfolio continuity record

Last updated: 3 November 2026. This records the owner's decisions and supplied facts for future portfolio improvements. Read alongside PORTFOLIO.md and inspect the current implementation before editing. Do not reapply old changes, roll back newer content, publish environments, or deploy to hosting solely because this file describes past work.

## Project and delivery

- Owner: Melinda Kahi. Public website: https://melindakahipm.com/.
- Repository: melkahi22-boop/Own-projects. Working branch: portfolio/melinda-kahi. Main originally held only a README; portfolio changes were pushed to the working branch, not merged into main.
- Latest application revision at this record: a14809f. Latest deployment package: melinda-kahi-portfolio-purple-v7.zip. This documentation commit follows it.
- Namecheap hosting with cPanel. Domain document root reported as /public_html. The owner uploads ZIPs and extracts them there, overwriting existing files.
- Codex /workspace links were not downloadable for this user. Working delivery route: commit and push a uniquely named ZIP to the portfolio branch; give its GitHub blob link and instruct Download raw file.
- GitHub uploads are separate from Namecheap deployment and environment publication. No automated hosting deployment or DNS access has been established.
- A prior Claude artifact redirect was configured. The owner was instructed to remove it. Check current settings before diagnosing future redirects.

## Design decisions

- Five navigation pages: Home, Products portfolio, Case studies, Services, Contacts. Hash navigation, responsive desktop/mobile layout.
- Purple theme, replacing the original green. Owner chose Arial. Main reading text: 20px desktop, 18px mobile, generous line spacing. Avoid tiny text; earlier iterations were repeatedly too small.
- Preserve product screenshots. Replace visible Teams/Outlook product wording with “People Experiences in M365”; do not remove screenshots to remove these names. Accurate source URLs may retain product names.
- Separate shipped products from independent concepts. Pickup Confidence is the single independent case study, shown as a full article without collapsed details. Structure inspired by the owner's supplied Duolingo showcase: context, persona, journey, pain points, problem, proposed solution, visuals, trade-offs, validation. Do not import another author's claims, research, or persona into Melinda's work.
- Shipped product stories may use expandable detail to provide progressive disclosure.
- No visible version label in the footer. “Portfolio v6” was deliberately removed in v7.
- Original approved portrait: assets/shared image (11).jpg, uploaded by the owner on GitHub. Permanent display copy: assets/melinda-kahi.jpg. Do not generate a substitute portrait or rely on browser upload persistence for public visibility.

## Current landing-page copy (owner supplied)

Job title:
Senior Product Manager | Enterprise B2B SaaS, Generative AI & FinTech | Cross Platform (web & mobile) delivery

Intro:
Hi, I'm Melinda. I bring customer and business needs to life across mobile, desktop and web - with 5+ years at Microsoft shipping people experiences to millions of users worldwide.

About-me direction: company-independent account of work, skills, and impact, including teaching background to support training, teaching, and mentoring skills. No Riverbank reference in this summary. Current approved implementation:

“I turn customer needs and complex operational challenges into products that create measurable impact. My work spans people experiences used by millions, generative-AI features, and payment services that help governments collect revenue and deliver financial support. I bring product strategy, discovery, data-driven prioritisation, and cross-functional leadership to take ideas from inception to worldwide launch, including in regulated environments.”

“My teaching background shapes how I explain complex ideas, train teams, and mentor others. As a hands-on, AI-first practitioner, I use AI tools and agents to prototype, evaluate, and ship faster.”

## Products, facts, and wording

- Microsoft experience: 5+ years; people experiences for 47M+ users; inception to worldwide general availability across mobile, desktop and web; generative AI; regulated and government cloud environments; collaboration across engineering, design, research and partner teams.
- Richer profile card on iOS/Android: shipped worldwide. Intro describes “a compact, scalable, and shareable architecture” instead of “React Native foundation”. Technical proof-of-concept detail still mentions React Native; the user requested replacing the foundation phrase, not erasing all technical context.
- Reachability: consolidates availability signals in the profile card; a two-week hypothesis-driven A/B test informed GA. Panel appears in 93% of people experiences sessions. Do not describe 93% as a lift in usage.
- Skills exact requested description: “Co-led the delivery and launch of adding Skills in People Experiences, including AI-generated skills. This project allows users to manage and showcase their skills in their profiles. The initiative saw a 63.9% rise in average Skills users.” Do not reintroduce “monthly”.
- Riverbank is retained as a delivered-products entry; its name was removed specifically from About me and the fintech service, not requested removed from the entire website.
- Pickup Confidence: independent Uber rider teardown, not launched or validated. Public reviews/help information only, not representative research. Amani is a fictional Nairobi proto-persona. Screens show unbranded concepts and example values. State thresholds and fee relief are hypotheses. Proposed 80% comprehension criterion is not a measured result.
- Mobile case-study retrospective targets (85% task success, 10% action-use lift) are proposed future criteria, not actual results.

## Services

Order: Product strategy; Discovery & validation; Delivery & collaboration; Fintech and Institutional stakeholder management; PM consultancy (always last unless owner changes this).

Services intro begins: “Drawing on experience shipping products to millions of users at Microsoft”.

Fintech service exact title:
Fintech and Institutional stakeholder management

Description:
Payments and financial technology experience translating customer, operational, bank, and government requirements into practical products and services.

Bullets, deliberately short and formatted like other services:
- Multi-channel payment product delivery
- Institutional discovery and auditable reporting
- Public-sector payment operations and growth

Owner-supplied evidence for future elaboration (not all should be displayed in these concise bullets):
- Payments & Financial Technology startup, Nairobi, Kenya.
- Translated operational/customer requirements into a cloud-hosted revenue collection platform for seven county governments, multiple payment channels, public/administrative workflows, and bank/M-Pesa integrations.
- Gathered KCB requirements for auditable reporting for a government-funded program; partnered with engineering on a self-service reporting module in the bank-admin portal.
- Defined a USSD M-Pesa payment channel from county feedback for parking fees/daily market levies; launched in Kajiado County.
- Product Owner for Inua Jamii government stipend disbursements through KCB to 50,000+ vulnerable, low-income Kenyans per payment cycle via biometric POS terminals.
- Worked with county officials to onboard new payment areas, growing collections and the commission base. Do not invent revenue or growth figures.

## Contact details and public sources

- mel.kahi22@gmail.com
- melkahi@yahoo.com
- LinkedIn: https://www.linkedin.com/in/melinda-kahi26493352/
- Mobile profile card documentation: https://support.microsoft.com/en-us/teams/chat/find-more-information-about-a-teammate-in-microsoft-teams
- Reachability / Places launch: https://www.microsoft.com/en-us/copilot/blog/2024/05/13/ai-brings-new-life-to-flexible-work-with-microsoft-places/
- Owner's launch post: https://lnkd.in/p/d2jx4Vzy
- Skills documentation: https://support.microsoft.com/en-us/people-skills/overview-of-people-skills

## Source material

Owner supplied “Melinda Kahi · Senior PM Portfolio.pdf” (13-page exported portfolio), later a pasted Duolingo article as a structural reference, additional fintech experience in chat, and a portrait uploaded to GitHub. Assets from the PDF are already in assets/. Do not assume chat attachment paths persist across machines; current repo content and this record preserve the actionable information. This is a continuity summary, not a verbatim chat archive.

## Known hosting issue and evidence

- Uploaded/extracted files were correct, but normal homepage URLs showed an older green, collapsed-case-study version even in Incognito.
- In cPanel, searching index.html for “The Time-Critical Rider” found two expected matches: article heading and image alt text. This was not duplicate article content.
- Copying the same index.html to a new filename worked and showed the new purple theme and full article. This confirms the updated file existed; stale homepage caching or routing remains the working diagnosis, not a proven root cause.
- User reported no cache-management UI. We suggested Namecheap support inspect server/CDN cache, default index selection, and rewrite rules. Do not claim this was resolved.
- portfolio-v6.html is an identical alternative entry page; keep synchronized when updating index.html. In v7 it no longer has a visible v6 footer label despite its historical filename.
- Earlier automated live-domain request returned 403 from envoy; it did not establish the website itself was broken. Do not treat environment egress failure as live-site behaviour.
- Earlier ZIPs had 1980 timestamps due to packaging metadata; this was not evidence extraction failed. Later packages use current timestamps and 644 file permissions.

## Workflow for future edits

1. Inspect Git status and remote changes; preserve user uploads and changes. Use the existing isolated checkout; no worktree needed unless requested.
2. Edit index.html (embedded CSS/JS are what the deployed site runs). Keep style.css/app.js reference sources synchronized when changing them. Preserve all prior accepted content unless the new request changes it.
3. Keep portfolio-v6.html identical to index.html until this historical diagnostic page is intentionally retired. Do not create a new visible release label.
4. Run appropriate checks: npm run check; inspect modified copy; validate ZIP contents. For layout/behaviour changes, use Chromium/Playwright to test all five routes, desktop/mobile overflow, accordions, images, default portrait, and browser-local photo preview.
5. Build a uniquely named next ZIP (v8 after v7) with files at archive root, 644 file permissions, portrait and case-study assets included. Exclude Git metadata, source PDF, chat context, previous ZIPs, and unnecessary duplicate portrait files. Verify ZIP integrity and extracted index bytes against current index.html.
6. Commit/push to portfolio/melinda-kahi under the owner's ongoing authorised portfolio workflow. Check push success; do not force push or merge main without authorisation. Provide the GitHub ZIP blob URL and Download raw file instructions.
7. Distinguish pushed source/package, cPanel upload, live hosting verification, and cloud environment publication. Do not claim one proves another.
