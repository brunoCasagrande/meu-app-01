import React from "react";
const TipoRequisicaoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setTipoRequisicao({ ...props.tipoRequisicao, [name]: value });
  };
  return (
    <form>
      <div class="form-group">
        <label>Observação</label>
        <input
          class="form-control"
          type="text"
          name="observacao"
          value={props.tipoRequisicao.observacao}
          onChange={handleInputChange}
        />
      </div>

      <div class="form-group">
        <button
          type="button"
          onClick={props.salvar}
          className="btn btn-primary btn-sm"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={props.cancelar}
          className="btn btn-primary btn-sm"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
export default TipoRequisicaoForm;
