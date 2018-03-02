'use strict';

module.exports = function (app) {
  var resourceList = require('../controllers/directoryController');

  app.route('/resources')
    .get(resourceList.listResource)
    .post(resourceList.createResource);

  app.route('/')
    .get(resourceList.test)
  
  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};