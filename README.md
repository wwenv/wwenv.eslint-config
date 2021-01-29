# Web Working Environment ESLint config

This modules provides a recommended configuration for all parts of the
[Web Working Environment](https://github.com/wwenv/wwenv.core).

## Usage

Add `eslint` and `@wwenv/eslint-config` to your devDependencies:

```shell
npm install --save-dev eslint @wwenv/eslint-config
```

Add a file named `.eslintrc.js` to your project root directory:

```js
module.exports = {
  extends: [
    '@wwenv/eslint-config'
  ],
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
};
```

If you habe multiple tsconfig files, add them all to `project` like this:

```js
module.exports = {
  extends: [
    '@wwenv/eslint-config'
  ],
  parserOptions: {
    project: [
      './tsconfig.backend.json',
      './tsconfig.frontend.json',
    ],
  },
};
```

## License

Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)

Copyright (c) 2021 Peter Müller <peter@crycode.de>
