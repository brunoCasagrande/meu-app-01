
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";

const TipoRequisicaoForm = (props) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setTipoRequisicao({ ...props.tipoRequisicao, [id]: value });
  };

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    props.salvar();
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Tipos de Requisiacao</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText id="descricao" defaultValue={props.tipoRequisicao.descricao}
                {...register("descricao", {
                  required: { value: true, message: "A descrição é obrigatória." },
                  minLength: { value: 10, message: "O descrição deve ter pelo menos 10 caracteres." },
                  maxLength: { value: 300, message: "O descrição deve ter no máximo 300 caracteres." }
                })}
                onChange={handleInputChange} />
              {errors.descricao && <span style={{ color: 'red' }}>{errors.descricao.message}</span>}
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
export default TipoRequisicaoForm;
