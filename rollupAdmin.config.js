const commonJS = require('@rollup/plugin-commonjs');
import { nodeResolve } from '@rollup/plugin-node-resolve';
const { terser } = require('rollup-plugin-terser');

module.exports = [
    {
        input: 'src/admin/netlifyCms.js',
        output: {
            file: 'dist/admin/netlifyCms.js',
            format: 'umd',
            globals: {
                'netlify-cms': 'CMS'
            }
        },
        plugins: [
            nodeResolve({
                // pass custom options to the resolve plugin
                customResolveOptions: {
                    moduleDirectory: 'node_modules'
                }
            }),
            commonJS({
                include: 'node_modules/**'
            }),
            terser()
        ]
    }
];
