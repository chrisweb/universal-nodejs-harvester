import typescript from '@rollup/plugin-typescript';
//import pkg from '../package.json';
export default {
  input: 'src/index.ts',
  external: [ 'cheerio', 'json2csv' ],
  output: [
    {
      //file: pkg.module,
      dir: 'dist',
      //format: 'esm',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
  ],
}