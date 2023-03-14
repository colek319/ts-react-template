# ts-react-template

The goal is to create a minimally functional typescript template for future projects. I want it to be as simple as possible while including standard tooling to facilitate clean development.

To bootstrap:
```
yarn install
```

To build:
```
yarn build
```
Building runs a linter and does type checking. You should be able to from `./dist/index.html`. 

To develop:
```
yarn dev
```
This typechecks and runs a dev-server at `localhost:3000`.

## Other Commands

- `yarn clean` deletes `./dist`.
- `yarn lint` runs a linter.
- `yarn lint-fix` Runs a lint fixer and prettier. This will overwrite your files. 

## Details

Webpack is a bundler. It makes a dense bundle.js artifact, and handles creating the entry `index.html` file. We use babel (`babel-loader` plugin) to transpile TypeScript into backwards compatible JavaScript. TypeScript does typechecking. The build flow is roughly summarized below:

```
> Type check src/**/*.tsx with TSC. Generates .d.ts files.
> (babel-loader in webpack) TypeScript -> ES5.
> (webpack) ES5 -> bundle.js and index.html.
```

## To Do

- [ ] Add best practices (where to add static files, how to create styled components).
- [ ] Add pre-commit tooling (so users get linting before commits, and don't shoot themselves in the foot).