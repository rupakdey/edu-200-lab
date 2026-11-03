# EDU-200 Rev 3.0 — P0/P1/P2 targeted technical fixes

Applied to latest consolidated optimized guide plus the Labs 3–13 assigned-tenant reminder cleanup. Preserves HTTP-only warnings in Labs 10 and 11, Joe added to the existing Allow Intranet rule, theme-aware DNS SVGs, and the established site styling.

## P0 — task-critical
- Lab 10.2: explicit Intranet segment TCP 80.
- Lab 7: default-system-resolver nslookup (no hardcoded 8.8.8.8) and DNS Insights rule/domain/action correlation; a timeout alone is not proof of policy.
- Lab 13.1.5: removed incorrect Access Policy Block diagnostic exercise/screenshot. Replaced it with an explanation that missing ports can be dropped by ZCC before ZPA cloud policy evaluation; no policy-block record guaranteed.

## P1 — important dependencies
- Introduction, Lab 2, Lab 14: instructor-shared CloudShare URL; credentials from CloudShare → Credentials, not email. Lab 1 and SDC checkpoint already use CloudShare and remain unchanged.
- Lab 9: expected OAuth token from virtual serial console, two-hour expiry, lab-specific /etc/issue convenience, fallback if missing; destructive reset warning.
- Lab 12: compare against verified App Connector network public NAT IP and classify comparisons without that reference as tentative.

## P2 — evidence and consistency
- Lab 2: explicit optional SyncZPA/123 fields for Joe and Bev; no implied ZPA synchronization.
- Lab 4: optional Firewall Insights/Logs correlation for default drop, ICMP/SSH Allow and WhatsApp Block.
- Lab 5: TLS certificate and log correlation; handshake symptoms are not proof of pinning.
- Lab 6: Cloud App Control Allow default behavior and Allow Cascading to URL Filtering caveat.
- Lab 8: DLP Web Insights log correlation for Data Violation Rule.
- Lab 11: final summary now confirms both ZPA entitlement and Intranet policy authorization.

## Limitations / tenant-dependent checks
- OAuth enrollment token must be confirmed in the assigned connector console, as /etc/issue is image-specific.
- SIPA public NAT baseline is absent from source material; instructor or network data needed for conclusive validation.
- Exact log fields or views depend on licensing, policy logging and event ingestion; test in live tenant.
- No live tenant policy execution was performed as part of these editorial changes.

## Official technical references
- https://help.zscaler.com/zpa/using-app-segment-multimatch
- https://help.zscaler.com/zpa/applying-oauth-enrollment-tokens
- https://help.zscaler.com/zpa/configuring-connectors
- https://help.zscaler.com/zia/configuring-advanced-settings
- https://help.zscaler.com/zia/dns-insights-logs-columns
- https://help.zscaler.com/zia/firewall-data-types-and-filters
- https://help.zscaler.com/troubleshooting-runbooks/zia-dlp-policies-troubleshooting-runbook
- https://help.zscaler.com/zpa/viewing-source-ip-anchoring-dashboard
