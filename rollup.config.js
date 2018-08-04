
// Rollup Config

export default {
  input: "src/substrings.js",
  output: [
    {  
      file: "dist/substrings.js",
      format: "cjs"
    },
    {
      file: "dist/substrings.mjs",
      format: "es"
    }
  ]
}
