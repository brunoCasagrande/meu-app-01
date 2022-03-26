const mongoose = require("mongoose");
const RequisicoaoSchema = new mongoose.Schema({

 titulo: { type: String, required: true },
 descricao: { type: String, required: true },
 dataEHoraCriada: { type: Date, required: true},
 status: { type: String, required: true },
 prazoDeAtendimetno: { type: Date, required: true },

});
module.exports = mongoose.model("Requisicao", RequisicoaoSchema);