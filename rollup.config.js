import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import cjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const config = [
  {
    input: 'src/index.ts',
    output: {
      dir: 'build',
      format: 'es'
    },
    plugins: [typescript({ tsconfig: './tsconfig.json' }), nodeResolve(), cjs(), json()],
  }
]

export default config;