var routes = require('./app_server/routes/index');
var routesApi = require('./app_api/routes/index');
app.use('/', routes);
app.use('/api', routesApi);
