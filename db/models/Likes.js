import { Schema, model, models } from "mongoose";

const LikesSchema = new Schema({
  ownerIp: { type: String, },
  projectId: { type: Schema.Types.ObjectId, ref: "Likes" },
    
  createdAt: {
    type: String,
    default: () => {
      return new Date(Date.now()).toLocaleDateString();
    },
  },
});

const Newsletter = models.Newsletter || model("Newsletter", LikesSchema);

export default Newsletter;
