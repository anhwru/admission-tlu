const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api/tlu',
        createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true,
        })
    ),
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://thongtindoanhnghiep.co',
            changeOrigin: true,
        })
    );
};