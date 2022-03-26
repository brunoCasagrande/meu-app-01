const mongoose = require("mongoose");
const RequisicaoSchema = new mongoose.Schema({
 requisicao: { type: String, required: true },
});
module.exports = mongoose.model("Requisicao", RequisicaoSchema);