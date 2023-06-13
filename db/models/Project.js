import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  siteUrl: {type: String, required: true},
  imageUrl: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "Likes" }],

  createdAt: {
    type: String,
    default: () => {
      return new Date(Date.now()).toLocaleDateString();
    },
  },
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
