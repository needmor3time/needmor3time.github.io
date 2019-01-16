const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  img: { data: Buffer, contentType: String },
  knifeid: { type: Schema.Types.ObjectId, ref: "knives", required: true } //This needs to be from the knifeSchema
});


const File = mongoose.model("File", fileSchema);

module.exports = File;