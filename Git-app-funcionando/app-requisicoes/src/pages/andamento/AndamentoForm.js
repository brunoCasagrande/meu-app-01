import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";

const AndamentoForm = (props) => {
  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setAndamento({ ...props.andamento, [id]: value });
  };

  const [senha, setSenha] = useState();
  const [contraSenha, setContraSenha] = useState();

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    // Validar senha e contra senha. Se diferentes gerar erro na senha. 
    console.log("S: "+senha+" CS: "+contraSenha);
    if(senha !== contraSenha){
      setError('senha', { type: 'custom', message: 'Senha e contra senha diferentes.' });
    } else if (senha.length < 8){
      setError('senha', { type: 'custom', message: 'A senha deve ter pelo menos 8 caracteres.' });
    } else {
      props.andamento.senha = senha;
      props.salvar(); 
    }
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Andamentos</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="dataHora">Data e Hora</label>
              <InputText id="dataHora" defaultValue={props.andamento.dataHora}
                {...register("dataHora", { 
                  required: {value:true, message:"Data e Horaé obrigatório."}, 
                })}
                onChange={handleInputChange} />
              {errors.dataHora && <span style={{color:'red'}}>{errors.dataHora.message}</span>}  
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="titulo">Titulo</label>
              <InputText id="titulo" defaultValue={props.andamento.titulo}
              {...register("titulo", { 
                required: {value:true, message:"O titulo é obrigatório."}, 
                minLength: {value:10, message:"O titulo deve ter pelo menos 10 caracteres."}, 
                maxLength: {value:100, message:"O titulo deve ter no máximo 100 caracteres."} 
              })}   
                onChange={handleInputChange} />
              {errors.titulo && <span style={{color:'red'}}>{errors.titulo.message}</span>}    
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText id="descricao" defaultValue={props.andamento.descricao}
              {...register("descricao", { 
                required: {value:true, message:"A Descrição é obrigatório."}, 
                minLength: {value:10, message:"A Descrição deve ter pelo menos 10 caracteres."}, 
                maxLength: {value:100, message:"A Descrição deve ter no máximo 100 caracteres."} 
              })}   
                onChange={handleInputChange} />
              {errors.descricao && <span style={{color:'red'}}>{errors.descricao.message}</span>}    
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
export default AndamentoForm;
