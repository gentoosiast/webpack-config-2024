import path from 'node:path';
import { EsbuildPlugin } from 'esbuild-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = import.meta.dirname;

const DEFAULT_DEV_SERVER_PORT = 8080;

const TRANSPILATION_TARGET = 'es2015';

export default (env, argv) => {
  const isDev = argv.mode === 'development';
  const isProd = !isDev;

  const getCssLoaders = () => [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: true,
          localIdentName: isProd ? '[hash:base64]' : '[name]-[local]-[hash:base64:8]',
        },
      },
    },
  ];

  /**
   * @type {import('webpack').Configuration}
   */
  const config = {
    context: path.join(__dirname, 'src'),
    entry: { bundle: './index.js' },
    output: {
      filename: '[name]-[contenthash].js',
      clean: true,
    },
    devtool: isDev && 'eval-cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        favicon: path.join('assets', 'favicon.svg'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/i,
          loader: 'esbuild-loader',
          options: {
            target: TRANSPILATION_TARGET,
          },
          resolve: {
            fullySpecified: false,
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: getCssLoaders(),
        },
        {
          test: /\.s[ac]ss$/i,
          use: [...getCssLoaders(), 'sass-loader'],
        },
        {
          test: /\.(eot|otf|ttf|woff2?)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]',
          },
        },
        {
          test: /\.(avif|gif|jpe?g|png|svg|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
      ],
    },
    devServer: {
      port: env.PORT ?? DEFAULT_DEV_SERVER_PORT,
      open: true,
      historyApiFallback: true,
    },
  };

  if (isProd) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash].css',
        chunkFilename: '[name]-[contenthash].css',
      }),
    );

    config.optimization = {
      minimizer: [
        new EsbuildPlugin({
          target: TRANSPILATION_TARGET,
          css: true,
        }),
      ],
    };
  }

  return config;
};
