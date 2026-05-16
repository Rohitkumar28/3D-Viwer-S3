const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    modelName: String,

    modelUrl: String,

    cameraPosition: {
      x: Number,
      y: Number,
      z: Number
    },

    rotation: {
      x: Number,
      y: Number,
      z: Number
    },

    zoom: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Model", modelSchema);