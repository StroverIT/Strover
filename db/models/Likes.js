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

const Likes = models.Likes || model("Likes", LikesSchema);

export default Likes;
