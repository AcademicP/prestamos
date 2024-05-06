const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    ruc: {
        type: String,
        required: true
      },
    businessname: {
      type: String,
      required: true
    },
    legalname: {
        type: String,
        required: true
    },
    address: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = {companySchema}