import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({

  email: String,
  fullName: String,
  typePlan: String,
  telephone: String,
  typeOfPayment: String,
  typeContact: String,
  
  typeOfSphere: String,

  isCreated: {
    type: Boolean,
    default: false
  },
  isCalled: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: String,
    default: () => {
      return new Date(Date.now()).toLocaleDateString();
    },
  },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
