// models/pizzaModel.js

const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    allowNull: true
  },
  price: {
    type: Number,
    required: true,
    allowNull: true
  }
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
