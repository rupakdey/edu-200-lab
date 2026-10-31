# EDU-200 Administrator Web Lab Guide — Rev 3.0 (Optimized)

**Source:** EDU-200 Hands-on Lab Guide, October 2026 Rev 3.0 (PDF/DOCX).
**Editorial baseline:** Earlier optimized EDU-200 web lab guide (uploaded as `edu-200-lab-main.zip`).

This build is intentionally **not a literal PDF conversion**. Tasks use short numbered instructions, compact configuration tables, highlighted Experience Center paths where supported, Search Menu keywords, contextual screenshots, technical explainers, and Expected Results. The guide retains the established sidebar, responsive light/dark modes, footer, search, and progress tracking.

## Major revision changes

- Lab 1: CloudShare access and Send Text clipboard workflow replace earlier Skytap instructions.
- Lab 4: Firewall rule names updated to **ICMP_SSH** and **Restrict_Whatsapp**.
- Lab 9: OAuth token enrollment replaces the older provisioning-key/WinSCP workflow. Help links point to the specific **Configuring App Connector Groups** and **Configuring App Connectors** articles.
- Lab 16: ZAgent replaces ZDX Copilot for the initial investigation; the later tasks validate the cause through ZDX metrics.

## Quick local preview

Run from the extracted site root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/index.html`.

## Validation and caveats

Static checks cover page links, image assets, task numbers, expected outcomes, and course navigation. Representative in-memory Chromium interaction tests cover theme switching, task completion and image lightbox. External links were selected for task relevance; confirm live portal paths and session-specific values during instructor/tenant QA.

The source is **Zscaler Confidential**. Do not publish the adapted site publicly without the necessary authorization.
