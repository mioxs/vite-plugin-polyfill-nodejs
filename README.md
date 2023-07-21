# vite-polyfill-nodejs

### polyfills Node.js core modules resolve commonjs
[![npm version](https://img.shields.io/npm/v/vite-polyfill-nodejs.svg)](https://www.npmjs.com/package/vite-polyfill-nodejs)
[![Alt](https://img.shields.io/npm/dm/vite-polyfill-nodejs)](https://npmcharts.com/compare/vite-polyfill-nodejs?minimal=true)
![Alt](https://img.shields.io/github/license/mioxs/vite-polyfill-nodejs)

### install

```shell
npm i vite-polyfill-nodejs -D
```


##### vite.config.ts

```ts
import { defineConfig } from 'vite';
import PolyfillNodejs from 'vite-polyfill-nodejs';

export default defineConfig({
  plugins: [
    PolyfillNodejs(),
  ],
});

```




