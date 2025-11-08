import mongoose from "mongoose";

const originSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "origins", timestamps: true }
);

originSchema.index({ name: 1 }, { unique: true });

const Origin = mongoose.model("Origin", originSchema);

Origin.syncIndexes();

export default Origin;
