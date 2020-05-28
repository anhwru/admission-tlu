const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
            '/api',
            createProxyMiddleware({
                target: 'http://xettuyen.utc.edu.vn/',
                changeOrigin: true,
            })
        ),
        app.use(
            '/react',
            createProxyMiddleware({
                target: 'http://localhost:8000',
                changeOrigin: true,
            })
        );


};