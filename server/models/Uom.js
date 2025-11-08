import mongoose from "mongoose";

const uomSchema = new mongoose.Schema(
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
  { collection: "uoms", timestamps: true }
);

uomSchema.index({ name: 1 }, { unique: true });

const Uom = mongoose.model("Uom", uomSchema);

Uom.syncIndexes();

export default Uom;
