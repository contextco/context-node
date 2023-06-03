import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import cjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import dts from "rollup-plugin-dts";

const config = [
  {
    input: 'src/index.ts',
    output: {
      dir: 'build',
      format: 'cjs'
    },
    plugins: [typescript({ tsconfig: './tsconfig.json' }), nodeResolve(), cjs(), json()],
  },
  {
    input: "build/ts/index.d.ts",
    output: [{ file: "build/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
]

export default config;