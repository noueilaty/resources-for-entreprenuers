'use strict';

module.exports = function (app) {
  var resourceList = require('../controllers/directoryController');

  app.route('/api/resources')
    .get(resourceList.listResource)
    .post(resourceList.createResource);

  app.route('/')
    .get(resourceList.test)

  app.route('/directory')
    .get(resourceList.displayResources)

  app.route('/admin')
    .get(resourceList.displayAdmin)

  app.route('/login')
    .get(resourceList.loginPage)
    .post(resourceList.actualLogin)

  app.route('/resources/:id')
    .delete(resourceList.deleteResource)
    .put(resourceList.approveResource)
    .get(resourceList.viewItem)

  app.route('/logged')
    .get(resourceList.isLogged)

  app.route('/logout')
    .get(resourceList.logOut)

  app.route('/events')
    .get(resourceList.events)
};
