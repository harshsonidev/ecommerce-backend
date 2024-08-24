const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    description: {
      type: String,
    },
    sku: {
      type: String,
    },
    price: {
      type: String,
      required: [true, 'Product price is required'],
    },
    discountedPrice: {
      type: String,
    },
    images: {
      type: [String],
    },
    stock: {
      type: Number,
    },
    category: String,
    tags: [String],
    status: {
      type: Number,
      enum: [0, 1, 2, 3], // Draft(0), Published(1), Hidden(2), Deleted(3)
      default: 1,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
