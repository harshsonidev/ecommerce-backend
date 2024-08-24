const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  brandInfo: Object,
  personalInfo: Object,
  theme: Object,
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
