# Implementation Guide

## Source of truth hierarchy
1. .agent/contracts/current.md (what to build now)
2. .agent/Plan.md (where we're going)
3. .agent/Prompt.md (why we're building it)
4. .agent/Documentation.md (what happened so far)

## Working rules
- Implement one milestone at a time
- Keep diffs scoped to the current contract
- Run verification before declaring progress
- Update Documentation.md after every meaningful change