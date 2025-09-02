# Troubleshooting

## Build fails: missing peer dependency

Install peer deps in your consumer app. In this repo, peer deps are not bundled.

## Type declarations missing

Ensure `d.ts` generation is enabled (tsup `--dts` or `tsc --emitDeclarationOnly`).

## Next.js client/server errors

Only mark files that use browser APIs with `'use client'`. Keep server-safe files separate.

## Vue or Solid bundling issues

Verify `external` configuration excludes framework runtime from bundles and types are emitted.
