# vite-plugin-polyfill-nodejs

### polyfills Node.js core modules running in browsers
[![npm version](https://img.shields.io/npm/v/vite-plugin-polyfill-nodejs.svg)](https://www.npmjs.com/package/vite-plugin-polyfill-nodejs)
[![Alt](https://img.shields.io/npm/dm/vite-plugin-polyfill-nodejs)](https://npmcharts.com/compare/vite-plugin-polyfill-nodejs?minimal=true)
![Alt](https://img.shields.io/github/license/mioxs/vite-plugin-polyfill-nodejs)

### install

```shell
npm i vite-plugin-polyfill-nodejs -D
```

##### vite.config.ts

```ts
import { defineConfig } from 'vite';
import PolyfillNodejs from 'vite-plugin-polyfill-nodejs';

export default defineConfig({
  plugins: [
    PolyfillNodejs(),
  ],
});

```




