# React Template with Typescript

## 💻 Local Development Setup

This project runs in localhost using the following domain: `mylocaldomain.com`.
You must modify your `/etc/hosts` file.

In MacOS/Linux you can open the file with the next command:

```bash
vim /etc/hosts
```

In Windows you can open the notepad app and then open the file inside:

```bash
c:\Windows\System32\Drivers\etc\hosts
```

Once the file is opened, add the following line at the end:

```bash
127.0.0.1       mylocaldomain.com
```

## 🚀 Run the app

- Node version: +16
- `npm install`: Install dependencies
- `npm start`: Run in dev mode on [mylocaldomain.com:8080](mylocaldomain.com:8080)
- `npm run build`: Generate production build

## ✅ Testing

### Unit tests

`npm run test`: Run unit tests with Jest and React Testing Library

## 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## 🌈 Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) already configured
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Sass](https://sass-lang.com) to supercharge CSS with nested classes and more fun
- [Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start#usage-summary) for state management.
- [.editorconfig](https://editorconfig.org) for sharing the IDE config

## 👌 Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration

## 🔀 Related information

This application was inspired by the [Bulletproff React Architecture](https://github.com/alan2207/bulletproof-react). Feel free to check it out and see more examples.
