# ACME Components Monorepo

A minimal template to build and publish component packages for React, Vue 3, and Next.js.

## Structure

- `packages/react-ui`: React component library
- `packages/vue-ui`: Vue 3 component library (Vite library mode)
- `packages/next-ui`: Next.js-ready React components (with `use client` where needed)

## Getting Started

1. Install dependencies

```bash
pnpm install
```

2. Build all packages

```bash
pnpm build
```

3. Develop with watch

```bash
pnpm dev
```

## Releasing (Changesets)

1. Create a changeset

```bash
pnpm changeset
```

2. Bump versions

```bash
pnpm version-packages
```

3. Publish to npm (requires `NPM_TOKEN` configured in CI or local `~/.npmrc`)

```bash
pnpm release
```

GitHub Actions workflow (`.github/workflows/release.yml`) will automatically open a version PR or publish on pushes to `main` if `NPM_TOKEN` is set as a repo secret.

## Notes

- React/Next packages are built with `tsup` generating ESM and CJS + types.
- Vue package uses Vite library mode and `vue-tsc` to emit types.
- Update the package names (currently `@acme/*`) to your own scope.
