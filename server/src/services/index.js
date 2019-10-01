const users = require('./users/users.service.js');
const upload = require('./upload/upload.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(upload);
};
