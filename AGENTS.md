# AGENTS.md

## Cursor Cloud specific instructions

This is a frontend-only React + Vite SPA (no backend, no database, no Docker). See `README.md` for standard dev commands (`npm install`, `npm run dev`, `npm run build`, `npm run lint`).

### Key notes

- **Package manager**: npm with `legacy-peer-deps=true` (configured in `.npmrc`). Always use `npm install`, not yarn/pnpm.
- **Dev server**: `npm run dev` starts Vite on `localhost:5173`. Add `-- --host 0.0.0.0` if you need external/container access.
- **Lint**: `npm run lint` currently reports ~10 pre-existing errors (unused imports, `set-state-in-effect`). These are in the existing codebase and should not block development.
- **Forms**: Quote and Contact forms work in demo mode without any env vars. Set `VITE_FORM_ENDPOINT` in a `.env` file to enable real form submission.
- **No tests**: There is no test suite configured in this project (no test framework or test script in `package.json`).
