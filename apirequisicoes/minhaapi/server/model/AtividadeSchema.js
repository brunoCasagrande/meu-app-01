const mongoose = require("mongoose");
const AtividadeSchema = new mongoose.Schema({

 titulo: { type: String, required: true },
 descricao: { type: String, required: true },
 status: { type: String, required: true },
 prazo: { type: Date, required: true },
 agendaInicio: { type: Date, required: true },
 dataDeHoraTermino: { type: Date, required: true},

});
module.exports = mongoose.model("Atividade", AtividadeSchema);