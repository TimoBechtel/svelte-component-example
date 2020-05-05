import svelte from 'rollup-plugin-svelte';
import html from 'rollup-plugin-html2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const dev = process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    sourcemap: dev,
  },
  plugins: [
    svelte({ dev }),
    commonjs(),
    resolve(),
    html({
      template: 'src/template.html',
      fileName: 'index.html',
    }),
    dev &&
      serve({
        port: 3000,
        contentBase: 'dist',
      }),
    dev && livereload(),
  ],
};
