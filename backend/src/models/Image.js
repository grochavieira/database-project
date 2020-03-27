const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    image: String
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

ImageSchema.virtual("image_url").get(function() {
  return `http://localhost:3333/files/${this.image}`;
});

module.exports = mongoose.model("Image", ImageSchema);
