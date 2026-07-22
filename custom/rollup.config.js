import nodeResolve from '@rollup/plugin-node-resolve';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import esbuild from 'rollup-plugin-esbuild';

const inputFile = "src/custom.js";

export default {
  input : inputFile,
  output: {
    file: "build/custom.es6.js",
    format: 'es',
    sourcemap: false,
  },
  external: (assetPath) => {
    let asset = assetPath.replace(process.cwd(), '');
    let srcDir;
    if(process.platform === 'win32') {
      srcDir = '\\src\\';
    } else {
      srcDir = '/src/';
    }
    if (asset.includes('canvas-confetti')) { return false; }
    if (asset.endsWith(inputFile) || asset.startsWith('./') || asset.startsWith(srcDir)) {
      return false;
    }
    return true;
  },
  preserveEntrySignatures: false,
  plugins: [
    nodeResolve(),
    esbuild({
      minify: true,
      target: ['es2020'],
    }),
    importMetaAssets()
  ],
};
