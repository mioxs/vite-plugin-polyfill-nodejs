# vite-plugin-polyfill-node

### polyfills Node.js core modules resolve commonjs
[![npm version](https://img.shields.io/npm/v/vite-plugin-polyfill-node.svg)](https://www.npmjs.com/package/vite-plugin-polyfill-node)
[![Alt](https://img.shields.io/npm/dm/vite-plugin-polyfill-node)](https://npmcharts.com/compare/vite-polyfill-node?minimal=true)
![Alt](https://img.shields.io/github/license/mioxs/vite-polyfill-node)

### install

```shell
npm i vite-plugin-polyfill-node -D
```


##### vite.config.ts

```ts
import { defineConfig } from 'vite';
import PolyfillNodejs from 'vite-plugin-polyfill-node';

export default defineConfig({
  plugins: [
    PolyfillNodejs(),
  ],
});

```




