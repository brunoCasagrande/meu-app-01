import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UsuariosList from './UsuariosList';
import UsuariosForm from './UsuariosForm';

function Usuarios() {
  // Declare variáveis de state
  let usuariosList = [
    { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
    { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
  ]
  const [usuarios, setUsuarios] = useState(usuariosList)

  const onClickAtualizar = () => {
    usuariosList = [
      { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
      { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
      { id: 3, nome: 'ciclano', email: 'ciclano@teste', celular: '54 6565-9898' }
    ];
    setUsuarios(usuariosList);
  }

  // operação inserir
  const initialState = { id: null, nome: '', email: '', celular: '' }
  const [usuario, setUsuario] = useState(initialState)
  const [editando, setEditando] = useState(false)

  const onClickInserir = () => {
    setUsuario(initialState); 
    setEditando(true);
  }

  const onClickSalvar = () => {
      console.log('Salvar ...');
      setEditando(false);
  }
  const onClickCancelar = () => {
      console.log('Cancelou ...');
      setEditando(false);
  }


  if (!editando){
    return (
      <div>
         <UsuariosList usuarios={usuarios} 
            onClickAtualizar={onClickAtualizar} 
            onClickInserir={onClickInserir}/>
      </div >
    );
  } else {
    return (
      <div>
         <UsuariosForm usuario={usuario} 
            onClickSalvar={onClickSalvar} 
            onClickCancelar={onClickCancelar}/>
      </div >
    );
  }



}

export default Usuarios;