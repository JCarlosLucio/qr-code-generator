# QRCODE GENERATOR 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Prerequisite](https://img.shields.io/badge/node-%3E%3D%2016.9-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/JCarlosLucio/qr-code-generator#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/JCarlosLucio/qr-code-generator/graphs/commit-activity)
[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://choosealicense.com/licenses/gpl-3.0/)

> An app to generate URL or WIFI QR Codes.

## ✨ Demo

[![QRCODE GENERATOR Homepage](../media/qr-code-generator-desktop.webp?raw=true)](https://jcarloslucio.github.io/qr-code-generator/)

## Docs

### Prerequisites

- node >= 16.9

### Install

```sh
npm install
```

### Build

Builds the app for production to the `dist` folder.

```sh
npm run build
```

### Develop

Runs the app in development mode. Open
[http://localhost:5173/qr-code-generator/](http://localhost:5173/qr-code-generator/)
to view it in the browser.

```sh
npm run dev
```

### Serve

Locally preview the production build. Open
[http://localhost:3000/qr-code-generator/](http://localhost:3000/qr-code-generator/)
to view it in the browser.

```sh
npm run serve
```

### Lint

Format the application with prettier.

```sh
npm run lint:format
```

Fixes the application's linting errors.

```sh
npm run lint:fix
```

Formats and fixes linting errors.

```sh
npm run lint
```

### Type check

Checks for type errors.

```sh
npm run type-check
```

### e2e tests

Opens the cypress suite for testing. The app must be running with `npm run dev`
or `npm run serve`.

```sh
npm run cypress:open
```

Runs Cypress tests to completion. By default, cypress run will run all tests
headlessly.

```sh
npm run test:e2e
```

## Deployment

Deployed to gh-pages.

### Setup

0. [How to add secrets to a repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)

1. Add `DISCORD_WEBHOOK` secret (used for getting notified to discord about
   deployment status)
2. `GITHUB_TOKEN` secret is
   [automatically created by Github](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)

### Triggering a deploy

Deploys are triggered on `push` or `pull_request` merge to `main` branch.

### Skipping

If any commit message in your push or the HEAD commit of your PR contains the
strings `[skip ci]`, `[ci skip]`, `[no ci]`, `[skip actions]`, or
`[actions skip]` workflows triggered on the `push` or `pull_request` events will
be skipped.

## Author

👤 **Juan Carlos Lucio**

- Github: [@JCarlosLucio](https://github.com/JCarlosLucio)

## 📝 License

Copyright © 2023 [Juan Carlos Lucio](https://github.com/JCarlosLucio).

This project is [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) licensed.
