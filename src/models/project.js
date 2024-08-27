import { model, Schema } from "mongoose";

const ProjectSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
});

export default model("Project", ProjectSchema);
