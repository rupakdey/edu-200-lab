# EDU-200 Rev 3.0 — Post-P0/P1/P2 Update (November 3, 2026)

## Baseline
Built on `EDU-200-Rev3-P0-P1-P2-Complete.zip` (the last complete export), preserving its P0/P1/P2 technical fixes, theme-aware ZCC DNS diagrams, Lab 10–11 HTTP-only warnings, and Joe's corrected `Allow Intranet` policy coverage.

## Changes since that export

### Lab 13 — Task 13.1: RDP verification sequence
1. **13.1.2 — Remote desktop sign-in:** `img-178.png` is placed directly after the successful RDP login step. `img-176.png` remains with the connection instructions.
2. **13.1.3 — Verify TCP 3389 using `netstat -fn`:** The supplied high-resolution Command Prompt screenshot is inserted as `assets/images/lab13/rdp-netstat-established.png`. The text instructs participants to run it on the *Corp Client PC* while the remote session remains open, look for `ESTABLISHED` and `:3389`, and understand that the example's `100.64.1.1` may be a ZCC/ZPA virtual IP.
3. **13.1.4 — ZPA Applications dashboard:** `img-180.png` now illustrates the Applications dashboard (`Private Access → Dashboards → Applications`) with `intranet.patraining.safemarch.com:3389` under recent applications.
4. **Previously 13.1.5:** The missing-port explanation has been moved outside the numbered task steps into a concise *Technical context* callout. It explains that ZCC may drop a connection with an unconfigured port before ZPA cloud policy evaluation and that a ZPA Access Policy Block log may not exist. No negative-port test or alternative diagnostics exercise was added.
5. `img-182.png` is no longer displayed in Lab 13. The media asset itself is retained in the site's historic source-image folder to avoid unnecessary file deletion.
6. Expected Result now aligns with the successful desktop, established TCP 3389 connection, and dashboard event.

### Lab 4 — Task 4.3: Corrected WhatsApp network-application claim
- Removed the misleading assertion that a firewall rule automatically covers non-browser WhatsApp traffic.
- Explained that network-application matching is subject to traffic steering and DPI identification. WhatsApp Web may also be affected by URL Filtering or Cloud App Control.
- Reworded the browser test and expected result so a failed page load alone cannot be attributed to `Restrict_Whatsapp`; correlation with the named Firewall Insights rule and Block/Drop event is required.

## Validation
- 19 HTML pages, 16 labs, and 47 task IDs preserved.
- No broken local links/assets, no duplicate HTML IDs, and valid local PNG images.
- JavaScript syntax checks passed.
- ZIP integrity checked.
- Live Zscaler tenant testing was not performed, and browser-render validation was unavailable because Chromium was not installed in the execution environment.

## How to apply the update
- **Full ZIP:** Extract to a new folder, then open `index.html`.
- **Changes-only ZIP:** Replace `lab-04.html` and `lab-13.html` in the prior P0/P1/P2 website and add `assets/images/lab13/rdp-netstat-established.png` at its supplied relative path. Other files are unchanged.

This guide contains Zscaler source-derived training material; keep it within the authorized training distribution audience.
