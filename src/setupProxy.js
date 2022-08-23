/**
 * 백엔드와 통신하기 위한 proxy setup
 * target을 등록한 후 rest api로 통신한다.
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
const url = 'http://3.37.47.51:8080'

module.exports = function(app) {
  app.use(
    '/eco',
    createProxyMiddleware({
      // 백엔드 주소
      target: url,
      changeOrigin: true,
    })
  );
};