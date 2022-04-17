
const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema(
  {
    blockName: { type: String, required: true },
    flat_id: [
      { type: mongoose.Schema.Types.ObjectId, ref: "flat", required: true },
    ],
    resident_id: [
      { type: mongoose.Schema.Types.ObjectId, ref: "resident", required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("block", blockSchema);