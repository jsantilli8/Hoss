module.exports = {
  devServer: {
    proxy: {
      '/api-dolar': {
        target: 'https://dolarapi.com/v1/dolares',
        changeOrigin: true,
        pathRewrite: { '^/api-dolar': '' },
      },
    },
  },
};
