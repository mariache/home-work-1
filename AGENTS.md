# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

React tutorial/homework SPA (Create React App 4.0.3, React 17, react-router-dom v6). Frontend-only, no backend. Active entry point renders `tutorial-6-1` — a blog with routing (Home, About, Login, post pages).

### Key commands

Standard CRA scripts — see `package.json` and `README.md`:
- `yarn start` — dev server on port 3000
- `yarn build` — production build
- `yarn test` — Jest (no test files exist yet; use `--passWithNoTests`)
- `npx eslint src/` — lint

### Important: OpenSSL compatibility

Node.js 17+ uses OpenSSL 3 which is incompatible with the Webpack version bundled in react-scripts 4.0.3. The environment variable `NODE_OPTIONS=--openssl-legacy-provider` is set in `~/.bashrc` and is required for `yarn start` and `yarn build` to work. If commands fail with `ERR_OSSL_EVP_UNSUPPORTED`, ensure this variable is exported.

### Lint warnings

Existing code has ESLint warnings/errors (e.g. `import/no-anonymous-default-export`, missing `Nav` import in `tutorial-6`). These are pre-existing and not regressions.
