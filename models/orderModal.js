const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Order must belong to a user.'],
    },
    orderNumber: {
      type: String,
      required: [true, 'Order number is required'],
    },
    orderItems: {
      type: Array,
    },
    status: {
      type: Number,
      enum: [0, 1, 2, 3, 4], // Draft(0), Confirmed(1), Processing(2), Shipped(4), Cancelled(3),  Out Of Delivery
      default: 0,
    },
    shippingDetails: {
      trackingID: {
        type: String,
      },
    },
    payment: {
      type: {
        type: Number,
        enum: [0, 1, 2, 3, 4], // Online(1), Cash On Delivery(2)
      },
      info: {
        type: Object,
      },
    },
    userNotes: {
      type: String,
    },
    vendorNotes: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

orderSchema.pre('save', async function (next) {
  const doc = this;

  next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
