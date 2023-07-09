# vite-plugin-polyfill-commonjs

### polyfills Node.js core modules resolve commonjs
[![npm version](https://img.shields.io/npm/v/vite-plugin-polyfill-commonjs.svg)](https://www.npmjs.com/package/vite-plugin-polyfill-commonjs)
[![Alt](https://img.shields.io/npm/dm/vite-plugin-polyfill-commonjs)](https://npmcharts.com/compare/vite-plugin-polyfill-commonjs?minimal=true)
![Alt](https://img.shields.io/github/license/mioxs/vite-polyfill-commonjs)

### install

```shell
npm i vite-plugin-polyfill-commonjs -D
```


##### vite.config.ts

```ts
import { defineConfig } from 'vite';
import PolyfillCommonjs from 'vite-plugin-polyfill-commonjs';

export default defineConfig({
  plugins: [
    PolyfillCommonjs(),
  ],
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});

```




