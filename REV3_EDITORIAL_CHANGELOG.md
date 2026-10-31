# EDU-200 Rev 3.0 — Editorial Optimization

This build uses the earlier EDU-200 HTML guide as the **writing and layout baseline**, while using the October 2026 Rev 3.0 source for revised lab procedures, images, and selected values.

## Major substantive changes

- **Lab 1:** CloudShare access, Send Text clipboard action, and session credential panel.
- **Lab 4:** Updated firewall rule names from Rev 3.0.
- **Lab 9:** OAuth App Connector registration replaces the older provisioning-key/WinSCP process; links now point to the actual ZPA App Connector Group and Connector setup articles.
- **Lab 16:** ZAgent investigation and ZDX confirmation replace ZDX Copilot.

## Authoring decisions

- Retained short numbered actions and configuration tables from the approved earlier web guide.
- Removed the long verbatim Rev 3.0 steps and generic **Rev 3.0 reference** captions.
- Placed a selected set of newer screenshots after the relevant numbered actions instead of inserting an image for every PDF sub-step.
- Retained the existing design shell, footers, technical explainers, sidebar, search, task progress, and themes.
- Added Help links only where the article matches the task, with ZPA App Connector Group and enrollment references audited specifically.
- For uncertain breadcrumb locations, provide a Search Menu keyword instead of inventing or relying on potentially stale PDF navigation.

## Final verification required

Review live tenant paths and configuration defaults, particularly Lab 9 token enrollment, Lab 10 application discovery, Lab 12 SIPA, and SDC Lab 16 data. Structural validation is not a substitute for tenant-level functional testing.
