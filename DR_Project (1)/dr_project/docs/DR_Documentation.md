# Disaster Recovery (DR) Plan

**Owner:** [Your Name] | **Version:** 1.0 | **Last reviewed:** 2026-10-29

## 1. Backup Schedule & Storage
| Data | Frequency | Retention | Storage Location |
|---|---|---|---|
| Database | Daily full (2:00 AM) + hourly incremental | 30 days | Primary server + cloud bucket (off-site) |
| Application files / configs | Daily | 14 days | Cloud bucket (versioned) |
| Full system image | Weekly (Sunday) | 4 weeks | Off-site / secondary region |

Backups are encrypted, and a test restore is performed monthly.

## 2. Restore Procedure
1. **Detect & declare:** Confirm the incident and notify the DR lead.
2. **Assess:** Identify affected systems and the last good backup.
3. **Isolate:** Disconnect affected systems to prevent further damage.
4. **Provision:** Prepare a clean server / environment.
5. **Restore data:** Restore the latest full backup, then apply incrementals.
6. **Restore app & config:** Redeploy application files and configuration.
7. **Verify:** Check data integrity, run smoke tests, confirm user access.
8. **Go live:** Switch traffic back and monitor for 24 hours.
9. **Document:** Log the incident, timeline and lessons learned.

**Targets:** RTO 4 hours | RPO 1 hour

## 3. Escalation Contacts & Communication Plan
| Level | Role | Name | Phone / Email |
|---|---|---|---|
| L1 | System Administrator | [Name] | [Phone / Email] |
| L2 | DR Lead / Project Manager | [Name] | [Phone / Email] |
| L3 | Management / Stakeholder | [Name] | [Phone / Email] |
| Vendor | Cloud / Hosting Support | [Name] | [Phone / Email] |

**Communication:** L1 alerts L2 within 15 min; L2 informs L3 within 30 min; status updates to stakeholders every hour until resolved.

## 4. Tabletop Drill
**Scenario:** Primary database server fails after a corrupted update. See `Tabletop_Drill_Findings.md`.
