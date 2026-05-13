import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  totalAmount: Number,
  paymentMethod: String,
  orderStatus: {
    type: String,
    default: "Placed"
  }
}, { timestamps: true });

export default mongoose.model("order", orderSchema);