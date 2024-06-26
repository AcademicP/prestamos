const mongoose = require('mongoose');
const peopleSchema = new mongoose.Schema({
    dni: {
        type: String,
        required: true
      },
    name: {
      type: String,
      required: true
    },
    lastname: {
        type: String,
        required: true
    },
    birthday: {
      type: Date,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = {peopleSchema}