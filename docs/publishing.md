# Publishing & Versioning

This repo uses Changesets and GitHub Actions to manage versioning and publishing to npm.

## Local flow

1. Make changes and commit
2. Create a changeset:

```bash
pnpm changeset
```

3. Optionally update versions locally:

```bash
pnpm version-packages
```

4. Publish from CI or locally:

```bash
pnpm release
```

## CI flow

- On pushes to `main`, the `Release` workflow will either:
  - Open a version PR if there are unpublished changesets
  - Or publish to npm if the version PR is merged

## Required Secrets

- `NPM_TOKEN` in GitHub repo secrets (publish access)

## npm scopes & access

- Set the package `name` to your scope, e.g. `@your-scope/awesome-ui`
- `publishConfig.access: public` for public scoped packages
