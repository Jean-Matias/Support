# Support — Operating Rules

This workspace holds Jean's **Support** subproject under **Life → Side Hustles**. The canonical hub note is `wiki/projects/Support.md`.

## Read Order & Boundaries
- Follow the vault root `AGENTS.md`, `Projects/Life/AGENTS.md`, and `Projects/Life/Job Hunting/AGENTS.md`.
- Read `README.md` and `wiki/projects/Support.md` before implementation.
- GitHub remote repository: `https://github.com/Jean-Matias/Support` (public).
- **Prohibited:** Never inspect, index, or store banking/financial records, tax documents, or credentials.
- **Approvals Required:** Ask before public outreach, client communications, job/contract applications, domain purchases, or external deployments.

## Execution & Models
- Deploy all subagents, agents, and workers using `gemini-3.8-flash-medium` (`Gemini 3.8 Flash (Medium)`), unless Jean explicitly specifies a different model or reasoning effort.
- For Antigravity CLI (`agy`) and SDK tasks, pass `--model gemini-3.8-flash-medium --effort medium`. Never use unpinned defaults without an explicit override.
- For Antigravity `invoke_subagent`, pass `Model: "flash"`. Never use `"pro"` or `"inherit"` from a non-Flash-Medium parent without an explicit override.
- Verify files and disk state before declaring completion.
