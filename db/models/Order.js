import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({

  money: Number,
  
  typeService: String,
  typePlan: String,


  businessSphere: String,
  isImages: Boolean,
  isFullDescription: Boolean,

  uniqueDesign: Boolean,
  domain: Boolean,
  seo: Boolean,
  chat: Boolean,
  onlinePayment: Boolean,
  promoCodes: Boolean,
  specialPromo: Boolean,
  facebookShop: Boolean,

  fullName: String,
  email: String,
  phoneNumber: String,


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
