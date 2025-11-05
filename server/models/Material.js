import mongoose from "mongoose";

const materialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    primaryUom: {
      type: String,
      required: true,
    },
  },
  { collection: "materials", timestamps: true }
);

materialSchema.index({ name: 1 }, { unique: true });

const Material = mongoose.model("Material", materialSchema);

Material.syncIndexes();

module.exports = Material;
