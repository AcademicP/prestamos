const mongoose = require('mongoose');
const { companySchema } = require('./schemas');

const companyModel = mongoose.model('Company', companySchema);

module.exports = {companyModel };