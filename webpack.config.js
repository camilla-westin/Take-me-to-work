const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/app.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|css)$/, 
        use: [
            // fallback to style-loader in development
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'         
            ]
       },
       {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=./img/[name].[ext]'
       },
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};