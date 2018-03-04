'use strict';

var mongoose = require('mongoose'),
  Directory = mongoose.model('Directory');

exports.listResource = function(req, res) {
  Directory.find({}, function (err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};

exports.createResource = function(req, res) {
  var newResource = new Directory(req.body);
  newResource.save(function (err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};

exports.readResource = function(req, res) {
  // Come back to resourceId:
  Directory.findById(req.params.resourceId, function (err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};

exports.test = function(req, res) {
  res.render('../views/index')
};

exports.displayResources = function (req, res) {
  Directory.find({}, function (err, resources) {
    if (err)
      res.send(err);
    res.render('../views/index', { resources: resources })
  });
};

exports.displayAdmin = function (req, res) {
  Directory.find({}, function (err, resources) {
    if (err)
      res.send(err);
    res.render('../views/admin', { resources: resources })
  });
};

exports.deleteResource = function (req, res) {
  Directory.findByIdAndRemove(req.params.id, (err, resource) => {
    //console.log(req.params.id)
    if (err) {
      return res.json({ 'success': false, 'message': 'Error' });
    }
    return res.json({ 'success': true, 'message': 'Deleted successfully' });
  });
};
