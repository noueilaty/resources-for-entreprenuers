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
    ({
      businessName: req.body.businessName,
      url: req.body.url,
      description: req.body.description,
      contactName: req.body.contactName,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      services: req.body.services,
      market: req.body.market
    });
    if (err)
      res.send(err);
    res.redirect('/directory');
  });
};

exports.readResource = function(req, res) {
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

    // let filtereredResources = new Object()
    // filtereredResources.approvedResources = resources.filter(r => r.isApproved == true )
    // filtereredResources.nonapprovedREs = resources.filter

    res.render('../views/index', { resources: resources })
  });
};

exports.displayAdmin = function (req, res) {
  if (req.session.name){
  Directory.find({}, function (err, resources) {
    if (err)
      res.send(err);
    res.render('../views/admin', { resources: resources })
  });
} else {
  res.redirect('/login');
}
};

exports.deleteResource = function (req, res) {
  Directory.findByIdAndRemove(req.params.id, (err, resource) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Error' });
    }
    return res.json({ 'success': true, 'message': 'Deleted successfully' });
  });
};

exports.approveResource = function (req, res) {
  Directory.findByIdAndUpdate(req.params.id, { isApproved: true }, (err, resource) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Error' });
    }
    return res.json({ 'success': true, 'message': 'Approved successfully' });
  });
};

exports.disapproveResource = function (req, res) {
  Directory.findByIdAndUpdate(req.params.id, { isApproved: false }, (err, resource) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Error' });
    }
    return res.json({ 'success': true, 'message': 'Disapproved resource' });
  });
};

exports.loginPage = function(req, res) {
  res.render('../views/login')
};

exports.actualLogin = function(req, res) {
  let username = req.body.username
  let password = req.body.password
  if (username=="admin" && password=="admin"){
      req.session.name = req.body.username;
      req.session.authenticated = true;
      res.redirect('/admin');
  } else {
      res.redirect('/login');
  }
};

exports.isLogged = function(req,res){
  if (req.session.name) {
    res.write("<h1>User Logged In</h1><a href='/logout'>Logout</a>");
    res.end();
  } else {
    res.write("<h1>User not logged in</h1><a href='/directory'>Go to Directory</a>");
    res.end();
  }
};

exports.logOut = function(req,res){
  req.session.destroy(function(err) {
    if (err) {
      res.negotiate(err);
    }
    console.log("user is logged out");
    res.redirect("/directory");
  });
}
