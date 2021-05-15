const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  entry: path.resolve(__dirname, 'src/index.ts'),
  mode: NODE_ENV ? NODE_ENV : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]__[local]__[hash:base64:5]',
                auto: /\.modules\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  devtool: 'source-map',
}
