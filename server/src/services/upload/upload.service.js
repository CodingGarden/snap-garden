// Initializes the `upload` service on path `/upload`
const { Upload } = require('./upload.class');
const hooks = require('./upload.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');

  const options = {
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/upload', new Upload(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('upload');

  service.hooks(hooks);
};
