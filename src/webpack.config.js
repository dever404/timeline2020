module.exports = {
    module: {
      rules: [
        {
          test: /\.json5$/i,
          loader: 'json5-loader',
          type: 'javascript/auto',
        },
        {
          test: /\.ya?ml$/,
          use: 'js-yaml-loader',
        },
        {
          test: require.resolve('wow.js/dist/wow.js'), 
          loader: 'exports?this.WOW'
       }
      ],
    },
};
  