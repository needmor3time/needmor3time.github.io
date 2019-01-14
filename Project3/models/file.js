const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  img: { data: Buffer, contentType: String }
});


const File = mongoose.model("File", fileSchema);

module.exports = File;