import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";

const AtividadeForm = (props) => {
  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setAtividade({ ...props.atividade, [id]: value });
  };

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    // Validar senha e contra senha. Se diferentes gerar erro na senha. 

    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Atividades</h5>
          <div className="p-fluid grid formgrid">

            
            <div className="field col-12 md:col-4">
              <label htmlFor="titulo">titulo</label>
              <InputText id="titulo" defaultValue={props.atividade.titulo}
                {...register("titulo", { 
                  required: {value:true, message:"O titulo é obrigatório."}, 
                  minLength: {value:2, message:"O titulo deve ter pelo menos 2 caracteres."}, 
                  maxLength: {value:50, message:"O titulo deve ter no máximo 50 caracteres."} 
                })}
                onChange={handleInputChange} />
              {errors.titulo && <span style={{color:'red'}}>{errors.titulo.message}</span>}  
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText id="descricao" defaultValue={props.atividade.descricao}
              {...register("descricao", { 
                required: {value:true, message:"A Descrição é obrigatório."}, 
                minLength: {value:10, message:"A Descrição deve ter pelo menos 10 caracteres."}, 
                maxLength: {value:100, message:"A Descrição deve ter no máximo 100 caracteres."} 
              })}   
                onChange={handleInputChange} />
              {errors.descricao && <span style={{color:'red'}}>{errors.descricao.message}</span>}    
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="status">Status</label>
              <InputText id="status" defaultValue={props.atividade.status}
              {...register("status", { 
                required: {value:true, message:"O status é obrigatório."}
              })}   
                onChange={handleInputChange} />
              {errors.status && <span style={{color:'red'}}>{errors.status.message}</span>}    
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="prazo">Prazo</label>
              <InputText id="prazo" defaultValue={props.atividade.prazo}
              {...register("prazo", { 
                required: {value:true, message:"O prazo é obrigatório."}
              })}   
                onChange={handleInputChange} />
              {errors.prazo && <span style={{color:'red'}}>{errors.prazo.message}</span>}    
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="agendaInicio">Agenda Inicio</label>
              <InputText id="agendaInicio" defaultValue={props.atividade.agendaInicio}
              {...register("agendaInicio", { 
                required: {value:true, message:"Agenda Inicio é obrigatório."}

              })}   
                onChange={handleInputChange} />
              {errors.agendaInicio && <span style={{color:'red'}}>{errors.agendaInicio.message}</span>}    
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="dataEHoraTermino">Data e hora de termino</label>
              <InputText id="dataEHoraTermino" defaultValue={props.atividade.dataEHoraTermino}
              {...register("dataEHoraTermino", { 
                required: {value:true, message:"Data e hora de termino é obrigatório."} 
              })}   
                onChange={handleInputChange} />
              {errors.dataEHoraTermino && <span style={{color:'red'}}>{errors.dataEHoraTermino.message}</span>}    
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
export default AtividadeForm;
