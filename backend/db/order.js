// const mongoose = require("mongoose");
import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    items: [{
        type: mongoose.Schema.Types.Mixed,
        required: true
    }],
    address: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    paymentType: {
        type: string,
        required: true
    },
    status: {
        type: string,
        required: true,
    },
    date: {
        type: Date
    }
});
const Order = mongoose.model("Order", orderSchema);
export default Order;