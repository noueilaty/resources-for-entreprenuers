'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DirectorySchema = new Schema({
  businessName: {
    type: String,
    required: 'Enter business name',
    unique: true
  },
  Created_date: {
    type: Date,
    default: Date.now
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