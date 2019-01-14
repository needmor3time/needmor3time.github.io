const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const knivesSchema = new Schema({
  purpose: { type: String, required: true },
  steel: { type: String, required: false },
  handleMaterial: { type: String, required: false },
  tang: { type: String, required: false },
  guard: { type: String, required: false },
  pommel: { type: String, required: false },
  rivet: { type: String, required: false },
  lanyard: { type: String, required: false },
  fileorengrave: { type: String, required: false },
  finish: { type: String, required: false },
  special: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Knife = mongoose.model("Knife", knivesSchema);

module.exports = Knife;
