#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const params = Object.fromEntries(
  args
    .join(' ')
    .split(/\s+--/)
    .filter(Boolean)
    .map((kv) => {
      const [k, ...rest] = kv.split(' ');
      return [k, rest.join(' ').trim()];
    })
);

const template = params.template || 'react';
const name = params.name;
const scope = params.scope || '@rte';

if (!name) {
  console.error('Missing --name <package-name>');
  process.exit(1);
}

const root = process.cwd();
const templateMap = {
  react: 'react-ui',
  next: 'next-ui',
  vue: 'vue-ui',
  solid: 'solid-ui',
};

if (!templateMap[template]) {
  console.error(`Unknown template: ${template}. Use one of: ${Object.keys(templateMap).join(', ')}`);
  process.exit(1);
}

const sourceDir = path.join(root, 'packages', templateMap[template]);
const targetDir = path.join(root, 'packages', name);

if (!fs.existsSync(sourceDir)) {
  console.error(`Template not found at ${sourceDir}`);
  process.exit(1);
}

if (fs.existsSync(targetDir)) {
  console.error(`Target already exists at ${targetDir}`);
  process.exit(1);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (['node_modules', 'dist'].includes(entry.name)) continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

copyDir(sourceDir, targetDir);

// Update package.json
const pkgPath = path.join(targetDir, 'package.json');
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkg.name = `${scope}/${name}`;
  pkg.description = pkg.description || `${template} package ${name}`;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
}

console.log(`\n✔ Created ${scope}/${name} from ${template} template.`);
console.log(`Next steps:`);
console.log(`  1) Edit packages/${name}/package.json (description, keywords, repo)`);
console.log(`  2) Implement your code in packages/${name}/src`);
console.log(`  3) Build: pnpm --filter ${scope}/${name} build`);
console.log(`  4) Add a changeset: pnpm changeset`);


