/* eslint-disable @typescript-eslint/no-var-requires */
const typescript = require('@rollup/plugin-typescript');
const pkg = require('./package.json');
const ts = require('./tsconfig.json');
const generatePackageJson = require('rollup-plugin-generate-package-json');
const terser = require('@rollup/plugin-terser');
const svgr = require('@svgr/rollup');

module.exports = {
  input: pkg.main,
  output: {
    dir: ts.compilerOptions.outDir,
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: `${__dirname}/src`,
  },
  external: ['react', 'react/jsx-runtime', 'tailwind-merge'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    terser(),
    svgr(),
    generatePackageJson({
      baseContents: (pkg) => ({
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        author: pkg.author,
        main: pkg.main.replace('src/', '').replace('.ts', '.js'),
        peerDependencies: pkg.peerDependencies,
      }),
      additionalDependencies: {
        ...pkg.dependencies,
      },
    }),
  ],
};
