# Ensinio Frontend Async Test

This is a test for an internship opportunity at [Ensinio](https://ensinio.com). Built by **[ndrws](https://ndrws.dev).**

**[Test requirements](https://github.com/EnsinioOrg/front-end-async-test)** <br/>
**[Deployment link](https://ensinio-front-end-async-test-ndrws.vercel.app/pt)**

## Stack

- **Deployment**: Vercel
- **Framework**: Next.js 14 App dir with Typescript
- **Styling**: Styled-components. Note: Imported Bricolage Grotesque instead Degular font.
- **Animations**: Framer-motion. Since Ensinio uses Framer for their landing page, I chose framer-motion for animations instead of raw CSS. Not the same thing as use framer, but definitely a thing.
- **State management**: Zustand. The states for this project are simple, so I chose Zustand instead of Redux or Context API.
- **Tests**: Jest and React Testing Library
- **i18n**: Native Next.js i18n
- **Package management**: PNPM
- **Microfrontend**: Tried with Module Federation, but no support for App router yet. So implemented here with Pages router: [Ensinio Frontend Async Test with Microfrontends](https://github.com/raphaelandrews/ensinio-front-end-async-test-with-microfrontends).

## Run

### App

```bash
git clone https://github.com/raphaelandrews/ensinio-front-end-async-test.git
cd ensinio-front-end-async-test
code .
pnpm install
pnpm dev
```

### Tests

```bash
pnpm test

# watch
pnpm test:watch
```
