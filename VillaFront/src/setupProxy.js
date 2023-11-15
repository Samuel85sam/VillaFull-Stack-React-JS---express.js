const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {

    //indique au serveur Express d'utiliser le proxy middleware lorsqu'une requête est faite à l'URL
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3002",
      changeOrigin: true,
    //   target: Spécifie l'URL du serveur distant vers lequel les requêtes seront redirigées. Dans ce cas, c'est "http://localhost:3002".
    //   changeOrigin: Indique si l'en-tête Host doit être changé à la valeur du target. Cela peut être important dans certaines configurations de serveur.
    })
  );
};
