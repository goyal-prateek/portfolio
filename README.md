# Prateek Goyal Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. The site highlights experience, skills, education, competitive programming profiles, and contact links in a clean single-page layout.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint
- Husky + lint-staged

## Local development

```bash
pnpm install
pnpm dev
```

The app starts on Vite's local dev server. Build a production bundle with:

```bash
pnpm build
pnpm preview
```

## Scripts

- `pnpm dev` starts the local development server.
- `pnpm build` creates the production build.
- `pnpm preview` serves the production build locally.
- `pnpm lint` runs ESLint across the project.

## Pre-commit linting

This repo uses Husky and lint-staged to run ESLint on staged `*.ts` and `*.tsx` files before each commit.

## Repository

GitHub: [goyal-prateek/portfolio](https://github.com/goyal-prateek/portfolio)

## Deployment

The production site is a static Vite build hosted in the private
`portfolio-390445022785-ap-south-1` S3 bucket and served through CloudFront.
`https://prateeklab.com` is canonical; `https://www.prateeklab.com` permanently
redirects to the matching apex URL.

Pull requests run lint and a production build. A successful push to `main`
uploads that exact build artifact through GitHub OIDC, applies immutable cache
headers to hashed assets, and waits for the CloudFront invalidation to finish.
