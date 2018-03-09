'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DirectorySchema = new Schema({
  businessName: {
    type: String,
    required: 'Enter business name',
    unique: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  url: {
    type: String,
    required: 'Enter business URL',
    unique: true
  },
  description: {
    type: String,
    required: 'Enter business description'
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  contactName: {
    type: String
  },
  address: {
    type: String
  },
  market: [{
    type: String
  }],
  services: [{
    type: String
  }],
  isApproved: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Directory', DirectorySchema);
