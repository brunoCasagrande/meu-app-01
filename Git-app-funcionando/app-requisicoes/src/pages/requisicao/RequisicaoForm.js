import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

const RequisicaoForm = (props) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setRequisicao({ ...props.requisicao, [id]: value });
  };

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    props.salvar();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Requisições</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="titulo">Titulo</label>
              <InputText id="titulo" defaultValue={props.requisicao.titulo}
                {...register("titulo", {
                  required: { value: true, message: "O titulo é obrigatório." },
                  minLength: { value: 2, message: "O titulo deve ter pelo menos 2 caracteres." },
                  maxLength: { value: 50, message: "O titulo deve ter no máximo 50 caracteres." }
                })}
                onChange={handleInputChange} />
              {errors.nome && <span style={{ color: 'red' }}>{errors.titulo.message}</span>}
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText id="descricao" defaultValue={props.requisicao.descricao}
                {...register("descricao", {
                  required: { value: true, message: "O descricao é obrigatório." },
                  minLength: { value: 10, message: "O descricao deve ter pelo menos 10 caracteres." },
                  maxLength: { value: 100, message: "O descricao deve ter no máximo 100 caracteres." }
                })}
                onChange={handleInputChange} />
              {errors.descricao && <span style={{ color: 'red' }}>{errors.descricao.message}</span>}
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="dataHoraCriada">Data/Hora Criação</label>
              <Calendar showTime hourFormat="24" id="dataHoraCriada" defaultValue={props.requisicao.dataHoraCriada}
                onChange={handleInputChange} />
              {errors.dataHoraCriada && <span style={{ color: 'red' }}>{errors.dataHoraCriada.message}</span>}
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="status">Status</label>
              <InputText id="status" defaultValue={props.requisicao.status}
                {...register("status", {
                  required: { value: true, message: "O status é obrigatório." },
                  minLength: { value: 10, message: "O status deve ter pelo menos 10 caracteres." },
                  maxLength: { value: 100, message: "O status deve ter no máximo 100 caracteres." }
                })}
                onChange={handleInputChange} />
              {errors.status && <span style={{ color: 'red' }}>{errors.status.message}</span>}
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="prazoAtendimento">Prazo para Atendimento</label>
              <Calendar showTime hourFormat="24" id="prazoAtendimento" defaultValue={props.requisicao.prazoAtendimento}
                onChange={handleInputChange} />
              {errors.prazoAtendimento && <span style={{ color: 'red' }}>{errors.prazoAtendimento.message}</span>}
            </div>

            <div className="field col-4 md:col-4">
              <label htmlFor="solicitante">Solicitante</label>
              <Dropdown id="solicitante" optionLabel="nome" optionValue="_id"
                value={props.requisicao.solicitante}
                options={props.solicitantes}
                onChange={handleInputChange}
                placeholder="Selecione Solicitante" />

            </div>

            <div className="field col-4 md:col-4">
              <label htmlFor="tipoRequisicao">Tipo de Requisição</label>
              <Dropdown id="tipoRequisicao" optionLabel="descricao" optionValue="_id"
                value={props.requisicao.tipoRequisicao}
                options={props.tipoRequisicoes}
                onChange={handleInputChange}
                placeholder="Selecione um tipo de requisição" />

            </div>



          </div>
        </div>
      </div>

      <div>
        <Button label="Salvar" icon="pi pi-save" type="submit"
          className="p-button-secondary p-button-text" />
        <Button label="Cancelar" icon="pi pi-times-circle" onClick={props.cancelar}
          className="p-button-secondary p-button-text" />
      </div>

    </form>
  );
};
export default RequisicaoForm;
