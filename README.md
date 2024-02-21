# Remix SVGR!

## From your terminal:

```sh
npm install --save-dev @svgr/cli @svgr/plugin-svgo @svgr/plugin-jsx @svgr/plugin-prettier npm-watch npm-run-all
```

## package.json

```javascript
  "scripts": {
      // task to convert icons to components
      // you may change the input and output directories
      "icons": "npx @svgr/cli --out-dir app/svg -- public/svg",

      // watch task
      "icons:watch": "npm-watch icons",

      // compile once and start watching for changes
      "dev:svg": "run-s icons icons:watch",

      // remix dev
      "dev:remix": "remix dev",

      // run all dev: scripts including `dev:svg`
      "dev": "run-p dev:*"
  },
  // npm-watch configuration
  "watch": {
    "icons": {
      "patterns": [
        "icons"
      ],
      "extensions": "svg",
      "quiet": false
    }
  },
  //...
```

## svgr.config.cjs

```javascript
module.exports = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
  typescript: true,
  jsxRuntime: "automatic",
  //replaceAttrValues: { "": "currentColor" },
};
```

## svgo.config.cjs

```javascript
module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};
```

## Your code

```javascript
import Star from "~/icons";

const Example = () => (
  <div>
    <Star />
  </div>
);
```
