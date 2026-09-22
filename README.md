# Portfolio Vanilla JS

Site portfolio statique en HTML, CSS et JavaScript (ES modules), sans bundler.

## Architecture

- `./docs/PROJECT_TREE.md`

## Scripts

```bash
npm install
npm run dev      # serveur local sur http://localhost:5173
npm run lint     # ESLint + HTMLHint
```

## CI

- GitHub Actions : `.github/workflows/ci.yml` — lint sur `main` et les pull requests
- GitLab CI : `.gitlab-ci.yml` — lint sur `main` et les merge requests
