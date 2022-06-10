import React, { lazy, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";

const LoginForm = (props) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setLogin({ ...props.login, [id]: value });
  };

  const { register = lazy(() => import('./pages/home/home'))
  const [credenciais, setCredenciais] = useState({ "login": "", "senha": "" })

}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toast ref={toastRef} />
      <div className="card"
        style={{ width: '200px', textAlign: "center", marginLeft: '40%', marginTop: '15%' }}>
        <div className="p-fluid grid formgrid">
          <div className="field col-4 md:col-4">
            <label htmlFor="senha">Senha</label>
            <InputText type={'password'} id="senha" className="p-inputtext-sm block mb-2"
              {...register("senha", {
                required: { value: true, message: "Senha é obrigatória" },
                minLength: { value: 2, message: "Tamanho mínimo é 2" },
              })}
              defaultValue={credenciais.senha} onKeyUp={handleInputChange} />
            {errors.senha && <span style={{ color: 'red' }}>{errors.senha.message}</span>}
          </div>
        </div>
        <br />
        <Button icon="pi pi-sign-in" type="submit" label="Login" className="p-button-text" />
      </div>
    </form>
  );
};
export default LoginForm;
