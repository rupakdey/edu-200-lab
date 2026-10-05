# EDU-200 Web Lab Guide — Unofficial Web Edition

Author: **Rupak Dey**

This folder contains a complete static HTML adaptation of the EDU-200 hands-on lab guide. It is designed for GitHub Pages and does not require a backend.

## Included

- Introduction, current-navigation notes, session/tenant explanation and course index
- Labs 1–16 (47 tasks)
- Dedicated SDC access checkpoint before Lab 14
- Dark/light theme, persistent left navigation, course search, task progress saved in browser local storage, screenshot lightbox, print CSS
- Reference screenshots extracted from the provided PDF; written navigation has been modernized where the source uses legacy menu paths

## Publish on GitHub Pages

Upload the contents of this directory to a repository and configure **Settings → Pages** to publish from the repository root (or `/docs` if you place the files there). `index.html` is the entry point.

## Important

This is an independent, simplified learning aid and **not an official Zscaler lab guide**. Live tenant behavior and instructor guidance take precedence.

## Technical explainer pages

- Lab 3 includes an embedded **App Profile vs. Forwarding Profile** explainer before Task 3.1.
- `zpa-explainer.html` is a reusable ZPA foundation page placed before Lab 9 and intended to support Labs 9–11.
- Lab 2 starts with a concise explainer for **Administrative vs. Service Entitlements**.
- Lab 5 starts with a concise explainer for **SSL/TLS inspection, certificate trust, and certificate pinning**.
- Lab 8 starts with a concise explainer for the **DLP Dictionary → Engine → Policy** model.
- Lab 5 Task 5.3 includes a certificate-pinning deep dive, current Threema failure/log examples, Web Insights handshake filters, and a targeted bypass workflow.
