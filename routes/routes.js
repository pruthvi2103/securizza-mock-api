const graphRoutes= require('./graph');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
      });
      graphRoutes(app, fs);
};

module.exports = appRouter;