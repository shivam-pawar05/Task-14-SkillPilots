# Disaster Recovery (DR) Project

A concise DR plan with a backup schedule, restore procedure and escalation contacts, plus a tabletop drill record.

## Structure
```
dr_project/
├── index.html                      # Web version of the plan (open in any browser)
├── css/style.css                   # Styling (light and dark mode)
├── js/script.js                    # Restore checklist and drill findings table
├── docs/
│   ├── DR_Documentation.pdf        # One-page PDF version
│   ├── DR_Documentation.md         # Markdown source of the plan
│   └── Tabletop_Drill_Findings.md  # Drill record template
├── LICENSE
└── README.md
```

## How to use
1. Open `index.html` in a browser. No build step or server is needed.
2. Replace the `[Name]` and `[Phone / email]` placeholders with real contacts in `index.html` and `docs/DR_Documentation.md`.
3. Run the tabletop drill with stakeholders and record the results in `docs/Tabletop_Drill_Findings.md`.

## Targets
- RTO (recovery time objective): 4 hours
- RPO (recovery point objective): 1 hour

The values are examples. Change them to match your system.

## Project steps
1. Outline backup frequency and storage locations
2. Detail the step-by-step restore procedure
3. Add escalation contacts and a communication plan
4. Create a one-page PDF
5. Run a mock drill with stakeholders and record findings
