import { Schema, model, models } from "mongoose";

const AnalyzeSchema = new Schema({

  websiteLink: String,
  email: String,
    
  createdAt: {
    type: String,
    default: () => {
      return new Date(Date.now()).toLocaleDateString();
    },
  },
});

const Analyze = models.Analyze || model("Analyze", AnalyzeSchema);

export default Analyze;
