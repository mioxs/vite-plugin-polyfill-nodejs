import { Alias } from 'vite';

// ref: https://webpack.js.org/configuration/resolve/#resolvefallback

export default function polyfillCommonjs(): Alias[] {
  return [
    {
      find: 'assert',
      replacement: require.resolve('assert'),
    },
    {
      find: 'buffer',
      replacement: require.resolve('buffer'),
    },
    {
      find: 'console',
      replacement: require.resolve('console-browserify'),
    },
    {
      find: 'crypto',
      replacement: require.resolve('crypto-browserify'),
    },
    {
      find: 'domain',
      replacement: require.resolve('domain-browser'),
    },
    {
      find: 'events',
      replacement: require.resolve('events'),
    },
    {
      find: 'http',
      replacement: require.resolve('stream-http'),
    },
    {
      find: 'https',
      replacement: require.resolve('https-browserify'),
    },
    {
      find: 'path',
      replacement: require.resolve('path-browserify'),
    },
    {
      find: 'punycode',
      replacement: require.resolve('punycode'),
    },
    {
      find: 'querystring',
      replacement: require.resolve('querystring-es3'),
    },
    {
      find: 'stream',
      replacement: require.resolve('stream-browserify'),
    },
    {
      find: 'string_decoder',
      replacement: require.resolve('string_decoder'),
    },
    {
      find: 'sys',
      replacement: require.resolve('util'),
    },
    {
      find: 'timers',
      replacement: require.resolve('timers-browserify'),
    },
    {
      find: 'tty',
      replacement: require.resolve('tty-browserify'),
    },
    {
      find: 'url',
      replacement: require.resolve('url'),
    },
    {
      find: 'util',
      replacement: require.resolve('util'),
    },
    {
      find: 'vm',
      replacement: require.resolve('vm-browserify'),
    },
    {
      find: 'zlib',
      replacement: require.resolve('browserify-zlib'),
    },
    {
      find: 'stompjs',
      replacement: require.resolve('stompjs/lib/stomp'),
    },
  ];
}
