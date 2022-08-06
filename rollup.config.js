const typescript = require("@rollup/plugin-typescript");

export default {
    input: "src/index.ts",
    output: {
        file: "out/index.js",
        format: "cjs"
    },
    plugins: [typescript()]
}