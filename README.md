# vite-polyfill-commonjs

### polyfills Node.js core modules resolve commonjs
[![npm version](https://img.shields.io/npm/v/vite-polyfill-commonjs.svg)](https://www.npmjs.com/package/vite-polyfill-commonjs)
[![Alt](https://img.shields.io/npm/dm/vite-polyfill-commonjs)](https://npmcharts.com/compare/vite-polyfill-commonjs?minimal=true)
![Alt](https://img.shields.io/github/license/mioxs/vite-polyfill-commonjs)

### install

```shell
npm i vite-polyfill-commonjs -D
```


##### vite.config.ts

```ts
import { defineConfig } from 'vite';
import PolyfillCommonjs from 'vite-polyfill-commonjs';

export default defineConfig({
  resolve: {
    alias: [
      ...PolyfillCommonjs(),
    ],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});

```




