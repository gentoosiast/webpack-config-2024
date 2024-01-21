# Webpack

## base package & CLI

- [webpack](https://www.npmjs.com/package/webpack)
- [webpack-cli: The official CLI of webpack](https://www.npmjs.com/package/webpack-cli)

CLI options: <https://github.com/webpack/webpack-cli/blob/master/OPTIONS.md>

## dev server

- <https://www.npmjs.com/package/webpack-dev-server>

## misc

Webpack template strings <https://webpack.js.org/configuration/output/#template-strings>

## Common tasks

- checking config validity

```sh
npx webpack t
```

- cleaning up `dist` directory before each rebuild: <https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder>

```js
output {
  clean: true,
}
```

## Loaders & plugins

### Handling CSS

- [css-loader: interprets @import and url() like import/require() and will resolve them](https://www.npmjs.com/package/css-loader)
- [style-loader: inject CSS into the DOM (used only in dev mode)](https://www.npmjs.com/package/style-loader)
- [mini-css-extract-plugin: extracts CSS into separate files (used only in production)](https://www.npmjs.com/package/mini-css-extract-plugin)

### Processing Sass

- [sass-loader: loads a Sass/SCSS file and compiles it to CSS](https://www.npmjs.com/package/sass-loader)

### Configuring class names for CSS/SCSS Modules

- <https://webpack.js.org/loaders/css-loader/#localidentname>

### Handling assets (images / fonts)

- [Asset Modules](https://webpack.js.org/guides/asset-modules/)

Note: `raw-loader`, `url-loader`, and `file-loader` **are deprecated and should not be used**

### Adding scripts, favicon to HTML, using templates

- [html-webpack-plugin: plugin that simplifies creation of HTML files to serve your bundles](https://www.npmjs.com/package/html-webpack-plugin)

### Transpiling JS / TS

- [esbuild-loader: fast and modern](https://www.npmjs.com/package/esbuild-loader)
- [babel-loader: classic option with more features](https://www.npmjs.com/package/babel-loader)

### Enabling generation of source maps

- <https://webpack.js.org/configuration/devtool/#root>

### Copying unmodified assets from source to destination

- [copy-webpack-plugin: copies individual files or entire directories, which already exist, to the build directory](https://www.npmjs.com/package/copy-webpack-plugin)
